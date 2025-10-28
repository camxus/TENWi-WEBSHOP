import { gql } from "@apollo/client";

export const PRODUCT_BY_TAG_SLUG = gql`
  query PRODUCT_BY_TAG_SLUG($slug: ID!) {
    productTag(id: $slug, idType: SLUG) {
      id
      name
      products(first: 50, where: { orderby: { field: DATE } }) {
        nodes {
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
            salePrice
            regularPrice
            stockStatus
            id
          }
          ... on VariableProduct {
            price
            salePrice
            regularPrice
            stockStatus
            id
          }
          ... on ExternalProduct {
            price
            id
            salePrice
            regularPrice
            externalUrl
          }
          ... on GroupProduct {
            products {
              nodes {
                ... on SimpleProduct {
                  id
                  salePrice
                  regularPrice
                  price
                }
              }
            }
            id
          }
        }
      }
    }
  }
`;

export const PRODUCT_TAGS_SLUGS = gql`
  query PRODUCT_TAGS_SLUGS {
    productTags {
      nodes {
        id
        slug
      }
    }
  }
`;
