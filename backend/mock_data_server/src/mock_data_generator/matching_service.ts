import { MsUserRideRequest, MsRideProviderBid } from "../types/matching_service"
import { ResponseMatchingService } from "../types/response";

import {latLngToCell} from "h3-js"

import { getRandomInt, getRandomHash, getRandomArrayElement, getRandomCoordinateStuttgart } from "./helpers"

export const generateMockDataMsUserRideRequest = (): MsUserRideRequest => {
    return {
        userId: `user ${getRandomInt(123)}`,
        pickupLocation: {
            type: `pickup location ${getRandomInt(123)}`,
            coordinates: getRandomCoordinateStuttgart()
        },
        dropoffLocation: {
            type: `dropoff location ${getRandomInt(123)}`,
            coordinates: getRandomCoordinateStuttgart()
        },
        gridLocation: latLngToCell(...getRandomCoordinateStuttgart(), 9),
        rating: getRandomInt(5),
        userPublicKey: getRandomHash(),
        maxUserRating: getRandomInt(5),
        minRating: getRandomInt(5),
        maxPassengers: getRandomInt(4),
        maxWaitingTime: getRandomInt(20),
        minPassengerRating: getRandomInt(5),
    }
}

export const generateMockDataMsRideProviderBid = (): MsRideProviderBid => {
    return {
        rideRequestId: `ride request ${getRandomInt(123)}`,
        rideProviderId: `ride provider ${getRandomInt(123)}`,
        amount: getRandomInt(5),
        rating: getRandomInt(5),
        model: getRandomArrayElement("Tesla Model Y", "Mercedes EQS", "Ford Model T", "Volkswagen Beetle", "Volkswagen Golf"),
        estimatedArrivalTime: getRandomInt(25),
        passengerCount: getRandomInt(4),
        vehiclePublicKey: `vehicle public key ${getRandomInt(123)}`,
    }
}

export const generateMockDataMs = (): ResponseMatchingService => {
    return {
        rideProviderBids: [...Array(getRandomInt(60, 20))].map(() => generateMockDataMsRideProviderBid()),
        userRideRequests: [...Array(getRandomInt(80, 20))].map(() => generateMockDataMsUserRideRequest()),
    }
}
