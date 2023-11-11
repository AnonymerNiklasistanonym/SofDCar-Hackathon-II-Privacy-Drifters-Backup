"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockDataMs = exports.generateMockDataMsRideProviderBid = exports.generateMockDataMsUserRideRequest = void 0;
const h3_js_1 = require("h3-js");
const helpers_1 = require("./helpers");
const generateMockDataMsUserRideRequest = () => {
    return {
        userId: (0, helpers_1.getRandomPseudonym)(),
        pickupLocation: {
            type: `pickup location ${(0, helpers_1.getRandomInt)(123)}`,
            coordinates: (0, helpers_1.getRandomCoordinateStuttgart)()
        },
        dropoffLocation: {
            type: `dropoff location ${(0, helpers_1.getRandomInt)(123)}`,
            coordinates: (0, helpers_1.getRandomCoordinateStuttgart)()
        },
        gridLocation: (0, h3_js_1.latLngToCell)(...(0, helpers_1.getRandomCoordinateStuttgart)(), 9),
        rating: (0, helpers_1.getRandomInt)(5, 2),
        userPublicKey: (0, helpers_1.getRandomHash)(),
        maxUserRating: (0, helpers_1.getRandomInt)(5, 3),
        minRating: (0, helpers_1.getRandomInt)(5, 2),
        maxPassengers: (0, helpers_1.getRandomInt)(4),
        maxWaitingTime: (0, helpers_1.getRandomInt)(20),
        minPassengerRating: (0, helpers_1.getRandomInt)(5),
    };
};
exports.generateMockDataMsUserRideRequest = generateMockDataMsUserRideRequest;
const generateMockDataMsRideProviderBid = () => {
    return {
        rideRequestId: (0, helpers_1.getRandomPseudonym)(),
        rideProviderId: (0, helpers_1.getRandomPseudonym)(),
        amount: (0, helpers_1.getRandomInt)(5),
        rating: (0, helpers_1.getRandomInt)(5, 2),
        model: (0, helpers_1.getRandomArrayElement)("Tesla Model Y", "Mercedes EQS", "Ford Model T", "Volkswagen Beetle", "Volkswagen Golf"),
        estimatedArrivalTime: (0, helpers_1.getRandomInt)(25),
        passengerCount: (0, helpers_1.getRandomInt)(4),
        vehiclePublicKey: `vehicle_public_key_${(0, helpers_1.getRandomHash)()}`,
    };
};
exports.generateMockDataMsRideProviderBid = generateMockDataMsRideProviderBid;
const generateMockDataMs = () => {
    return {
        rideProviderBids: [...Array((0, helpers_1.getRandomInt)(60, 20))].map(() => (0, exports.generateMockDataMsRideProviderBid)()),
        userRideRequests: [...Array((0, helpers_1.getRandomInt)(80, 20))].map(() => (0, exports.generateMockDataMsUserRideRequest)()),
    };
};
exports.generateMockDataMs = generateMockDataMs;
