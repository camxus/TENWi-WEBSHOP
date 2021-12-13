import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql`
query RELATED_ITEMS_BY_ID ($input: ID!) {
    product(id: $input, idType: DATABASE_ID) {
      related(first: 4) {
        edges {
          node {
            id
            link
            name
            image {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default PRODUCTS_AND_CATEGORIES_QUERY;
