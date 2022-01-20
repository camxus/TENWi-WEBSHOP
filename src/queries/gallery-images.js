import { gql } from "@apollo/client";

const GALLERY_IMAGES = gql`
query GALLERY_IMAGES($search: String = "") {
  mediaItems(
    where: {search: $search, orderby: {field: TITLE, order: ASC}}
    first: 5000
  ) {
    edges {
      node {
        id
        title(format: RENDERED)
        caption
        description
        sourceUrl
      }
    }
  }
}
  `;
export default GALLERY_IMAGES;
