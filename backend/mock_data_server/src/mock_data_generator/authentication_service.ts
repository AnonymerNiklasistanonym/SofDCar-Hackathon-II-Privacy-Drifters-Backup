import { ResponseAuthenticationService, ResponseAuthenticationServiceUser } from "../types/response";

import { generateUsername } from "unique-username-generator";

import { getRandomInt, getRandomHash, getRandomArrayElement } from "./helpers"

export const generateMockDataAsUser = (): ResponseAuthenticationServiceUser => {
    return {
        account_id: `user ${getRandomInt(123)}`,
        banned: getRandomInt(10) === 1,
        data: JSON.stringify({ passport_data: "xyz", firstname: generateUsername(), lastname: generateUsername(), dateOfBirth: `${getRandomInt(12)}.${getRandomInt(30)}.${1985 + getRandomInt(15)}` }),
        data_hash: getRandomHash(),
        pseudonym: `pseudonym ${getRandomInt(123)}`,
    }
}

export const generateMockDataAs = (): ResponseAuthenticationService => {
    return {
        users: [...Array(getRandomInt(10))].map(() => generateMockDataAsUser()),
    }
}
