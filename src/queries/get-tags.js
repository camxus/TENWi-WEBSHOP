import { gql } from "@apollo/client";

export const GET_PRODUCT_TAGS = gql`
  query GET_PRODUCT_TAGS {
    productTags {
      nodes {
        id
        name
        slug
        isRestricted
      }
    }
  }
`;
