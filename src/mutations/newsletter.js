import { gql } from "@apollo/client";

const NEWSLETTER_MUTATION = gql`
mutation RegisterNewsletter($input: RegisterCustomerInput!) {
    registerCustomer(input: $input) {
      customer {
        email
      }
    }
  }
  `;

export default NEWSLETTER_MUTATION;
