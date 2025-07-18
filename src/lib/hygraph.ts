import { GraphQLClient } from "graphql-request";

// Configure sua URL do HygraphCMS aqui
const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL || "";

if (!HYGRAPH_URL) {
  throw new Error(
    "NEXT_PUBLIC_HYGRAPH_URL environment variable is not defined"
  );
}

export const hygraphClient = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN || ""}`,
  },
});
