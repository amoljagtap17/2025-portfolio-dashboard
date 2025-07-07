/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

/** Account entity representing a financial account in the system */
export type Account = {
  __typename?: "Account";
  /** Account number */
  accountNumber: Scalars["String"]["output"];
  /** Type of the account */
  accountType: Scalars["String"]["output"];
  /** Client associated with the account */
  client: Client;
  /** Unique identifier for the account */
  id: Scalars["ID"]["output"];
};

/** Asset Allocation entity representing a financial asset allocation in the system */
export type AssetAllocation = {
  __typename?: "AssetAllocation";
  /** The asset class associated with the asset allocation */
  assetClass: AssetClass;
  /** The broad asset class associated with the asset allocation */
  broadAssetClass: BroadAssetClass;
  /** Unique identifier for the asset allocation */
  id: Scalars["ID"]["output"];
  /** The style class associated with the asset allocation */
  style: Style;
  /** The sub class associated with the asset allocation */
  subClass: SubClass;
};

/** Asset Class */
export type AssetClass = {
  __typename?: "AssetClass";
  /** Code for the asset class */
  code: Scalars["String"]["output"];
  /** Description of the asset class */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier for the asset class */
  id: Scalars["ID"]["output"];
  /** Label for the asset class */
  label: Scalars["String"]["output"];
};

/** Benchmark entity representing a benchmark for performance returns */
export type Benchmark = {
  __typename?: "Benchmark";
  /** The name of the benchmark */
  code: Scalars["String"]["output"];
  /** Unique identifier for the benchmark */
  id: Scalars["ID"]["output"];
  /** The label or description of the benchmark */
  label: Scalars["String"]["output"];
};

/** Broad Asset Class */
export type BroadAssetClass = {
  __typename?: "BroadAssetClass";
  /** Code for the broad asset class */
  code: Scalars["String"]["output"];
  /** Description of the broad asset class */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier for the broad asset class */
  id: Scalars["ID"]["output"];
  /** Label for the broad asset class */
  label: Scalars["String"]["output"];
};

/** Client entity representing a client in the system */
export type Client = {
  __typename?: "Client";
  /** Accounts associated with the client */
  accounts: Array<Account>;
  /** Unique identifier for the client */
  id: Scalars["ID"]["output"];
  /** Name of the client */
  name: Scalars["String"]["output"];
};

/** Firm entity representing a financial firm or institution */
export type Firm = {
  __typename?: "Firm";
  /** Clients associated with the firm */
  clients: Array<Client>;
  /** Unique identifier for the firm */
  id: Scalars["ID"]["output"];
  /** Name of the firm */
  name: Scalars["String"]["output"];
  /** Users associated with the firm */
  users: Array<User>;
};

/** Holding entity representing a financial holding in the system */
export type Holding = {
  __typename?: "Holding";
  /** Date when the holding was last updated */
  asOfDate: Scalars["DateTime"]["output"];
  /** Unique identifier for the holding */
  id: Scalars["ID"]["output"];
  /** Market value of the holding */
  marketValue: Scalars["Float"]["output"];
  /** The performance return for the holding as of the specified date */
  performanceReturn?: Maybe<PerformanceReturn>;
  /** Price of the holding */
  price: Scalars["Float"]["output"];
  /** Quantity of the holding */
  quantity: Scalars["Float"]["output"];
  /** Security associated with the holding */
  security: Security;
};

/** Performance Return entity representing performance data */
export type PerformanceReturn = {
  __typename?: "PerformanceReturn";
  /** The date for which the performance return is calculated */
  asOfDate: Scalars["DateTime"]["output"];
  /** The benchmark associated with the performance return */
  benchmark?: Maybe<Benchmark>;
  /** The percentage return for the benchmark */
  benchmarkReturnPercent: Scalars["Float"]["output"];
  /** The unique identifier of the entity */
  entityId: Scalars["ID"]["output"];
  /** The entity type for which the performance return is calculated */
  entityType: Scalars["String"]["output"];
  /** Unique identifier for the performance return */
  id: Scalars["ID"]["output"];
  /** The percentage return for the entity */
  mdtReturnPercent: Scalars["Float"]["output"];
  /** The percentage return for the entity in the previous period */
  qtdReturnPercent: Scalars["Float"]["output"];
  /** The percentage return for the entity in the year-to-date period */
  ytdReturnPercent: Scalars["Float"]["output"];
};

export type Query = {
  __typename?: "Query";
  /** Get all accounts for a specific client */
  accountsByClientId: Array<Account>;
  /** Get an asset class by its ID */
  assetClass: AssetClass;
  /** Get all asset classes */
  assetClasses: Array<AssetClass>;
  /** Get all benchmarks */
  benchmarks: Array<Benchmark>;
  /** Get a broad asset class by its ID */
  broadAssetClass: BroadAssetClass;
  /** Get all broad asset classes */
  broadAssetClasses: Array<BroadAssetClass>;
  firm: Firm;
  /** Get all holdings for a specific account */
  holdingsByAccount: Array<Holding>;
  /** Get the performance return for a specific entity and date */
  performanceReturn?: Maybe<PerformanceReturn>;
  /** Get a style by its ID */
  style: Style;
  /** Get all styles */
  styles: Array<Style>;
  /** Get a sub-class by its ID */
  subClass: SubClass;
  /** Get all sub-classes */
  subClasses: Array<SubClass>;
  user: User;
};

