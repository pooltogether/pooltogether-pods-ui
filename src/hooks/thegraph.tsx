import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_1_0", {
      method: "POST",
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};




export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  prizePoolAccounts: Array<PrizePoolAccount>;
  controlledTokenBalances?: Maybe<Array<ControlledTokenBalance>>;
};


export type AccountPrizePoolAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
};


export type AccountControlledTokenBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledTokenBalance_Filter>;
};

export type Account_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Account_OrderBy {
  Id = 'id',
  PrizePoolAccounts = 'prizePoolAccounts',
  ControlledTokenBalances = 'controlledTokenBalances'
}

export type AwardedControlledToken = {
  __typename?: 'AwardedControlledToken';
  id: Scalars['ID'];
  winner: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  token: ControlledToken;
  prize: Prize;
};

export type AwardedControlledToken_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  winner?: Maybe<Scalars['Bytes']>;
  winner_not?: Maybe<Scalars['Bytes']>;
  winner_in?: Maybe<Array<Scalars['Bytes']>>;
  winner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  winner_contains?: Maybe<Scalars['Bytes']>;
  winner_not_contains?: Maybe<Scalars['Bytes']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  prize?: Maybe<Scalars['String']>;
  prize_not?: Maybe<Scalars['String']>;
  prize_gt?: Maybe<Scalars['String']>;
  prize_lt?: Maybe<Scalars['String']>;
  prize_gte?: Maybe<Scalars['String']>;
  prize_lte?: Maybe<Scalars['String']>;
  prize_in?: Maybe<Array<Scalars['String']>>;
  prize_not_in?: Maybe<Array<Scalars['String']>>;
  prize_contains?: Maybe<Scalars['String']>;
  prize_not_contains?: Maybe<Scalars['String']>;
  prize_starts_with?: Maybe<Scalars['String']>;
  prize_not_starts_with?: Maybe<Scalars['String']>;
  prize_ends_with?: Maybe<Scalars['String']>;
  prize_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AwardedControlledToken_OrderBy {
  Id = 'id',
  Winner = 'winner',
  Amount = 'amount',
  Token = 'token',
  Prize = 'prize'
}

export type AwardedExternalErc20Token = {
  __typename?: 'AwardedExternalErc20Token';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  balanceAwarded?: Maybe<Scalars['BigInt']>;
  prize: Prize;
  winner?: Maybe<Scalars['Bytes']>;
};

export type AwardedExternalErc20Token_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  balanceAwarded?: Maybe<Scalars['BigInt']>;
  balanceAwarded_not?: Maybe<Scalars['BigInt']>;
  balanceAwarded_gt?: Maybe<Scalars['BigInt']>;
  balanceAwarded_lt?: Maybe<Scalars['BigInt']>;
  balanceAwarded_gte?: Maybe<Scalars['BigInt']>;
  balanceAwarded_lte?: Maybe<Scalars['BigInt']>;
  balanceAwarded_in?: Maybe<Array<Scalars['BigInt']>>;
  balanceAwarded_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prize?: Maybe<Scalars['String']>;
  prize_not?: Maybe<Scalars['String']>;
  prize_gt?: Maybe<Scalars['String']>;
  prize_lt?: Maybe<Scalars['String']>;
  prize_gte?: Maybe<Scalars['String']>;
  prize_lte?: Maybe<Scalars['String']>;
  prize_in?: Maybe<Array<Scalars['String']>>;
  prize_not_in?: Maybe<Array<Scalars['String']>>;
  prize_contains?: Maybe<Scalars['String']>;
  prize_not_contains?: Maybe<Scalars['String']>;
  prize_starts_with?: Maybe<Scalars['String']>;
  prize_not_starts_with?: Maybe<Scalars['String']>;
  prize_ends_with?: Maybe<Scalars['String']>;
  prize_not_ends_with?: Maybe<Scalars['String']>;
  winner?: Maybe<Scalars['Bytes']>;
  winner_not?: Maybe<Scalars['Bytes']>;
  winner_in?: Maybe<Array<Scalars['Bytes']>>;
  winner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  winner_contains?: Maybe<Scalars['Bytes']>;
  winner_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum AwardedExternalErc20Token_OrderBy {
  Id = 'id',
  Address = 'address',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  BalanceAwarded = 'balanceAwarded',
  Prize = 'prize',
  Winner = 'winner'
}

export type AwardedExternalErc721Nft = {
  __typename?: 'AwardedExternalErc721Nft';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  tokenIds?: Maybe<Array<Scalars['BigInt']>>;
  prize?: Maybe<Prize>;
  winner?: Maybe<Scalars['Bytes']>;
};

export type AwardedExternalErc721Nft_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  tokenIds?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_not?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_contains?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  prize?: Maybe<Scalars['String']>;
  prize_not?: Maybe<Scalars['String']>;
  prize_gt?: Maybe<Scalars['String']>;
  prize_lt?: Maybe<Scalars['String']>;
  prize_gte?: Maybe<Scalars['String']>;
  prize_lte?: Maybe<Scalars['String']>;
  prize_in?: Maybe<Array<Scalars['String']>>;
  prize_not_in?: Maybe<Array<Scalars['String']>>;
  prize_contains?: Maybe<Scalars['String']>;
  prize_not_contains?: Maybe<Scalars['String']>;
  prize_starts_with?: Maybe<Scalars['String']>;
  prize_not_starts_with?: Maybe<Scalars['String']>;
  prize_ends_with?: Maybe<Scalars['String']>;
  prize_not_ends_with?: Maybe<Scalars['String']>;
  winner?: Maybe<Scalars['Bytes']>;
  winner_not?: Maybe<Scalars['Bytes']>;
  winner_in?: Maybe<Array<Scalars['Bytes']>>;
  winner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  winner_contains?: Maybe<Scalars['Bytes']>;
  winner_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum AwardedExternalErc721Nft_OrderBy {
  Id = 'id',
  Address = 'address',
  TokenIds = 'tokenIds',
  Prize = 'prize',
  Winner = 'winner'
}

export type BalanceDrip = {
  __typename?: 'BalanceDrip';
  id: Scalars['ID'];
  comptroller: Comptroller;
  sourceAddress: Scalars['Bytes'];
  measureToken: Scalars['Bytes'];
  dripToken: Scalars['Bytes'];
  dripRatePerSecond?: Maybe<Scalars['BigInt']>;
  exchangeRateMantissa?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  players: Array<BalanceDripPlayer>;
  deactivated: Scalars['Boolean'];
};


export type BalanceDripPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDripPlayer_Filter>;
};

export type BalanceDripPlayer = {
  __typename?: 'BalanceDripPlayer';
  id: Scalars['ID'];
  balanceDrip: BalanceDrip;
  address: Scalars['Bytes'];
};

export type BalanceDripPlayer_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  balanceDrip?: Maybe<Scalars['String']>;
  balanceDrip_not?: Maybe<Scalars['String']>;
  balanceDrip_gt?: Maybe<Scalars['String']>;
  balanceDrip_lt?: Maybe<Scalars['String']>;
  balanceDrip_gte?: Maybe<Scalars['String']>;
  balanceDrip_lte?: Maybe<Scalars['String']>;
  balanceDrip_in?: Maybe<Array<Scalars['String']>>;
  balanceDrip_not_in?: Maybe<Array<Scalars['String']>>;
  balanceDrip_contains?: Maybe<Scalars['String']>;
  balanceDrip_not_contains?: Maybe<Scalars['String']>;
  balanceDrip_starts_with?: Maybe<Scalars['String']>;
  balanceDrip_not_starts_with?: Maybe<Scalars['String']>;
  balanceDrip_ends_with?: Maybe<Scalars['String']>;
  balanceDrip_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum BalanceDripPlayer_OrderBy {
  Id = 'id',
  BalanceDrip = 'balanceDrip',
  Address = 'address'
}

export type BalanceDrip_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  comptroller?: Maybe<Scalars['String']>;
  comptroller_not?: Maybe<Scalars['String']>;
  comptroller_gt?: Maybe<Scalars['String']>;
  comptroller_lt?: Maybe<Scalars['String']>;
  comptroller_gte?: Maybe<Scalars['String']>;
  comptroller_lte?: Maybe<Scalars['String']>;
  comptroller_in?: Maybe<Array<Scalars['String']>>;
  comptroller_not_in?: Maybe<Array<Scalars['String']>>;
  comptroller_contains?: Maybe<Scalars['String']>;
  comptroller_not_contains?: Maybe<Scalars['String']>;
  comptroller_starts_with?: Maybe<Scalars['String']>;
  comptroller_not_starts_with?: Maybe<Scalars['String']>;
  comptroller_ends_with?: Maybe<Scalars['String']>;
  comptroller_not_ends_with?: Maybe<Scalars['String']>;
  sourceAddress?: Maybe<Scalars['Bytes']>;
  sourceAddress_not?: Maybe<Scalars['Bytes']>;
  sourceAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  sourceAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sourceAddress_contains?: Maybe<Scalars['Bytes']>;
  sourceAddress_not_contains?: Maybe<Scalars['Bytes']>;
  measureToken?: Maybe<Scalars['Bytes']>;
  measureToken_not?: Maybe<Scalars['Bytes']>;
  measureToken_in?: Maybe<Array<Scalars['Bytes']>>;
  measureToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  measureToken_contains?: Maybe<Scalars['Bytes']>;
  measureToken_not_contains?: Maybe<Scalars['Bytes']>;
  dripToken?: Maybe<Scalars['Bytes']>;
  dripToken_not?: Maybe<Scalars['Bytes']>;
  dripToken_in?: Maybe<Array<Scalars['Bytes']>>;
  dripToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  dripToken_contains?: Maybe<Scalars['Bytes']>;
  dripToken_not_contains?: Maybe<Scalars['Bytes']>;
  dripRatePerSecond?: Maybe<Scalars['BigInt']>;
  dripRatePerSecond_not?: Maybe<Scalars['BigInt']>;
  dripRatePerSecond_gt?: Maybe<Scalars['BigInt']>;
  dripRatePerSecond_lt?: Maybe<Scalars['BigInt']>;
  dripRatePerSecond_gte?: Maybe<Scalars['BigInt']>;
  dripRatePerSecond_lte?: Maybe<Scalars['BigInt']>;
  dripRatePerSecond_in?: Maybe<Array<Scalars['BigInt']>>;
  dripRatePerSecond_not_in?: Maybe<Array<Scalars['BigInt']>>;
  exchangeRateMantissa?: Maybe<Scalars['BigInt']>;
  exchangeRateMantissa_not?: Maybe<Scalars['BigInt']>;
  exchangeRateMantissa_gt?: Maybe<Scalars['BigInt']>;
  exchangeRateMantissa_lt?: Maybe<Scalars['BigInt']>;
  exchangeRateMantissa_gte?: Maybe<Scalars['BigInt']>;
  exchangeRateMantissa_lte?: Maybe<Scalars['BigInt']>;
  exchangeRateMantissa_in?: Maybe<Array<Scalars['BigInt']>>;
  exchangeRateMantissa_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deactivated?: Maybe<Scalars['Boolean']>;
  deactivated_not?: Maybe<Scalars['Boolean']>;
  deactivated_in?: Maybe<Array<Scalars['Boolean']>>;
  deactivated_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum BalanceDrip_OrderBy {
  Id = 'id',
  Comptroller = 'comptroller',
  SourceAddress = 'sourceAddress',
  MeasureToken = 'measureToken',
  DripToken = 'dripToken',
  DripRatePerSecond = 'dripRatePerSecond',
  ExchangeRateMantissa = 'exchangeRateMantissa',
  Timestamp = 'timestamp',
  Players = 'players',
  Deactivated = 'deactivated'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export type CompoundPrizePool = {
  __typename?: 'CompoundPrizePool';
  id: Scalars['ID'];
  cToken?: Maybe<Scalars['Bytes']>;
};

export type CompoundPrizePool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  cToken?: Maybe<Scalars['Bytes']>;
  cToken_not?: Maybe<Scalars['Bytes']>;
  cToken_in?: Maybe<Array<Scalars['Bytes']>>;
  cToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  cToken_contains?: Maybe<Scalars['Bytes']>;
  cToken_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum CompoundPrizePool_OrderBy {
  Id = 'id',
  CToken = 'cToken'
}

export type Comptroller = {
  __typename?: 'Comptroller';
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  players: Array<DripTokenPlayer>;
  balanceDrips: Array<BalanceDrip>;
  volumeDrips: Array<VolumeDrip>;
};


export type ComptrollerPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
};


export type ComptrollerBalanceDripsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDrip_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDrip_Filter>;
};


export type ComptrollerVolumeDripsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDrip_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDrip_Filter>;
};

export type Comptroller_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum Comptroller_OrderBy {
  Id = 'id',
  Owner = 'owner',
  Players = 'players',
  BalanceDrips = 'balanceDrips',
  VolumeDrips = 'volumeDrips'
}

export type ControlledToken = {
  __typename?: 'ControlledToken';
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  decimals?: Maybe<Scalars['BigInt']>;
  controller?: Maybe<PrizePool>;
  totalSupply: Scalars['BigInt'];
  numberOfHolders: Scalars['BigInt'];
  balances: Array<ControlledTokenBalance>;
};


export type ControlledTokenBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledTokenBalance_Filter>;
};

export type ControlledTokenBalance = {
  __typename?: 'ControlledTokenBalance';
  id: Scalars['ID'];
  account: Account;
  controlledToken: ControlledToken;
  balance?: Maybe<Scalars['BigInt']>;
};

export type ControlledTokenBalance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  controlledToken?: Maybe<Scalars['String']>;
  controlledToken_not?: Maybe<Scalars['String']>;
  controlledToken_gt?: Maybe<Scalars['String']>;
  controlledToken_lt?: Maybe<Scalars['String']>;
  controlledToken_gte?: Maybe<Scalars['String']>;
  controlledToken_lte?: Maybe<Scalars['String']>;
  controlledToken_in?: Maybe<Array<Scalars['String']>>;
  controlledToken_not_in?: Maybe<Array<Scalars['String']>>;
  controlledToken_contains?: Maybe<Scalars['String']>;
  controlledToken_not_contains?: Maybe<Scalars['String']>;
  controlledToken_starts_with?: Maybe<Scalars['String']>;
  controlledToken_not_starts_with?: Maybe<Scalars['String']>;
  controlledToken_ends_with?: Maybe<Scalars['String']>;
  controlledToken_not_ends_with?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum ControlledTokenBalance_OrderBy {
  Id = 'id',
  Account = 'account',
  ControlledToken = 'controlledToken',
  Balance = 'balance'
}

export type ControlledToken_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  controller?: Maybe<Scalars['String']>;
  controller_not?: Maybe<Scalars['String']>;
  controller_gt?: Maybe<Scalars['String']>;
  controller_lt?: Maybe<Scalars['String']>;
  controller_gte?: Maybe<Scalars['String']>;
  controller_lte?: Maybe<Scalars['String']>;
  controller_in?: Maybe<Array<Scalars['String']>>;
  controller_not_in?: Maybe<Array<Scalars['String']>>;
  controller_contains?: Maybe<Scalars['String']>;
  controller_not_contains?: Maybe<Scalars['String']>;
  controller_starts_with?: Maybe<Scalars['String']>;
  controller_not_starts_with?: Maybe<Scalars['String']>;
  controller_ends_with?: Maybe<Scalars['String']>;
  controller_not_ends_with?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
  numberOfHolders?: Maybe<Scalars['BigInt']>;
  numberOfHolders_not?: Maybe<Scalars['BigInt']>;
  numberOfHolders_gt?: Maybe<Scalars['BigInt']>;
  numberOfHolders_lt?: Maybe<Scalars['BigInt']>;
  numberOfHolders_gte?: Maybe<Scalars['BigInt']>;
  numberOfHolders_lte?: Maybe<Scalars['BigInt']>;
  numberOfHolders_in?: Maybe<Array<Scalars['BigInt']>>;
  numberOfHolders_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum ControlledToken_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  Controller = 'controller',
  TotalSupply = 'totalSupply',
  NumberOfHolders = 'numberOfHolders',
  Balances = 'balances'
}

export type CreditBalance = {
  __typename?: 'CreditBalance';
  id: Scalars['ID'];
  prizePool: PrizePool;
  balance?: Maybe<Scalars['BigInt']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  initialized?: Maybe<Scalars['Boolean']>;
};

export type CreditBalance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  prizePool?: Maybe<Scalars['String']>;
  prizePool_not?: Maybe<Scalars['String']>;
  prizePool_gt?: Maybe<Scalars['String']>;
  prizePool_lt?: Maybe<Scalars['String']>;
  prizePool_gte?: Maybe<Scalars['String']>;
  prizePool_lte?: Maybe<Scalars['String']>;
  prizePool_in?: Maybe<Array<Scalars['String']>>;
  prizePool_not_in?: Maybe<Array<Scalars['String']>>;
  prizePool_contains?: Maybe<Scalars['String']>;
  prizePool_not_contains?: Maybe<Scalars['String']>;
  prizePool_starts_with?: Maybe<Scalars['String']>;
  prizePool_not_starts_with?: Maybe<Scalars['String']>;
  prizePool_ends_with?: Maybe<Scalars['String']>;
  prizePool_not_ends_with?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  initialized?: Maybe<Scalars['Boolean']>;
  initialized_not?: Maybe<Scalars['Boolean']>;
  initialized_in?: Maybe<Array<Scalars['Boolean']>>;
  initialized_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum CreditBalance_OrderBy {
  Id = 'id',
  PrizePool = 'prizePool',
  Balance = 'balance',
  Timestamp = 'timestamp',
  Initialized = 'initialized'
}

export type CreditRate = {
  __typename?: 'CreditRate';
  id: Scalars['ID'];
  prizePool: PrizePool;
  creditLimitMantissa: Scalars['BigInt'];
  creditRateMantissa: Scalars['BigInt'];
};

export type CreditRate_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  prizePool?: Maybe<Scalars['String']>;
  prizePool_not?: Maybe<Scalars['String']>;
  prizePool_gt?: Maybe<Scalars['String']>;
  prizePool_lt?: Maybe<Scalars['String']>;
  prizePool_gte?: Maybe<Scalars['String']>;
  prizePool_lte?: Maybe<Scalars['String']>;
  prizePool_in?: Maybe<Array<Scalars['String']>>;
  prizePool_not_in?: Maybe<Array<Scalars['String']>>;
  prizePool_contains?: Maybe<Scalars['String']>;
  prizePool_not_contains?: Maybe<Scalars['String']>;
  prizePool_starts_with?: Maybe<Scalars['String']>;
  prizePool_not_starts_with?: Maybe<Scalars['String']>;
  prizePool_ends_with?: Maybe<Scalars['String']>;
  prizePool_not_ends_with?: Maybe<Scalars['String']>;
  creditLimitMantissa?: Maybe<Scalars['BigInt']>;
  creditLimitMantissa_not?: Maybe<Scalars['BigInt']>;
  creditLimitMantissa_gt?: Maybe<Scalars['BigInt']>;
  creditLimitMantissa_lt?: Maybe<Scalars['BigInt']>;
  creditLimitMantissa_gte?: Maybe<Scalars['BigInt']>;
  creditLimitMantissa_lte?: Maybe<Scalars['BigInt']>;
  creditLimitMantissa_in?: Maybe<Array<Scalars['BigInt']>>;
  creditLimitMantissa_not_in?: Maybe<Array<Scalars['BigInt']>>;
  creditRateMantissa?: Maybe<Scalars['BigInt']>;
  creditRateMantissa_not?: Maybe<Scalars['BigInt']>;
  creditRateMantissa_gt?: Maybe<Scalars['BigInt']>;
  creditRateMantissa_lt?: Maybe<Scalars['BigInt']>;
  creditRateMantissa_gte?: Maybe<Scalars['BigInt']>;
  creditRateMantissa_lte?: Maybe<Scalars['BigInt']>;
  creditRateMantissa_in?: Maybe<Array<Scalars['BigInt']>>;
  creditRateMantissa_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum CreditRate_OrderBy {
  Id = 'id',
  PrizePool = 'prizePool',
  CreditLimitMantissa = 'creditLimitMantissa',
  CreditRateMantissa = 'creditRateMantissa'
}

export type DripTokenPlayer = {
  __typename?: 'DripTokenPlayer';
  id: Scalars['ID'];
  comptroller: Comptroller;
  dripToken: Scalars['Bytes'];
  address: Scalars['Bytes'];
  balance: Scalars['BigInt'];
};

export type DripTokenPlayer_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  comptroller?: Maybe<Scalars['String']>;
  comptroller_not?: Maybe<Scalars['String']>;
  comptroller_gt?: Maybe<Scalars['String']>;
  comptroller_lt?: Maybe<Scalars['String']>;
  comptroller_gte?: Maybe<Scalars['String']>;
  comptroller_lte?: Maybe<Scalars['String']>;
  comptroller_in?: Maybe<Array<Scalars['String']>>;
  comptroller_not_in?: Maybe<Array<Scalars['String']>>;
  comptroller_contains?: Maybe<Scalars['String']>;
  comptroller_not_contains?: Maybe<Scalars['String']>;
  comptroller_starts_with?: Maybe<Scalars['String']>;
  comptroller_not_starts_with?: Maybe<Scalars['String']>;
  comptroller_ends_with?: Maybe<Scalars['String']>;
  comptroller_not_ends_with?: Maybe<Scalars['String']>;
  dripToken?: Maybe<Scalars['Bytes']>;
  dripToken_not?: Maybe<Scalars['Bytes']>;
  dripToken_in?: Maybe<Array<Scalars['Bytes']>>;
  dripToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  dripToken_contains?: Maybe<Scalars['Bytes']>;
  dripToken_not_contains?: Maybe<Scalars['Bytes']>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum DripTokenPlayer_OrderBy {
  Id = 'id',
  Comptroller = 'comptroller',
  DripToken = 'dripToken',
  Address = 'address',
  Balance = 'balance'
}

export type MultipleWinnersExternalErc20Award = {
  __typename?: 'MultipleWinnersExternalErc20Award';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  balanceAwarded?: Maybe<Scalars['BigInt']>;
  prizeStrategy?: Maybe<MultipleWinnersPrizeStrategy>;
};

export type MultipleWinnersExternalErc20Award_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  balanceAwarded?: Maybe<Scalars['BigInt']>;
  balanceAwarded_not?: Maybe<Scalars['BigInt']>;
  balanceAwarded_gt?: Maybe<Scalars['BigInt']>;
  balanceAwarded_lt?: Maybe<Scalars['BigInt']>;
  balanceAwarded_gte?: Maybe<Scalars['BigInt']>;
  balanceAwarded_lte?: Maybe<Scalars['BigInt']>;
  balanceAwarded_in?: Maybe<Array<Scalars['BigInt']>>;
  balanceAwarded_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prizeStrategy?: Maybe<Scalars['String']>;
  prizeStrategy_not?: Maybe<Scalars['String']>;
  prizeStrategy_gt?: Maybe<Scalars['String']>;
  prizeStrategy_lt?: Maybe<Scalars['String']>;
  prizeStrategy_gte?: Maybe<Scalars['String']>;
  prizeStrategy_lte?: Maybe<Scalars['String']>;
  prizeStrategy_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_not_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_contains?: Maybe<Scalars['String']>;
  prizeStrategy_not_contains?: Maybe<Scalars['String']>;
  prizeStrategy_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_ends_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MultipleWinnersExternalErc20Award_OrderBy {
  Id = 'id',
  Address = 'address',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  BalanceAwarded = 'balanceAwarded',
  PrizeStrategy = 'prizeStrategy'
}

export type MultipleWinnersExternalErc721Award = {
  __typename?: 'MultipleWinnersExternalErc721Award';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  tokenIds?: Maybe<Array<Scalars['BigInt']>>;
  prizeStrategy?: Maybe<MultipleWinnersPrizeStrategy>;
};

export type MultipleWinnersExternalErc721Award_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  tokenIds?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_not?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_contains?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  prizeStrategy?: Maybe<Scalars['String']>;
  prizeStrategy_not?: Maybe<Scalars['String']>;
  prizeStrategy_gt?: Maybe<Scalars['String']>;
  prizeStrategy_lt?: Maybe<Scalars['String']>;
  prizeStrategy_gte?: Maybe<Scalars['String']>;
  prizeStrategy_lte?: Maybe<Scalars['String']>;
  prizeStrategy_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_not_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_contains?: Maybe<Scalars['String']>;
  prizeStrategy_not_contains?: Maybe<Scalars['String']>;
  prizeStrategy_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_ends_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_ends_with?: Maybe<Scalars['String']>;
};

export enum MultipleWinnersExternalErc721Award_OrderBy {
  Id = 'id',
  Address = 'address',
  TokenIds = 'tokenIds',
  PrizeStrategy = 'prizeStrategy'
}

export type MultipleWinnersPrizeStrategy = {
  __typename?: 'MultipleWinnersPrizeStrategy';
  id: Scalars['ID'];
  owner?: Maybe<Scalars['Bytes']>;
  numberOfWinners?: Maybe<Scalars['BigInt']>;
  splitExternalERC20Awards?: Maybe<Scalars['Boolean']>;
  tokenListener?: Maybe<Scalars['Bytes']>;
  prizePool?: Maybe<PrizePool>;
  rng?: Maybe<Scalars['Bytes']>;
  ticket?: Maybe<ControlledToken>;
  sponsorship?: Maybe<ControlledToken>;
  prizePeriodSeconds: Scalars['BigInt'];
  prizePeriodStartedAt: Scalars['BigInt'];
  prizePeriodEndAt: Scalars['BigInt'];
  externalErc20Awards: Array<MultipleWinnersExternalErc20Award>;
  externalErc721Awards: Array<MultipleWinnersExternalErc721Award>;
};


export type MultipleWinnersPrizeStrategyExternalErc20AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
};


export type MultipleWinnersPrizeStrategyExternalErc721AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
};

