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
          }
          ... on VariableProduct {
          price
          regularPrice
          id
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

export default PRODUCTS_AND_CATEGORIES_QUERY;
