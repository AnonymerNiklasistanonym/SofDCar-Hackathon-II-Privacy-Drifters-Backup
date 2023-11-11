import { MsUserRideRequest, MsRideProviderBid } from "../types/matching_service"
import { ASUserDb, ASPseudonymDb } from "../types/authentication_service"

export interface ResponseMatchingService {
    userRideRequests: MsUserRideRequest[];
    rideProviderBids: MsRideProviderBid[];
}

export interface ResponseAuthenticationServiceUser extends ASUserDb {
    pseudonyms: string[];
    past_rides: MsUserRideRequest[];
    average_rating: number;
}

export interface ResponseAuthenticationService {
    users: ResponseAuthenticationServiceUser[];
}
