import { gql } from "@apollo/client";

const ORDER_MUTATION = gql`
mutation ORDER_MUTATION( $input: CreateOrderInput! ) {
  createOrder(input: $input) {
    clientMutationId
    order {
      id
      orderKey
      orderNumber
    }
  }
}
`;

export default ORDER_MUTATION;
