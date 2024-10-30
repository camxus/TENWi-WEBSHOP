import { gql } from "@apollo/client";

const REMOVE_COUPONS_MUTATION = gql`
  mutation REMOVE_COUPONS($input: RemoveCouponsInput!) {
    removeCoupons(input: $input) {
      cart {
        appliedCoupons {
          code
        }
      }
    }
  }
`;

export default REMOVE_COUPONS_MUTATION;
