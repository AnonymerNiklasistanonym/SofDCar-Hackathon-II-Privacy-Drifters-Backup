import { MsUserRideRequest, MsRideProviderBid } from "../types/matching_service"
import { ResponseMatchingService } from "../types/response";

import {latLngToCell} from "h3-js"

import { getRandomInt, getRandomHash, getRandomArrayElement, getRandomCoordinateStuttgart, getRandomPseudonym } from "./helpers"

export const generateMockDataMsUserRideRequest = (): MsUserRideRequest => {
    return {
        userId: getRandomPseudonym(),
        pickupLocation: {
            type: `pickup location ${getRandomInt(123)}`,
            coordinates: getRandomCoordinateStuttgart()
        },
        dropoffLocation: {
            type: `dropoff location ${getRandomInt(123)}`,
            coordinates: getRandomCoordinateStuttgart()
        },
        gridLocation: latLngToCell(...getRandomCoordinateStuttgart(), 9),
        rating: getRandomInt(5, 2),
        userPublicKey: getRandomHash(),
        maxUserRating: getRandomInt(5, 3),
        minRating: getRandomInt(5, 2),
        maxPassengers: getRandomInt(4),
        maxWaitingTime: getRandomInt(20),
        minPassengerRating: getRandomInt(5),
    }
}

export const generateMockDataMsRideProviderBid = (): MsRideProviderBid => {
    return {
        rideRequestId: getRandomPseudonym(),
        rideProviderId: getRandomPseudonym(),
        amount: getRandomInt(5),
        rating: getRandomInt(5, 2),
        model: getRandomArrayElement("Tesla Model Y", "Mercedes EQS", "Ford Model T", "Volkswagen Beetle", "Volkswagen Golf"),
        estimatedArrivalTime: getRandomInt(25),
        passengerCount: getRandomInt(4),
        vehiclePublicKey: `vehicle_public_key_${getRandomHash()}`,
    }
}

export const generateMockDataMs = (): ResponseMatchingService => {
    return {
        rideProviderBids: [...Array(getRandomInt(60, 20))].map(() => generateMockDataMsRideProviderBid()),
        userRideRequests: [...Array(getRandomInt(80, 20))].map(() => generateMockDataMsUserRideRequest()),
    }
}
