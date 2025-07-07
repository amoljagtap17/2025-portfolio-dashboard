import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../gql/gql";

const holdingsByAccountIdWithVariablesqueryDocument = graphql(/* GraphQL */ `
  query HoldingsByAccount($accountId: ID!) {
    holdingsByAccount(accountId: $accountId) {
      id
      marketValue
      price
      quantity
      asOfDate
      security {
        id
        cusip
        isin
        name
        securityType
        ticker
        assetAllocation {
          broadAssetClass {
            label
          }
          assetClass {
            label
          }
          subClass {
            label
          }
          style {
            label
          }
        }
      }
      performanceReturn {
        entityType
        id
        mdtReturnPercent
        qtdReturnPercent
        ytdReturnPercent
        benchmarkReturnPercent
        asOfDate
        benchmark {
          id
          code
          label
        }
      }
    }
  }
`);

function userQueryOptions(accountId: string) {
  return queryOptions({
    queryKey: ["account", accountId, "holdings"],
    queryFn: async () =>
      request(
        "http://localhost:3000/graphql",
        holdingsByAccountIdWithVariablesqueryDocument,
        {
          accountId,
        }
      ),
  });
}

export function useHoldingsByAccountIdQuery(accountId: string) {
  return useSuspenseQuery(userQueryOptions(accountId));
}
