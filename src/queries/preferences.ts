import { gql } from "@apollo/client";

const GET_PREFS = gql`query GET_PREFS {
  tenwiPreferences {
    enableWebshop
    homepageImage
    newsletterImage
    releaseDate
    releaseMessage
    webshopImage
    releaseMessageLink
  }
}
`;

export default GET_PREFS;
