import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const RELATED_ITEMS_QUERY = gql`
query RELATED_ITEMS_BY_ID ($input: ID!) {
    product(id: $input, idType: DATABASE_ID) {
        related(first: 4) {
          edges {
            node {
              id
          productId: databaseId
          averageRating
          slug
          description
          image {
          id
          uri
          title
          srcSet
          sourceUrl
          }
          name
          ... on SimpleProduct {
          price
          regularPrice
          id
          stockStatus
          }
          ... on VariableProduct {
          price
          regularPrice
          id
          stockStatus
          }
          ... on ExternalProduct {
          price
          id
          regularPrice
          externalUrl
          }
          ... on GroupProduct {
          products {
            nodes {
            ... on SimpleProduct {
              id
              regularPrice
              price
            }
            }
          }
              }
            }
          }
        }
      }
    }
    
    
`;

export default RELATED_ITEMS_QUERY;