export type MultipleWinnersPrizeStrategy_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  numberOfWinners?: Maybe<Scalars['BigInt']>;
  numberOfWinners_not?: Maybe<Scalars['BigInt']>;
  numberOfWinners_gt?: Maybe<Scalars['BigInt']>;
  numberOfWinners_lt?: Maybe<Scalars['BigInt']>;
  numberOfWinners_gte?: Maybe<Scalars['BigInt']>;
  numberOfWinners_lte?: Maybe<Scalars['BigInt']>;
  numberOfWinners_in?: Maybe<Array<Scalars['BigInt']>>;
  numberOfWinners_not_in?: Maybe<Array<Scalars['BigInt']>>;
  splitExternalERC20Awards?: Maybe<Scalars['Boolean']>;
  splitExternalERC20Awards_not?: Maybe<Scalars['Boolean']>;
  splitExternalERC20Awards_in?: Maybe<Array<Scalars['Boolean']>>;
  splitExternalERC20Awards_not_in?: Maybe<Array<Scalars['Boolean']>>;
  tokenListener?: Maybe<Scalars['Bytes']>;
  tokenListener_not?: Maybe<Scalars['Bytes']>;
  tokenListener_in?: Maybe<Array<Scalars['Bytes']>>;
  tokenListener_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tokenListener_contains?: Maybe<Scalars['Bytes']>;
  tokenListener_not_contains?: Maybe<Scalars['Bytes']>;
  prizePool?: Maybe<Scalars['String']>;
  prizePool_not?: Maybe<Scalars['String']>;
  prizePool_gt?: Maybe<Scalars['String']>;
  prizePool_lt?: Maybe<Scalars['String']>;
  prizePool_gte?: Maybe<Scalars['String']>;
  prizePool_lte?: Maybe<Scalars['String']>;
  prizePool_in?: Maybe<Array<Scalars['String']>>;
  prizePool_not_in?: Maybe<Array<Scalars['String']>>;
  prizePool_contains?: Maybe<Scalars['String']>;
  prizePool_not_contains?: Maybe<Scalars['String']>;
  prizePool_starts_with?: Maybe<Scalars['String']>;
  prizePool_not_starts_with?: Maybe<Scalars['String']>;
  prizePool_ends_with?: Maybe<Scalars['String']>;
  prizePool_not_ends_with?: Maybe<Scalars['String']>;
  rng?: Maybe<Scalars['Bytes']>;
  rng_not?: Maybe<Scalars['Bytes']>;
  rng_in?: Maybe<Array<Scalars['Bytes']>>;
  rng_not_in?: Maybe<Array<Scalars['Bytes']>>;
  rng_contains?: Maybe<Scalars['Bytes']>;
  rng_not_contains?: Maybe<Scalars['Bytes']>;
  ticket?: Maybe<Scalars['String']>;
  ticket_not?: Maybe<Scalars['String']>;
  ticket_gt?: Maybe<Scalars['String']>;
  ticket_lt?: Maybe<Scalars['String']>;
  ticket_gte?: Maybe<Scalars['String']>;
  ticket_lte?: Maybe<Scalars['String']>;
  ticket_in?: Maybe<Array<Scalars['String']>>;
  ticket_not_in?: Maybe<Array<Scalars['String']>>;
  ticket_contains?: Maybe<Scalars['String']>;
  ticket_not_contains?: Maybe<Scalars['String']>;
  ticket_starts_with?: Maybe<Scalars['String']>;
  ticket_not_starts_with?: Maybe<Scalars['String']>;
  ticket_ends_with?: Maybe<Scalars['String']>;
  ticket_not_ends_with?: Maybe<Scalars['String']>;
  sponsorship?: Maybe<Scalars['String']>;
  sponsorship_not?: Maybe<Scalars['String']>;
  sponsorship_gt?: Maybe<Scalars['String']>;
  sponsorship_lt?: Maybe<Scalars['String']>;
  sponsorship_gte?: Maybe<Scalars['String']>;
  sponsorship_lte?: Maybe<Scalars['String']>;
  sponsorship_in?: Maybe<Array<Scalars['String']>>;
  sponsorship_not_in?: Maybe<Array<Scalars['String']>>;
  sponsorship_contains?: Maybe<Scalars['String']>;
  sponsorship_not_contains?: Maybe<Scalars['String']>;
  sponsorship_starts_with?: Maybe<Scalars['String']>;
  sponsorship_not_starts_with?: Maybe<Scalars['String']>;
  sponsorship_ends_with?: Maybe<Scalars['String']>;
  sponsorship_not_ends_with?: Maybe<Scalars['String']>;
  prizePeriodSeconds?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_not?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_gt?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_lt?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_gte?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_lte?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodSeconds_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodStartedAt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_not?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_gt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_lt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_gte?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_lte?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodStartedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodEndAt?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_not?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_gt?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_lt?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_gte?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_lte?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodEndAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum MultipleWinnersPrizeStrategy_OrderBy {
  Id = 'id',
  Owner = 'owner',
  NumberOfWinners = 'numberOfWinners',
  SplitExternalErc20Awards = 'splitExternalERC20Awards',
  TokenListener = 'tokenListener',
  PrizePool = 'prizePool',
  Rng = 'rng',
  Ticket = 'ticket',
  Sponsorship = 'sponsorship',
  PrizePeriodSeconds = 'prizePeriodSeconds',
  PrizePeriodStartedAt = 'prizePeriodStartedAt',
  PrizePeriodEndAt = 'prizePeriodEndAt',
  ExternalErc20Awards = 'externalErc20Awards',
  ExternalErc721Awards = 'externalErc721Awards'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Prize = {
  __typename?: 'Prize';
  id: Scalars['ID'];
  prizePool: PrizePool;
  awardStartOperator?: Maybe<Scalars['Bytes']>;
  awardedOperator?: Maybe<Scalars['Bytes']>;
  prizePeriodStartedTimestamp?: Maybe<Scalars['BigInt']>;
  lockBlock?: Maybe<Scalars['BigInt']>;
  awardedBlock?: Maybe<Scalars['BigInt']>;
  awardedTimestamp?: Maybe<Scalars['BigInt']>;
  rngRequestId?: Maybe<Scalars['BigInt']>;
  randomNumber?: Maybe<Scalars['BigInt']>;
  numberOfSubWinners?: Maybe<Scalars['BigInt']>;
  totalTicketSupply?: Maybe<Scalars['BigInt']>;
  awardedControlledTokens: Array<AwardedControlledToken>;
  awardedExternalErc20Tokens: Array<AwardedExternalErc20Token>;
  awardedExternalErc721Nfts: Array<AwardedExternalErc721Nft>;
};


export type PrizeAwardedControlledTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
};


export type PrizeAwardedExternalErc20TokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedExternalErc20Token_Filter>;
};


export type PrizeAwardedExternalErc721NftsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedExternalErc721Nft_Filter>;
};

export type PrizePool = {
  __typename?: 'PrizePool';
  id: Scalars['ID'];
  deactivated: Scalars['Boolean'];
  owner?: Maybe<Scalars['Bytes']>;
  reserveRegistry?: Maybe<Scalars['Bytes']>;
  prizeStrategy?: Maybe<PrizeStrategy>;
  prizePoolType?: Maybe<PrizePoolType>;
  compoundPrizePool?: Maybe<CompoundPrizePool>;
  stakePrizePool?: Maybe<StakePrizePool>;
  yieldSourcePrizePool?: Maybe<YieldSourcePrizePool>;
  reserveFeeControlledToken: Scalars['Bytes'];
  sablierStream?: Maybe<SablierStream>;
  underlyingCollateralToken?: Maybe<Scalars['Bytes']>;
  underlyingCollateralDecimals?: Maybe<Scalars['BigInt']>;
  underlyingCollateralName?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol?: Maybe<Scalars['String']>;
  maxExitFeeMantissa: Scalars['BigInt'];
  maxTimelockDuration: Scalars['BigInt'];
  timelockTotalSupply?: Maybe<Scalars['BigInt']>;
  liquidityCap: Scalars['BigInt'];
  cumulativePrizeGross: Scalars['BigInt'];
  cumulativePrizeReserveFee: Scalars['BigInt'];
  cumulativePrizeNet: Scalars['BigInt'];
  currentPrizeId: Scalars['BigInt'];
  currentState: PrizePoolState;
  prizes: Array<Prize>;
  tokenCreditRates: Array<CreditRate>;
  tokenCreditBalances: Array<CreditBalance>;
  prizePoolAccounts: Array<PrizePoolAccount>;
  controlledTokens: Array<ControlledToken>;
};


export type PrizePoolPrizesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
};


export type PrizePoolTokenCreditRatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditRate_Filter>;
};


export type PrizePoolTokenCreditBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditBalance_Filter>;
};


export type PrizePoolPrizePoolAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
};


export type PrizePoolControlledTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledToken_Filter>;
};

export type PrizePoolAccount = {
  __typename?: 'PrizePoolAccount';
  id: Scalars['ID'];
  prizePool: PrizePool;
  account: Account;
  timelockedBalance: Scalars['BigInt'];
  unlockTimestamp: Scalars['BigInt'];
};

export type PrizePoolAccount_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  prizePool?: Maybe<Scalars['String']>;
  prizePool_not?: Maybe<Scalars['String']>;
  prizePool_gt?: Maybe<Scalars['String']>;
  prizePool_lt?: Maybe<Scalars['String']>;
  prizePool_gte?: Maybe<Scalars['String']>;
  prizePool_lte?: Maybe<Scalars['String']>;
  prizePool_in?: Maybe<Array<Scalars['String']>>;
  prizePool_not_in?: Maybe<Array<Scalars['String']>>;
  prizePool_contains?: Maybe<Scalars['String']>;
  prizePool_not_contains?: Maybe<Scalars['String']>;
  prizePool_starts_with?: Maybe<Scalars['String']>;
  prizePool_not_starts_with?: Maybe<Scalars['String']>;
  prizePool_ends_with?: Maybe<Scalars['String']>;
  prizePool_not_ends_with?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_gt?: Maybe<Scalars['String']>;
  account_lt?: Maybe<Scalars['String']>;
  account_gte?: Maybe<Scalars['String']>;
  account_lte?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_contains?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  timelockedBalance?: Maybe<Scalars['BigInt']>;
  timelockedBalance_not?: Maybe<Scalars['BigInt']>;
  timelockedBalance_gt?: Maybe<Scalars['BigInt']>;
  timelockedBalance_lt?: Maybe<Scalars['BigInt']>;
  timelockedBalance_gte?: Maybe<Scalars['BigInt']>;
  timelockedBalance_lte?: Maybe<Scalars['BigInt']>;
  timelockedBalance_in?: Maybe<Array<Scalars['BigInt']>>;
  timelockedBalance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  unlockTimestamp?: Maybe<Scalars['BigInt']>;
  unlockTimestamp_not?: Maybe<Scalars['BigInt']>;
  unlockTimestamp_gt?: Maybe<Scalars['BigInt']>;
  unlockTimestamp_lt?: Maybe<Scalars['BigInt']>;
  unlockTimestamp_gte?: Maybe<Scalars['BigInt']>;
  unlockTimestamp_lte?: Maybe<Scalars['BigInt']>;
  unlockTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  unlockTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum PrizePoolAccount_OrderBy {
  Id = 'id',
  PrizePool = 'prizePool',
  Account = 'account',
  TimelockedBalance = 'timelockedBalance',
  UnlockTimestamp = 'unlockTimestamp'
}

export enum PrizePoolState {
  Opened = 'Opened',
  Started = 'Started',
  Awarded = 'Awarded'
}

export enum PrizePoolType {
  Compound = 'Compound',
  YVault = 'yVault',
  Stake = 'Stake',
  YieldSource = 'YieldSource'
}

export type PrizePool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deactivated?: Maybe<Scalars['Boolean']>;
  deactivated_not?: Maybe<Scalars['Boolean']>;
  deactivated_in?: Maybe<Array<Scalars['Boolean']>>;
  deactivated_not_in?: Maybe<Array<Scalars['Boolean']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  reserveRegistry?: Maybe<Scalars['Bytes']>;
  reserveRegistry_not?: Maybe<Scalars['Bytes']>;
  reserveRegistry_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveRegistry_not_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveRegistry_contains?: Maybe<Scalars['Bytes']>;
  reserveRegistry_not_contains?: Maybe<Scalars['Bytes']>;
  prizeStrategy?: Maybe<Scalars['String']>;
  prizeStrategy_not?: Maybe<Scalars['String']>;
  prizeStrategy_gt?: Maybe<Scalars['String']>;
  prizeStrategy_lt?: Maybe<Scalars['String']>;
  prizeStrategy_gte?: Maybe<Scalars['String']>;
  prizeStrategy_lte?: Maybe<Scalars['String']>;
  prizeStrategy_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_not_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_contains?: Maybe<Scalars['String']>;
  prizeStrategy_not_contains?: Maybe<Scalars['String']>;
  prizeStrategy_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_ends_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_ends_with?: Maybe<Scalars['String']>;
  prizePoolType?: Maybe<PrizePoolType>;
  prizePoolType_not?: Maybe<PrizePoolType>;
  compoundPrizePool?: Maybe<Scalars['String']>;
  compoundPrizePool_not?: Maybe<Scalars['String']>;
  compoundPrizePool_gt?: Maybe<Scalars['String']>;
  compoundPrizePool_lt?: Maybe<Scalars['String']>;
  compoundPrizePool_gte?: Maybe<Scalars['String']>;
  compoundPrizePool_lte?: Maybe<Scalars['String']>;
  compoundPrizePool_in?: Maybe<Array<Scalars['String']>>;
  compoundPrizePool_not_in?: Maybe<Array<Scalars['String']>>;
  compoundPrizePool_contains?: Maybe<Scalars['String']>;
  compoundPrizePool_not_contains?: Maybe<Scalars['String']>;
  compoundPrizePool_starts_with?: Maybe<Scalars['String']>;
  compoundPrizePool_not_starts_with?: Maybe<Scalars['String']>;
  compoundPrizePool_ends_with?: Maybe<Scalars['String']>;
  compoundPrizePool_not_ends_with?: Maybe<Scalars['String']>;
  stakePrizePool?: Maybe<Scalars['String']>;
  stakePrizePool_not?: Maybe<Scalars['String']>;
  stakePrizePool_gt?: Maybe<Scalars['String']>;
  stakePrizePool_lt?: Maybe<Scalars['String']>;
  stakePrizePool_gte?: Maybe<Scalars['String']>;
  stakePrizePool_lte?: Maybe<Scalars['String']>;
  stakePrizePool_in?: Maybe<Array<Scalars['String']>>;
  stakePrizePool_not_in?: Maybe<Array<Scalars['String']>>;
  stakePrizePool_contains?: Maybe<Scalars['String']>;
  stakePrizePool_not_contains?: Maybe<Scalars['String']>;
  stakePrizePool_starts_with?: Maybe<Scalars['String']>;
  stakePrizePool_not_starts_with?: Maybe<Scalars['String']>;
  stakePrizePool_ends_with?: Maybe<Scalars['String']>;
  stakePrizePool_not_ends_with?: Maybe<Scalars['String']>;
  yieldSourcePrizePool?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_not?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_gt?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_lt?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_gte?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_lte?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_in?: Maybe<Array<Scalars['String']>>;
  yieldSourcePrizePool_not_in?: Maybe<Array<Scalars['String']>>;
  yieldSourcePrizePool_contains?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_not_contains?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_starts_with?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_not_starts_with?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_ends_with?: Maybe<Scalars['String']>;
  yieldSourcePrizePool_not_ends_with?: Maybe<Scalars['String']>;
  reserveFeeControlledToken?: Maybe<Scalars['Bytes']>;
  reserveFeeControlledToken_not?: Maybe<Scalars['Bytes']>;
  reserveFeeControlledToken_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveFeeControlledToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveFeeControlledToken_contains?: Maybe<Scalars['Bytes']>;
  reserveFeeControlledToken_not_contains?: Maybe<Scalars['Bytes']>;
  underlyingCollateralToken?: Maybe<Scalars['Bytes']>;
  underlyingCollateralToken_not?: Maybe<Scalars['Bytes']>;
  underlyingCollateralToken_in?: Maybe<Array<Scalars['Bytes']>>;
  underlyingCollateralToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  underlyingCollateralToken_contains?: Maybe<Scalars['Bytes']>;
  underlyingCollateralToken_not_contains?: Maybe<Scalars['Bytes']>;
  underlyingCollateralDecimals?: Maybe<Scalars['BigInt']>;
  underlyingCollateralDecimals_not?: Maybe<Scalars['BigInt']>;
  underlyingCollateralDecimals_gt?: Maybe<Scalars['BigInt']>;
  underlyingCollateralDecimals_lt?: Maybe<Scalars['BigInt']>;
  underlyingCollateralDecimals_gte?: Maybe<Scalars['BigInt']>;
  underlyingCollateralDecimals_lte?: Maybe<Scalars['BigInt']>;
  underlyingCollateralDecimals_in?: Maybe<Array<Scalars['BigInt']>>;
  underlyingCollateralDecimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  underlyingCollateralName?: Maybe<Scalars['String']>;
  underlyingCollateralName_not?: Maybe<Scalars['String']>;
  underlyingCollateralName_gt?: Maybe<Scalars['String']>;
  underlyingCollateralName_lt?: Maybe<Scalars['String']>;
  underlyingCollateralName_gte?: Maybe<Scalars['String']>;
  underlyingCollateralName_lte?: Maybe<Scalars['String']>;
  underlyingCollateralName_in?: Maybe<Array<Scalars['String']>>;
  underlyingCollateralName_not_in?: Maybe<Array<Scalars['String']>>;
  underlyingCollateralName_contains?: Maybe<Scalars['String']>;
  underlyingCollateralName_not_contains?: Maybe<Scalars['String']>;
  underlyingCollateralName_starts_with?: Maybe<Scalars['String']>;
  underlyingCollateralName_not_starts_with?: Maybe<Scalars['String']>;
  underlyingCollateralName_ends_with?: Maybe<Scalars['String']>;
  underlyingCollateralName_not_ends_with?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_not?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_gt?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_lt?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_gte?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_lte?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_in?: Maybe<Array<Scalars['String']>>;
  underlyingCollateralSymbol_not_in?: Maybe<Array<Scalars['String']>>;
  underlyingCollateralSymbol_contains?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_not_contains?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_starts_with?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_not_starts_with?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_ends_with?: Maybe<Scalars['String']>;
  underlyingCollateralSymbol_not_ends_with?: Maybe<Scalars['String']>;
  maxExitFeeMantissa?: Maybe<Scalars['BigInt']>;
  maxExitFeeMantissa_not?: Maybe<Scalars['BigInt']>;
  maxExitFeeMantissa_gt?: Maybe<Scalars['BigInt']>;
  maxExitFeeMantissa_lt?: Maybe<Scalars['BigInt']>;
  maxExitFeeMantissa_gte?: Maybe<Scalars['BigInt']>;
  maxExitFeeMantissa_lte?: Maybe<Scalars['BigInt']>;
  maxExitFeeMantissa_in?: Maybe<Array<Scalars['BigInt']>>;
  maxExitFeeMantissa_not_in?: Maybe<Array<Scalars['BigInt']>>;
  maxTimelockDuration?: Maybe<Scalars['BigInt']>;
  maxTimelockDuration_not?: Maybe<Scalars['BigInt']>;
  maxTimelockDuration_gt?: Maybe<Scalars['BigInt']>;
  maxTimelockDuration_lt?: Maybe<Scalars['BigInt']>;
  maxTimelockDuration_gte?: Maybe<Scalars['BigInt']>;
  maxTimelockDuration_lte?: Maybe<Scalars['BigInt']>;
  maxTimelockDuration_in?: Maybe<Array<Scalars['BigInt']>>;
  maxTimelockDuration_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timelockTotalSupply?: Maybe<Scalars['BigInt']>;
  timelockTotalSupply_not?: Maybe<Scalars['BigInt']>;
  timelockTotalSupply_gt?: Maybe<Scalars['BigInt']>;
  timelockTotalSupply_lt?: Maybe<Scalars['BigInt']>;
  timelockTotalSupply_gte?: Maybe<Scalars['BigInt']>;
  timelockTotalSupply_lte?: Maybe<Scalars['BigInt']>;
  timelockTotalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  timelockTotalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityCap?: Maybe<Scalars['BigInt']>;
  liquidityCap_not?: Maybe<Scalars['BigInt']>;
  liquidityCap_gt?: Maybe<Scalars['BigInt']>;
  liquidityCap_lt?: Maybe<Scalars['BigInt']>;
  liquidityCap_gte?: Maybe<Scalars['BigInt']>;
  liquidityCap_lte?: Maybe<Scalars['BigInt']>;
  liquidityCap_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityCap_not_in?: Maybe<Array<Scalars['BigInt']>>;
  cumulativePrizeGross?: Maybe<Scalars['BigInt']>;
  cumulativePrizeGross_not?: Maybe<Scalars['BigInt']>;
  cumulativePrizeGross_gt?: Maybe<Scalars['BigInt']>;
  cumulativePrizeGross_lt?: Maybe<Scalars['BigInt']>;
  cumulativePrizeGross_gte?: Maybe<Scalars['BigInt']>;
  cumulativePrizeGross_lte?: Maybe<Scalars['BigInt']>;
  cumulativePrizeGross_in?: Maybe<Array<Scalars['BigInt']>>;
  cumulativePrizeGross_not_in?: Maybe<Array<Scalars['BigInt']>>;
  cumulativePrizeReserveFee?: Maybe<Scalars['BigInt']>;
  cumulativePrizeReserveFee_not?: Maybe<Scalars['BigInt']>;
  cumulativePrizeReserveFee_gt?: Maybe<Scalars['BigInt']>;
  cumulativePrizeReserveFee_lt?: Maybe<Scalars['BigInt']>;
  cumulativePrizeReserveFee_gte?: Maybe<Scalars['BigInt']>;
  cumulativePrizeReserveFee_lte?: Maybe<Scalars['BigInt']>;
  cumulativePrizeReserveFee_in?: Maybe<Array<Scalars['BigInt']>>;
  cumulativePrizeReserveFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  cumulativePrizeNet?: Maybe<Scalars['BigInt']>;
  cumulativePrizeNet_not?: Maybe<Scalars['BigInt']>;
  cumulativePrizeNet_gt?: Maybe<Scalars['BigInt']>;
  cumulativePrizeNet_lt?: Maybe<Scalars['BigInt']>;
  cumulativePrizeNet_gte?: Maybe<Scalars['BigInt']>;
  cumulativePrizeNet_lte?: Maybe<Scalars['BigInt']>;
  cumulativePrizeNet_in?: Maybe<Array<Scalars['BigInt']>>;
  cumulativePrizeNet_not_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrizeId?: Maybe<Scalars['BigInt']>;
  currentPrizeId_not?: Maybe<Scalars['BigInt']>;
  currentPrizeId_gt?: Maybe<Scalars['BigInt']>;
  currentPrizeId_lt?: Maybe<Scalars['BigInt']>;
  currentPrizeId_gte?: Maybe<Scalars['BigInt']>;
  currentPrizeId_lte?: Maybe<Scalars['BigInt']>;
  currentPrizeId_in?: Maybe<Array<Scalars['BigInt']>>;
  currentPrizeId_not_in?: Maybe<Array<Scalars['BigInt']>>;
  currentState?: Maybe<PrizePoolState>;
  currentState_not?: Maybe<PrizePoolState>;
};

export enum PrizePool_OrderBy {
  Id = 'id',
  Deactivated = 'deactivated',
  Owner = 'owner',
  ReserveRegistry = 'reserveRegistry',
  PrizeStrategy = 'prizeStrategy',
  PrizePoolType = 'prizePoolType',
  CompoundPrizePool = 'compoundPrizePool',
  StakePrizePool = 'stakePrizePool',
  YieldSourcePrizePool = 'yieldSourcePrizePool',
  ReserveFeeControlledToken = 'reserveFeeControlledToken',
  SablierStream = 'sablierStream',
  UnderlyingCollateralToken = 'underlyingCollateralToken',
  UnderlyingCollateralDecimals = 'underlyingCollateralDecimals',
  UnderlyingCollateralName = 'underlyingCollateralName',
  UnderlyingCollateralSymbol = 'underlyingCollateralSymbol',
  MaxExitFeeMantissa = 'maxExitFeeMantissa',
  MaxTimelockDuration = 'maxTimelockDuration',
  TimelockTotalSupply = 'timelockTotalSupply',
  LiquidityCap = 'liquidityCap',
  CumulativePrizeGross = 'cumulativePrizeGross',
  CumulativePrizeReserveFee = 'cumulativePrizeReserveFee',
  CumulativePrizeNet = 'cumulativePrizeNet',
  CurrentPrizeId = 'currentPrizeId',
  CurrentState = 'currentState',
  Prizes = 'prizes',
  TokenCreditRates = 'tokenCreditRates',
  TokenCreditBalances = 'tokenCreditBalances',
  PrizePoolAccounts = 'prizePoolAccounts',
  ControlledTokens = 'controlledTokens'
}

export type PrizeStrategy = {
  __typename?: 'PrizeStrategy';
  id: Scalars['ID'];
  singleRandomWinner?: Maybe<SingleRandomWinnerPrizeStrategy>;
  multipleWinners?: Maybe<MultipleWinnersPrizeStrategy>;
};

export type PrizeStrategy_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  singleRandomWinner?: Maybe<Scalars['String']>;
  singleRandomWinner_not?: Maybe<Scalars['String']>;
  singleRandomWinner_gt?: Maybe<Scalars['String']>;
  singleRandomWinner_lt?: Maybe<Scalars['String']>;
  singleRandomWinner_gte?: Maybe<Scalars['String']>;
  singleRandomWinner_lte?: Maybe<Scalars['String']>;
  singleRandomWinner_in?: Maybe<Array<Scalars['String']>>;
  singleRandomWinner_not_in?: Maybe<Array<Scalars['String']>>;
  singleRandomWinner_contains?: Maybe<Scalars['String']>;
  singleRandomWinner_not_contains?: Maybe<Scalars['String']>;
  singleRandomWinner_starts_with?: Maybe<Scalars['String']>;
  singleRandomWinner_not_starts_with?: Maybe<Scalars['String']>;
  singleRandomWinner_ends_with?: Maybe<Scalars['String']>;
  singleRandomWinner_not_ends_with?: Maybe<Scalars['String']>;
  multipleWinners?: Maybe<Scalars['String']>;
  multipleWinners_not?: Maybe<Scalars['String']>;
  multipleWinners_gt?: Maybe<Scalars['String']>;
  multipleWinners_lt?: Maybe<Scalars['String']>;
  multipleWinners_gte?: Maybe<Scalars['String']>;
  multipleWinners_lte?: Maybe<Scalars['String']>;
  multipleWinners_in?: Maybe<Array<Scalars['String']>>;
  multipleWinners_not_in?: Maybe<Array<Scalars['String']>>;
  multipleWinners_contains?: Maybe<Scalars['String']>;
  multipleWinners_not_contains?: Maybe<Scalars['String']>;
  multipleWinners_starts_with?: Maybe<Scalars['String']>;
  multipleWinners_not_starts_with?: Maybe<Scalars['String']>;
  multipleWinners_ends_with?: Maybe<Scalars['String']>;
  multipleWinners_not_ends_with?: Maybe<Scalars['String']>;
};

export enum PrizeStrategy_OrderBy {
  Id = 'id',
  SingleRandomWinner = 'singleRandomWinner',
  MultipleWinners = 'multipleWinners'
}

export type Prize_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  prizePool?: Maybe<Scalars['String']>;
  prizePool_not?: Maybe<Scalars['String']>;
  prizePool_gt?: Maybe<Scalars['String']>;
  prizePool_lt?: Maybe<Scalars['String']>;
  prizePool_gte?: Maybe<Scalars['String']>;
  prizePool_lte?: Maybe<Scalars['String']>;
  prizePool_in?: Maybe<Array<Scalars['String']>>;
  prizePool_not_in?: Maybe<Array<Scalars['String']>>;
  prizePool_contains?: Maybe<Scalars['String']>;
  prizePool_not_contains?: Maybe<Scalars['String']>;
  prizePool_starts_with?: Maybe<Scalars['String']>;
  prizePool_not_starts_with?: Maybe<Scalars['String']>;
  prizePool_ends_with?: Maybe<Scalars['String']>;
  prizePool_not_ends_with?: Maybe<Scalars['String']>;
  awardStartOperator?: Maybe<Scalars['Bytes']>;
  awardStartOperator_not?: Maybe<Scalars['Bytes']>;
  awardStartOperator_in?: Maybe<Array<Scalars['Bytes']>>;
  awardStartOperator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  awardStartOperator_contains?: Maybe<Scalars['Bytes']>;
  awardStartOperator_not_contains?: Maybe<Scalars['Bytes']>;
  awardedOperator?: Maybe<Scalars['Bytes']>;
  awardedOperator_not?: Maybe<Scalars['Bytes']>;
  awardedOperator_in?: Maybe<Array<Scalars['Bytes']>>;
  awardedOperator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  awardedOperator_contains?: Maybe<Scalars['Bytes']>;
  awardedOperator_not_contains?: Maybe<Scalars['Bytes']>;
  prizePeriodStartedTimestamp?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedTimestamp_not?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedTimestamp_gt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedTimestamp_lt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedTimestamp_gte?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedTimestamp_lte?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodStartedTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  lockBlock?: Maybe<Scalars['BigInt']>;
  lockBlock_not?: Maybe<Scalars['BigInt']>;
  lockBlock_gt?: Maybe<Scalars['BigInt']>;
  lockBlock_lt?: Maybe<Scalars['BigInt']>;
  lockBlock_gte?: Maybe<Scalars['BigInt']>;
  lockBlock_lte?: Maybe<Scalars['BigInt']>;
  lockBlock_in?: Maybe<Array<Scalars['BigInt']>>;
  lockBlock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  awardedBlock?: Maybe<Scalars['BigInt']>;
  awardedBlock_not?: Maybe<Scalars['BigInt']>;
  awardedBlock_gt?: Maybe<Scalars['BigInt']>;
  awardedBlock_lt?: Maybe<Scalars['BigInt']>;
  awardedBlock_gte?: Maybe<Scalars['BigInt']>;
  awardedBlock_lte?: Maybe<Scalars['BigInt']>;
  awardedBlock_in?: Maybe<Array<Scalars['BigInt']>>;
  awardedBlock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  awardedTimestamp?: Maybe<Scalars['BigInt']>;
  awardedTimestamp_not?: Maybe<Scalars['BigInt']>;
  awardedTimestamp_gt?: Maybe<Scalars['BigInt']>;
  awardedTimestamp_lt?: Maybe<Scalars['BigInt']>;
  awardedTimestamp_gte?: Maybe<Scalars['BigInt']>;
  awardedTimestamp_lte?: Maybe<Scalars['BigInt']>;
  awardedTimestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  awardedTimestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  rngRequestId?: Maybe<Scalars['BigInt']>;
  rngRequestId_not?: Maybe<Scalars['BigInt']>;
  rngRequestId_gt?: Maybe<Scalars['BigInt']>;
  rngRequestId_lt?: Maybe<Scalars['BigInt']>;
  rngRequestId_gte?: Maybe<Scalars['BigInt']>;
  rngRequestId_lte?: Maybe<Scalars['BigInt']>;
  rngRequestId_in?: Maybe<Array<Scalars['BigInt']>>;
  rngRequestId_not_in?: Maybe<Array<Scalars['BigInt']>>;
  randomNumber?: Maybe<Scalars['BigInt']>;
  randomNumber_not?: Maybe<Scalars['BigInt']>;
  randomNumber_gt?: Maybe<Scalars['BigInt']>;
  randomNumber_lt?: Maybe<Scalars['BigInt']>;
  randomNumber_gte?: Maybe<Scalars['BigInt']>;
  randomNumber_lte?: Maybe<Scalars['BigInt']>;
  randomNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  randomNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  numberOfSubWinners?: Maybe<Scalars['BigInt']>;
  numberOfSubWinners_not?: Maybe<Scalars['BigInt']>;
  numberOfSubWinners_gt?: Maybe<Scalars['BigInt']>;
  numberOfSubWinners_lt?: Maybe<Scalars['BigInt']>;
  numberOfSubWinners_gte?: Maybe<Scalars['BigInt']>;
  numberOfSubWinners_lte?: Maybe<Scalars['BigInt']>;
  numberOfSubWinners_in?: Maybe<Array<Scalars['BigInt']>>;
  numberOfSubWinners_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalTicketSupply?: Maybe<Scalars['BigInt']>;
  totalTicketSupply_not?: Maybe<Scalars['BigInt']>;
  totalTicketSupply_gt?: Maybe<Scalars['BigInt']>;
  totalTicketSupply_lt?: Maybe<Scalars['BigInt']>;
  totalTicketSupply_gte?: Maybe<Scalars['BigInt']>;
  totalTicketSupply_lte?: Maybe<Scalars['BigInt']>;
  totalTicketSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalTicketSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Prize_OrderBy {
  Id = 'id',
  PrizePool = 'prizePool',
  AwardStartOperator = 'awardStartOperator',
  AwardedOperator = 'awardedOperator',
  PrizePeriodStartedTimestamp = 'prizePeriodStartedTimestamp',
  LockBlock = 'lockBlock',
  AwardedBlock = 'awardedBlock',
  AwardedTimestamp = 'awardedTimestamp',
  RngRequestId = 'rngRequestId',
  RandomNumber = 'randomNumber',
  NumberOfSubWinners = 'numberOfSubWinners',
  TotalTicketSupply = 'totalTicketSupply',
  AwardedControlledTokens = 'awardedControlledTokens',
  AwardedExternalErc20Tokens = 'awardedExternalErc20Tokens',
  AwardedExternalErc721Nfts = 'awardedExternalErc721Nfts'
}

