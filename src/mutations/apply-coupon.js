import { gql } from "@apollo/client";

const APPLY_COUPON_MUTATION = gql`
  mutation APPLY_COUPON_MUTATION($input: ApplyCouponInput!) {
    applyCoupon(input: $input) {
      applied {
        code
      }
    }
  }
`;

export default APPLY_COUPON_MUTATION;
