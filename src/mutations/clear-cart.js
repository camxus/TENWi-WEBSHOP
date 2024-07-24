import { gql } from "@apollo/client";

const REMOVE_ITEMS_FROM_CART_MUTATION = gql`
mutation REMOVE_ITEMS_FROM_CART_MUTATION( $input: RemoveItemsFromCartInput! ) {
  removeItemsFromCart(input: $input) {
    cart {
      contents {
        nodes {
          key
          product {
            node {
              ... on VariableProduct {
                variations {
                  nodes {
                    id
                    name
                    databaseId
                  }
                }
              }
            
              id
              productId: databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                srcSet
                altText
                title
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  srcSet
                  altText
                  title
                }
              }
            }
          }
          variation {
            node {
              id
              variationId: databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
            attributes {
              id
              name
              value
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
      appliedCoupons {
        code
        discountAmount
        discountTax
      }
      subtotal
      subtotalTax
      shippingTax
      shippingTotal
      total
      totalTax
      feeTax
      feeTotal
      discountTax
      discountTotal
      chosenShippingMethods
      availableShippingMethods {
        rates {
          cost
          id
          label
        }
      }
    }
  }
}
`;

export default REMOVE_ITEMS_FROM_CART_MUTATION;