export type Query = {
  __typename?: 'Query';
  comptroller?: Maybe<Comptroller>;
  comptrollers: Array<Comptroller>;
  sablierStream?: Maybe<SablierStream>;
  sablierStreams: Array<SablierStream>;
  prizePool?: Maybe<PrizePool>;
  prizePools: Array<PrizePool>;
  compoundPrizePool?: Maybe<CompoundPrizePool>;
  compoundPrizePools: Array<CompoundPrizePool>;
  stakePrizePool?: Maybe<StakePrizePool>;
  stakePrizePools: Array<StakePrizePool>;
  yieldSourcePrizePool?: Maybe<YieldSourcePrizePool>;
  yieldSourcePrizePools: Array<YieldSourcePrizePool>;
  prizeStrategy?: Maybe<PrizeStrategy>;
  prizeStrategies: Array<PrizeStrategy>;
  singleRandomWinnerPrizeStrategy?: Maybe<SingleRandomWinnerPrizeStrategy>;
  singleRandomWinnerPrizeStrategies: Array<SingleRandomWinnerPrizeStrategy>;
  prize?: Maybe<Prize>;
  prizes: Array<Prize>;
  awardedControlledToken?: Maybe<AwardedControlledToken>;
  awardedControlledTokens: Array<AwardedControlledToken>;
  awardedExternalErc20Token?: Maybe<AwardedExternalErc20Token>;
  awardedExternalErc20Tokens: Array<AwardedExternalErc20Token>;
  awardedExternalErc721Nft?: Maybe<AwardedExternalErc721Nft>;
  awardedExternalErc721Nfts: Array<AwardedExternalErc721Nft>;
  controlledToken?: Maybe<ControlledToken>;
  controlledTokens: Array<ControlledToken>;
  controlledTokenBalance?: Maybe<ControlledTokenBalance>;
  controlledTokenBalances: Array<ControlledTokenBalance>;
  singleRandomWinnerExternalErc20Award?: Maybe<SingleRandomWinnerExternalErc20Award>;
  singleRandomWinnerExternalErc20Awards: Array<SingleRandomWinnerExternalErc20Award>;
  singleRandomWinnerExternalErc721Award?: Maybe<SingleRandomWinnerExternalErc721Award>;
  singleRandomWinnerExternalErc721Awards: Array<SingleRandomWinnerExternalErc721Award>;
  prizePoolAccount?: Maybe<PrizePoolAccount>;
  prizePoolAccounts: Array<PrizePoolAccount>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  creditRate?: Maybe<CreditRate>;
  creditRates: Array<CreditRate>;
  creditBalance?: Maybe<CreditBalance>;
  creditBalances: Array<CreditBalance>;
  dripTokenPlayer?: Maybe<DripTokenPlayer>;
  dripTokenPlayers: Array<DripTokenPlayer>;
  balanceDripPlayer?: Maybe<BalanceDripPlayer>;
  balanceDripPlayers: Array<BalanceDripPlayer>;
  balanceDrip?: Maybe<BalanceDrip>;
  balanceDrips: Array<BalanceDrip>;
  volumeDripPlayer?: Maybe<VolumeDripPlayer>;
  volumeDripPlayers: Array<VolumeDripPlayer>;
  volumeDripPeriod?: Maybe<VolumeDripPeriod>;
  volumeDripPeriods: Array<VolumeDripPeriod>;
  volumeDrip?: Maybe<VolumeDrip>;
  volumeDrips: Array<VolumeDrip>;
  multipleWinnersPrizeStrategy?: Maybe<MultipleWinnersPrizeStrategy>;
  multipleWinnersPrizeStrategies: Array<MultipleWinnersPrizeStrategy>;
  multipleWinnersExternalErc20Award?: Maybe<MultipleWinnersExternalErc20Award>;
  multipleWinnersExternalErc20Awards: Array<MultipleWinnersExternalErc20Award>;
  multipleWinnersExternalErc721Award?: Maybe<MultipleWinnersExternalErc721Award>;
  multipleWinnersExternalErc721Awards: Array<MultipleWinnersExternalErc721Award>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryComptrollerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryComptrollersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Comptroller_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Comptroller_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySablierStreamArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySablierStreamsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SablierStream_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SablierStream_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCompoundPrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCompoundPrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CompoundPrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CompoundPrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStakePrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStakePrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakePrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakePrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryYieldSourcePrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryYieldSourcePrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<YieldSourcePrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<YieldSourcePrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPrizeStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPrizeStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizeStrategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySingleRandomWinnerPrizeStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySingleRandomWinnerPrizeStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerPrizeStrategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerPrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPrizeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPrizesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAwardedControlledTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAwardedControlledTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAwardedExternalErc20TokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAwardedExternalErc20TokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedExternalErc20Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAwardedExternalErc721NftArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAwardedExternalErc721NftsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedExternalErc721Nft_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryControlledTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryControlledTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryControlledTokenBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryControlledTokenBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledTokenBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySingleRandomWinnerExternalErc20AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySingleRandomWinnerExternalErc20AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySingleRandomWinnerExternalErc721AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySingleRandomWinnerExternalErc721AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryPrizePoolAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryPrizePoolAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCreditRateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCreditRatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditRate_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCreditBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCreditBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDripTokenPlayerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDripTokenPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBalanceDripPlayerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBalanceDripPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDripPlayer_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBalanceDripArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBalanceDripsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDrip_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDrip_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVolumeDripPlayerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVolumeDripPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPlayer_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVolumeDripPeriodArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVolumeDripPeriodsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPeriod_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryVolumeDripArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryVolumeDripsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDrip_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDrip_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMultipleWinnersPrizeStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMultipleWinnersPrizeStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersPrizeStrategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersPrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMultipleWinnersExternalErc20AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMultipleWinnersExternalErc20AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryMultipleWinnersExternalErc721AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryMultipleWinnersExternalErc721AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type SablierStream = {
  __typename?: 'SablierStream';
  id: Scalars['ID'];
  prizePool: PrizePool;
};

export type SablierStream_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  prizePool?: Maybe<Scalars['String']>;
  prizePool_not?: Maybe<Scalars['String']>;
  prizePool_gt?: Maybe<Scalars['String']>;
  prizePool_lt?: Maybe<Scalars['String']>;
  prizePool_gte?: Maybe<Scalars['String']>;
  prizePool_lte?: Maybe<Scalars['String']>;
  prizePool_in?: Maybe<Array<Scalars['String']>>;
  prizePool_not_in?: Maybe<Array<Scalars['String']>>;
  prizePool_contains?: Maybe<Scalars['String']>;
  prizePool_not_contains?: Maybe<Scalars['String']>;
  prizePool_starts_with?: Maybe<Scalars['String']>;
  prizePool_not_starts_with?: Maybe<Scalars['String']>;
  prizePool_ends_with?: Maybe<Scalars['String']>;
  prizePool_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SablierStream_OrderBy {
  Id = 'id',
  PrizePool = 'prizePool'
}

export type SingleRandomWinnerExternalErc20Award = {
  __typename?: 'SingleRandomWinnerExternalErc20Award';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  prizeStrategy?: Maybe<SingleRandomWinnerPrizeStrategy>;
};

export type SingleRandomWinnerExternalErc20Award_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prizeStrategy?: Maybe<Scalars['String']>;
  prizeStrategy_not?: Maybe<Scalars['String']>;
  prizeStrategy_gt?: Maybe<Scalars['String']>;
  prizeStrategy_lt?: Maybe<Scalars['String']>;
  prizeStrategy_gte?: Maybe<Scalars['String']>;
  prizeStrategy_lte?: Maybe<Scalars['String']>;
  prizeStrategy_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_not_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_contains?: Maybe<Scalars['String']>;
  prizeStrategy_not_contains?: Maybe<Scalars['String']>;
  prizeStrategy_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_ends_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SingleRandomWinnerExternalErc20Award_OrderBy {
  Id = 'id',
  Address = 'address',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  PrizeStrategy = 'prizeStrategy'
}

export type SingleRandomWinnerExternalErc721Award = {
  __typename?: 'SingleRandomWinnerExternalErc721Award';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  tokenIds?: Maybe<Array<Scalars['BigInt']>>;
  prizeStrategy?: Maybe<SingleRandomWinnerPrizeStrategy>;
};

export type SingleRandomWinnerExternalErc721Award_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  tokenIds?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_not?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_contains?: Maybe<Array<Scalars['BigInt']>>;
  tokenIds_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  prizeStrategy?: Maybe<Scalars['String']>;
  prizeStrategy_not?: Maybe<Scalars['String']>;
  prizeStrategy_gt?: Maybe<Scalars['String']>;
  prizeStrategy_lt?: Maybe<Scalars['String']>;
  prizeStrategy_gte?: Maybe<Scalars['String']>;
  prizeStrategy_lte?: Maybe<Scalars['String']>;
  prizeStrategy_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_not_in?: Maybe<Array<Scalars['String']>>;
  prizeStrategy_contains?: Maybe<Scalars['String']>;
  prizeStrategy_not_contains?: Maybe<Scalars['String']>;
  prizeStrategy_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_starts_with?: Maybe<Scalars['String']>;
  prizeStrategy_ends_with?: Maybe<Scalars['String']>;
  prizeStrategy_not_ends_with?: Maybe<Scalars['String']>;
};

export enum SingleRandomWinnerExternalErc721Award_OrderBy {
  Id = 'id',
  Address = 'address',
  TokenIds = 'tokenIds',
  PrizeStrategy = 'prizeStrategy'
}

export type SingleRandomWinnerPrizeStrategy = {
  __typename?: 'SingleRandomWinnerPrizeStrategy';
  id: Scalars['ID'];
  owner?: Maybe<Scalars['Bytes']>;
  tokenListener?: Maybe<Comptroller>;
  prizePool?: Maybe<PrizePool>;
  rng?: Maybe<Scalars['Bytes']>;
  ticket?: Maybe<ControlledToken>;
  sponsorship?: Maybe<ControlledToken>;
  prizePeriodSeconds: Scalars['BigInt'];
  prizePeriodStartedAt: Scalars['BigInt'];
  prizePeriodEndAt: Scalars['BigInt'];
  externalErc20Awards: Array<SingleRandomWinnerExternalErc20Award>;
  externalErc721Awards: Array<SingleRandomWinnerExternalErc721Award>;
};


export type SingleRandomWinnerPrizeStrategyExternalErc20AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
};


export type SingleRandomWinnerPrizeStrategyExternalErc721AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
};

export type SingleRandomWinnerPrizeStrategy_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  tokenListener?: Maybe<Scalars['String']>;
  tokenListener_not?: Maybe<Scalars['String']>;
  tokenListener_gt?: Maybe<Scalars['String']>;
  tokenListener_lt?: Maybe<Scalars['String']>;
  tokenListener_gte?: Maybe<Scalars['String']>;
  tokenListener_lte?: Maybe<Scalars['String']>;
  tokenListener_in?: Maybe<Array<Scalars['String']>>;
  tokenListener_not_in?: Maybe<Array<Scalars['String']>>;
  tokenListener_contains?: Maybe<Scalars['String']>;
  tokenListener_not_contains?: Maybe<Scalars['String']>;
  tokenListener_starts_with?: Maybe<Scalars['String']>;
  tokenListener_not_starts_with?: Maybe<Scalars['String']>;
  tokenListener_ends_with?: Maybe<Scalars['String']>;
  tokenListener_not_ends_with?: Maybe<Scalars['String']>;
  prizePool?: Maybe<Scalars['String']>;
  prizePool_not?: Maybe<Scalars['String']>;
  prizePool_gt?: Maybe<Scalars['String']>;
  prizePool_lt?: Maybe<Scalars['String']>;
  prizePool_gte?: Maybe<Scalars['String']>;
  prizePool_lte?: Maybe<Scalars['String']>;
  prizePool_in?: Maybe<Array<Scalars['String']>>;
  prizePool_not_in?: Maybe<Array<Scalars['String']>>;
  prizePool_contains?: Maybe<Scalars['String']>;
  prizePool_not_contains?: Maybe<Scalars['String']>;
  prizePool_starts_with?: Maybe<Scalars['String']>;
  prizePool_not_starts_with?: Maybe<Scalars['String']>;
  prizePool_ends_with?: Maybe<Scalars['String']>;
  prizePool_not_ends_with?: Maybe<Scalars['String']>;
  rng?: Maybe<Scalars['Bytes']>;
  rng_not?: Maybe<Scalars['Bytes']>;
  rng_in?: Maybe<Array<Scalars['Bytes']>>;
  rng_not_in?: Maybe<Array<Scalars['Bytes']>>;
  rng_contains?: Maybe<Scalars['Bytes']>;
  rng_not_contains?: Maybe<Scalars['Bytes']>;
  ticket?: Maybe<Scalars['String']>;
  ticket_not?: Maybe<Scalars['String']>;
  ticket_gt?: Maybe<Scalars['String']>;
  ticket_lt?: Maybe<Scalars['String']>;
  ticket_gte?: Maybe<Scalars['String']>;
  ticket_lte?: Maybe<Scalars['String']>;
  ticket_in?: Maybe<Array<Scalars['String']>>;
  ticket_not_in?: Maybe<Array<Scalars['String']>>;
  ticket_contains?: Maybe<Scalars['String']>;
  ticket_not_contains?: Maybe<Scalars['String']>;
  ticket_starts_with?: Maybe<Scalars['String']>;
  ticket_not_starts_with?: Maybe<Scalars['String']>;
  ticket_ends_with?: Maybe<Scalars['String']>;
  ticket_not_ends_with?: Maybe<Scalars['String']>;
  sponsorship?: Maybe<Scalars['String']>;
  sponsorship_not?: Maybe<Scalars['String']>;
  sponsorship_gt?: Maybe<Scalars['String']>;
  sponsorship_lt?: Maybe<Scalars['String']>;
  sponsorship_gte?: Maybe<Scalars['String']>;
  sponsorship_lte?: Maybe<Scalars['String']>;
  sponsorship_in?: Maybe<Array<Scalars['String']>>;
  sponsorship_not_in?: Maybe<Array<Scalars['String']>>;
  sponsorship_contains?: Maybe<Scalars['String']>;
  sponsorship_not_contains?: Maybe<Scalars['String']>;
  sponsorship_starts_with?: Maybe<Scalars['String']>;
  sponsorship_not_starts_with?: Maybe<Scalars['String']>;
  sponsorship_ends_with?: Maybe<Scalars['String']>;
  sponsorship_not_ends_with?: Maybe<Scalars['String']>;
  prizePeriodSeconds?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_not?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_gt?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_lt?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_gte?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_lte?: Maybe<Scalars['BigInt']>;
  prizePeriodSeconds_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodSeconds_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodStartedAt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_not?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_gt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_lt?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_gte?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_lte?: Maybe<Scalars['BigInt']>;
  prizePeriodStartedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodStartedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodEndAt?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_not?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_gt?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_lt?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_gte?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_lte?: Maybe<Scalars['BigInt']>;
  prizePeriodEndAt_in?: Maybe<Array<Scalars['BigInt']>>;
  prizePeriodEndAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum SingleRandomWinnerPrizeStrategy_OrderBy {
  Id = 'id',
  Owner = 'owner',
  TokenListener = 'tokenListener',
  PrizePool = 'prizePool',
  Rng = 'rng',
  Ticket = 'ticket',
  Sponsorship = 'sponsorship',
  PrizePeriodSeconds = 'prizePeriodSeconds',
  PrizePeriodStartedAt = 'prizePeriodStartedAt',
  PrizePeriodEndAt = 'prizePeriodEndAt',
  ExternalErc20Awards = 'externalErc20Awards',
  ExternalErc721Awards = 'externalErc721Awards'
}

export type StakePrizePool = {
  __typename?: 'StakePrizePool';
  id: Scalars['ID'];
  stakeToken?: Maybe<Scalars['Bytes']>;
};

export type StakePrizePool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  stakeToken?: Maybe<Scalars['Bytes']>;
  stakeToken_not?: Maybe<Scalars['Bytes']>;
  stakeToken_in?: Maybe<Array<Scalars['Bytes']>>;
  stakeToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  stakeToken_contains?: Maybe<Scalars['Bytes']>;
  stakeToken_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum StakePrizePool_OrderBy {
  Id = 'id',
  StakeToken = 'stakeToken'
}

export type Subscription = {
  __typename?: 'Subscription';
  comptroller?: Maybe<Comptroller>;
  comptrollers: Array<Comptroller>;
  sablierStream?: Maybe<SablierStream>;
  sablierStreams: Array<SablierStream>;
  prizePool?: Maybe<PrizePool>;
  prizePools: Array<PrizePool>;
  compoundPrizePool?: Maybe<CompoundPrizePool>;
  compoundPrizePools: Array<CompoundPrizePool>;
  stakePrizePool?: Maybe<StakePrizePool>;
  stakePrizePools: Array<StakePrizePool>;
  yieldSourcePrizePool?: Maybe<YieldSourcePrizePool>;
  yieldSourcePrizePools: Array<YieldSourcePrizePool>;
  prizeStrategy?: Maybe<PrizeStrategy>;
  prizeStrategies: Array<PrizeStrategy>;
  singleRandomWinnerPrizeStrategy?: Maybe<SingleRandomWinnerPrizeStrategy>;
  singleRandomWinnerPrizeStrategies: Array<SingleRandomWinnerPrizeStrategy>;
  prize?: Maybe<Prize>;
  prizes: Array<Prize>;
  awardedControlledToken?: Maybe<AwardedControlledToken>;
  awardedControlledTokens: Array<AwardedControlledToken>;
  awardedExternalErc20Token?: Maybe<AwardedExternalErc20Token>;
  awardedExternalErc20Tokens: Array<AwardedExternalErc20Token>;
  awardedExternalErc721Nft?: Maybe<AwardedExternalErc721Nft>;
  awardedExternalErc721Nfts: Array<AwardedExternalErc721Nft>;
  controlledToken?: Maybe<ControlledToken>;
  controlledTokens: Array<ControlledToken>;
  controlledTokenBalance?: Maybe<ControlledTokenBalance>;
  controlledTokenBalances: Array<ControlledTokenBalance>;
  singleRandomWinnerExternalErc20Award?: Maybe<SingleRandomWinnerExternalErc20Award>;
  singleRandomWinnerExternalErc20Awards: Array<SingleRandomWinnerExternalErc20Award>;
  singleRandomWinnerExternalErc721Award?: Maybe<SingleRandomWinnerExternalErc721Award>;
  singleRandomWinnerExternalErc721Awards: Array<SingleRandomWinnerExternalErc721Award>;
  prizePoolAccount?: Maybe<PrizePoolAccount>;
  prizePoolAccounts: Array<PrizePoolAccount>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  creditRate?: Maybe<CreditRate>;
  creditRates: Array<CreditRate>;
  creditBalance?: Maybe<CreditBalance>;
  creditBalances: Array<CreditBalance>;
  dripTokenPlayer?: Maybe<DripTokenPlayer>;
  dripTokenPlayers: Array<DripTokenPlayer>;
  balanceDripPlayer?: Maybe<BalanceDripPlayer>;
  balanceDripPlayers: Array<BalanceDripPlayer>;
  balanceDrip?: Maybe<BalanceDrip>;
  balanceDrips: Array<BalanceDrip>;
  volumeDripPlayer?: Maybe<VolumeDripPlayer>;
  volumeDripPlayers: Array<VolumeDripPlayer>;
  volumeDripPeriod?: Maybe<VolumeDripPeriod>;
  volumeDripPeriods: Array<VolumeDripPeriod>;
  volumeDrip?: Maybe<VolumeDrip>;
  volumeDrips: Array<VolumeDrip>;
  multipleWinnersPrizeStrategy?: Maybe<MultipleWinnersPrizeStrategy>;
  multipleWinnersPrizeStrategies: Array<MultipleWinnersPrizeStrategy>;
  multipleWinnersExternalErc20Award?: Maybe<MultipleWinnersExternalErc20Award>;
  multipleWinnersExternalErc20Awards: Array<MultipleWinnersExternalErc20Award>;
  multipleWinnersExternalErc721Award?: Maybe<MultipleWinnersExternalErc721Award>;
  multipleWinnersExternalErc721Awards: Array<MultipleWinnersExternalErc721Award>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionComptrollerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionComptrollersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Comptroller_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Comptroller_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSablierStreamArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSablierStreamsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SablierStream_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SablierStream_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCompoundPrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCompoundPrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CompoundPrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CompoundPrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakePrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakePrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakePrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakePrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionYieldSourcePrizePoolArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionYieldSourcePrizePoolsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<YieldSourcePrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<YieldSourcePrizePool_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizeStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizeStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizeStrategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSingleRandomWinnerPrizeStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSingleRandomWinnerPrizeStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerPrizeStrategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerPrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAwardedControlledTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAwardedControlledTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAwardedExternalErc20TokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAwardedExternalErc20TokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedExternalErc20Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAwardedExternalErc721NftArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAwardedExternalErc721NftsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedExternalErc721Nft_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionControlledTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionControlledTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionControlledTokenBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionControlledTokenBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledTokenBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSingleRandomWinnerExternalErc20AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSingleRandomWinnerExternalErc20AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSingleRandomWinnerExternalErc721AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSingleRandomWinnerExternalErc721AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizePoolAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionPrizePoolAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAccountsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Account_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreditRateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreditRatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditRate_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreditBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreditBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreditBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreditBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDripTokenPlayerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDripTokenPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBalanceDripPlayerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBalanceDripPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDripPlayer_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBalanceDripArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBalanceDripsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDrip_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDrip_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVolumeDripPlayerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVolumeDripPlayersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPlayer_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVolumeDripPeriodArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVolumeDripPeriodsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPeriod_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionVolumeDripArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionVolumeDripsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDrip_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDrip_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultipleWinnersPrizeStrategyArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultipleWinnersPrizeStrategiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersPrizeStrategy_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersPrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultipleWinnersExternalErc20AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultipleWinnersExternalErc20AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultipleWinnersExternalErc721AwardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionMultipleWinnersExternalErc721AwardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type VolumeDrip = {
  __typename?: 'VolumeDrip';
  id: Scalars['ID'];
  comptroller: Comptroller;
  sourceAddress: Scalars['Bytes'];
  measureToken: Scalars['Bytes'];
  dripToken: Scalars['Bytes'];
  referral: Scalars['Boolean'];
  periodSeconds?: Maybe<Scalars['BigInt']>;
  dripAmount?: Maybe<Scalars['BigInt']>;
  periodCount?: Maybe<Scalars['BigInt']>;
  deposits: Array<VolumeDripPlayer>;
  periods: Array<VolumeDripPeriod>;
  deactivated: Scalars['Boolean'];
};


export type VolumeDripDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPlayer_Filter>;
};


export type VolumeDripPeriodsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPeriod_Filter>;
};

export type VolumeDripPeriod = {
  __typename?: 'VolumeDripPeriod';
  id: Scalars['ID'];
  volumeDrip: VolumeDrip;
  periodIndex: Scalars['BigInt'];
  totalSupply?: Maybe<Scalars['BigInt']>;
  dripAmount?: Maybe<Scalars['BigInt']>;
  endTime?: Maybe<Scalars['BigInt']>;
  isDripping: Scalars['Boolean'];
};

export type VolumeDripPeriod_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  volumeDrip?: Maybe<Scalars['String']>;
  volumeDrip_not?: Maybe<Scalars['String']>;
  volumeDrip_gt?: Maybe<Scalars['String']>;
  volumeDrip_lt?: Maybe<Scalars['String']>;
  volumeDrip_gte?: Maybe<Scalars['String']>;
  volumeDrip_lte?: Maybe<Scalars['String']>;
  volumeDrip_in?: Maybe<Array<Scalars['String']>>;
  volumeDrip_not_in?: Maybe<Array<Scalars['String']>>;
  volumeDrip_contains?: Maybe<Scalars['String']>;
  volumeDrip_not_contains?: Maybe<Scalars['String']>;
  volumeDrip_starts_with?: Maybe<Scalars['String']>;
  volumeDrip_not_starts_with?: Maybe<Scalars['String']>;
  volumeDrip_ends_with?: Maybe<Scalars['String']>;
  volumeDrip_not_ends_with?: Maybe<Scalars['String']>;
  periodIndex?: Maybe<Scalars['BigInt']>;
  periodIndex_not?: Maybe<Scalars['BigInt']>;
  periodIndex_gt?: Maybe<Scalars['BigInt']>;
  periodIndex_lt?: Maybe<Scalars['BigInt']>;
  periodIndex_gte?: Maybe<Scalars['BigInt']>;
  periodIndex_lte?: Maybe<Scalars['BigInt']>;
  periodIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  periodIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
  dripAmount?: Maybe<Scalars['BigInt']>;
  dripAmount_not?: Maybe<Scalars['BigInt']>;
  dripAmount_gt?: Maybe<Scalars['BigInt']>;
  dripAmount_lt?: Maybe<Scalars['BigInt']>;
  dripAmount_gte?: Maybe<Scalars['BigInt']>;
  dripAmount_lte?: Maybe<Scalars['BigInt']>;
  dripAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  dripAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  endTime?: Maybe<Scalars['BigInt']>;
  endTime_not?: Maybe<Scalars['BigInt']>;
  endTime_gt?: Maybe<Scalars['BigInt']>;
  endTime_lt?: Maybe<Scalars['BigInt']>;
  endTime_gte?: Maybe<Scalars['BigInt']>;
  endTime_lte?: Maybe<Scalars['BigInt']>;
  endTime_in?: Maybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  isDripping?: Maybe<Scalars['Boolean']>;
  isDripping_not?: Maybe<Scalars['Boolean']>;
  isDripping_in?: Maybe<Array<Scalars['Boolean']>>;
  isDripping_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum VolumeDripPeriod_OrderBy {
  Id = 'id',
  VolumeDrip = 'volumeDrip',
  PeriodIndex = 'periodIndex',
  TotalSupply = 'totalSupply',
  DripAmount = 'dripAmount',
  EndTime = 'endTime',
  IsDripping = 'isDripping'
}

export type VolumeDripPlayer = {
  __typename?: 'VolumeDripPlayer';
  id: Scalars['ID'];
  volumeDrip: VolumeDrip;
  address: Scalars['Bytes'];
  periodIndex: Scalars['BigInt'];
  balance: Scalars['BigInt'];
};

export type VolumeDripPlayer_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  volumeDrip?: Maybe<Scalars['String']>;
  volumeDrip_not?: Maybe<Scalars['String']>;
  volumeDrip_gt?: Maybe<Scalars['String']>;
  volumeDrip_lt?: Maybe<Scalars['String']>;
  volumeDrip_gte?: Maybe<Scalars['String']>;
  volumeDrip_lte?: Maybe<Scalars['String']>;
  volumeDrip_in?: Maybe<Array<Scalars['String']>>;
  volumeDrip_not_in?: Maybe<Array<Scalars['String']>>;
  volumeDrip_contains?: Maybe<Scalars['String']>;
  volumeDrip_not_contains?: Maybe<Scalars['String']>;
  volumeDrip_starts_with?: Maybe<Scalars['String']>;
  volumeDrip_not_starts_with?: Maybe<Scalars['String']>;
  volumeDrip_ends_with?: Maybe<Scalars['String']>;
  volumeDrip_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  periodIndex?: Maybe<Scalars['BigInt']>;
  periodIndex_not?: Maybe<Scalars['BigInt']>;
  periodIndex_gt?: Maybe<Scalars['BigInt']>;
  periodIndex_lt?: Maybe<Scalars['BigInt']>;
  periodIndex_gte?: Maybe<Scalars['BigInt']>;
  periodIndex_lte?: Maybe<Scalars['BigInt']>;
  periodIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  periodIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum VolumeDripPlayer_OrderBy {
  Id = 'id',
  VolumeDrip = 'volumeDrip',
  Address = 'address',
  PeriodIndex = 'periodIndex',
  Balance = 'balance'
}

