import { gql } from "@apollo/client";

const GALLERY_IMAGES = gql`
query GALLERY_IMAGES ($search: String = "") {
  mediaItems(where: {search: $search}, first: 5000) {
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
