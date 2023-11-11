"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockDataAs = exports.generateMockDataAsUser = void 0;
const unique_username_generator_1 = require("unique-username-generator");
const helpers_1 = require("./helpers");
const matching_service_1 = require("./matching_service");
const generateMockDataAsUser = () => {
    const past_rides = [...Array((0, helpers_1.getRandomInt)(80, 20))].map(() => (0, matching_service_1.generateMockDataMsUserRideRequest)());
    return {
        account_id: (0, helpers_1.getRandomPseudonym)(),
        banned: (0, helpers_1.getRandomInt)(20) === 1,
        data: JSON.stringify({ passport_data: "[REDACTED]", firstname: (0, unique_username_generator_1.generateUsername)(), lastname: (0, unique_username_generator_1.generateUsername)(), dateOfBirth: `${(0, helpers_1.getRandomInt)(12, 1)}.${(0, helpers_1.getRandomInt)(28, 1)}.${1980 + (0, helpers_1.getRandomInt)(25)}` }),
        data_hash: (0, helpers_1.getRandomHash)(),
        pseudonyms: [...Array((0, helpers_1.getRandomInt)(10, 2))].map(() => (0, helpers_1.getRandomPseudonym)()),
        past_rides,
        average_rating: past_rides.map((a) => a.rating).reduce((sum, a) => sum + a, 0) / past_rides.length
    };
};
exports.generateMockDataAsUser = generateMockDataAsUser;
const generateMockDataAs = () => {
    return {
        users: [...Array((0, helpers_1.getRandomInt)(10, 5))].map(() => (0, exports.generateMockDataAsUser)()),
    };
};
exports.generateMockDataAs = generateMockDataAs;
