import { gql } from "@apollo/client";

const GALLERY_IMAGES = gql`
query GALLERY_IMAGES {
    mediaItems(first: 5000) {
      edges {
        node {
          id
          title(format: RENDERED)
          sourceUrl
        }
      }
    }
  }
  `;
export default GALLERY_IMAGES;