export type VolumeDrip_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  comptroller?: Maybe<Scalars['String']>;
  comptroller_not?: Maybe<Scalars['String']>;
  comptroller_gt?: Maybe<Scalars['String']>;
  comptroller_lt?: Maybe<Scalars['String']>;
  comptroller_gte?: Maybe<Scalars['String']>;
  comptroller_lte?: Maybe<Scalars['String']>;
  comptroller_in?: Maybe<Array<Scalars['String']>>;
  comptroller_not_in?: Maybe<Array<Scalars['String']>>;
  comptroller_contains?: Maybe<Scalars['String']>;
  comptroller_not_contains?: Maybe<Scalars['String']>;
  comptroller_starts_with?: Maybe<Scalars['String']>;
  comptroller_not_starts_with?: Maybe<Scalars['String']>;
  comptroller_ends_with?: Maybe<Scalars['String']>;
  comptroller_not_ends_with?: Maybe<Scalars['String']>;
  sourceAddress?: Maybe<Scalars['Bytes']>;
  sourceAddress_not?: Maybe<Scalars['Bytes']>;
  sourceAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  sourceAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sourceAddress_contains?: Maybe<Scalars['Bytes']>;
  sourceAddress_not_contains?: Maybe<Scalars['Bytes']>;
  measureToken?: Maybe<Scalars['Bytes']>;
  measureToken_not?: Maybe<Scalars['Bytes']>;
  measureToken_in?: Maybe<Array<Scalars['Bytes']>>;
  measureToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  measureToken_contains?: Maybe<Scalars['Bytes']>;
  measureToken_not_contains?: Maybe<Scalars['Bytes']>;
  dripToken?: Maybe<Scalars['Bytes']>;
  dripToken_not?: Maybe<Scalars['Bytes']>;
  dripToken_in?: Maybe<Array<Scalars['Bytes']>>;
  dripToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
  dripToken_contains?: Maybe<Scalars['Bytes']>;
  dripToken_not_contains?: Maybe<Scalars['Bytes']>;
  referral?: Maybe<Scalars['Boolean']>;
  referral_not?: Maybe<Scalars['Boolean']>;
  referral_in?: Maybe<Array<Scalars['Boolean']>>;
  referral_not_in?: Maybe<Array<Scalars['Boolean']>>;
  periodSeconds?: Maybe<Scalars['BigInt']>;
  periodSeconds_not?: Maybe<Scalars['BigInt']>;
  periodSeconds_gt?: Maybe<Scalars['BigInt']>;
  periodSeconds_lt?: Maybe<Scalars['BigInt']>;
  periodSeconds_gte?: Maybe<Scalars['BigInt']>;
  periodSeconds_lte?: Maybe<Scalars['BigInt']>;
  periodSeconds_in?: Maybe<Array<Scalars['BigInt']>>;
  periodSeconds_not_in?: Maybe<Array<Scalars['BigInt']>>;
  dripAmount?: Maybe<Scalars['BigInt']>;
  dripAmount_not?: Maybe<Scalars['BigInt']>;
  dripAmount_gt?: Maybe<Scalars['BigInt']>;
  dripAmount_lt?: Maybe<Scalars['BigInt']>;
  dripAmount_gte?: Maybe<Scalars['BigInt']>;
  dripAmount_lte?: Maybe<Scalars['BigInt']>;
  dripAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  dripAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  periodCount?: Maybe<Scalars['BigInt']>;
  periodCount_not?: Maybe<Scalars['BigInt']>;
  periodCount_gt?: Maybe<Scalars['BigInt']>;
  periodCount_lt?: Maybe<Scalars['BigInt']>;
  periodCount_gte?: Maybe<Scalars['BigInt']>;
  periodCount_lte?: Maybe<Scalars['BigInt']>;
  periodCount_in?: Maybe<Array<Scalars['BigInt']>>;
  periodCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deactivated?: Maybe<Scalars['Boolean']>;
  deactivated_not?: Maybe<Scalars['Boolean']>;
  deactivated_in?: Maybe<Array<Scalars['Boolean']>>;
  deactivated_not_in?: Maybe<Array<Scalars['Boolean']>>;
};

export enum VolumeDrip_OrderBy {
  Id = 'id',
  Comptroller = 'comptroller',
  SourceAddress = 'sourceAddress',
  MeasureToken = 'measureToken',
  DripToken = 'dripToken',
  Referral = 'referral',
  PeriodSeconds = 'periodSeconds',
  DripAmount = 'dripAmount',
  PeriodCount = 'periodCount',
  Deposits = 'deposits',
  Periods = 'periods',
  Deactivated = 'deactivated'
}

export type YieldSourcePrizePool = {
  __typename?: 'YieldSourcePrizePool';
  id: Scalars['ID'];
  yieldSource?: Maybe<Scalars['Bytes']>;
};

export type YieldSourcePrizePool_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  yieldSource?: Maybe<Scalars['Bytes']>;
  yieldSource_not?: Maybe<Scalars['Bytes']>;
  yieldSource_in?: Maybe<Array<Scalars['Bytes']>>;
  yieldSource_not_in?: Maybe<Array<Scalars['Bytes']>>;
  yieldSource_contains?: Maybe<Scalars['Bytes']>;
  yieldSource_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum YieldSourcePrizePool_OrderBy {
  Id = 'id',
  YieldSource = 'yieldSource'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type _MetaQueryVariables = Exact<{
  block?: Maybe<Block_Height>;
}>;


export type _MetaQuery = (
  { __typename?: 'Query' }
  & { _meta?: Maybe<(
    { __typename?: '_Meta_' }
    & Pick<_Meta_, 'deployment' | 'hasIndexingErrors'>
    & { block: (
      { __typename?: '_Block_' }
      & Pick<_Block_, 'hash' | 'number'>
    ) }
  )> }
);

export type AccountQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<ControlledTokenBalance_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type AccountQuery = (
  { __typename?: 'Query' }
  & { account?: Maybe<(
    { __typename?: 'Account' }
    & Pick<Account, 'id'>
    & { prizePoolAccounts: Array<(
      { __typename?: 'PrizePoolAccount' }
      & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ) }
    )>, controlledTokenBalances?: Maybe<Array<(
      { __typename?: 'ControlledTokenBalance' }
      & Pick<ControlledTokenBalance, 'id' | 'balance'>
      & { account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ), controlledToken: (
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      ) }
    )>> }
  )> }
);

export type AccountsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<ControlledTokenBalance_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<Account_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<Account_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type AccountsQuery = (
  { __typename?: 'Query' }
  & { accounts: Array<(
    { __typename?: 'Account' }
    & Pick<Account, 'id'>
    & { prizePoolAccounts: Array<(
      { __typename?: 'PrizePoolAccount' }
      & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ) }
    )>, controlledTokenBalances?: Maybe<Array<(
      { __typename?: 'ControlledTokenBalance' }
      & Pick<ControlledTokenBalance, 'id' | 'balance'>
      & { account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ), controlledToken: (
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      ) }
    )>> }
  )> }
);

export type AwardedControlledTokenQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledTokenBalance_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedControlledToken_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc20Token_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<AwardedExternalErc721Nft_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type AwardedControlledTokenQuery = (
  { __typename?: 'Query' }
  & { awardedControlledToken?: Maybe<(
    { __typename?: 'AwardedControlledToken' }
    & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
    & { token: (
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    ), prize: (
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    ) }
  )> }
);

export type AwardedControlledTokensQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ControlledTokenBalance_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedControlledToken_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc20Token_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<AwardedExternalErc721Nft_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<AwardedControlledToken_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type AwardedControlledTokensQuery = (
  { __typename?: 'Query' }
  & { awardedControlledTokens: Array<(
    { __typename?: 'AwardedControlledToken' }
    & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
    & { token: (
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    ), prize: (
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    ) }
  )> }
);

export type AwardedExternalErc20TokenQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedExternalErc20Token_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc721Nft_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type AwardedExternalErc20TokenQuery = (
  { __typename?: 'Query' }
  & { awardedExternalErc20Token?: Maybe<(
    { __typename?: 'AwardedExternalErc20Token' }
    & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
    & { prize: (
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    ) }
  )> }
);

export type AwardedExternalErc20TokensQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedExternalErc20Token_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc721Nft_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<AwardedExternalErc20Token_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type AwardedExternalErc20TokensQuery = (
  { __typename?: 'Query' }
  & { awardedExternalErc20Tokens: Array<(
    { __typename?: 'AwardedExternalErc20Token' }
    & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
    & { prize: (
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    ) }
  )> }
);

export type AwardedExternalErc721NftQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedExternalErc20Token_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc721Nft_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type AwardedExternalErc721NftQuery = (
  { __typename?: 'Query' }
  & { awardedExternalErc721Nft?: Maybe<(
    { __typename?: 'AwardedExternalErc721Nft' }
    & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
    & { prize?: Maybe<(
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    )> }
  )> }
);

export type AwardedExternalErc721NftsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedExternalErc20Token_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc721Nft_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<AwardedExternalErc721Nft_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type AwardedExternalErc721NftsQuery = (
  { __typename?: 'Query' }
  & { awardedExternalErc721Nfts: Array<(
    { __typename?: 'AwardedExternalErc721Nft' }
    & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
    & { prize?: Maybe<(
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    )> }
  )> }
);

export type BalanceDripQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<BalanceDripPlayer_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type BalanceDripQuery = (
  { __typename?: 'Query' }
  & { balanceDrip?: Maybe<(
    { __typename?: 'BalanceDrip' }
    & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
    & { comptroller: (
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    ), players: Array<(
      { __typename?: 'BalanceDripPlayer' }
      & Pick<BalanceDripPlayer, 'id' | 'address'>
      & { balanceDrip: (
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      ) }
    )> }
  )> }
);

export type BalanceDripPlayerQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDripPlayer_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type BalanceDripPlayerQuery = (
  { __typename?: 'Query' }
  & { balanceDripPlayer?: Maybe<(
    { __typename?: 'BalanceDripPlayer' }
    & Pick<BalanceDripPlayer, 'id' | 'address'>
    & { balanceDrip: (
      { __typename?: 'BalanceDrip' }
      & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), players: Array<(
        { __typename?: 'BalanceDripPlayer' }
        & Pick<BalanceDripPlayer, 'id' | 'address'>
      )> }
    ) }
  )> }
);

export type BalanceDripPlayersQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BalanceDripPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDripPlayer_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type BalanceDripPlayersQuery = (
  { __typename?: 'Query' }
  & { balanceDripPlayers: Array<(
    { __typename?: 'BalanceDripPlayer' }
    & Pick<BalanceDripPlayer, 'id' | 'address'>
    & { balanceDrip: (
      { __typename?: 'BalanceDrip' }
      & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), players: Array<(
        { __typename?: 'BalanceDripPlayer' }
        & Pick<BalanceDripPlayer, 'id' | 'address'>
      )> }
    ) }
  )> }
);

export type BalanceDripsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<BalanceDripPlayer_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<BalanceDrip_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<BalanceDrip_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type BalanceDripsQuery = (
  { __typename?: 'Query' }
  & { balanceDrips: Array<(
    { __typename?: 'BalanceDrip' }
    & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
    & { comptroller: (
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    ), players: Array<(
      { __typename?: 'BalanceDripPlayer' }
      & Pick<BalanceDripPlayer, 'id' | 'address'>
      & { balanceDrip: (
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      ) }
    )> }
  )> }
);

export type CompoundPrizePoolQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type CompoundPrizePoolQuery = (
  { __typename?: 'Query' }
  & { compoundPrizePool?: Maybe<(
    { __typename?: 'CompoundPrizePool' }
    & Pick<CompoundPrizePool, 'id' | 'cToken'>
  )> }
);

export type CompoundPrizePoolsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CompoundPrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CompoundPrizePool_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type CompoundPrizePoolsQuery = (
  { __typename?: 'Query' }
  & { compoundPrizePools: Array<(
    { __typename?: 'CompoundPrizePool' }
    & Pick<CompoundPrizePool, 'id' | 'cToken'>
  )> }
);

export type ComptrollerQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDripPlayer_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<BalanceDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<BalanceDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<VolumeDripPlayer_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<VolumeDripPeriod_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<VolumeDrip_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<VolumeDrip_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type ComptrollerQuery = (
  { __typename?: 'Query' }
  & { comptroller?: Maybe<(
    { __typename?: 'Comptroller' }
    & Pick<Comptroller, 'id' | 'owner'>
    & { players: Array<(
      { __typename?: 'DripTokenPlayer' }
      & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ) }
    )>, balanceDrips: Array<(
      { __typename?: 'BalanceDrip' }
      & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), players: Array<(
        { __typename?: 'BalanceDripPlayer' }
        & Pick<BalanceDripPlayer, 'id' | 'address'>
      )> }
    )>, volumeDrips: Array<(
      { __typename?: 'VolumeDrip' }
      & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), deposits: Array<(
        { __typename?: 'VolumeDripPlayer' }
        & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      )>, periods: Array<(
        { __typename?: 'VolumeDripPeriod' }
        & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      )> }
    )> }
  )> }
);

export type ComptrollersQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDripPlayer_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDripPlayer_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<BalanceDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<BalanceDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<VolumeDripPlayer_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<VolumeDripPeriod_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<VolumeDrip_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<VolumeDrip_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<Comptroller_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<Comptroller_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type ComptrollersQuery = (
  { __typename?: 'Query' }
  & { comptrollers: Array<(
    { __typename?: 'Comptroller' }
    & Pick<Comptroller, 'id' | 'owner'>
    & { players: Array<(
      { __typename?: 'DripTokenPlayer' }
      & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ) }
    )>, balanceDrips: Array<(
      { __typename?: 'BalanceDrip' }
      & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), players: Array<(
        { __typename?: 'BalanceDripPlayer' }
        & Pick<BalanceDripPlayer, 'id' | 'address'>
      )> }
    )>, volumeDrips: Array<(
      { __typename?: 'VolumeDrip' }
      & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), deposits: Array<(
        { __typename?: 'VolumeDripPlayer' }
        & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      )>, periods: Array<(
        { __typename?: 'VolumeDripPeriod' }
        & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      )> }
    )> }
  )> }
);

export type ControlledTokenQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<ControlledTokenBalance_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type ControlledTokenQuery = (
  { __typename?: 'Query' }
  & { controlledToken?: Maybe<(
    { __typename?: 'ControlledToken' }
    & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
    & { controller?: Maybe<(
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    )>, balances: Array<(
      { __typename?: 'ControlledTokenBalance' }
      & Pick<ControlledTokenBalance, 'id' | 'balance'>
      & { account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ), controlledToken: (
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      ) }
    )> }
  )> }
);

export type ControlledTokenBalanceQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<ControlledTokenBalance_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<ControlledTokenBalance_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type ControlledTokenBalanceQuery = (
  { __typename?: 'Query' }
  & { controlledTokenBalance?: Maybe<(
    { __typename?: 'ControlledTokenBalance' }
    & Pick<ControlledTokenBalance, 'id' | 'balance'>
    & { account: (
      { __typename?: 'Account' }
      & Pick<Account, 'id'>
      & { prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokenBalances?: Maybe<Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )>> }
    ), controlledToken: (
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    ) }
  )> }
);

export type ControlledTokenBalancesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PrizePoolAccount_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<ControlledTokenBalance_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<ControlledTokenBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<ControlledTokenBalance_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type ControlledTokenBalancesQuery = (
  { __typename?: 'Query' }
  & { controlledTokenBalances: Array<(
    { __typename?: 'ControlledTokenBalance' }
    & Pick<ControlledTokenBalance, 'id' | 'balance'>
    & { account: (
      { __typename?: 'Account' }
      & Pick<Account, 'id'>
      & { prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokenBalances?: Maybe<Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )>> }
    ), controlledToken: (
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    ) }
  )> }
);

export type ControlledTokensQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<ControlledTokenBalance_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<ControlledToken_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<ControlledToken_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type ControlledTokensQuery = (
  { __typename?: 'Query' }
  & { controlledTokens: Array<(
    { __typename?: 'ControlledToken' }
    & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
    & { controller?: Maybe<(
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    )>, balances: Array<(
      { __typename?: 'ControlledTokenBalance' }
      & Pick<ControlledTokenBalance, 'id' | 'balance'>
      & { account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ), controlledToken: (
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      ) }
    )> }
  )> }
);

export type CreditBalanceQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type CreditBalanceQuery = (
  { __typename?: 'Query' }
  & { creditBalance?: Maybe<(
    { __typename?: 'CreditBalance' }
    & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ) }
  )> }
);

export type CreditBalancesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<CreditBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<CreditBalance_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type CreditBalancesQuery = (
  { __typename?: 'Query' }
  & { creditBalances: Array<(
    { __typename?: 'CreditBalance' }
    & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ) }
  )> }
);

export type CreditRateQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type CreditRateQuery = (
  { __typename?: 'Query' }
  & { creditRate?: Maybe<(
    { __typename?: 'CreditRate' }
    & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ) }
  )> }
);

export type CreditRatesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<CreditRate_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<CreditRate_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type CreditRatesQuery = (
  { __typename?: 'Query' }
  & { creditRates: Array<(
    { __typename?: 'CreditRate' }
    & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ) }
  )> }
);

export type DripTokenPlayerQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type DripTokenPlayerQuery = (
  { __typename?: 'Query' }
  & { dripTokenPlayer?: Maybe<(
    { __typename?: 'DripTokenPlayer' }
    & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
    & { comptroller: (
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    ) }
  )> }
);

export type DripTokenPlayersQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<DripTokenPlayer_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type DripTokenPlayersQuery = (
  { __typename?: 'Query' }
  & { dripTokenPlayers: Array<(
    { __typename?: 'DripTokenPlayer' }
    & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
    & { comptroller: (
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    ) }
  )> }
);

export type MultipleWinnersExternalErc20AwardQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type MultipleWinnersExternalErc20AwardQuery = (
  { __typename?: 'Query' }
  & { multipleWinnersExternalErc20Award?: Maybe<(
    { __typename?: 'MultipleWinnersExternalErc20Award' }
    & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'MultipleWinnersPrizeStrategy' }
      & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc20Award' }
        & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc721Award' }
        & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type MultipleWinnersExternalErc20AwardsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type MultipleWinnersExternalErc20AwardsQuery = (
  { __typename?: 'Query' }
  & { multipleWinnersExternalErc20Awards: Array<(
    { __typename?: 'MultipleWinnersExternalErc20Award' }
    & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'MultipleWinnersPrizeStrategy' }
      & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc20Award' }
        & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc721Award' }
        & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type MultipleWinnersExternalErc721AwardQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type MultipleWinnersExternalErc721AwardQuery = (
  { __typename?: 'Query' }
  & { multipleWinnersExternalErc721Award?: Maybe<(
    { __typename?: 'MultipleWinnersExternalErc721Award' }
    & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'MultipleWinnersPrizeStrategy' }
      & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc20Award' }
        & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc721Award' }
        & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type MultipleWinnersExternalErc721AwardsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type MultipleWinnersExternalErc721AwardsQuery = (
  { __typename?: 'Query' }
  & { multipleWinnersExternalErc721Awards: Array<(
    { __typename?: 'MultipleWinnersExternalErc721Award' }
    & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'MultipleWinnersPrizeStrategy' }
      & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc20Award' }
        & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc721Award' }
        & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type MultipleWinnersPrizeStrategiesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<ControlledTokenBalance_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<ControlledTokenBalance_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip8?: Maybe<Scalars['Int']>;
  first8?: Maybe<Scalars['Int']>;
  orderBy8?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection8?: Maybe<OrderDirection>;
  where8?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  skip9?: Maybe<Scalars['Int']>;
  first9?: Maybe<Scalars['Int']>;
  orderBy9?: Maybe<MultipleWinnersPrizeStrategy_OrderBy>;
  orderDirection9?: Maybe<OrderDirection>;
  where9?: Maybe<MultipleWinnersPrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type MultipleWinnersPrizeStrategiesQuery = (
  { __typename?: 'Query' }
  & { multipleWinnersPrizeStrategies: Array<(
    { __typename?: 'MultipleWinnersPrizeStrategy' }
    & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
    & { prizePool?: Maybe<(
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    )>, ticket?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, sponsorship?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, externalErc20Awards: Array<(
      { __typename?: 'MultipleWinnersExternalErc20Award' }
      & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'MultipleWinnersPrizeStrategy' }
        & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )>, externalErc721Awards: Array<(
      { __typename?: 'MultipleWinnersExternalErc721Award' }
      & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'MultipleWinnersPrizeStrategy' }
        & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )> }
  )> }
);

export type MultipleWinnersPrizeStrategyQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<ControlledTokenBalance_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<ControlledTokenBalance_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip8?: Maybe<Scalars['Int']>;
  first8?: Maybe<Scalars['Int']>;
  orderBy8?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection8?: Maybe<OrderDirection>;
  where8?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type MultipleWinnersPrizeStrategyQuery = (
  { __typename?: 'Query' }
  & { multipleWinnersPrizeStrategy?: Maybe<(
    { __typename?: 'MultipleWinnersPrizeStrategy' }
    & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
    & { prizePool?: Maybe<(
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    )>, ticket?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, sponsorship?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, externalErc20Awards: Array<(
      { __typename?: 'MultipleWinnersExternalErc20Award' }
      & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'MultipleWinnersPrizeStrategy' }
        & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )>, externalErc721Awards: Array<(
      { __typename?: 'MultipleWinnersExternalErc721Award' }
      & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'MultipleWinnersPrizeStrategy' }
        & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )> }
  )> }
);

export type PrizeQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<AwardedControlledToken_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<AwardedExternalErc20Token_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<AwardedExternalErc721Nft_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type PrizeQuery = (
  { __typename?: 'Query' }
  & { prize?: Maybe<(
    { __typename?: 'Prize' }
    & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ), awardedControlledTokens: Array<(
      { __typename?: 'AwardedControlledToken' }
      & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      & { token: (
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      ), prize: (
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      ) }
    )>, awardedExternalErc20Tokens: Array<(
      { __typename?: 'AwardedExternalErc20Token' }
      & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      & { prize: (
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      ) }
    )>, awardedExternalErc721Nfts: Array<(
      { __typename?: 'AwardedExternalErc721Nft' }
      & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      & { prize?: Maybe<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )> }
    )> }
  )> }
);

export type PrizePoolQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedExternalErc20Token_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc721Nft_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<Prize_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<Prize_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<CreditRate_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<CreditRate_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<CreditBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<CreditBalance_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<PrizePoolAccount_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<ControlledTokenBalance_Filter>;
  skip8?: Maybe<Scalars['Int']>;
  first8?: Maybe<Scalars['Int']>;
  orderBy8?: Maybe<ControlledToken_OrderBy>;
  orderDirection8?: Maybe<OrderDirection>;
  where8?: Maybe<ControlledToken_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type PrizePoolQuery = (
  { __typename?: 'Query' }
  & { prizePool?: Maybe<(
    { __typename?: 'PrizePool' }
    & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'PrizeStrategy' }
      & Pick<PrizeStrategy, 'id'>
      & { singleRandomWinner?: Maybe<(
        { __typename?: 'SingleRandomWinnerPrizeStrategy' }
        & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )>, multipleWinners?: Maybe<(
        { __typename?: 'MultipleWinnersPrizeStrategy' }
        & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )>, compoundPrizePool?: Maybe<(
      { __typename?: 'CompoundPrizePool' }
      & Pick<CompoundPrizePool, 'id' | 'cToken'>
    )>, stakePrizePool?: Maybe<(
      { __typename?: 'StakePrizePool' }
      & Pick<StakePrizePool, 'id' | 'stakeToken'>
    )>, yieldSourcePrizePool?: Maybe<(
      { __typename?: 'YieldSourcePrizePool' }
      & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
    )>, sablierStream?: Maybe<(
      { __typename?: 'SablierStream' }
      & Pick<SablierStream, 'id'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ) }
    )>, prizes: Array<(
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    )>, tokenCreditRates: Array<(
      { __typename?: 'CreditRate' }
      & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ) }
    )>, tokenCreditBalances: Array<(
      { __typename?: 'CreditBalance' }
      & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ) }
    )>, prizePoolAccounts: Array<(
      { __typename?: 'PrizePoolAccount' }
      & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ) }
    )>, controlledTokens: Array<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )> }
  )> }
);

export type PrizePoolAccountQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<PrizePoolAccount_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<ControlledTokenBalance_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type PrizePoolAccountQuery = (
  { __typename?: 'Query' }
  & { prizePoolAccount?: Maybe<(
    { __typename?: 'PrizePoolAccount' }
    & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ), account: (
      { __typename?: 'Account' }
      & Pick<Account, 'id'>
      & { prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokenBalances?: Maybe<Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )>> }
    ) }
  )> }
);

export type PrizePoolAccountsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<PrizePoolAccount_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<ControlledTokenBalance_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<PrizePoolAccount_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type PrizePoolAccountsQuery = (
  { __typename?: 'Query' }
  & { prizePoolAccounts: Array<(
    { __typename?: 'PrizePoolAccount' }
    & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ), account: (
      { __typename?: 'Account' }
      & Pick<Account, 'id'>
      & { prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokenBalances?: Maybe<Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )>> }
    ) }
  )> }
);

export type PrizePoolsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AwardedControlledToken_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<AwardedExternalErc20Token_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<AwardedExternalErc721Nft_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<Prize_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<Prize_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<CreditRate_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<CreditRate_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<CreditBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<CreditBalance_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<PrizePoolAccount_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<ControlledTokenBalance_Filter>;
  skip8?: Maybe<Scalars['Int']>;
  first8?: Maybe<Scalars['Int']>;
  orderBy8?: Maybe<ControlledToken_OrderBy>;
  orderDirection8?: Maybe<OrderDirection>;
  where8?: Maybe<ControlledToken_Filter>;
  skip9?: Maybe<Scalars['Int']>;
  first9?: Maybe<Scalars['Int']>;
  orderBy9?: Maybe<PrizePool_OrderBy>;
  orderDirection9?: Maybe<OrderDirection>;
  where9?: Maybe<PrizePool_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type PrizePoolsQuery = (
  { __typename?: 'Query' }
  & { prizePools: Array<(
    { __typename?: 'PrizePool' }
    & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'PrizeStrategy' }
      & Pick<PrizeStrategy, 'id'>
      & { singleRandomWinner?: Maybe<(
        { __typename?: 'SingleRandomWinnerPrizeStrategy' }
        & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )>, multipleWinners?: Maybe<(
        { __typename?: 'MultipleWinnersPrizeStrategy' }
        & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )>, compoundPrizePool?: Maybe<(
      { __typename?: 'CompoundPrizePool' }
      & Pick<CompoundPrizePool, 'id' | 'cToken'>
    )>, stakePrizePool?: Maybe<(
      { __typename?: 'StakePrizePool' }
      & Pick<StakePrizePool, 'id' | 'stakeToken'>
    )>, yieldSourcePrizePool?: Maybe<(
      { __typename?: 'YieldSourcePrizePool' }
      & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
    )>, sablierStream?: Maybe<(
      { __typename?: 'SablierStream' }
      & Pick<SablierStream, 'id'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ) }
    )>, prizes: Array<(
      { __typename?: 'Prize' }
      & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), awardedControlledTokens: Array<(
        { __typename?: 'AwardedControlledToken' }
        & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      )>, awardedExternalErc20Tokens: Array<(
        { __typename?: 'AwardedExternalErc20Token' }
        & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      )>, awardedExternalErc721Nfts: Array<(
        { __typename?: 'AwardedExternalErc721Nft' }
        & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      )> }
    )>, tokenCreditRates: Array<(
      { __typename?: 'CreditRate' }
      & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ) }
    )>, tokenCreditBalances: Array<(
      { __typename?: 'CreditBalance' }
      & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ) }
    )>, prizePoolAccounts: Array<(
      { __typename?: 'PrizePoolAccount' }
      & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      & { prizePool: (
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      ), account: (
        { __typename?: 'Account' }
        & Pick<Account, 'id'>
      ) }
    )>, controlledTokens: Array<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )> }
  )> }
);

