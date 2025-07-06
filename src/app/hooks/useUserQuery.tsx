import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "../../gql/gql";

const userWithVariablesqueryDocument = graphql(/* GraphQL */ `
  query User($userId: ID!) {
    user(id: $userId) {
      id
      username
      email
      displayName
      firm {
        id
        name
        clients {
          id
          name
        }
      }
    }
  }
`);

function userQueryOptions(userId: string) {
  return queryOptions({
    queryKey: ["user", userId],
    queryFn: async () =>
      request("http://localhost:3000/graphql", userWithVariablesqueryDocument, {
        userId,
      }),
  });
}

export function useUserQuery() {
  return useSuspenseQuery(
    userQueryOptions("a1cd8eeb-f2a6-4265-87e4-d4c28bb0abc8")
  );
}
