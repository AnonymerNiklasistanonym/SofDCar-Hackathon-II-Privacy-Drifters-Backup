## Run the database

1. Install [Ganache](https://trufflesuite.com/ganache/)
2. Firewall blocking us from gaining data access

## Data properties

Ride sharing based on a blockchain approach with as much privacy as possible

$\rightarrow$ Certain stakeholders in the system should only be seeing what is necessary going as far as blurring information

The following stakeholders exist:

- 2 parties based on real people/actors that do smart contracts on the blockchain with each other:
  - Party 1: Provides rides
  - Party 2: Requests rides

- Multiple Matching services that tries to find for Party 2 a matching Party 1 and then completes the smart contract
- Multiple Authentication services that know all actor contact details and their block chain smart contract pseudonyms which enables them to get their past rides/ratings
- One block chain on which the smart contracts are stored without actual contact details

### Matching service

Available to see **inside a certain area** (200km² multiple matching services can overlap):

- all the mocked location data from the ride providers
- the mocked location data of the current requester

**Detailed properties:**

```ts
export interface UserRideRequestType {
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
```

```ts
export interface RideProviderBidType {
    rideRequestId: string;
    rideProviderId: string;
    amount: number;
    rating: number;
    model: String,
    estimatedArrivalTime: Number,
    passengerCount: Number,
    vehiclePublicKey: String;
}
```

**Examples:**

```ts
const bid = {
    rideRequestId: rideId, // string
    rideProviderId: process.env.SERVICE_NAME,
    amount: Math.floor(Math.random() * 30) + 14,
    rating: 5,
    model: "Tesla Model Y",
    estimatedArrivalTime: 5,
    passengerCount: 0,
    vehiclePublicKey: keyPair.publicKey
}
```

### Authentication service

- Master data
  - Does not know any location of the user but it's address/rating
- Ratings
- Past wallets (ride providers, matching service people)
- Provides rating of parties to matching service
