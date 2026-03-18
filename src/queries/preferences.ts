import { gql } from "@apollo/client";

const GET_PREFS = gql`query GET_PREFS {
  tenwiPreferences {
    enableWebshop
    showPortfolio
    homepageImage
    newsletterImage
    showReleaseMessage
    releaseDate
    releaseMessage
    webshopImage
    releaseMessageLink
  }
}
`;

export default GET_PREFS;
