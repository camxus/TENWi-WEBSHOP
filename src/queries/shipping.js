import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
export const GET_SHIPPING_CLASSES = gql`
  query GET_SHIPPING_CLASSES {
    shippingClasses {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export const GET_SHIPPING_METHODS = gql`
  query GET_SHIPPING_METHODS {
    cart {
      availableShippingMethods {
        rates {
          cost
          id
          label
        }
      }
    }
  }
`;
// export const GET_SHIPPING_METHODS = gql`query GET_SHIPPING_METHODS {
//   shippingMethods {
//     edges {
//       node {
//         id
//         title
//         databaseId
//       }
//     }
//   }
// }

// `;
