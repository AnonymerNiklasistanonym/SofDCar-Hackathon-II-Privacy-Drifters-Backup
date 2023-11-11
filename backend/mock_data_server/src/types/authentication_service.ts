export interface ASUserDb {
    data_hash: string;
    /** json string of passport data, firstname, lastname, date of birth... */
    data: string;
    account_id: string;
    banned: boolean;
}

export interface ASPseudonymDb {
    /** hex string */
    pseudonym: string;
    account_id: string;
}

export interface ASPrivateWallet {
    account_id: string;
    public_key: string;
    wallet_id: string;
}

export interface ASPrivateBlockchain {
    /** hex string */
    pseudonym: string;
    account_id: string;
}

export interface ASPrivateBlockchainUserData {
    userHash: string;
    accountId: string;
    banned: boolean;
}