export type PrizeStrategiesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<PrizeStrategy_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<PrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type PrizeStrategiesQuery = (
  { __typename?: 'Query' }
  & { prizeStrategies: Array<(
    { __typename?: 'PrizeStrategy' }
    & Pick<PrizeStrategy, 'id'>
    & { singleRandomWinner?: Maybe<(
      { __typename?: 'SingleRandomWinnerPrizeStrategy' }
      & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { tokenListener?: Maybe<(
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      )>, prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc20Award' }
        & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc721Award' }
        & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )>, multipleWinners?: Maybe<(
      { __typename?: 'MultipleWinnersPrizeStrategy' }
      & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc20Award' }
        & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc721Award' }
        & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type PrizeStrategyQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<MultipleWinnersExternalErc20Award_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<MultipleWinnersExternalErc20Award_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<MultipleWinnersExternalErc721Award_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<MultipleWinnersExternalErc721Award_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type PrizeStrategyQuery = (
  { __typename?: 'Query' }
  & { prizeStrategy?: Maybe<(
    { __typename?: 'PrizeStrategy' }
    & Pick<PrizeStrategy, 'id'>
    & { singleRandomWinner?: Maybe<(
      { __typename?: 'SingleRandomWinnerPrizeStrategy' }
      & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { tokenListener?: Maybe<(
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      )>, prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc20Award' }
        & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc721Award' }
        & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )>, multipleWinners?: Maybe<(
      { __typename?: 'MultipleWinnersPrizeStrategy' }
      & Pick<MultipleWinnersPrizeStrategy, 'id' | 'owner' | 'numberOfWinners' | 'splitExternalERC20Awards' | 'tokenListener' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc20Award' }
        & Pick<MultipleWinnersExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'MultipleWinnersExternalErc721Award' }
        & Pick<MultipleWinnersExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type PrizesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<AwardedControlledToken_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<AwardedControlledToken_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<AwardedExternalErc20Token_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<AwardedExternalErc20Token_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<AwardedExternalErc721Nft_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<AwardedExternalErc721Nft_Filter>;
  skip8?: Maybe<Scalars['Int']>;
  first8?: Maybe<Scalars['Int']>;
  orderBy8?: Maybe<Prize_OrderBy>;
  orderDirection8?: Maybe<OrderDirection>;
  where8?: Maybe<Prize_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type PrizesQuery = (
  { __typename?: 'Query' }
  & { prizes: Array<(
    { __typename?: 'Prize' }
    & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ), awardedControlledTokens: Array<(
      { __typename?: 'AwardedControlledToken' }
      & Pick<AwardedControlledToken, 'id' | 'winner' | 'amount'>
      & { token: (
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      ), prize: (
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      ) }
    )>, awardedExternalErc20Tokens: Array<(
      { __typename?: 'AwardedExternalErc20Token' }
      & Pick<AwardedExternalErc20Token, 'id' | 'address' | 'name' | 'symbol' | 'decimals' | 'balanceAwarded' | 'winner'>
      & { prize: (
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      ) }
    )>, awardedExternalErc721Nfts: Array<(
      { __typename?: 'AwardedExternalErc721Nft' }
      & Pick<AwardedExternalErc721Nft, 'id' | 'address' | 'tokenIds' | 'winner'>
      & { prize?: Maybe<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )> }
    )> }
  )> }
);

export type SablierStreamQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type SablierStreamQuery = (
  { __typename?: 'Query' }
  & { sablierStream?: Maybe<(
    { __typename?: 'SablierStream' }
    & Pick<SablierStream, 'id'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ) }
  )> }
);

export type SablierStreamsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Prize_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Prize_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<CreditRate_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<CreditRate_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<CreditBalance_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<CreditBalance_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<PrizePoolAccount_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<ControlledToken_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<ControlledToken_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<SablierStream_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<SablierStream_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type SablierStreamsQuery = (
  { __typename?: 'Query' }
  & { sablierStreams: Array<(
    { __typename?: 'SablierStream' }
    & Pick<SablierStream, 'id'>
    & { prizePool: (
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    ) }
  )> }
);

export type SingleRandomWinnerExternalErc20AwardQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type SingleRandomWinnerExternalErc20AwardQuery = (
  { __typename?: 'Query' }
  & { singleRandomWinnerExternalErc20Award?: Maybe<(
    { __typename?: 'SingleRandomWinnerExternalErc20Award' }
    & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'SingleRandomWinnerPrizeStrategy' }
      & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { tokenListener?: Maybe<(
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      )>, prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc20Award' }
        & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc721Award' }
        & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type SingleRandomWinnerExternalErc20AwardsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type SingleRandomWinnerExternalErc20AwardsQuery = (
  { __typename?: 'Query' }
  & { singleRandomWinnerExternalErc20Awards: Array<(
    { __typename?: 'SingleRandomWinnerExternalErc20Award' }
    & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'SingleRandomWinnerPrizeStrategy' }
      & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { tokenListener?: Maybe<(
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      )>, prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc20Award' }
        & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc721Award' }
        & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type SingleRandomWinnerExternalErc721AwardQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type SingleRandomWinnerExternalErc721AwardQuery = (
  { __typename?: 'Query' }
  & { singleRandomWinnerExternalErc721Award?: Maybe<(
    { __typename?: 'SingleRandomWinnerExternalErc721Award' }
    & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'SingleRandomWinnerPrizeStrategy' }
      & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { tokenListener?: Maybe<(
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      )>, prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc20Award' }
        & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc721Award' }
        & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type SingleRandomWinnerExternalErc721AwardsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type SingleRandomWinnerExternalErc721AwardsQuery = (
  { __typename?: 'Query' }
  & { singleRandomWinnerExternalErc721Awards: Array<(
    { __typename?: 'SingleRandomWinnerExternalErc721Award' }
    & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
    & { prizeStrategy?: Maybe<(
      { __typename?: 'SingleRandomWinnerPrizeStrategy' }
      & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      & { tokenListener?: Maybe<(
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      )>, prizePool?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, ticket?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, sponsorship?: Maybe<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )>, externalErc20Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc20Award' }
        & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      )>, externalErc721Awards: Array<(
        { __typename?: 'SingleRandomWinnerExternalErc721Award' }
        & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      )> }
    )> }
  )> }
);

export type SingleRandomWinnerPrizeStrategiesQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<Prize_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<Prize_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<CreditRate_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<CreditRate_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<CreditBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<CreditBalance_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<PrizePoolAccount_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<ControlledToken_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<ControlledToken_Filter>;
  skip8?: Maybe<Scalars['Int']>;
  first8?: Maybe<Scalars['Int']>;
  orderBy8?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection8?: Maybe<OrderDirection>;
  where8?: Maybe<ControlledTokenBalance_Filter>;
  skip9?: Maybe<Scalars['Int']>;
  first9?: Maybe<Scalars['Int']>;
  orderBy9?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection9?: Maybe<OrderDirection>;
  where9?: Maybe<ControlledTokenBalance_Filter>;
  skip10?: Maybe<Scalars['Int']>;
  first10?: Maybe<Scalars['Int']>;
  orderBy10?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection10?: Maybe<OrderDirection>;
  where10?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip11?: Maybe<Scalars['Int']>;
  first11?: Maybe<Scalars['Int']>;
  orderBy11?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection11?: Maybe<OrderDirection>;
  where11?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  skip12?: Maybe<Scalars['Int']>;
  first12?: Maybe<Scalars['Int']>;
  orderBy12?: Maybe<SingleRandomWinnerPrizeStrategy_OrderBy>;
  orderDirection12?: Maybe<OrderDirection>;
  where12?: Maybe<SingleRandomWinnerPrizeStrategy_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type SingleRandomWinnerPrizeStrategiesQuery = (
  { __typename?: 'Query' }
  & { singleRandomWinnerPrizeStrategies: Array<(
    { __typename?: 'SingleRandomWinnerPrizeStrategy' }
    & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
    & { tokenListener?: Maybe<(
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    )>, prizePool?: Maybe<(
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    )>, ticket?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, sponsorship?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, externalErc20Awards: Array<(
      { __typename?: 'SingleRandomWinnerExternalErc20Award' }
      & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'SingleRandomWinnerPrizeStrategy' }
        & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )>, externalErc721Awards: Array<(
      { __typename?: 'SingleRandomWinnerExternalErc721Award' }
      & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'SingleRandomWinnerPrizeStrategy' }
        & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )> }
  )> }
);

export type SingleRandomWinnerPrizeStrategyQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<Prize_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<Prize_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<CreditRate_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<CreditRate_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<CreditBalance_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<CreditBalance_Filter>;
  skip6?: Maybe<Scalars['Int']>;
  first6?: Maybe<Scalars['Int']>;
  orderBy6?: Maybe<PrizePoolAccount_OrderBy>;
  orderDirection6?: Maybe<OrderDirection>;
  where6?: Maybe<PrizePoolAccount_Filter>;
  skip7?: Maybe<Scalars['Int']>;
  first7?: Maybe<Scalars['Int']>;
  orderBy7?: Maybe<ControlledToken_OrderBy>;
  orderDirection7?: Maybe<OrderDirection>;
  where7?: Maybe<ControlledToken_Filter>;
  skip8?: Maybe<Scalars['Int']>;
  first8?: Maybe<Scalars['Int']>;
  orderBy8?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection8?: Maybe<OrderDirection>;
  where8?: Maybe<ControlledTokenBalance_Filter>;
  skip9?: Maybe<Scalars['Int']>;
  first9?: Maybe<Scalars['Int']>;
  orderBy9?: Maybe<ControlledTokenBalance_OrderBy>;
  orderDirection9?: Maybe<OrderDirection>;
  where9?: Maybe<ControlledTokenBalance_Filter>;
  skip10?: Maybe<Scalars['Int']>;
  first10?: Maybe<Scalars['Int']>;
  orderBy10?: Maybe<SingleRandomWinnerExternalErc20Award_OrderBy>;
  orderDirection10?: Maybe<OrderDirection>;
  where10?: Maybe<SingleRandomWinnerExternalErc20Award_Filter>;
  skip11?: Maybe<Scalars['Int']>;
  first11?: Maybe<Scalars['Int']>;
  orderBy11?: Maybe<SingleRandomWinnerExternalErc721Award_OrderBy>;
  orderDirection11?: Maybe<OrderDirection>;
  where11?: Maybe<SingleRandomWinnerExternalErc721Award_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type SingleRandomWinnerPrizeStrategyQuery = (
  { __typename?: 'Query' }
  & { singleRandomWinnerPrizeStrategy?: Maybe<(
    { __typename?: 'SingleRandomWinnerPrizeStrategy' }
    & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
    & { tokenListener?: Maybe<(
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    )>, prizePool?: Maybe<(
      { __typename?: 'PrizePool' }
      & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'PrizeStrategy' }
        & Pick<PrizeStrategy, 'id'>
      )>, compoundPrizePool?: Maybe<(
        { __typename?: 'CompoundPrizePool' }
        & Pick<CompoundPrizePool, 'id' | 'cToken'>
      )>, stakePrizePool?: Maybe<(
        { __typename?: 'StakePrizePool' }
        & Pick<StakePrizePool, 'id' | 'stakeToken'>
      )>, yieldSourcePrizePool?: Maybe<(
        { __typename?: 'YieldSourcePrizePool' }
        & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
      )>, sablierStream?: Maybe<(
        { __typename?: 'SablierStream' }
        & Pick<SablierStream, 'id'>
      )>, prizes: Array<(
        { __typename?: 'Prize' }
        & Pick<Prize, 'id' | 'awardStartOperator' | 'awardedOperator' | 'prizePeriodStartedTimestamp' | 'lockBlock' | 'awardedBlock' | 'awardedTimestamp' | 'rngRequestId' | 'randomNumber' | 'numberOfSubWinners' | 'totalTicketSupply'>
      )>, tokenCreditRates: Array<(
        { __typename?: 'CreditRate' }
        & Pick<CreditRate, 'id' | 'creditLimitMantissa' | 'creditRateMantissa'>
      )>, tokenCreditBalances: Array<(
        { __typename?: 'CreditBalance' }
        & Pick<CreditBalance, 'id' | 'balance' | 'timestamp' | 'initialized'>
      )>, prizePoolAccounts: Array<(
        { __typename?: 'PrizePoolAccount' }
        & Pick<PrizePoolAccount, 'id' | 'timelockedBalance' | 'unlockTimestamp'>
      )>, controlledTokens: Array<(
        { __typename?: 'ControlledToken' }
        & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      )> }
    )>, ticket?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, sponsorship?: Maybe<(
      { __typename?: 'ControlledToken' }
      & Pick<ControlledToken, 'id' | 'name' | 'symbol' | 'decimals' | 'totalSupply' | 'numberOfHolders'>
      & { controller?: Maybe<(
        { __typename?: 'PrizePool' }
        & Pick<PrizePool, 'id' | 'deactivated' | 'owner' | 'reserveRegistry' | 'prizePoolType' | 'reserveFeeControlledToken' | 'underlyingCollateralToken' | 'underlyingCollateralDecimals' | 'underlyingCollateralName' | 'underlyingCollateralSymbol' | 'maxExitFeeMantissa' | 'maxTimelockDuration' | 'timelockTotalSupply' | 'liquidityCap' | 'cumulativePrizeGross' | 'cumulativePrizeReserveFee' | 'cumulativePrizeNet' | 'currentPrizeId' | 'currentState'>
      )>, balances: Array<(
        { __typename?: 'ControlledTokenBalance' }
        & Pick<ControlledTokenBalance, 'id' | 'balance'>
      )> }
    )>, externalErc20Awards: Array<(
      { __typename?: 'SingleRandomWinnerExternalErc20Award' }
      & Pick<SingleRandomWinnerExternalErc20Award, 'id' | 'address' | 'name' | 'symbol' | 'decimals'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'SingleRandomWinnerPrizeStrategy' }
        & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )>, externalErc721Awards: Array<(
      { __typename?: 'SingleRandomWinnerExternalErc721Award' }
      & Pick<SingleRandomWinnerExternalErc721Award, 'id' | 'address' | 'tokenIds'>
      & { prizeStrategy?: Maybe<(
        { __typename?: 'SingleRandomWinnerPrizeStrategy' }
        & Pick<SingleRandomWinnerPrizeStrategy, 'id' | 'owner' | 'rng' | 'prizePeriodSeconds' | 'prizePeriodStartedAt' | 'prizePeriodEndAt'>
      )> }
    )> }
  )> }
);

export type StakePrizePoolQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type StakePrizePoolQuery = (
  { __typename?: 'Query' }
  & { stakePrizePool?: Maybe<(
    { __typename?: 'StakePrizePool' }
    & Pick<StakePrizePool, 'id' | 'stakeToken'>
  )> }
);

export type StakePrizePoolsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakePrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakePrizePool_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type StakePrizePoolsQuery = (
  { __typename?: 'Query' }
  & { stakePrizePools: Array<(
    { __typename?: 'StakePrizePool' }
    & Pick<StakePrizePool, 'id' | 'stakeToken'>
  )> }
);

export type VolumeDripQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<VolumeDripPlayer_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<VolumeDripPeriod_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type VolumeDripQuery = (
  { __typename?: 'Query' }
  & { volumeDrip?: Maybe<(
    { __typename?: 'VolumeDrip' }
    & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
    & { comptroller: (
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    ), deposits: Array<(
      { __typename?: 'VolumeDripPlayer' }
      & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      & { volumeDrip: (
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      ) }
    )>, periods: Array<(
      { __typename?: 'VolumeDripPeriod' }
      & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      & { volumeDrip: (
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      ) }
    )> }
  )> }
);

export type VolumeDripPeriodQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<VolumeDripPeriod_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type VolumeDripPeriodQuery = (
  { __typename?: 'Query' }
  & { volumeDripPeriod?: Maybe<(
    { __typename?: 'VolumeDripPeriod' }
    & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
    & { volumeDrip: (
      { __typename?: 'VolumeDrip' }
      & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), deposits: Array<(
        { __typename?: 'VolumeDripPlayer' }
        & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      )>, periods: Array<(
        { __typename?: 'VolumeDripPeriod' }
        & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      )> }
    ) }
  )> }
);

export type VolumeDripPeriodsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<VolumeDripPeriod_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDripPeriod_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type VolumeDripPeriodsQuery = (
  { __typename?: 'Query' }
  & { volumeDripPeriods: Array<(
    { __typename?: 'VolumeDripPeriod' }
    & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
    & { volumeDrip: (
      { __typename?: 'VolumeDrip' }
      & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), deposits: Array<(
        { __typename?: 'VolumeDripPlayer' }
        & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      )>, periods: Array<(
        { __typename?: 'VolumeDripPeriod' }
        & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      )> }
    ) }
  )> }
);

export type VolumeDripPlayerQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<VolumeDripPeriod_Filter>;
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type VolumeDripPlayerQuery = (
  { __typename?: 'Query' }
  & { volumeDripPlayer?: Maybe<(
    { __typename?: 'VolumeDripPlayer' }
    & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
    & { volumeDrip: (
      { __typename?: 'VolumeDrip' }
      & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), deposits: Array<(
        { __typename?: 'VolumeDripPlayer' }
        & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      )>, periods: Array<(
        { __typename?: 'VolumeDripPeriod' }
        & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      )> }
    ) }
  )> }
);

export type VolumeDripPlayersQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VolumeDripPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<VolumeDripPeriod_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDripPlayer_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type VolumeDripPlayersQuery = (
  { __typename?: 'Query' }
  & { volumeDripPlayers: Array<(
    { __typename?: 'VolumeDripPlayer' }
    & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
    & { volumeDrip: (
      { __typename?: 'VolumeDrip' }
      & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      & { comptroller: (
        { __typename?: 'Comptroller' }
        & Pick<Comptroller, 'id' | 'owner'>
      ), deposits: Array<(
        { __typename?: 'VolumeDripPlayer' }
        & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      )>, periods: Array<(
        { __typename?: 'VolumeDripPeriod' }
        & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      )> }
    ) }
  )> }
);

export type VolumeDripsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DripTokenPlayer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DripTokenPlayer_Filter>;
  skip1?: Maybe<Scalars['Int']>;
  first1?: Maybe<Scalars['Int']>;
  orderBy1?: Maybe<BalanceDrip_OrderBy>;
  orderDirection1?: Maybe<OrderDirection>;
  where1?: Maybe<BalanceDrip_Filter>;
  skip2?: Maybe<Scalars['Int']>;
  first2?: Maybe<Scalars['Int']>;
  orderBy2?: Maybe<VolumeDrip_OrderBy>;
  orderDirection2?: Maybe<OrderDirection>;
  where2?: Maybe<VolumeDrip_Filter>;
  skip3?: Maybe<Scalars['Int']>;
  first3?: Maybe<Scalars['Int']>;
  orderBy3?: Maybe<VolumeDripPlayer_OrderBy>;
  orderDirection3?: Maybe<OrderDirection>;
  where3?: Maybe<VolumeDripPlayer_Filter>;
  skip4?: Maybe<Scalars['Int']>;
  first4?: Maybe<Scalars['Int']>;
  orderBy4?: Maybe<VolumeDripPeriod_OrderBy>;
  orderDirection4?: Maybe<OrderDirection>;
  where4?: Maybe<VolumeDripPeriod_Filter>;
  skip5?: Maybe<Scalars['Int']>;
  first5?: Maybe<Scalars['Int']>;
  orderBy5?: Maybe<VolumeDrip_OrderBy>;
  orderDirection5?: Maybe<OrderDirection>;
  where5?: Maybe<VolumeDrip_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type VolumeDripsQuery = (
  { __typename?: 'Query' }
  & { volumeDrips: Array<(
    { __typename?: 'VolumeDrip' }
    & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
    & { comptroller: (
      { __typename?: 'Comptroller' }
      & Pick<Comptroller, 'id' | 'owner'>
      & { players: Array<(
        { __typename?: 'DripTokenPlayer' }
        & Pick<DripTokenPlayer, 'id' | 'dripToken' | 'address' | 'balance'>
      )>, balanceDrips: Array<(
        { __typename?: 'BalanceDrip' }
        & Pick<BalanceDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'dripRatePerSecond' | 'exchangeRateMantissa' | 'timestamp' | 'deactivated'>
      )>, volumeDrips: Array<(
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      )> }
    ), deposits: Array<(
      { __typename?: 'VolumeDripPlayer' }
      & Pick<VolumeDripPlayer, 'id' | 'address' | 'periodIndex' | 'balance'>
      & { volumeDrip: (
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      ) }
    )>, periods: Array<(
      { __typename?: 'VolumeDripPeriod' }
      & Pick<VolumeDripPeriod, 'id' | 'periodIndex' | 'totalSupply' | 'dripAmount' | 'endTime' | 'isDripping'>
      & { volumeDrip: (
        { __typename?: 'VolumeDrip' }
        & Pick<VolumeDrip, 'id' | 'sourceAddress' | 'measureToken' | 'dripToken' | 'referral' | 'periodSeconds' | 'dripAmount' | 'periodCount' | 'deactivated'>
      ) }
    )> }
  )> }
);

export type YieldSourcePrizePoolQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;


export type YieldSourcePrizePoolQuery = (
  { __typename?: 'Query' }
  & { yieldSourcePrizePool?: Maybe<(
    { __typename?: 'YieldSourcePrizePool' }
    & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
  )> }
);

export type YieldSourcePrizePoolsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<YieldSourcePrizePool_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<YieldSourcePrizePool_Filter>;
  block?: Maybe<Block_Height>;
}>;


export type YieldSourcePrizePoolsQuery = (
  { __typename?: 'Query' }
  & { yieldSourcePrizePools: Array<(
    { __typename?: 'YieldSourcePrizePool' }
    & Pick<YieldSourcePrizePool, 'id' | 'yieldSource'>
  )> }
);


export const _MetaDocument = `
    query _meta($block: Block_height) {
  _meta(block: $block) {
    block {
      hash
      number
    }
    deployment
    hasIndexingErrors
  }
}
    `;
export const use_MetaQuery = <
      TData = _MetaQuery,
      TError = unknown
    >(
      variables?: _MetaQueryVariables, 
      options?: UseQueryOptions<_MetaQuery, TError, TData>
    ) => 
    useQuery<_MetaQuery, TError, TData>(
      ['_meta', variables],
      fetcher<_MetaQuery, _MetaQueryVariables>(_MetaDocument, variables),
      options
    );
export const AccountDocument = `
    query account($skip: Int, $first: Int, $orderBy: PrizePoolAccount_orderBy, $orderDirection: OrderDirection, $where: PrizePoolAccount_filter, $skip1: Int, $first1: Int, $orderBy1: ControlledTokenBalance_orderBy, $orderDirection1: OrderDirection, $where1: ControlledTokenBalance_filter, $id: ID!, $block: Block_height) {
  account(id: $id, block: $block) {
    id
    prizePoolAccounts(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      account {
        id
      }
      timelockedBalance
      unlockTimestamp
    }
    controlledTokenBalances(
      skip: $skip1
      first: $first1
      orderBy: $orderBy1
      orderDirection: $orderDirection1
      where: $where1
    ) {
      id
      account {
        id
      }
      controlledToken {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      balance
    }
  }
}
    `;
export const useAccountQuery = <
      TData = AccountQuery,
      TError = unknown
    >(
      variables: AccountQueryVariables, 
      options?: UseQueryOptions<AccountQuery, TError, TData>
    ) => 
    useQuery<AccountQuery, TError, TData>(
      ['account', variables],
      fetcher<AccountQuery, AccountQueryVariables>(AccountDocument, variables),
      options
    );
export const AccountsDocument = `
    query accounts($skip: Int, $first: Int, $orderBy: PrizePoolAccount_orderBy, $orderDirection: OrderDirection, $where: PrizePoolAccount_filter, $skip1: Int, $first1: Int, $orderBy1: ControlledTokenBalance_orderBy, $orderDirection1: OrderDirection, $where1: ControlledTokenBalance_filter, $skip2: Int, $first2: Int, $orderBy2: Account_orderBy, $orderDirection2: OrderDirection, $where2: Account_filter, $block: Block_height) {
  accounts(
    skip: $skip2
    first: $first2
    orderBy: $orderBy2
    orderDirection: $orderDirection2
    where: $where2
    block: $block
  ) {
    id
    prizePoolAccounts(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      account {
        id
      }
      timelockedBalance
      unlockTimestamp
    }
    controlledTokenBalances(
      skip: $skip1
      first: $first1
      orderBy: $orderBy1
      orderDirection: $orderDirection1
      where: $where1
    ) {
      id
      account {
        id
      }
      controlledToken {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      balance
    }
  }
}
    `;
export const useAccountsQuery = <
      TData = AccountsQuery,
      TError = unknown
    >(
      variables?: AccountsQueryVariables, 
      options?: UseQueryOptions<AccountsQuery, TError, TData>
    ) => 
    useQuery<AccountsQuery, TError, TData>(
      ['accounts', variables],
      fetcher<AccountsQuery, AccountsQueryVariables>(AccountsDocument, variables),
      options
    );
export const AwardedControlledTokenDocument = `
    query awardedControlledToken($skip: Int, $first: Int, $orderBy: ControlledTokenBalance_orderBy, $orderDirection: OrderDirection, $where: ControlledTokenBalance_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedControlledToken_orderBy, $orderDirection1: OrderDirection, $where1: AwardedControlledToken_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc20Token_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc20Token_filter, $skip3: Int, $first3: Int, $orderBy3: AwardedExternalErc721Nft_orderBy, $orderDirection3: OrderDirection, $where3: AwardedExternalErc721Nft_filter, $id: ID!, $block: Block_height) {
  awardedControlledToken(id: $id, block: $block) {
    id
    winner
    amount
    token {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        balance
      }
    }
    prize {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        address
        tokenIds
        winner
      }
    }
  }
}
    `;
export const useAwardedControlledTokenQuery = <
      TData = AwardedControlledTokenQuery,
      TError = unknown
    >(
      variables: AwardedControlledTokenQueryVariables, 
      options?: UseQueryOptions<AwardedControlledTokenQuery, TError, TData>
    ) => 
    useQuery<AwardedControlledTokenQuery, TError, TData>(
      ['awardedControlledToken', variables],
      fetcher<AwardedControlledTokenQuery, AwardedControlledTokenQueryVariables>(AwardedControlledTokenDocument, variables),
      options
    );
export const AwardedControlledTokensDocument = `
    query awardedControlledTokens($skip: Int, $first: Int, $orderBy: ControlledTokenBalance_orderBy, $orderDirection: OrderDirection, $where: ControlledTokenBalance_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedControlledToken_orderBy, $orderDirection1: OrderDirection, $where1: AwardedControlledToken_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc20Token_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc20Token_filter, $skip3: Int, $first3: Int, $orderBy3: AwardedExternalErc721Nft_orderBy, $orderDirection3: OrderDirection, $where3: AwardedExternalErc721Nft_filter, $skip4: Int, $first4: Int, $orderBy4: AwardedControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: AwardedControlledToken_filter, $block: Block_height) {
  awardedControlledTokens(
    skip: $skip4
    first: $first4
    orderBy: $orderBy4
    orderDirection: $orderDirection4
    where: $where4
    block: $block
  ) {
    id
    winner
    amount
    token {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        balance
      }
    }
    prize {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        address
        tokenIds
        winner
      }
    }
  }
}
    `;
export const useAwardedControlledTokensQuery = <
      TData = AwardedControlledTokensQuery,
      TError = unknown
    >(
      variables?: AwardedControlledTokensQueryVariables, 
      options?: UseQueryOptions<AwardedControlledTokensQuery, TError, TData>
    ) => 
    useQuery<AwardedControlledTokensQuery, TError, TData>(
      ['awardedControlledTokens', variables],
      fetcher<AwardedControlledTokensQuery, AwardedControlledTokensQueryVariables>(AwardedControlledTokensDocument, variables),
      options
    );
export const AwardedExternalErc20TokenDocument = `
    query awardedExternalErc20Token($skip: Int, $first: Int, $orderBy: AwardedControlledToken_orderBy, $orderDirection: OrderDirection, $where: AwardedControlledToken_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedExternalErc20Token_orderBy, $orderDirection1: OrderDirection, $where1: AwardedExternalErc20Token_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc721Nft_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc721Nft_filter, $id: ID!, $block: Block_height) {
  awardedExternalErc20Token(id: $id, block: $block) {
    id
    address
    name
    symbol
    decimals
    balanceAwarded
    prize {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        tokenIds
        winner
      }
    }
    winner
  }
}
    `;
export const useAwardedExternalErc20TokenQuery = <
      TData = AwardedExternalErc20TokenQuery,
      TError = unknown
    >(
      variables: AwardedExternalErc20TokenQueryVariables, 
      options?: UseQueryOptions<AwardedExternalErc20TokenQuery, TError, TData>
    ) => 
    useQuery<AwardedExternalErc20TokenQuery, TError, TData>(
      ['awardedExternalErc20Token', variables],
      fetcher<AwardedExternalErc20TokenQuery, AwardedExternalErc20TokenQueryVariables>(AwardedExternalErc20TokenDocument, variables),
      options
    );
