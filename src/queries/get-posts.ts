import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query POSTS($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
    }
  }
`;

export const POSTS_SLUGS = gql`
  query POSTS {
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
export const GET_POST_CATEGORIES = gql`
  query GET_POST_CATEGORIES {
    categories {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export const GET_POST_CATEGORY_BY = gql`
  query GET_POST_CATEGORIES($slug: [String] = "") {
    categories(where: { slug: $slug }) {
      nodes {
        name
        id
        slug
      }
    }
  }
`;

export const GET_POSTS_BY = gql`
  query POSTS($categoryName: String!) {
    posts(where: { categoryName: $categoryName }) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`;

export const GET_SIZE_CHARTS = gql`
  query SIZE_CHARTS(
    $search: String = "STANDARD"
    $categoryName: String = "Size Charts"
  ) {
    posts(where: { categoryName: $categoryName, search: $search }) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`;
