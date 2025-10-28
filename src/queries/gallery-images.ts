import { gql } from "@apollo/client";

export type MediaItemNode = {
  id: string;
  title: string;
  caption: string;
  description: string;
  sourceUrl: string;
};

export type MediaItemEdge = {
  node: MediaItemNode;
};


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