export const AwardedExternalErc20TokensDocument = `
    query awardedExternalErc20Tokens($skip: Int, $first: Int, $orderBy: AwardedControlledToken_orderBy, $orderDirection: OrderDirection, $where: AwardedControlledToken_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedExternalErc20Token_orderBy, $orderDirection1: OrderDirection, $where1: AwardedExternalErc20Token_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc721Nft_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc721Nft_filter, $skip3: Int, $first3: Int, $orderBy3: AwardedExternalErc20Token_orderBy, $orderDirection3: OrderDirection, $where3: AwardedExternalErc20Token_filter, $block: Block_height) {
  awardedExternalErc20Tokens(
    skip: $skip3
    first: $first3
    orderBy: $orderBy3
    orderDirection: $orderDirection3
    where: $where3
    block: $block
  ) {
    id
    address
    name
    symbol
    decimals
    balanceAwarded
    prize {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        tokenIds
        winner
      }
    }
    winner
  }
}
    `;
export const useAwardedExternalErc20TokensQuery = <
      TData = AwardedExternalErc20TokensQuery,
      TError = unknown
    >(
      variables?: AwardedExternalErc20TokensQueryVariables, 
      options?: UseQueryOptions<AwardedExternalErc20TokensQuery, TError, TData>
    ) => 
    useQuery<AwardedExternalErc20TokensQuery, TError, TData>(
      ['awardedExternalErc20Tokens', variables],
      fetcher<AwardedExternalErc20TokensQuery, AwardedExternalErc20TokensQueryVariables>(AwardedExternalErc20TokensDocument, variables),
      options
    );
export const AwardedExternalErc721NftDocument = `
    query awardedExternalErc721Nft($skip: Int, $first: Int, $orderBy: AwardedControlledToken_orderBy, $orderDirection: OrderDirection, $where: AwardedControlledToken_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedExternalErc20Token_orderBy, $orderDirection1: OrderDirection, $where1: AwardedExternalErc20Token_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc721Nft_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc721Nft_filter, $id: ID!, $block: Block_height) {
  awardedExternalErc721Nft(id: $id, block: $block) {
    id
    address
    tokenIds
    prize {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        tokenIds
        winner
      }
    }
    winner
  }
}
    `;
export const useAwardedExternalErc721NftQuery = <
      TData = AwardedExternalErc721NftQuery,
      TError = unknown
    >(
      variables: AwardedExternalErc721NftQueryVariables, 
      options?: UseQueryOptions<AwardedExternalErc721NftQuery, TError, TData>
    ) => 
    useQuery<AwardedExternalErc721NftQuery, TError, TData>(
      ['awardedExternalErc721Nft', variables],
      fetcher<AwardedExternalErc721NftQuery, AwardedExternalErc721NftQueryVariables>(AwardedExternalErc721NftDocument, variables),
      options
    );
export const AwardedExternalErc721NftsDocument = `
    query awardedExternalErc721Nfts($skip: Int, $first: Int, $orderBy: AwardedControlledToken_orderBy, $orderDirection: OrderDirection, $where: AwardedControlledToken_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedExternalErc20Token_orderBy, $orderDirection1: OrderDirection, $where1: AwardedExternalErc20Token_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc721Nft_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc721Nft_filter, $skip3: Int, $first3: Int, $orderBy3: AwardedExternalErc721Nft_orderBy, $orderDirection3: OrderDirection, $where3: AwardedExternalErc721Nft_filter, $block: Block_height) {
  awardedExternalErc721Nfts(
    skip: $skip3
    first: $first3
    orderBy: $orderBy3
    orderDirection: $orderDirection3
    where: $where3
    block: $block
  ) {
    id
    address
    tokenIds
    prize {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        tokenIds
        winner
      }
    }
    winner
  }
}
    `;
export const useAwardedExternalErc721NftsQuery = <
      TData = AwardedExternalErc721NftsQuery,
      TError = unknown
    >(
      variables?: AwardedExternalErc721NftsQueryVariables, 
      options?: UseQueryOptions<AwardedExternalErc721NftsQuery, TError, TData>
    ) => 
    useQuery<AwardedExternalErc721NftsQuery, TError, TData>(
      ['awardedExternalErc721Nfts', variables],
      fetcher<AwardedExternalErc721NftsQuery, AwardedExternalErc721NftsQueryVariables>(AwardedExternalErc721NftsDocument, variables),
      options
    );
export const BalanceDripDocument = `
    query balanceDrip($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $skip3: Int, $first3: Int, $orderBy3: BalanceDripPlayer_orderBy, $orderDirection3: OrderDirection, $where3: BalanceDripPlayer_filter, $id: ID!, $block: Block_height) {
  balanceDrip(id: $id, block: $block) {
    id
    comptroller {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    sourceAddress
    measureToken
    dripToken
    dripRatePerSecond
    exchangeRateMantissa
    timestamp
    players(
      skip: $skip3
      first: $first3
      orderBy: $orderBy3
      orderDirection: $orderDirection3
      where: $where3
    ) {
      id
      balanceDrip {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      address
    }
    deactivated
  }
}
    `;
export const useBalanceDripQuery = <
      TData = BalanceDripQuery,
      TError = unknown
    >(
      variables: BalanceDripQueryVariables, 
      options?: UseQueryOptions<BalanceDripQuery, TError, TData>
    ) => 
    useQuery<BalanceDripQuery, TError, TData>(
      ['balanceDrip', variables],
      fetcher<BalanceDripQuery, BalanceDripQueryVariables>(BalanceDripDocument, variables),
      options
    );
export const BalanceDripPlayerDocument = `
    query balanceDripPlayer($skip: Int, $first: Int, $orderBy: BalanceDripPlayer_orderBy, $orderDirection: OrderDirection, $where: BalanceDripPlayer_filter, $id: ID!, $block: Block_height) {
  balanceDripPlayer(id: $id, block: $block) {
    id
    balanceDrip {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      dripRatePerSecond
      exchangeRateMantissa
      timestamp
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
      }
      deactivated
    }
    address
  }
}
    `;
export const useBalanceDripPlayerQuery = <
      TData = BalanceDripPlayerQuery,
      TError = unknown
    >(
      variables: BalanceDripPlayerQueryVariables, 
      options?: UseQueryOptions<BalanceDripPlayerQuery, TError, TData>
    ) => 
    useQuery<BalanceDripPlayerQuery, TError, TData>(
      ['balanceDripPlayer', variables],
      fetcher<BalanceDripPlayerQuery, BalanceDripPlayerQueryVariables>(BalanceDripPlayerDocument, variables),
      options
    );
export const BalanceDripPlayersDocument = `
    query balanceDripPlayers($skip: Int, $first: Int, $orderBy: BalanceDripPlayer_orderBy, $orderDirection: OrderDirection, $where: BalanceDripPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDripPlayer_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDripPlayer_filter, $block: Block_height) {
  balanceDripPlayers(
    skip: $skip1
    first: $first1
    orderBy: $orderBy1
    orderDirection: $orderDirection1
    where: $where1
    block: $block
  ) {
    id
    balanceDrip {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      dripRatePerSecond
      exchangeRateMantissa
      timestamp
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
      }
      deactivated
    }
    address
  }
}
    `;
export const useBalanceDripPlayersQuery = <
      TData = BalanceDripPlayersQuery,
      TError = unknown
    >(
      variables?: BalanceDripPlayersQueryVariables, 
      options?: UseQueryOptions<BalanceDripPlayersQuery, TError, TData>
    ) => 
    useQuery<BalanceDripPlayersQuery, TError, TData>(
      ['balanceDripPlayers', variables],
      fetcher<BalanceDripPlayersQuery, BalanceDripPlayersQueryVariables>(BalanceDripPlayersDocument, variables),
      options
    );
export const BalanceDripsDocument = `
    query balanceDrips($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $skip3: Int, $first3: Int, $orderBy3: BalanceDripPlayer_orderBy, $orderDirection3: OrderDirection, $where3: BalanceDripPlayer_filter, $skip4: Int, $first4: Int, $orderBy4: BalanceDrip_orderBy, $orderDirection4: OrderDirection, $where4: BalanceDrip_filter, $block: Block_height) {
  balanceDrips(
    skip: $skip4
    first: $first4
    orderBy: $orderBy4
    orderDirection: $orderDirection4
    where: $where4
    block: $block
  ) {
    id
    comptroller {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    sourceAddress
    measureToken
    dripToken
    dripRatePerSecond
    exchangeRateMantissa
    timestamp
    players(
      skip: $skip3
      first: $first3
      orderBy: $orderBy3
      orderDirection: $orderDirection3
      where: $where3
    ) {
      id
      balanceDrip {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      address
    }
    deactivated
  }
}
    `;
export const useBalanceDripsQuery = <
      TData = BalanceDripsQuery,
      TError = unknown
    >(
      variables?: BalanceDripsQueryVariables, 
      options?: UseQueryOptions<BalanceDripsQuery, TError, TData>
    ) => 
    useQuery<BalanceDripsQuery, TError, TData>(
      ['balanceDrips', variables],
      fetcher<BalanceDripsQuery, BalanceDripsQueryVariables>(BalanceDripsDocument, variables),
      options
    );
export const CompoundPrizePoolDocument = `
    query compoundPrizePool($id: ID!, $block: Block_height) {
  compoundPrizePool(id: $id, block: $block) {
    id
    cToken
  }
}
    `;
export const useCompoundPrizePoolQuery = <
      TData = CompoundPrizePoolQuery,
      TError = unknown
    >(
      variables: CompoundPrizePoolQueryVariables, 
      options?: UseQueryOptions<CompoundPrizePoolQuery, TError, TData>
    ) => 
    useQuery<CompoundPrizePoolQuery, TError, TData>(
      ['compoundPrizePool', variables],
      fetcher<CompoundPrizePoolQuery, CompoundPrizePoolQueryVariables>(CompoundPrizePoolDocument, variables),
      options
    );
export const CompoundPrizePoolsDocument = `
    query compoundPrizePools($skip: Int, $first: Int, $orderBy: CompoundPrizePool_orderBy, $orderDirection: OrderDirection, $where: CompoundPrizePool_filter, $block: Block_height) {
  compoundPrizePools(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    cToken
  }
}
    `;
export const useCompoundPrizePoolsQuery = <
      TData = CompoundPrizePoolsQuery,
      TError = unknown
    >(
      variables?: CompoundPrizePoolsQueryVariables, 
      options?: UseQueryOptions<CompoundPrizePoolsQuery, TError, TData>
    ) => 
    useQuery<CompoundPrizePoolsQuery, TError, TData>(
      ['compoundPrizePools', variables],
      fetcher<CompoundPrizePoolsQuery, CompoundPrizePoolsQueryVariables>(CompoundPrizePoolsDocument, variables),
      options
    );
export const ComptrollerDocument = `
    query comptroller($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDripPlayer_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDripPlayer_filter, $skip2: Int, $first2: Int, $orderBy2: BalanceDrip_orderBy, $orderDirection2: OrderDirection, $where2: BalanceDrip_filter, $skip3: Int, $first3: Int, $orderBy3: VolumeDripPlayer_orderBy, $orderDirection3: OrderDirection, $where3: VolumeDripPlayer_filter, $skip4: Int, $first4: Int, $orderBy4: VolumeDripPeriod_orderBy, $orderDirection4: OrderDirection, $where4: VolumeDripPeriod_filter, $skip5: Int, $first5: Int, $orderBy5: VolumeDrip_orderBy, $orderDirection5: OrderDirection, $where5: VolumeDrip_filter, $id: ID!, $block: Block_height) {
  comptroller(id: $id, block: $block) {
    id
    owner
    players(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
    ) {
      id
      comptroller {
        id
        owner
      }
      dripToken
      address
      balance
    }
    balanceDrips(
      skip: $skip2
      first: $first2
      orderBy: $orderBy2
      orderDirection: $orderDirection2
      where: $where2
    ) {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      dripRatePerSecond
      exchangeRateMantissa
      timestamp
      players(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
      }
      deactivated
    }
    volumeDrips(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      referral
      periodSeconds
      dripAmount
      periodCount
      deposits(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        address
        periodIndex
        balance
      }
      periods(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        periodIndex
        totalSupply
        dripAmount
        endTime
        isDripping
      }
      deactivated
    }
  }
}
    `;
export const useComptrollerQuery = <
      TData = ComptrollerQuery,
      TError = unknown
    >(
      variables: ComptrollerQueryVariables, 
      options?: UseQueryOptions<ComptrollerQuery, TError, TData>
    ) => 
    useQuery<ComptrollerQuery, TError, TData>(
      ['comptroller', variables],
      fetcher<ComptrollerQuery, ComptrollerQueryVariables>(ComptrollerDocument, variables),
      options
    );
export const ComptrollersDocument = `
    query comptrollers($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDripPlayer_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDripPlayer_filter, $skip2: Int, $first2: Int, $orderBy2: BalanceDrip_orderBy, $orderDirection2: OrderDirection, $where2: BalanceDrip_filter, $skip3: Int, $first3: Int, $orderBy3: VolumeDripPlayer_orderBy, $orderDirection3: OrderDirection, $where3: VolumeDripPlayer_filter, $skip4: Int, $first4: Int, $orderBy4: VolumeDripPeriod_orderBy, $orderDirection4: OrderDirection, $where4: VolumeDripPeriod_filter, $skip5: Int, $first5: Int, $orderBy5: VolumeDrip_orderBy, $orderDirection5: OrderDirection, $where5: VolumeDrip_filter, $skip6: Int, $first6: Int, $orderBy6: Comptroller_orderBy, $orderDirection6: OrderDirection, $where6: Comptroller_filter, $block: Block_height) {
  comptrollers(
    skip: $skip6
    first: $first6
    orderBy: $orderBy6
    orderDirection: $orderDirection6
    where: $where6
    block: $block
  ) {
    id
    owner
    players(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
    ) {
      id
      comptroller {
        id
        owner
      }
      dripToken
      address
      balance
    }
    balanceDrips(
      skip: $skip2
      first: $first2
      orderBy: $orderBy2
      orderDirection: $orderDirection2
      where: $where2
    ) {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      dripRatePerSecond
      exchangeRateMantissa
      timestamp
      players(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
      }
      deactivated
    }
    volumeDrips(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      referral
      periodSeconds
      dripAmount
      periodCount
      deposits(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        address
        periodIndex
        balance
      }
      periods(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        periodIndex
        totalSupply
        dripAmount
        endTime
        isDripping
      }
      deactivated
    }
  }
}
    `;
export const useComptrollersQuery = <
      TData = ComptrollersQuery,
      TError = unknown
    >(
      variables?: ComptrollersQueryVariables, 
      options?: UseQueryOptions<ComptrollersQuery, TError, TData>
    ) => 
    useQuery<ComptrollersQuery, TError, TData>(
      ['comptrollers', variables],
      fetcher<ComptrollersQuery, ComptrollersQueryVariables>(ComptrollersDocument, variables),
      options
    );
export const ControlledTokenDocument = `
    query controlledToken($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: ControlledTokenBalance_orderBy, $orderDirection5: OrderDirection, $where5: ControlledTokenBalance_filter, $id: ID!, $block: Block_height) {
  controlledToken(id: $id, block: $block) {
    id
    name
    symbol
    decimals
    controller {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    totalSupply
    numberOfHolders
    balances(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      account {
        id
      }
      controlledToken {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      balance
    }
  }
}
    `;
export const useControlledTokenQuery = <
      TData = ControlledTokenQuery,
      TError = unknown
    >(
      variables: ControlledTokenQueryVariables, 
      options?: UseQueryOptions<ControlledTokenQuery, TError, TData>
    ) => 
    useQuery<ControlledTokenQuery, TError, TData>(
      ['controlledToken', variables],
      fetcher<ControlledTokenQuery, ControlledTokenQueryVariables>(ControlledTokenDocument, variables),
      options
    );
export const ControlledTokenBalanceDocument = `
    query controlledTokenBalance($skip: Int, $first: Int, $orderBy: PrizePoolAccount_orderBy, $orderDirection: OrderDirection, $where: PrizePoolAccount_filter, $skip1: Int, $first1: Int, $orderBy1: ControlledTokenBalance_orderBy, $orderDirection1: OrderDirection, $where1: ControlledTokenBalance_filter, $skip2: Int, $first2: Int, $orderBy2: ControlledTokenBalance_orderBy, $orderDirection2: OrderDirection, $where2: ControlledTokenBalance_filter, $id: ID!, $block: Block_height) {
  controlledTokenBalance(id: $id, block: $block) {
    id
    account {
      id
      prizePoolAccounts(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokenBalances(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        balance
      }
    }
    controlledToken {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
      }
    }
    balance
  }
}
    `;
export const useControlledTokenBalanceQuery = <
      TData = ControlledTokenBalanceQuery,
      TError = unknown
    >(
      variables: ControlledTokenBalanceQueryVariables, 
      options?: UseQueryOptions<ControlledTokenBalanceQuery, TError, TData>
    ) => 
    useQuery<ControlledTokenBalanceQuery, TError, TData>(
      ['controlledTokenBalance', variables],
      fetcher<ControlledTokenBalanceQuery, ControlledTokenBalanceQueryVariables>(ControlledTokenBalanceDocument, variables),
      options
    );
export const ControlledTokenBalancesDocument = `
    query controlledTokenBalances($skip: Int, $first: Int, $orderBy: PrizePoolAccount_orderBy, $orderDirection: OrderDirection, $where: PrizePoolAccount_filter, $skip1: Int, $first1: Int, $orderBy1: ControlledTokenBalance_orderBy, $orderDirection1: OrderDirection, $where1: ControlledTokenBalance_filter, $skip2: Int, $first2: Int, $orderBy2: ControlledTokenBalance_orderBy, $orderDirection2: OrderDirection, $where2: ControlledTokenBalance_filter, $skip3: Int, $first3: Int, $orderBy3: ControlledTokenBalance_orderBy, $orderDirection3: OrderDirection, $where3: ControlledTokenBalance_filter, $block: Block_height) {
  controlledTokenBalances(
    skip: $skip3
    first: $first3
    orderBy: $orderBy3
    orderDirection: $orderDirection3
    where: $where3
    block: $block
  ) {
    id
    account {
      id
      prizePoolAccounts(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokenBalances(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        balance
      }
    }
    controlledToken {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
      }
    }
    balance
  }
}
    `;
export const useControlledTokenBalancesQuery = <
      TData = ControlledTokenBalancesQuery,
      TError = unknown
    >(
      variables?: ControlledTokenBalancesQueryVariables, 
      options?: UseQueryOptions<ControlledTokenBalancesQuery, TError, TData>
    ) => 
    useQuery<ControlledTokenBalancesQuery, TError, TData>(
      ['controlledTokenBalances', variables],
      fetcher<ControlledTokenBalancesQuery, ControlledTokenBalancesQueryVariables>(ControlledTokenBalancesDocument, variables),
      options
    );
export const ControlledTokensDocument = `
    query controlledTokens($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: ControlledTokenBalance_orderBy, $orderDirection5: OrderDirection, $where5: ControlledTokenBalance_filter, $skip6: Int, $first6: Int, $orderBy6: ControlledToken_orderBy, $orderDirection6: OrderDirection, $where6: ControlledToken_filter, $block: Block_height) {
  controlledTokens(
    skip: $skip6
    first: $first6
    orderBy: $orderBy6
    orderDirection: $orderDirection6
    where: $where6
    block: $block
  ) {
    id
    name
    symbol
    decimals
    controller {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    totalSupply
    numberOfHolders
    balances(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      account {
        id
      }
      controlledToken {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      balance
    }
  }
}
    `;
export const useControlledTokensQuery = <
      TData = ControlledTokensQuery,
      TError = unknown
    >(
      variables?: ControlledTokensQueryVariables, 
      options?: UseQueryOptions<ControlledTokensQuery, TError, TData>
    ) => 
    useQuery<ControlledTokensQuery, TError, TData>(
      ['controlledTokens', variables],
      fetcher<ControlledTokensQuery, ControlledTokensQueryVariables>(ControlledTokensDocument, variables),
      options
    );
export const CreditBalanceDocument = `
    query creditBalance($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $id: ID!, $block: Block_height) {
  creditBalance(id: $id, block: $block) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    balance
    timestamp
    initialized
  }
}
    `;
export const useCreditBalanceQuery = <
      TData = CreditBalanceQuery,
      TError = unknown
    >(
      variables: CreditBalanceQueryVariables, 
      options?: UseQueryOptions<CreditBalanceQuery, TError, TData>
    ) => 
    useQuery<CreditBalanceQuery, TError, TData>(
      ['creditBalance', variables],
      fetcher<CreditBalanceQuery, CreditBalanceQueryVariables>(CreditBalanceDocument, variables),
      options
    );
export const CreditBalancesDocument = `
    query creditBalances($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: CreditBalance_orderBy, $orderDirection5: OrderDirection, $where5: CreditBalance_filter, $block: Block_height) {
  creditBalances(
    skip: $skip5
    first: $first5
    orderBy: $orderBy5
    orderDirection: $orderDirection5
    where: $where5
    block: $block
  ) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    balance
    timestamp
    initialized
  }
}
    `;
export const useCreditBalancesQuery = <
      TData = CreditBalancesQuery,
      TError = unknown
    >(
      variables?: CreditBalancesQueryVariables, 
      options?: UseQueryOptions<CreditBalancesQuery, TError, TData>
    ) => 
    useQuery<CreditBalancesQuery, TError, TData>(
      ['creditBalances', variables],
      fetcher<CreditBalancesQuery, CreditBalancesQueryVariables>(CreditBalancesDocument, variables),
      options
    );
export const CreditRateDocument = `
    query creditRate($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $id: ID!, $block: Block_height) {
  creditRate(id: $id, block: $block) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    creditLimitMantissa
    creditRateMantissa
  }
}
    `;
export const useCreditRateQuery = <
      TData = CreditRateQuery,
      TError = unknown
    >(
      variables: CreditRateQueryVariables, 
      options?: UseQueryOptions<CreditRateQuery, TError, TData>
    ) => 
    useQuery<CreditRateQuery, TError, TData>(
      ['creditRate', variables],
      fetcher<CreditRateQuery, CreditRateQueryVariables>(CreditRateDocument, variables),
      options
    );
export const CreditRatesDocument = `
    query creditRates($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: CreditRate_orderBy, $orderDirection5: OrderDirection, $where5: CreditRate_filter, $block: Block_height) {
  creditRates(
    skip: $skip5
    first: $first5
    orderBy: $orderBy5
    orderDirection: $orderDirection5
    where: $where5
    block: $block
  ) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    creditLimitMantissa
    creditRateMantissa
  }
}
    `;
export const useCreditRatesQuery = <
      TData = CreditRatesQuery,
      TError = unknown
    >(
      variables?: CreditRatesQueryVariables, 
      options?: UseQueryOptions<CreditRatesQuery, TError, TData>
    ) => 
    useQuery<CreditRatesQuery, TError, TData>(
      ['creditRates', variables],
      fetcher<CreditRatesQuery, CreditRatesQueryVariables>(CreditRatesDocument, variables),
      options
    );
export const DripTokenPlayerDocument = `
    query dripTokenPlayer($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $id: ID!, $block: Block_height) {
  dripTokenPlayer(id: $id, block: $block) {
    id
    comptroller {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    dripToken
    address
    balance
  }
}
    `;
export const useDripTokenPlayerQuery = <
      TData = DripTokenPlayerQuery,
      TError = unknown
    >(
      variables: DripTokenPlayerQueryVariables, 
      options?: UseQueryOptions<DripTokenPlayerQuery, TError, TData>
    ) => 
    useQuery<DripTokenPlayerQuery, TError, TData>(
      ['dripTokenPlayer', variables],
      fetcher<DripTokenPlayerQuery, DripTokenPlayerQueryVariables>(DripTokenPlayerDocument, variables),
      options
    );
export const DripTokenPlayersDocument = `
    query dripTokenPlayers($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $skip3: Int, $first3: Int, $orderBy3: DripTokenPlayer_orderBy, $orderDirection3: OrderDirection, $where3: DripTokenPlayer_filter, $block: Block_height) {
  dripTokenPlayers(
    skip: $skip3
    first: $first3
    orderBy: $orderBy3
    orderDirection: $orderDirection3
    where: $where3
    block: $block
  ) {
    id
    comptroller {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    dripToken
    address
    balance
  }
}
    `;
export const useDripTokenPlayersQuery = <
      TData = DripTokenPlayersQuery,
      TError = unknown
    >(
      variables?: DripTokenPlayersQueryVariables, 
      options?: UseQueryOptions<DripTokenPlayersQuery, TError, TData>
    ) => 
    useQuery<DripTokenPlayersQuery, TError, TData>(
      ['dripTokenPlayers', variables],
      fetcher<DripTokenPlayersQuery, DripTokenPlayersQueryVariables>(DripTokenPlayersDocument, variables),
      options
    );
