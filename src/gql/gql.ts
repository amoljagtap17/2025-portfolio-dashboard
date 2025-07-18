/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  query AccountsByClientId($clientId: ID!) {\n    accountsByClientId(clientId: $clientId) {\n      id\n      accountNumber\n    }\n  }\n": typeof types.AccountsByClientIdDocument;
  "\n  query HoldingsByAccount($accountId: ID!) {\n    holdingsByAccount(accountId: $accountId) {\n      id\n      marketValue\n      price\n      quantity\n      asOfDate\n      security {\n        id\n        cusip\n        isin\n        name\n        securityType\n        ticker\n        assetAllocation {\n          broadAssetClass {\n            label\n          }\n          assetClass {\n            label\n          }\n          subClass {\n            label\n          }\n          style {\n            label\n          }\n        }\n      }\n      performanceReturn {\n        entityType\n        id\n        mdtReturnPercent\n        qtdReturnPercent\n        ytdReturnPercent\n        benchmarkReturnPercent\n        asOfDate\n        benchmark {\n          id\n          code\n          label\n        }\n      }\n    }\n  }\n": typeof types.HoldingsByAccountDocument;
  "\n  query User($userId: ID!) {\n    user(id: $userId) {\n      id\n      username\n      email\n      displayName\n      firm {\n        id\n        name\n        clients {\n          id\n          name\n        }\n      }\n    }\n  }\n": typeof types.UserDocument;
};
const documents: Documents = {
  "\n  query AccountsByClientId($clientId: ID!) {\n    accountsByClientId(clientId: $clientId) {\n      id\n      accountNumber\n    }\n  }\n":
    types.AccountsByClientIdDocument,
  "\n  query HoldingsByAccount($accountId: ID!) {\n    holdingsByAccount(accountId: $accountId) {\n      id\n      marketValue\n      price\n      quantity\n      asOfDate\n      security {\n        id\n        cusip\n        isin\n        name\n        securityType\n        ticker\n        assetAllocation {\n          broadAssetClass {\n            label\n          }\n          assetClass {\n            label\n          }\n          subClass {\n            label\n          }\n          style {\n            label\n          }\n        }\n      }\n      performanceReturn {\n        entityType\n        id\n        mdtReturnPercent\n        qtdReturnPercent\n        ytdReturnPercent\n        benchmarkReturnPercent\n        asOfDate\n        benchmark {\n          id\n          code\n          label\n        }\n      }\n    }\n  }\n":
    types.HoldingsByAccountDocument,
  "\n  query User($userId: ID!) {\n    user(id: $userId) {\n      id\n      username\n      email\n      displayName\n      firm {\n        id\n        name\n        clients {\n          id\n          name\n        }\n      }\n    }\n  }\n":
    types.UserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query AccountsByClientId($clientId: ID!) {\n    accountsByClientId(clientId: $clientId) {\n      id\n      accountNumber\n    }\n  }\n"
): (typeof documents)["\n  query AccountsByClientId($clientId: ID!) {\n    accountsByClientId(clientId: $clientId) {\n      id\n      accountNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query HoldingsByAccount($accountId: ID!) {\n    holdingsByAccount(accountId: $accountId) {\n      id\n      marketValue\n      price\n      quantity\n      asOfDate\n      security {\n        id\n        cusip\n        isin\n        name\n        securityType\n        ticker\n        assetAllocation {\n          broadAssetClass {\n            label\n          }\n          assetClass {\n            label\n          }\n          subClass {\n            label\n          }\n          style {\n            label\n          }\n        }\n      }\n      performanceReturn {\n        entityType\n        id\n        mdtReturnPercent\n        qtdReturnPercent\n        ytdReturnPercent\n        benchmarkReturnPercent\n        asOfDate\n        benchmark {\n          id\n          code\n          label\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query HoldingsByAccount($accountId: ID!) {\n    holdingsByAccount(accountId: $accountId) {\n      id\n      marketValue\n      price\n      quantity\n      asOfDate\n      security {\n        id\n        cusip\n        isin\n        name\n        securityType\n        ticker\n        assetAllocation {\n          broadAssetClass {\n            label\n          }\n          assetClass {\n            label\n          }\n          subClass {\n            label\n          }\n          style {\n            label\n          }\n        }\n      }\n      performanceReturn {\n        entityType\n        id\n        mdtReturnPercent\n        qtdReturnPercent\n        ytdReturnPercent\n        benchmarkReturnPercent\n        asOfDate\n        benchmark {\n          id\n          code\n          label\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query User($userId: ID!) {\n    user(id: $userId) {\n      id\n      username\n      email\n      displayName\n      firm {\n        id\n        name\n        clients {\n          id\n          name\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query User($userId: ID!) {\n    user(id: $userId) {\n      id\n      username\n      email\n      displayName\n      firm {\n        id\n        name\n        clients {\n          id\n          name\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
