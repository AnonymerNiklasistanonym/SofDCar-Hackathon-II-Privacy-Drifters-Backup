"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockDataAs = exports.generateMockDataAsUser = void 0;
const unique_username_generator_1 = require("unique-username-generator");
const helpers_1 = require("./helpers");
const generateMockDataAsUser = () => {
    return {
        account_id: `user ${(0, helpers_1.getRandomInt)(123)}`,
        banned: (0, helpers_1.getRandomInt)(10) === 1,
        data: JSON.stringify({ passport_data: "xyz", firstname: (0, unique_username_generator_1.generateUsername)(), lastname: (0, unique_username_generator_1.generateUsername)(), dateOfBirth: `${(0, helpers_1.getRandomInt)(12)}.${(0, helpers_1.getRandomInt)(30)}.${1985 + (0, helpers_1.getRandomInt)(15)}` }),
        data_hash: (0, helpers_1.getRandomHash)(),
        pseudonym: `pseudonym ${(0, helpers_1.getRandomInt)(123)}`,
    };
};
exports.generateMockDataAsUser = generateMockDataAsUser;
const generateMockDataAs = () => {
    return {
        users: [...Array((0, helpers_1.getRandomInt)(10))].map(() => (0, exports.generateMockDataAsUser)()),
    };
};
exports.generateMockDataAs = generateMockDataAs;