export const MultipleWinnersExternalErc20AwardDocument = `
    query multipleWinnersExternalErc20Award($skip: Int, $first: Int, $orderBy: MultipleWinnersExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: MultipleWinnersExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: MultipleWinnersExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: MultipleWinnersExternalErc721Award_filter, $id: ID!, $block: Block_height) {
  multipleWinnersExternalErc20Award(id: $id, block: $block) {
    id
    address
    name
    symbol
    decimals
    balanceAwarded
    prizeStrategy {
      id
      owner
      numberOfWinners
      splitExternalERC20Awards
      tokenListener
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useMultipleWinnersExternalErc20AwardQuery = <
      TData = MultipleWinnersExternalErc20AwardQuery,
      TError = unknown
    >(
      variables: MultipleWinnersExternalErc20AwardQueryVariables, 
      options?: UseQueryOptions<MultipleWinnersExternalErc20AwardQuery, TError, TData>
    ) => 
    useQuery<MultipleWinnersExternalErc20AwardQuery, TError, TData>(
      ['multipleWinnersExternalErc20Award', variables],
      fetcher<MultipleWinnersExternalErc20AwardQuery, MultipleWinnersExternalErc20AwardQueryVariables>(MultipleWinnersExternalErc20AwardDocument, variables),
      options
    );
export const MultipleWinnersExternalErc20AwardsDocument = `
    query multipleWinnersExternalErc20Awards($skip: Int, $first: Int, $orderBy: MultipleWinnersExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: MultipleWinnersExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: MultipleWinnersExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: MultipleWinnersExternalErc721Award_filter, $skip2: Int, $first2: Int, $orderBy2: MultipleWinnersExternalErc20Award_orderBy, $orderDirection2: OrderDirection, $where2: MultipleWinnersExternalErc20Award_filter, $block: Block_height) {
  multipleWinnersExternalErc20Awards(
    skip: $skip2
    first: $first2
    orderBy: $orderBy2
    orderDirection: $orderDirection2
    where: $where2
    block: $block
  ) {
    id
    address
    name
    symbol
    decimals
    balanceAwarded
    prizeStrategy {
      id
      owner
      numberOfWinners
      splitExternalERC20Awards
      tokenListener
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useMultipleWinnersExternalErc20AwardsQuery = <
      TData = MultipleWinnersExternalErc20AwardsQuery,
      TError = unknown
    >(
      variables?: MultipleWinnersExternalErc20AwardsQueryVariables, 
      options?: UseQueryOptions<MultipleWinnersExternalErc20AwardsQuery, TError, TData>
    ) => 
    useQuery<MultipleWinnersExternalErc20AwardsQuery, TError, TData>(
      ['multipleWinnersExternalErc20Awards', variables],
      fetcher<MultipleWinnersExternalErc20AwardsQuery, MultipleWinnersExternalErc20AwardsQueryVariables>(MultipleWinnersExternalErc20AwardsDocument, variables),
      options
    );
export const MultipleWinnersExternalErc721AwardDocument = `
    query multipleWinnersExternalErc721Award($skip: Int, $first: Int, $orderBy: MultipleWinnersExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: MultipleWinnersExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: MultipleWinnersExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: MultipleWinnersExternalErc721Award_filter, $id: ID!, $block: Block_height) {
  multipleWinnersExternalErc721Award(id: $id, block: $block) {
    id
    address
    tokenIds
    prizeStrategy {
      id
      owner
      numberOfWinners
      splitExternalERC20Awards
      tokenListener
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useMultipleWinnersExternalErc721AwardQuery = <
      TData = MultipleWinnersExternalErc721AwardQuery,
      TError = unknown
    >(
      variables: MultipleWinnersExternalErc721AwardQueryVariables, 
      options?: UseQueryOptions<MultipleWinnersExternalErc721AwardQuery, TError, TData>
    ) => 
    useQuery<MultipleWinnersExternalErc721AwardQuery, TError, TData>(
      ['multipleWinnersExternalErc721Award', variables],
      fetcher<MultipleWinnersExternalErc721AwardQuery, MultipleWinnersExternalErc721AwardQueryVariables>(MultipleWinnersExternalErc721AwardDocument, variables),
      options
    );
export const MultipleWinnersExternalErc721AwardsDocument = `
    query multipleWinnersExternalErc721Awards($skip: Int, $first: Int, $orderBy: MultipleWinnersExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: MultipleWinnersExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: MultipleWinnersExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: MultipleWinnersExternalErc721Award_filter, $skip2: Int, $first2: Int, $orderBy2: MultipleWinnersExternalErc721Award_orderBy, $orderDirection2: OrderDirection, $where2: MultipleWinnersExternalErc721Award_filter, $block: Block_height) {
  multipleWinnersExternalErc721Awards(
    skip: $skip2
    first: $first2
    orderBy: $orderBy2
    orderDirection: $orderDirection2
    where: $where2
    block: $block
  ) {
    id
    address
    tokenIds
    prizeStrategy {
      id
      owner
      numberOfWinners
      splitExternalERC20Awards
      tokenListener
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useMultipleWinnersExternalErc721AwardsQuery = <
      TData = MultipleWinnersExternalErc721AwardsQuery,
      TError = unknown
    >(
      variables?: MultipleWinnersExternalErc721AwardsQueryVariables, 
      options?: UseQueryOptions<MultipleWinnersExternalErc721AwardsQuery, TError, TData>
    ) => 
    useQuery<MultipleWinnersExternalErc721AwardsQuery, TError, TData>(
      ['multipleWinnersExternalErc721Awards', variables],
      fetcher<MultipleWinnersExternalErc721AwardsQuery, MultipleWinnersExternalErc721AwardsQueryVariables>(MultipleWinnersExternalErc721AwardsDocument, variables),
      options
    );
export const MultipleWinnersPrizeStrategiesDocument = `
    query multipleWinnersPrizeStrategies($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: ControlledTokenBalance_orderBy, $orderDirection5: OrderDirection, $where5: ControlledTokenBalance_filter, $skip6: Int, $first6: Int, $orderBy6: ControlledTokenBalance_orderBy, $orderDirection6: OrderDirection, $where6: ControlledTokenBalance_filter, $skip7: Int, $first7: Int, $orderBy7: MultipleWinnersExternalErc20Award_orderBy, $orderDirection7: OrderDirection, $where7: MultipleWinnersExternalErc20Award_filter, $skip8: Int, $first8: Int, $orderBy8: MultipleWinnersExternalErc721Award_orderBy, $orderDirection8: OrderDirection, $where8: MultipleWinnersExternalErc721Award_filter, $skip9: Int, $first9: Int, $orderBy9: MultipleWinnersPrizeStrategy_orderBy, $orderDirection9: OrderDirection, $where9: MultipleWinnersPrizeStrategy_filter, $block: Block_height) {
  multipleWinnersPrizeStrategies(
    skip: $skip9
    first: $first9
    orderBy: $orderBy9
    orderDirection: $orderDirection9
    where: $where9
    block: $block
  ) {
    id
    owner
    numberOfWinners
    splitExternalERC20Awards
    tokenListener
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    rng
    ticket {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip5
        first: $first5
        orderBy: $orderBy5
        orderDirection: $orderDirection5
        where: $where5
      ) {
        id
        balance
      }
    }
    sponsorship {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip6
        first: $first6
        orderBy: $orderBy6
        orderDirection: $orderDirection6
        where: $where6
      ) {
        id
        balance
      }
    }
    prizePeriodSeconds
    prizePeriodStartedAt
    prizePeriodEndAt
    externalErc20Awards(
      skip: $skip7
      first: $first7
      orderBy: $orderBy7
      orderDirection: $orderDirection7
      where: $where7
    ) {
      id
      address
      name
      symbol
      decimals
      balanceAwarded
      prizeStrategy {
        id
        owner
        numberOfWinners
        splitExternalERC20Awards
        tokenListener
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
    externalErc721Awards(
      skip: $skip8
      first: $first8
      orderBy: $orderBy8
      orderDirection: $orderDirection8
      where: $where8
    ) {
      id
      address
      tokenIds
      prizeStrategy {
        id
        owner
        numberOfWinners
        splitExternalERC20Awards
        tokenListener
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
  }
}
    `;
export const useMultipleWinnersPrizeStrategiesQuery = <
      TData = MultipleWinnersPrizeStrategiesQuery,
      TError = unknown
    >(
      variables?: MultipleWinnersPrizeStrategiesQueryVariables, 
      options?: UseQueryOptions<MultipleWinnersPrizeStrategiesQuery, TError, TData>
    ) => 
    useQuery<MultipleWinnersPrizeStrategiesQuery, TError, TData>(
      ['multipleWinnersPrizeStrategies', variables],
      fetcher<MultipleWinnersPrizeStrategiesQuery, MultipleWinnersPrizeStrategiesQueryVariables>(MultipleWinnersPrizeStrategiesDocument, variables),
      options
    );
export const MultipleWinnersPrizeStrategyDocument = `
    query multipleWinnersPrizeStrategy($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: ControlledTokenBalance_orderBy, $orderDirection5: OrderDirection, $where5: ControlledTokenBalance_filter, $skip6: Int, $first6: Int, $orderBy6: ControlledTokenBalance_orderBy, $orderDirection6: OrderDirection, $where6: ControlledTokenBalance_filter, $skip7: Int, $first7: Int, $orderBy7: MultipleWinnersExternalErc20Award_orderBy, $orderDirection7: OrderDirection, $where7: MultipleWinnersExternalErc20Award_filter, $skip8: Int, $first8: Int, $orderBy8: MultipleWinnersExternalErc721Award_orderBy, $orderDirection8: OrderDirection, $where8: MultipleWinnersExternalErc721Award_filter, $id: ID!, $block: Block_height) {
  multipleWinnersPrizeStrategy(id: $id, block: $block) {
    id
    owner
    numberOfWinners
    splitExternalERC20Awards
    tokenListener
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    rng
    ticket {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip5
        first: $first5
        orderBy: $orderBy5
        orderDirection: $orderDirection5
        where: $where5
      ) {
        id
        balance
      }
    }
    sponsorship {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip6
        first: $first6
        orderBy: $orderBy6
        orderDirection: $orderDirection6
        where: $where6
      ) {
        id
        balance
      }
    }
    prizePeriodSeconds
    prizePeriodStartedAt
    prizePeriodEndAt
    externalErc20Awards(
      skip: $skip7
      first: $first7
      orderBy: $orderBy7
      orderDirection: $orderDirection7
      where: $where7
    ) {
      id
      address
      name
      symbol
      decimals
      balanceAwarded
      prizeStrategy {
        id
        owner
        numberOfWinners
        splitExternalERC20Awards
        tokenListener
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
    externalErc721Awards(
      skip: $skip8
      first: $first8
      orderBy: $orderBy8
      orderDirection: $orderDirection8
      where: $where8
    ) {
      id
      address
      tokenIds
      prizeStrategy {
        id
        owner
        numberOfWinners
        splitExternalERC20Awards
        tokenListener
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
  }
}
    `;
export const useMultipleWinnersPrizeStrategyQuery = <
      TData = MultipleWinnersPrizeStrategyQuery,
      TError = unknown
    >(
      variables: MultipleWinnersPrizeStrategyQueryVariables, 
      options?: UseQueryOptions<MultipleWinnersPrizeStrategyQuery, TError, TData>
    ) => 
    useQuery<MultipleWinnersPrizeStrategyQuery, TError, TData>(
      ['multipleWinnersPrizeStrategy', variables],
      fetcher<MultipleWinnersPrizeStrategyQuery, MultipleWinnersPrizeStrategyQueryVariables>(MultipleWinnersPrizeStrategyDocument, variables),
      options
    );
export const PrizeDocument = `
    query prize($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: AwardedControlledToken_orderBy, $orderDirection5: OrderDirection, $where5: AwardedControlledToken_filter, $skip6: Int, $first6: Int, $orderBy6: AwardedExternalErc20Token_orderBy, $orderDirection6: OrderDirection, $where6: AwardedExternalErc20Token_filter, $skip7: Int, $first7: Int, $orderBy7: AwardedExternalErc721Nft_orderBy, $orderDirection7: OrderDirection, $where7: AwardedExternalErc721Nft_filter, $id: ID!, $block: Block_height) {
  prize(id: $id, block: $block) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    awardStartOperator
    awardedOperator
    prizePeriodStartedTimestamp
    lockBlock
    awardedBlock
    awardedTimestamp
    rngRequestId
    randomNumber
    numberOfSubWinners
    totalTicketSupply
    awardedControlledTokens(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      winner
      amount
      token {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prize {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
    }
    awardedExternalErc20Tokens(
      skip: $skip6
      first: $first6
      orderBy: $orderBy6
      orderDirection: $orderDirection6
      where: $where6
    ) {
      id
      address
      name
      symbol
      decimals
      balanceAwarded
      prize {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      winner
    }
    awardedExternalErc721Nfts(
      skip: $skip7
      first: $first7
      orderBy: $orderBy7
      orderDirection: $orderDirection7
      where: $where7
    ) {
      id
      address
      tokenIds
      prize {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      winner
    }
  }
}
    `;
export const usePrizeQuery = <
      TData = PrizeQuery,
      TError = unknown
    >(
      variables: PrizeQueryVariables, 
      options?: UseQueryOptions<PrizeQuery, TError, TData>
    ) => 
    useQuery<PrizeQuery, TError, TData>(
      ['prize', variables],
      fetcher<PrizeQuery, PrizeQueryVariables>(PrizeDocument, variables),
      options
    );
export const PrizePoolDocument = `
    query prizePool($skip: Int, $first: Int, $orderBy: AwardedControlledToken_orderBy, $orderDirection: OrderDirection, $where: AwardedControlledToken_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedExternalErc20Token_orderBy, $orderDirection1: OrderDirection, $where1: AwardedExternalErc20Token_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc721Nft_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc721Nft_filter, $skip3: Int, $first3: Int, $orderBy3: Prize_orderBy, $orderDirection3: OrderDirection, $where3: Prize_filter, $skip4: Int, $first4: Int, $orderBy4: CreditRate_orderBy, $orderDirection4: OrderDirection, $where4: CreditRate_filter, $skip5: Int, $first5: Int, $orderBy5: CreditBalance_orderBy, $orderDirection5: OrderDirection, $where5: CreditBalance_filter, $skip6: Int, $first6: Int, $orderBy6: PrizePoolAccount_orderBy, $orderDirection6: OrderDirection, $where6: PrizePoolAccount_filter, $skip7: Int, $first7: Int, $orderBy7: ControlledTokenBalance_orderBy, $orderDirection7: OrderDirection, $where7: ControlledTokenBalance_filter, $skip8: Int, $first8: Int, $orderBy8: ControlledToken_orderBy, $orderDirection8: OrderDirection, $where8: ControlledToken_filter, $id: ID!, $block: Block_height) {
  prizePool(id: $id, block: $block) {
    id
    deactivated
    owner
    reserveRegistry
    prizeStrategy {
      id
      singleRandomWinner {
        id
        owner
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
      multipleWinners {
        id
        owner
        numberOfWinners
        splitExternalERC20Awards
        tokenListener
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
    prizePoolType
    compoundPrizePool {
      id
      cToken
    }
    stakePrizePool {
      id
      stakeToken
    }
    yieldSourcePrizePool {
      id
      yieldSource
    }
    reserveFeeControlledToken
    sablierStream {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
    }
    underlyingCollateralToken
    underlyingCollateralDecimals
    underlyingCollateralName
    underlyingCollateralSymbol
    maxExitFeeMantissa
    maxTimelockDuration
    timelockTotalSupply
    liquidityCap
    cumulativePrizeGross
    cumulativePrizeReserveFee
    cumulativePrizeNet
    currentPrizeId
    currentState
    prizes(
      skip: $skip3
      first: $first3
      orderBy: $orderBy3
      orderDirection: $orderDirection3
      where: $where3
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        tokenIds
        winner
      }
    }
    tokenCreditRates(
      skip: $skip4
      first: $first4
      orderBy: $orderBy4
      orderDirection: $orderDirection4
      where: $where4
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      creditLimitMantissa
      creditRateMantissa
    }
    tokenCreditBalances(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      balance
      timestamp
      initialized
    }
    prizePoolAccounts(
      skip: $skip6
      first: $first6
      orderBy: $orderBy6
      orderDirection: $orderDirection6
      where: $where6
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      account {
        id
      }
      timelockedBalance
      unlockTimestamp
    }
    controlledTokens(
      skip: $skip8
      first: $first8
      orderBy: $orderBy8
      orderDirection: $orderDirection8
      where: $where8
    ) {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip7
        first: $first7
        orderBy: $orderBy7
        orderDirection: $orderDirection7
        where: $where7
      ) {
        id
        balance
      }
    }
  }
}
    `;
export const usePrizePoolQuery = <
      TData = PrizePoolQuery,
      TError = unknown
    >(
      variables: PrizePoolQueryVariables, 
      options?: UseQueryOptions<PrizePoolQuery, TError, TData>
    ) => 
    useQuery<PrizePoolQuery, TError, TData>(
      ['prizePool', variables],
      fetcher<PrizePoolQuery, PrizePoolQueryVariables>(PrizePoolDocument, variables),
      options
    );
export const PrizePoolAccountDocument = `
    query prizePoolAccount($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: PrizePoolAccount_orderBy, $orderDirection5: OrderDirection, $where5: PrizePoolAccount_filter, $skip6: Int, $first6: Int, $orderBy6: ControlledTokenBalance_orderBy, $orderDirection6: OrderDirection, $where6: ControlledTokenBalance_filter, $id: ID!, $block: Block_height) {
  prizePoolAccount(id: $id, block: $block) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    account {
      id
      prizePoolAccounts(
        skip: $skip5
        first: $first5
        orderBy: $orderBy5
        orderDirection: $orderDirection5
        where: $where5
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokenBalances(
        skip: $skip6
        first: $first6
        orderBy: $orderBy6
        orderDirection: $orderDirection6
        where: $where6
      ) {
        id
        balance
      }
    }
    timelockedBalance
    unlockTimestamp
  }
}
    `;
export const usePrizePoolAccountQuery = <
      TData = PrizePoolAccountQuery,
      TError = unknown
    >(
      variables: PrizePoolAccountQueryVariables, 
      options?: UseQueryOptions<PrizePoolAccountQuery, TError, TData>
    ) => 
    useQuery<PrizePoolAccountQuery, TError, TData>(
      ['prizePoolAccount', variables],
      fetcher<PrizePoolAccountQuery, PrizePoolAccountQueryVariables>(PrizePoolAccountDocument, variables),
      options
    );
export const PrizePoolAccountsDocument = `
    query prizePoolAccounts($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: PrizePoolAccount_orderBy, $orderDirection5: OrderDirection, $where5: PrizePoolAccount_filter, $skip6: Int, $first6: Int, $orderBy6: ControlledTokenBalance_orderBy, $orderDirection6: OrderDirection, $where6: ControlledTokenBalance_filter, $skip7: Int, $first7: Int, $orderBy7: PrizePoolAccount_orderBy, $orderDirection7: OrderDirection, $where7: PrizePoolAccount_filter, $block: Block_height) {
  prizePoolAccounts(
    skip: $skip7
    first: $first7
    orderBy: $orderBy7
    orderDirection: $orderDirection7
    where: $where7
    block: $block
  ) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    account {
      id
      prizePoolAccounts(
        skip: $skip5
        first: $first5
        orderBy: $orderBy5
        orderDirection: $orderDirection5
        where: $where5
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokenBalances(
        skip: $skip6
        first: $first6
        orderBy: $orderBy6
        orderDirection: $orderDirection6
        where: $where6
      ) {
        id
        balance
      }
    }
    timelockedBalance
    unlockTimestamp
  }
}
    `;
export const usePrizePoolAccountsQuery = <
      TData = PrizePoolAccountsQuery,
      TError = unknown
    >(
      variables?: PrizePoolAccountsQueryVariables, 
      options?: UseQueryOptions<PrizePoolAccountsQuery, TError, TData>
    ) => 
    useQuery<PrizePoolAccountsQuery, TError, TData>(
      ['prizePoolAccounts', variables],
      fetcher<PrizePoolAccountsQuery, PrizePoolAccountsQueryVariables>(PrizePoolAccountsDocument, variables),
      options
    );
export const PrizePoolsDocument = `
    query prizePools($skip: Int, $first: Int, $orderBy: AwardedControlledToken_orderBy, $orderDirection: OrderDirection, $where: AwardedControlledToken_filter, $skip1: Int, $first1: Int, $orderBy1: AwardedExternalErc20Token_orderBy, $orderDirection1: OrderDirection, $where1: AwardedExternalErc20Token_filter, $skip2: Int, $first2: Int, $orderBy2: AwardedExternalErc721Nft_orderBy, $orderDirection2: OrderDirection, $where2: AwardedExternalErc721Nft_filter, $skip3: Int, $first3: Int, $orderBy3: Prize_orderBy, $orderDirection3: OrderDirection, $where3: Prize_filter, $skip4: Int, $first4: Int, $orderBy4: CreditRate_orderBy, $orderDirection4: OrderDirection, $where4: CreditRate_filter, $skip5: Int, $first5: Int, $orderBy5: CreditBalance_orderBy, $orderDirection5: OrderDirection, $where5: CreditBalance_filter, $skip6: Int, $first6: Int, $orderBy6: PrizePoolAccount_orderBy, $orderDirection6: OrderDirection, $where6: PrizePoolAccount_filter, $skip7: Int, $first7: Int, $orderBy7: ControlledTokenBalance_orderBy, $orderDirection7: OrderDirection, $where7: ControlledTokenBalance_filter, $skip8: Int, $first8: Int, $orderBy8: ControlledToken_orderBy, $orderDirection8: OrderDirection, $where8: ControlledToken_filter, $skip9: Int, $first9: Int, $orderBy9: PrizePool_orderBy, $orderDirection9: OrderDirection, $where9: PrizePool_filter, $block: Block_height) {
  prizePools(
    skip: $skip9
    first: $first9
    orderBy: $orderBy9
    orderDirection: $orderDirection9
    where: $where9
    block: $block
  ) {
    id
    deactivated
    owner
    reserveRegistry
    prizeStrategy {
      id
      singleRandomWinner {
        id
        owner
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
      multipleWinners {
        id
        owner
        numberOfWinners
        splitExternalERC20Awards
        tokenListener
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
    prizePoolType
    compoundPrizePool {
      id
      cToken
    }
    stakePrizePool {
      id
      stakeToken
    }
    yieldSourcePrizePool {
      id
      yieldSource
    }
    reserveFeeControlledToken
    sablierStream {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
    }
    underlyingCollateralToken
    underlyingCollateralDecimals
    underlyingCollateralName
    underlyingCollateralSymbol
    maxExitFeeMantissa
    maxTimelockDuration
    timelockTotalSupply
    liquidityCap
    cumulativePrizeGross
    cumulativePrizeReserveFee
    cumulativePrizeNet
    currentPrizeId
    currentState
    prizes(
      skip: $skip3
      first: $first3
      orderBy: $orderBy3
      orderDirection: $orderDirection3
      where: $where3
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      awardStartOperator
      awardedOperator
      prizePeriodStartedTimestamp
      lockBlock
      awardedBlock
      awardedTimestamp
      rngRequestId
      randomNumber
      numberOfSubWinners
      totalTicketSupply
      awardedControlledTokens(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        winner
        amount
      }
      awardedExternalErc20Tokens(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
        winner
      }
      awardedExternalErc721Nfts(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        tokenIds
        winner
      }
    }
    tokenCreditRates(
      skip: $skip4
      first: $first4
      orderBy: $orderBy4
      orderDirection: $orderDirection4
      where: $where4
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      creditLimitMantissa
      creditRateMantissa
    }
    tokenCreditBalances(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      balance
      timestamp
      initialized
    }
    prizePoolAccounts(
      skip: $skip6
      first: $first6
      orderBy: $orderBy6
      orderDirection: $orderDirection6
      where: $where6
    ) {
      id
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      account {
        id
      }
      timelockedBalance
      unlockTimestamp
    }
    controlledTokens(
      skip: $skip8
      first: $first8
      orderBy: $orderBy8
      orderDirection: $orderDirection8
      where: $where8
    ) {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip7
        first: $first7
        orderBy: $orderBy7
        orderDirection: $orderDirection7
        where: $where7
      ) {
        id
        balance
      }
    }
  }
}
    `;
export const usePrizePoolsQuery = <
      TData = PrizePoolsQuery,
      TError = unknown
    >(
      variables?: PrizePoolsQueryVariables, 
      options?: UseQueryOptions<PrizePoolsQuery, TError, TData>
    ) => 
    useQuery<PrizePoolsQuery, TError, TData>(
      ['prizePools', variables],
      fetcher<PrizePoolsQuery, PrizePoolsQueryVariables>(PrizePoolsDocument, variables),
      options
    );
export const PrizeStrategiesDocument = `
    query prizeStrategies($skip: Int, $first: Int, $orderBy: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: SingleRandomWinnerExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: SingleRandomWinnerExternalErc721Award_filter, $skip2: Int, $first2: Int, $orderBy2: MultipleWinnersExternalErc20Award_orderBy, $orderDirection2: OrderDirection, $where2: MultipleWinnersExternalErc20Award_filter, $skip3: Int, $first3: Int, $orderBy3: MultipleWinnersExternalErc721Award_orderBy, $orderDirection3: OrderDirection, $where3: MultipleWinnersExternalErc721Award_filter, $skip4: Int, $first4: Int, $orderBy4: PrizeStrategy_orderBy, $orderDirection4: OrderDirection, $where4: PrizeStrategy_filter, $block: Block_height) {
  prizeStrategies(
    skip: $skip4
    first: $first4
    orderBy: $orderBy4
    orderDirection: $orderDirection4
    where: $where4
    block: $block
  ) {
    id
    singleRandomWinner {
      id
      owner
      tokenListener {
        id
        owner
      }
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
    multipleWinners {
      id
      owner
      numberOfWinners
      splitExternalERC20Awards
      tokenListener
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
      }
      externalErc721Awards(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const usePrizeStrategiesQuery = <
      TData = PrizeStrategiesQuery,
      TError = unknown
    >(
      variables?: PrizeStrategiesQueryVariables, 
      options?: UseQueryOptions<PrizeStrategiesQuery, TError, TData>
    ) => 
    useQuery<PrizeStrategiesQuery, TError, TData>(
      ['prizeStrategies', variables],
      fetcher<PrizeStrategiesQuery, PrizeStrategiesQueryVariables>(PrizeStrategiesDocument, variables),
      options
    );
export const PrizeStrategyDocument = `
    query prizeStrategy($skip: Int, $first: Int, $orderBy: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: SingleRandomWinnerExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: SingleRandomWinnerExternalErc721Award_filter, $skip2: Int, $first2: Int, $orderBy2: MultipleWinnersExternalErc20Award_orderBy, $orderDirection2: OrderDirection, $where2: MultipleWinnersExternalErc20Award_filter, $skip3: Int, $first3: Int, $orderBy3: MultipleWinnersExternalErc721Award_orderBy, $orderDirection3: OrderDirection, $where3: MultipleWinnersExternalErc721Award_filter, $id: ID!, $block: Block_height) {
  prizeStrategy(id: $id, block: $block) {
    id
    singleRandomWinner {
      id
      owner
      tokenListener {
        id
        owner
      }
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
    multipleWinners {
      id
      owner
      numberOfWinners
      splitExternalERC20Awards
      tokenListener
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        address
        name
        symbol
        decimals
        balanceAwarded
      }
      externalErc721Awards(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const usePrizeStrategyQuery = <
      TData = PrizeStrategyQuery,
      TError = unknown
    >(
      variables: PrizeStrategyQueryVariables, 
      options?: UseQueryOptions<PrizeStrategyQuery, TError, TData>
    ) => 
    useQuery<PrizeStrategyQuery, TError, TData>(
      ['prizeStrategy', variables],
      fetcher<PrizeStrategyQuery, PrizeStrategyQueryVariables>(PrizeStrategyDocument, variables),
      options
    );
export const PrizesDocument = `
    query prizes($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: AwardedControlledToken_orderBy, $orderDirection5: OrderDirection, $where5: AwardedControlledToken_filter, $skip6: Int, $first6: Int, $orderBy6: AwardedExternalErc20Token_orderBy, $orderDirection6: OrderDirection, $where6: AwardedExternalErc20Token_filter, $skip7: Int, $first7: Int, $orderBy7: AwardedExternalErc721Nft_orderBy, $orderDirection7: OrderDirection, $where7: AwardedExternalErc721Nft_filter, $skip8: Int, $first8: Int, $orderBy8: Prize_orderBy, $orderDirection8: OrderDirection, $where8: Prize_filter, $block: Block_height) {
  prizes(
    skip: $skip8
    first: $first8
    orderBy: $orderBy8
    orderDirection: $orderDirection8
    where: $where8
    block: $block
  ) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    awardStartOperator
    awardedOperator
    prizePeriodStartedTimestamp
    lockBlock
    awardedBlock
    awardedTimestamp
    rngRequestId
    randomNumber
    numberOfSubWinners
    totalTicketSupply
    awardedControlledTokens(
      skip: $skip5
      first: $first5
      orderBy: $orderBy5
      orderDirection: $orderDirection5
      where: $where5
    ) {
      id
      winner
      amount
      token {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prize {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
    }
    awardedExternalErc20Tokens(
      skip: $skip6
      first: $first6
      orderBy: $orderBy6
      orderDirection: $orderDirection6
      where: $where6
    ) {
      id
      address
      name
      symbol
      decimals
      balanceAwarded
      prize {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      winner
    }
    awardedExternalErc721Nfts(
      skip: $skip7
      first: $first7
      orderBy: $orderBy7
      orderDirection: $orderDirection7
      where: $where7
    ) {
      id
      address
      tokenIds
      prize {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      winner
    }
  }
}
    `;
export const usePrizesQuery = <
      TData = PrizesQuery,
      TError = unknown
    >(
      variables?: PrizesQueryVariables, 
      options?: UseQueryOptions<PrizesQuery, TError, TData>
    ) => 
    useQuery<PrizesQuery, TError, TData>(
      ['prizes', variables],
      fetcher<PrizesQuery, PrizesQueryVariables>(PrizesDocument, variables),
      options
    );
export const SablierStreamDocument = `
    query sablierStream($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $id: ID!, $block: Block_height) {
  sablierStream(id: $id, block: $block) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
  }
}
    `;
export const useSablierStreamQuery = <
      TData = SablierStreamQuery,
      TError = unknown
    >(
      variables: SablierStreamQueryVariables, 
      options?: UseQueryOptions<SablierStreamQuery, TError, TData>
    ) => 
    useQuery<SablierStreamQuery, TError, TData>(
      ['sablierStream', variables],
      fetcher<SablierStreamQuery, SablierStreamQueryVariables>(SablierStreamDocument, variables),
      options
    );
export const SablierStreamsDocument = `
    query sablierStreams($skip: Int, $first: Int, $orderBy: Prize_orderBy, $orderDirection: OrderDirection, $where: Prize_filter, $skip1: Int, $first1: Int, $orderBy1: CreditRate_orderBy, $orderDirection1: OrderDirection, $where1: CreditRate_filter, $skip2: Int, $first2: Int, $orderBy2: CreditBalance_orderBy, $orderDirection2: OrderDirection, $where2: CreditBalance_filter, $skip3: Int, $first3: Int, $orderBy3: PrizePoolAccount_orderBy, $orderDirection3: OrderDirection, $where3: PrizePoolAccount_filter, $skip4: Int, $first4: Int, $orderBy4: ControlledToken_orderBy, $orderDirection4: OrderDirection, $where4: ControlledToken_filter, $skip5: Int, $first5: Int, $orderBy5: SablierStream_orderBy, $orderDirection5: OrderDirection, $where5: SablierStream_filter, $block: Block_height) {
  sablierStreams(
    skip: $skip5
    first: $first5
    orderBy: $orderBy5
    orderDirection: $orderDirection5
    where: $where5
    block: $block
  ) {
    id
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
  }
}
    `;
export const useSablierStreamsQuery = <
      TData = SablierStreamsQuery,
      TError = unknown
    >(
      variables?: SablierStreamsQueryVariables, 
      options?: UseQueryOptions<SablierStreamsQuery, TError, TData>
    ) => 
    useQuery<SablierStreamsQuery, TError, TData>(
      ['sablierStreams', variables],
      fetcher<SablierStreamsQuery, SablierStreamsQueryVariables>(SablierStreamsDocument, variables),
      options
    );
export const SingleRandomWinnerExternalErc20AwardDocument = `
    query singleRandomWinnerExternalErc20Award($skip: Int, $first: Int, $orderBy: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: SingleRandomWinnerExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: SingleRandomWinnerExternalErc721Award_filter, $id: ID!, $block: Block_height) {
  singleRandomWinnerExternalErc20Award(id: $id, block: $block) {
    id
    address
    name
    symbol
    decimals
    prizeStrategy {
      id
      owner
      tokenListener {
        id
        owner
      }
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useSingleRandomWinnerExternalErc20AwardQuery = <
      TData = SingleRandomWinnerExternalErc20AwardQuery,
      TError = unknown
    >(
      variables: SingleRandomWinnerExternalErc20AwardQueryVariables, 
      options?: UseQueryOptions<SingleRandomWinnerExternalErc20AwardQuery, TError, TData>
    ) => 
    useQuery<SingleRandomWinnerExternalErc20AwardQuery, TError, TData>(
      ['singleRandomWinnerExternalErc20Award', variables],
      fetcher<SingleRandomWinnerExternalErc20AwardQuery, SingleRandomWinnerExternalErc20AwardQueryVariables>(SingleRandomWinnerExternalErc20AwardDocument, variables),
      options
    );
export const SingleRandomWinnerExternalErc20AwardsDocument = `
    query singleRandomWinnerExternalErc20Awards($skip: Int, $first: Int, $orderBy: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: SingleRandomWinnerExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: SingleRandomWinnerExternalErc721Award_filter, $skip2: Int, $first2: Int, $orderBy2: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection2: OrderDirection, $where2: SingleRandomWinnerExternalErc20Award_filter, $block: Block_height) {
  singleRandomWinnerExternalErc20Awards(
    skip: $skip2
    first: $first2
    orderBy: $orderBy2
    orderDirection: $orderDirection2
    where: $where2
    block: $block
  ) {
    id
    address
    name
    symbol
    decimals
    prizeStrategy {
      id
      owner
      tokenListener {
        id
        owner
      }
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useSingleRandomWinnerExternalErc20AwardsQuery = <
      TData = SingleRandomWinnerExternalErc20AwardsQuery,
      TError = unknown
    >(
      variables?: SingleRandomWinnerExternalErc20AwardsQueryVariables, 
      options?: UseQueryOptions<SingleRandomWinnerExternalErc20AwardsQuery, TError, TData>
    ) => 
    useQuery<SingleRandomWinnerExternalErc20AwardsQuery, TError, TData>(
      ['singleRandomWinnerExternalErc20Awards', variables],
      fetcher<SingleRandomWinnerExternalErc20AwardsQuery, SingleRandomWinnerExternalErc20AwardsQueryVariables>(SingleRandomWinnerExternalErc20AwardsDocument, variables),
      options
    );
export const SingleRandomWinnerExternalErc721AwardDocument = `
    query singleRandomWinnerExternalErc721Award($skip: Int, $first: Int, $orderBy: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: SingleRandomWinnerExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: SingleRandomWinnerExternalErc721Award_filter, $id: ID!, $block: Block_height) {
  singleRandomWinnerExternalErc721Award(id: $id, block: $block) {
    id
    address
    tokenIds
    prizeStrategy {
      id
      owner
      tokenListener {
        id
        owner
      }
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useSingleRandomWinnerExternalErc721AwardQuery = <
      TData = SingleRandomWinnerExternalErc721AwardQuery,
      TError = unknown
    >(
      variables: SingleRandomWinnerExternalErc721AwardQueryVariables, 
      options?: UseQueryOptions<SingleRandomWinnerExternalErc721AwardQuery, TError, TData>
    ) => 
    useQuery<SingleRandomWinnerExternalErc721AwardQuery, TError, TData>(
      ['singleRandomWinnerExternalErc721Award', variables],
      fetcher<SingleRandomWinnerExternalErc721AwardQuery, SingleRandomWinnerExternalErc721AwardQueryVariables>(SingleRandomWinnerExternalErc721AwardDocument, variables),
      options
    );
export const SingleRandomWinnerExternalErc721AwardsDocument = `
    query singleRandomWinnerExternalErc721Awards($skip: Int, $first: Int, $orderBy: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection: OrderDirection, $where: SingleRandomWinnerExternalErc20Award_filter, $skip1: Int, $first1: Int, $orderBy1: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection1: OrderDirection, $where1: SingleRandomWinnerExternalErc721Award_filter, $skip2: Int, $first2: Int, $orderBy2: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection2: OrderDirection, $where2: SingleRandomWinnerExternalErc721Award_filter, $block: Block_height) {
  singleRandomWinnerExternalErc721Awards(
    skip: $skip2
    first: $first2
    orderBy: $orderBy2
    orderDirection: $orderDirection2
    where: $where2
    block: $block
  ) {
    id
    address
    tokenIds
    prizeStrategy {
      id
      owner
      tokenListener {
        id
        owner
      }
      prizePool {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      rng
      ticket {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      sponsorship {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
      prizePeriodSeconds
      prizePeriodStartedAt
      prizePeriodEndAt
      externalErc20Awards(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        name
        symbol
        decimals
      }
      externalErc721Awards(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        address
        tokenIds
      }
    }
  }
}
    `;
export const useSingleRandomWinnerExternalErc721AwardsQuery = <
      TData = SingleRandomWinnerExternalErc721AwardsQuery,
      TError = unknown
    >(
      variables?: SingleRandomWinnerExternalErc721AwardsQueryVariables, 
      options?: UseQueryOptions<SingleRandomWinnerExternalErc721AwardsQuery, TError, TData>
    ) => 
    useQuery<SingleRandomWinnerExternalErc721AwardsQuery, TError, TData>(
      ['singleRandomWinnerExternalErc721Awards', variables],
      fetcher<SingleRandomWinnerExternalErc721AwardsQuery, SingleRandomWinnerExternalErc721AwardsQueryVariables>(SingleRandomWinnerExternalErc721AwardsDocument, variables),
      options
    );
export const SingleRandomWinnerPrizeStrategiesDocument = `
    query singleRandomWinnerPrizeStrategies($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $skip3: Int, $first3: Int, $orderBy3: Prize_orderBy, $orderDirection3: OrderDirection, $where3: Prize_filter, $skip4: Int, $first4: Int, $orderBy4: CreditRate_orderBy, $orderDirection4: OrderDirection, $where4: CreditRate_filter, $skip5: Int, $first5: Int, $orderBy5: CreditBalance_orderBy, $orderDirection5: OrderDirection, $where5: CreditBalance_filter, $skip6: Int, $first6: Int, $orderBy6: PrizePoolAccount_orderBy, $orderDirection6: OrderDirection, $where6: PrizePoolAccount_filter, $skip7: Int, $first7: Int, $orderBy7: ControlledToken_orderBy, $orderDirection7: OrderDirection, $where7: ControlledToken_filter, $skip8: Int, $first8: Int, $orderBy8: ControlledTokenBalance_orderBy, $orderDirection8: OrderDirection, $where8: ControlledTokenBalance_filter, $skip9: Int, $first9: Int, $orderBy9: ControlledTokenBalance_orderBy, $orderDirection9: OrderDirection, $where9: ControlledTokenBalance_filter, $skip10: Int, $first10: Int, $orderBy10: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection10: OrderDirection, $where10: SingleRandomWinnerExternalErc20Award_filter, $skip11: Int, $first11: Int, $orderBy11: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection11: OrderDirection, $where11: SingleRandomWinnerExternalErc721Award_filter, $skip12: Int, $first12: Int, $orderBy12: SingleRandomWinnerPrizeStrategy_orderBy, $orderDirection12: OrderDirection, $where12: SingleRandomWinnerPrizeStrategy_filter, $block: Block_height) {
  singleRandomWinnerPrizeStrategies(
    skip: $skip12
    first: $first12
    orderBy: $orderBy12
    orderDirection: $orderDirection12
    where: $where12
    block: $block
  ) {
    id
    owner
    tokenListener {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip5
        first: $first5
        orderBy: $orderBy5
        orderDirection: $orderDirection5
        where: $where5
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip6
        first: $first6
        orderBy: $orderBy6
        orderDirection: $orderDirection6
        where: $where6
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip7
        first: $first7
        orderBy: $orderBy7
        orderDirection: $orderDirection7
        where: $where7
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    rng
    ticket {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip8
        first: $first8
        orderBy: $orderBy8
        orderDirection: $orderDirection8
        where: $where8
      ) {
        id
        balance
      }
    }
    sponsorship {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip9
        first: $first9
        orderBy: $orderBy9
        orderDirection: $orderDirection9
        where: $where9
      ) {
        id
        balance
      }
    }
    prizePeriodSeconds
    prizePeriodStartedAt
    prizePeriodEndAt
    externalErc20Awards(
      skip: $skip10
      first: $first10
      orderBy: $orderBy10
      orderDirection: $orderDirection10
      where: $where10
    ) {
      id
      address
      name
      symbol
      decimals
      prizeStrategy {
        id
        owner
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
    externalErc721Awards(
      skip: $skip11
      first: $first11
      orderBy: $orderBy11
      orderDirection: $orderDirection11
      where: $where11
    ) {
      id
      address
      tokenIds
      prizeStrategy {
        id
        owner
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
  }
}
    `;
export const useSingleRandomWinnerPrizeStrategiesQuery = <
      TData = SingleRandomWinnerPrizeStrategiesQuery,
      TError = unknown
    >(
      variables?: SingleRandomWinnerPrizeStrategiesQueryVariables, 
      options?: UseQueryOptions<SingleRandomWinnerPrizeStrategiesQuery, TError, TData>
    ) => 
    useQuery<SingleRandomWinnerPrizeStrategiesQuery, TError, TData>(
      ['singleRandomWinnerPrizeStrategies', variables],
      fetcher<SingleRandomWinnerPrizeStrategiesQuery, SingleRandomWinnerPrizeStrategiesQueryVariables>(SingleRandomWinnerPrizeStrategiesDocument, variables),
      options
    );
export const SingleRandomWinnerPrizeStrategyDocument = `
    query singleRandomWinnerPrizeStrategy($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $skip3: Int, $first3: Int, $orderBy3: Prize_orderBy, $orderDirection3: OrderDirection, $where3: Prize_filter, $skip4: Int, $first4: Int, $orderBy4: CreditRate_orderBy, $orderDirection4: OrderDirection, $where4: CreditRate_filter, $skip5: Int, $first5: Int, $orderBy5: CreditBalance_orderBy, $orderDirection5: OrderDirection, $where5: CreditBalance_filter, $skip6: Int, $first6: Int, $orderBy6: PrizePoolAccount_orderBy, $orderDirection6: OrderDirection, $where6: PrizePoolAccount_filter, $skip7: Int, $first7: Int, $orderBy7: ControlledToken_orderBy, $orderDirection7: OrderDirection, $where7: ControlledToken_filter, $skip8: Int, $first8: Int, $orderBy8: ControlledTokenBalance_orderBy, $orderDirection8: OrderDirection, $where8: ControlledTokenBalance_filter, $skip9: Int, $first9: Int, $orderBy9: ControlledTokenBalance_orderBy, $orderDirection9: OrderDirection, $where9: ControlledTokenBalance_filter, $skip10: Int, $first10: Int, $orderBy10: SingleRandomWinnerExternalErc20Award_orderBy, $orderDirection10: OrderDirection, $where10: SingleRandomWinnerExternalErc20Award_filter, $skip11: Int, $first11: Int, $orderBy11: SingleRandomWinnerExternalErc721Award_orderBy, $orderDirection11: OrderDirection, $where11: SingleRandomWinnerExternalErc721Award_filter, $id: ID!, $block: Block_height) {
  singleRandomWinnerPrizeStrategy(id: $id, block: $block) {
    id
    owner
    tokenListener {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    prizePool {
      id
      deactivated
      owner
      reserveRegistry
      prizeStrategy {
        id
      }
      prizePoolType
      compoundPrizePool {
        id
        cToken
      }
      stakePrizePool {
        id
        stakeToken
      }
      yieldSourcePrizePool {
        id
        yieldSource
      }
      reserveFeeControlledToken
      sablierStream {
        id
      }
      underlyingCollateralToken
      underlyingCollateralDecimals
      underlyingCollateralName
      underlyingCollateralSymbol
      maxExitFeeMantissa
      maxTimelockDuration
      timelockTotalSupply
      liquidityCap
      cumulativePrizeGross
      cumulativePrizeReserveFee
      cumulativePrizeNet
      currentPrizeId
      currentState
      prizes(
        skip: $skip3
        first: $first3
        orderBy: $orderBy3
        orderDirection: $orderDirection3
        where: $where3
      ) {
        id
        awardStartOperator
        awardedOperator
        prizePeriodStartedTimestamp
        lockBlock
        awardedBlock
        awardedTimestamp
        rngRequestId
        randomNumber
        numberOfSubWinners
        totalTicketSupply
      }
      tokenCreditRates(
        skip: $skip4
        first: $first4
        orderBy: $orderBy4
        orderDirection: $orderDirection4
        where: $where4
      ) {
        id
        creditLimitMantissa
        creditRateMantissa
      }
      tokenCreditBalances(
        skip: $skip5
        first: $first5
        orderBy: $orderBy5
        orderDirection: $orderDirection5
        where: $where5
      ) {
        id
        balance
        timestamp
        initialized
      }
      prizePoolAccounts(
        skip: $skip6
        first: $first6
        orderBy: $orderBy6
        orderDirection: $orderDirection6
        where: $where6
      ) {
        id
        timelockedBalance
        unlockTimestamp
      }
      controlledTokens(
        skip: $skip7
        first: $first7
        orderBy: $orderBy7
        orderDirection: $orderDirection7
        where: $where7
      ) {
        id
        name
        symbol
        decimals
        totalSupply
        numberOfHolders
      }
    }
    rng
    ticket {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip8
        first: $first8
        orderBy: $orderBy8
        orderDirection: $orderDirection8
        where: $where8
      ) {
        id
        balance
      }
    }
    sponsorship {
      id
      name
      symbol
      decimals
      controller {
        id
        deactivated
        owner
        reserveRegistry
        prizePoolType
        reserveFeeControlledToken
        underlyingCollateralToken
        underlyingCollateralDecimals
        underlyingCollateralName
        underlyingCollateralSymbol
        maxExitFeeMantissa
        maxTimelockDuration
        timelockTotalSupply
        liquidityCap
        cumulativePrizeGross
        cumulativePrizeReserveFee
        cumulativePrizeNet
        currentPrizeId
        currentState
      }
      totalSupply
      numberOfHolders
      balances(
        skip: $skip9
        first: $first9
        orderBy: $orderBy9
        orderDirection: $orderDirection9
        where: $where9
      ) {
        id
        balance
      }
    }
    prizePeriodSeconds
    prizePeriodStartedAt
    prizePeriodEndAt
    externalErc20Awards(
      skip: $skip10
      first: $first10
      orderBy: $orderBy10
      orderDirection: $orderDirection10
      where: $where10
    ) {
      id
      address
      name
      symbol
      decimals
      prizeStrategy {
        id
        owner
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
    externalErc721Awards(
      skip: $skip11
      first: $first11
      orderBy: $orderBy11
      orderDirection: $orderDirection11
      where: $where11
    ) {
      id
      address
      tokenIds
      prizeStrategy {
        id
        owner
        rng
        prizePeriodSeconds
        prizePeriodStartedAt
        prizePeriodEndAt
      }
    }
  }
}
    `;
export const useSingleRandomWinnerPrizeStrategyQuery = <
      TData = SingleRandomWinnerPrizeStrategyQuery,
      TError = unknown
    >(
      variables: SingleRandomWinnerPrizeStrategyQueryVariables, 
      options?: UseQueryOptions<SingleRandomWinnerPrizeStrategyQuery, TError, TData>
    ) => 
    useQuery<SingleRandomWinnerPrizeStrategyQuery, TError, TData>(
      ['singleRandomWinnerPrizeStrategy', variables],
      fetcher<SingleRandomWinnerPrizeStrategyQuery, SingleRandomWinnerPrizeStrategyQueryVariables>(SingleRandomWinnerPrizeStrategyDocument, variables),
      options
    );
export const StakePrizePoolDocument = `
    query stakePrizePool($id: ID!, $block: Block_height) {
  stakePrizePool(id: $id, block: $block) {
    id
    stakeToken
  }
}
    `;
export const useStakePrizePoolQuery = <
      TData = StakePrizePoolQuery,
      TError = unknown
    >(
      variables: StakePrizePoolQueryVariables, 
      options?: UseQueryOptions<StakePrizePoolQuery, TError, TData>
    ) => 
    useQuery<StakePrizePoolQuery, TError, TData>(
      ['stakePrizePool', variables],
      fetcher<StakePrizePoolQuery, StakePrizePoolQueryVariables>(StakePrizePoolDocument, variables),
      options
    );
export const StakePrizePoolsDocument = `
    query stakePrizePools($skip: Int, $first: Int, $orderBy: StakePrizePool_orderBy, $orderDirection: OrderDirection, $where: StakePrizePool_filter, $block: Block_height) {
  stakePrizePools(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    stakeToken
  }
}
    `;
export const useStakePrizePoolsQuery = <
      TData = StakePrizePoolsQuery,
      TError = unknown
    >(
      variables?: StakePrizePoolsQueryVariables, 
      options?: UseQueryOptions<StakePrizePoolsQuery, TError, TData>
    ) => 
    useQuery<StakePrizePoolsQuery, TError, TData>(
      ['stakePrizePools', variables],
      fetcher<StakePrizePoolsQuery, StakePrizePoolsQueryVariables>(StakePrizePoolsDocument, variables),
      options
    );
export const VolumeDripDocument = `
    query volumeDrip($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $skip3: Int, $first3: Int, $orderBy3: VolumeDripPlayer_orderBy, $orderDirection3: OrderDirection, $where3: VolumeDripPlayer_filter, $skip4: Int, $first4: Int, $orderBy4: VolumeDripPeriod_orderBy, $orderDirection4: OrderDirection, $where4: VolumeDripPeriod_filter, $id: ID!, $block: Block_height) {
  volumeDrip(id: $id, block: $block) {
    id
    comptroller {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    sourceAddress
    measureToken
    dripToken
    referral
    periodSeconds
    dripAmount
    periodCount
    deposits(
      skip: $skip3
      first: $first3
      orderBy: $orderBy3
      orderDirection: $orderDirection3
      where: $where3
    ) {
      id
      volumeDrip {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
      address
      periodIndex
      balance
    }
    periods(
      skip: $skip4
      first: $first4
      orderBy: $orderBy4
      orderDirection: $orderDirection4
      where: $where4
    ) {
      id
      volumeDrip {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
      periodIndex
      totalSupply
      dripAmount
      endTime
      isDripping
    }
    deactivated
  }
}
    `;
export const useVolumeDripQuery = <
      TData = VolumeDripQuery,
      TError = unknown
    >(
      variables: VolumeDripQueryVariables, 
      options?: UseQueryOptions<VolumeDripQuery, TError, TData>
    ) => 
    useQuery<VolumeDripQuery, TError, TData>(
      ['volumeDrip', variables],
      fetcher<VolumeDripQuery, VolumeDripQueryVariables>(VolumeDripDocument, variables),
      options
    );
export const VolumeDripPeriodDocument = `
    query volumeDripPeriod($skip: Int, $first: Int, $orderBy: VolumeDripPlayer_orderBy, $orderDirection: OrderDirection, $where: VolumeDripPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: VolumeDripPeriod_orderBy, $orderDirection1: OrderDirection, $where1: VolumeDripPeriod_filter, $id: ID!, $block: Block_height) {
  volumeDripPeriod(id: $id, block: $block) {
    id
    volumeDrip {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      referral
      periodSeconds
      dripAmount
      periodCount
      deposits(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        periodIndex
        balance
      }
      periods(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        periodIndex
        totalSupply
        dripAmount
        endTime
        isDripping
      }
      deactivated
    }
    periodIndex
    totalSupply
    dripAmount
    endTime
    isDripping
  }
}
    `;
export const useVolumeDripPeriodQuery = <
      TData = VolumeDripPeriodQuery,
      TError = unknown
    >(
      variables: VolumeDripPeriodQueryVariables, 
      options?: UseQueryOptions<VolumeDripPeriodQuery, TError, TData>
    ) => 
    useQuery<VolumeDripPeriodQuery, TError, TData>(
      ['volumeDripPeriod', variables],
      fetcher<VolumeDripPeriodQuery, VolumeDripPeriodQueryVariables>(VolumeDripPeriodDocument, variables),
      options
    );
export const VolumeDripPeriodsDocument = `
    query volumeDripPeriods($skip: Int, $first: Int, $orderBy: VolumeDripPlayer_orderBy, $orderDirection: OrderDirection, $where: VolumeDripPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: VolumeDripPeriod_orderBy, $orderDirection1: OrderDirection, $where1: VolumeDripPeriod_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDripPeriod_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDripPeriod_filter, $block: Block_height) {
  volumeDripPeriods(
    skip: $skip2
    first: $first2
    orderBy: $orderBy2
    orderDirection: $orderDirection2
    where: $where2
    block: $block
  ) {
    id
    volumeDrip {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      referral
      periodSeconds
      dripAmount
      periodCount
      deposits(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        periodIndex
        balance
      }
      periods(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        periodIndex
        totalSupply
        dripAmount
        endTime
        isDripping
      }
      deactivated
    }
    periodIndex
    totalSupply
    dripAmount
    endTime
    isDripping
  }
}
    `;
export const useVolumeDripPeriodsQuery = <
      TData = VolumeDripPeriodsQuery,
      TError = unknown
    >(
      variables?: VolumeDripPeriodsQueryVariables, 
      options?: UseQueryOptions<VolumeDripPeriodsQuery, TError, TData>
    ) => 
    useQuery<VolumeDripPeriodsQuery, TError, TData>(
      ['volumeDripPeriods', variables],
      fetcher<VolumeDripPeriodsQuery, VolumeDripPeriodsQueryVariables>(VolumeDripPeriodsDocument, variables),
      options
    );
export const VolumeDripPlayerDocument = `
    query volumeDripPlayer($skip: Int, $first: Int, $orderBy: VolumeDripPlayer_orderBy, $orderDirection: OrderDirection, $where: VolumeDripPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: VolumeDripPeriod_orderBy, $orderDirection1: OrderDirection, $where1: VolumeDripPeriod_filter, $id: ID!, $block: Block_height) {
  volumeDripPlayer(id: $id, block: $block) {
    id
    volumeDrip {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      referral
      periodSeconds
      dripAmount
      periodCount
      deposits(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        periodIndex
        balance
      }
      periods(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        periodIndex
        totalSupply
        dripAmount
        endTime
        isDripping
      }
      deactivated
    }
    address
    periodIndex
    balance
  }
}
    `;
export const useVolumeDripPlayerQuery = <
      TData = VolumeDripPlayerQuery,
      TError = unknown
    >(
      variables: VolumeDripPlayerQueryVariables, 
      options?: UseQueryOptions<VolumeDripPlayerQuery, TError, TData>
    ) => 
    useQuery<VolumeDripPlayerQuery, TError, TData>(
      ['volumeDripPlayer', variables],
      fetcher<VolumeDripPlayerQuery, VolumeDripPlayerQueryVariables>(VolumeDripPlayerDocument, variables),
      options
    );
export const VolumeDripPlayersDocument = `
    query volumeDripPlayers($skip: Int, $first: Int, $orderBy: VolumeDripPlayer_orderBy, $orderDirection: OrderDirection, $where: VolumeDripPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: VolumeDripPeriod_orderBy, $orderDirection1: OrderDirection, $where1: VolumeDripPeriod_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDripPlayer_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDripPlayer_filter, $block: Block_height) {
  volumeDripPlayers(
    skip: $skip2
    first: $first2
    orderBy: $orderBy2
    orderDirection: $orderDirection2
    where: $where2
    block: $block
  ) {
    id
    volumeDrip {
      id
      comptroller {
        id
        owner
      }
      sourceAddress
      measureToken
      dripToken
      referral
      periodSeconds
      dripAmount
      periodCount
      deposits(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        address
        periodIndex
        balance
      }
      periods(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        periodIndex
        totalSupply
        dripAmount
        endTime
        isDripping
      }
      deactivated
    }
    address
    periodIndex
    balance
  }
}
    `;
export const useVolumeDripPlayersQuery = <
      TData = VolumeDripPlayersQuery,
      TError = unknown
    >(
      variables?: VolumeDripPlayersQueryVariables, 
      options?: UseQueryOptions<VolumeDripPlayersQuery, TError, TData>
    ) => 
    useQuery<VolumeDripPlayersQuery, TError, TData>(
      ['volumeDripPlayers', variables],
      fetcher<VolumeDripPlayersQuery, VolumeDripPlayersQueryVariables>(VolumeDripPlayersDocument, variables),
      options
    );
export const VolumeDripsDocument = `
    query volumeDrips($skip: Int, $first: Int, $orderBy: DripTokenPlayer_orderBy, $orderDirection: OrderDirection, $where: DripTokenPlayer_filter, $skip1: Int, $first1: Int, $orderBy1: BalanceDrip_orderBy, $orderDirection1: OrderDirection, $where1: BalanceDrip_filter, $skip2: Int, $first2: Int, $orderBy2: VolumeDrip_orderBy, $orderDirection2: OrderDirection, $where2: VolumeDrip_filter, $skip3: Int, $first3: Int, $orderBy3: VolumeDripPlayer_orderBy, $orderDirection3: OrderDirection, $where3: VolumeDripPlayer_filter, $skip4: Int, $first4: Int, $orderBy4: VolumeDripPeriod_orderBy, $orderDirection4: OrderDirection, $where4: VolumeDripPeriod_filter, $skip5: Int, $first5: Int, $orderBy5: VolumeDrip_orderBy, $orderDirection5: OrderDirection, $where5: VolumeDrip_filter, $block: Block_height) {
  volumeDrips(
    skip: $skip5
    first: $first5
    orderBy: $orderBy5
    orderDirection: $orderDirection5
    where: $where5
    block: $block
  ) {
    id
    comptroller {
      id
      owner
      players(
        skip: $skip
        first: $first
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        dripToken
        address
        balance
      }
      balanceDrips(
        skip: $skip1
        first: $first1
        orderBy: $orderBy1
        orderDirection: $orderDirection1
        where: $where1
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        dripRatePerSecond
        exchangeRateMantissa
        timestamp
        deactivated
      }
      volumeDrips(
        skip: $skip2
        first: $first2
        orderBy: $orderBy2
        orderDirection: $orderDirection2
        where: $where2
      ) {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
    }
    sourceAddress
    measureToken
    dripToken
    referral
    periodSeconds
    dripAmount
    periodCount
    deposits(
      skip: $skip3
      first: $first3
      orderBy: $orderBy3
      orderDirection: $orderDirection3
      where: $where3
    ) {
      id
      volumeDrip {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
      address
      periodIndex
      balance
    }
    periods(
      skip: $skip4
      first: $first4
      orderBy: $orderBy4
      orderDirection: $orderDirection4
      where: $where4
    ) {
      id
      volumeDrip {
        id
        sourceAddress
        measureToken
        dripToken
        referral
        periodSeconds
        dripAmount
        periodCount
        deactivated
      }
      periodIndex
      totalSupply
      dripAmount
      endTime
      isDripping
    }
    deactivated
  }
}
    `;
export const useVolumeDripsQuery = <
      TData = VolumeDripsQuery,
      TError = unknown
    >(
      variables?: VolumeDripsQueryVariables, 
      options?: UseQueryOptions<VolumeDripsQuery, TError, TData>
    ) => 
    useQuery<VolumeDripsQuery, TError, TData>(
      ['volumeDrips', variables],
      fetcher<VolumeDripsQuery, VolumeDripsQueryVariables>(VolumeDripsDocument, variables),
      options
    );
export const YieldSourcePrizePoolDocument = `
    query yieldSourcePrizePool($id: ID!, $block: Block_height) {
  yieldSourcePrizePool(id: $id, block: $block) {
    id
    yieldSource
  }
}
    `;
export const useYieldSourcePrizePoolQuery = <
      TData = YieldSourcePrizePoolQuery,
      TError = unknown
    >(
      variables: YieldSourcePrizePoolQueryVariables, 
      options?: UseQueryOptions<YieldSourcePrizePoolQuery, TError, TData>
    ) => 
    useQuery<YieldSourcePrizePoolQuery, TError, TData>(
      ['yieldSourcePrizePool', variables],
      fetcher<YieldSourcePrizePoolQuery, YieldSourcePrizePoolQueryVariables>(YieldSourcePrizePoolDocument, variables),
      options
    );
export const YieldSourcePrizePoolsDocument = `
    query yieldSourcePrizePools($skip: Int, $first: Int, $orderBy: YieldSourcePrizePool_orderBy, $orderDirection: OrderDirection, $where: YieldSourcePrizePool_filter, $block: Block_height) {
  yieldSourcePrizePools(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    yieldSource
  }
}
    `;
export const useYieldSourcePrizePoolsQuery = <
      TData = YieldSourcePrizePoolsQuery,
      TError = unknown
    >(
      variables?: YieldSourcePrizePoolsQueryVariables, 
      options?: UseQueryOptions<YieldSourcePrizePoolsQuery, TError, TData>
    ) => 
    useQuery<YieldSourcePrizePoolsQuery, TError, TData>(
      ['yieldSourcePrizePools', variables],
      fetcher<YieldSourcePrizePoolsQuery, YieldSourcePrizePoolsQueryVariables>(YieldSourcePrizePoolsDocument, variables),
      options
    );