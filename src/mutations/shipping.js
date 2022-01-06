import { gql } from "@apollo/client";

export const POST_SHIPPING_CLASS = gql` 
mutation POST_SHIPPING_CLASS($input: UpdateShippingClassInput!) {
  updateShippingClass(input: $input) {
    clientMutationId
    shippingClass {
      name
      id
    }
  }
}
`;  

export const POST_SHIPPING_METHOD = gql`
mutation POST_SHIPPING_METHOD($input: UpdateShippingMethodInput!) {
  updateShippingMethod(input: $input){
    clientMutationId
        cart {
          chosenShippingMethods
          shippingTotal
          total
          subtotal
        }
    }
  }
`;
