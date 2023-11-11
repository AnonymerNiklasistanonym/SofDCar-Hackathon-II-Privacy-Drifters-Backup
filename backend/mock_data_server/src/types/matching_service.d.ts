export interface MsUserRideRequest {
    userId: string;
    pickupLocation: {
        type: string;
        coordinates: number[];
    };
    dropoffLocation: {
        type: string;
        coordinates: number[];
    };
    gridLocation: string;
    rating: number;
    userPublicKey: string;
    maxUserRating: number;
    minRating: number;
    maxPassengers: number;
    maxWaitingTime: number;
    minPassengerRating: number;
}

export interface MsRideProviderBid {
    rideRequestId: string;
    rideProviderId: string;
    amount: number;
    rating: number;
    model: String,
    estimatedArrivalTime: Number,
    passengerCount: Number,
    vehiclePublicKey: String;
}
