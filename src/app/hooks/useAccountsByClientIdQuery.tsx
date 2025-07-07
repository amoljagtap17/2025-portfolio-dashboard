import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../gql/gql";

const accountsByClientIdWithVariablesqueryDocument = graphql(/* GraphQL */ `
  query AccountsByClientId($clientId: ID!) {
    accountsByClientId(clientId: $clientId) {
      id
      accountNumber
    }
  }
`);

function userQueryOptions(clientId: string) {
  return queryOptions({
    queryKey: ["client", clientId, "accounts"],
    queryFn: async () =>
      request(
        "http://localhost:3000/graphql",
        accountsByClientIdWithVariablesqueryDocument,
        {
          clientId,
        }
      ),
  });
}

export function useAccountsByClientIdQuery(clientId: string) {
  return useSuspenseQuery(userQueryOptions(clientId));
}
