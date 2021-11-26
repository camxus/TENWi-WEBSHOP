import { gql } from "@apollo/client";


export const GET_POST_BY_SLUG = gql`query POSTS ($slug: ID!){
  post(id: $slug, idType: SLUG) {
    id
    slug
    title
    content
  }
}
`;
  
export const POSTS_SLUGS = gql`query POSTS {
  posts {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`;