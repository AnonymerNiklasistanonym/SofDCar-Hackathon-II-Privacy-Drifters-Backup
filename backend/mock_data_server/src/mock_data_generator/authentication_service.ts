import { ResponseAuthenticationService, ResponseAuthenticationServiceUser } from "../types/response";

import { generateUsername } from "unique-username-generator";

import { getRandomInt, getRandomHash, getRandomPseudonym } from "./helpers"
import { generateMockDataMsUserRideRequest } from "./matching_service";

export const generateMockDataAsUser = (): ResponseAuthenticationServiceUser => {
    const past_rides = [...Array(getRandomInt(80, 20))].map(() => generateMockDataMsUserRideRequest());
    return {
        account_id: getRandomPseudonym(),
        banned: getRandomInt(20) === 1,
        data: JSON.stringify({ passport_data: "[REDACTED]", firstname: generateUsername(), lastname: generateUsername(), dateOfBirth: `${getRandomInt(12, 1)}.${getRandomInt(28, 1)}.${1980 + getRandomInt(25)}` }),
        data_hash: getRandomHash(),
        pseudonyms: [...Array(getRandomInt(10, 2))].map(() => getRandomPseudonym()),
        past_rides,
        average_rating: past_rides.map((a) => a.rating).reduce((sum, a) => sum + a, 0) / past_rides.length
    }
}

export const generateMockDataAs = (): ResponseAuthenticationService => {
    return {
        users: [...Array(getRandomInt(10, 5))].map(() => generateMockDataAsUser()),
    }
}