export type QueryAccountsByClientIdArgs = {
  clientId: Scalars["ID"]["input"];
};

export type QueryAssetClassArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryBroadAssetClassArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryFirmArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryHoldingsByAccountArgs = {
  accountId: Scalars["ID"]["input"];
};

export type QueryPerformanceReturnArgs = {
  asOfDate: Scalars["DateTime"]["input"];
  entityId: Scalars["String"]["input"];
  entityType: Scalars["String"]["input"];
};

export type QueryStyleArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerySubClassArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

/** Security entity representing a financial security in the system */
export type Security = {
  __typename?: "Security";
  /** Asset allocation associated with the security */
  assetAllocation: AssetAllocation;
  /** CUSIP (Committee on Uniform Securities Identification Procedures) of the security */
  cusip: Scalars["String"]["output"];
  /** Unique identifier for the security */
  id: Scalars["ID"]["output"];
  /** ISIN (International Securities Identification Number) of the security */
  isin: Scalars["String"]["output"];
  /** Name of the security */
  name: Scalars["String"]["output"];
  /** Type of the security (e.g., stock, bond) */
  securityType: Scalars["String"]["output"];
  /** Ticker symbol of the security */
  ticker: Scalars["String"]["output"];
};

/** Style Entity */
export type Style = {
  __typename?: "Style";
  /** Code for the style class */
  code: Scalars["String"]["output"];
  /** Description of the style class */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier for the style class */
  id: Scalars["ID"]["output"];
  /** Label for the style class */
  label: Scalars["String"]["output"];
};

/** Sub Class Entity */
export type SubClass = {
  __typename?: "SubClass";
  /** Code for the sub class */
  code: Scalars["String"]["output"];
  /** Description of the sub class */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier for the sub class */
  id: Scalars["ID"]["output"];
  /** Label for the sub class */
  label: Scalars["String"]["output"];
};

/** User entity representing a user in the system */
export type User = {
  __typename?: "User";
  /** Display name of the user */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** Email of the user */
  email: Scalars["String"]["output"];
  /** Firm associated with the user */
  firm: Firm;
  /** Unique identifier for the user */
  id: Scalars["ID"]["output"];
  /** Username of the user */
  username: Scalars["String"]["output"];
};

export type AccountsByClientIdQueryVariables = Exact<{
  clientId: Scalars["ID"]["input"];
}>;

export type AccountsByClientIdQuery = {
  __typename?: "Query";
  accountsByClientId: Array<{
    __typename?: "Account";
    id: string;
    accountNumber: string;
  }>;
};

export type HoldingsByAccountQueryVariables = Exact<{
  accountId: Scalars["ID"]["input"];
}>;

export type HoldingsByAccountQuery = {
  __typename?: "Query";
  holdingsByAccount: Array<{
    __typename?: "Holding";
    id: string;
    marketValue: number;
    price: number;
    quantity: number;
    asOfDate: any;
    security: {
      __typename?: "Security";
      id: string;
      cusip: string;
      isin: string;
      name: string;
      securityType: string;
      ticker: string;
      assetAllocation: {
        __typename?: "AssetAllocation";
        broadAssetClass: { __typename?: "BroadAssetClass"; label: string };
        assetClass: { __typename?: "AssetClass"; label: string };
        subClass: { __typename?: "SubClass"; label: string };
        style: { __typename?: "Style"; label: string };
      };
    };
    performanceReturn?: {
      __typename?: "PerformanceReturn";
      entityType: string;
      id: string;
      mdtReturnPercent: number;
      qtdReturnPercent: number;
      ytdReturnPercent: number;
      benchmarkReturnPercent: number;
      asOfDate: any;
      benchmark?: {
        __typename?: "Benchmark";
        id: string;
        code: string;
        label: string;
      } | null;
    } | null;
  }>;
};

export type UserQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
}>;

export type UserQuery = {
  __typename?: "Query";
  user: {
    __typename?: "User";
    id: string;
    username: string;
    email: string;
    displayName?: string | null;
    firm: {
      __typename?: "Firm";
      id: string;
      name: string;
      clients: Array<{ __typename?: "Client"; id: string; name: string }>;
    };
  };
};

export const AccountsByClientIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AccountsByClientId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "clientId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "accountsByClientId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "clientId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "accountNumber" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountsByClientIdQuery,
  AccountsByClientIdQueryVariables
>;
export const HoldingsByAccountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "HoldingsByAccount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "accountId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "holdingsByAccount" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "accountId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "accountId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "marketValue" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "quantity" } },
                { kind: "Field", name: { kind: "Name", value: "asOfDate" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "security" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "cusip" } },
                      { kind: "Field", name: { kind: "Name", value: "isin" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "securityType" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ticker" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "assetAllocation" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "broadAssetClass" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "assetClass" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "subClass" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "style" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "performanceReturn" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "entityType" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mdtReturnPercent" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "qtdReturnPercent" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ytdReturnPercent" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "benchmarkReturnPercent" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "asOfDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "benchmark" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "code" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "label" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  HoldingsByAccountQuery,
  HoldingsByAccountQueryVariables
>;
export const UserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "User" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "displayName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "firm" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "clients" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
