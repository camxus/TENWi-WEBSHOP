import LayoutPortfolio from "../../src/components/LayoutPortfolio.js";
import PostCard from "../../src/components/Portfolio/PostCard.js";

import { useRouter } from "next/router";
import client from "../../src/components/ApolloClient.js";

import {
  GET_POSTS_BY,
  GET_POST_CATEGORY_BY,
  POSTS_SLUGS,
} from "../../src/queries/get-posts.js";
import GALLERY_IMAGES from "../../src/queries/gallery-images.js";

import style from "../../src/styles/postcards.module.css";

export default function Product({ posts, title }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <></>;
  }
  return (
    <LayoutPortfolio>
      <div
        className={`${style["posts-body"]}`}
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <PostCard
          className="sticky top-0"
          style={{
            borderTop: "1px solid black",
            borderRight: "1px solid black",
          }}
          post={{ title: `${title.toUpperCase()}` }}
          image={[]}
        ></PostCard>
        {posts && (
          <div>
            {posts.map((post) => (
              <PostCard
                post={post.post}
                image={post.image}
                style={{
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                }}
              ></PostCard>
            ))}
          </div>
        )}
      </div>
    </LayoutPortfolio>
  );
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;
  // Fetch posts by category
  const { data: postData } = await client.query({
    query: GET_POSTS_BY,
    variables: { categoryName: slug },
  });

  // Fetch category details
  const {
    data: {
      categories: {
        nodes: [category],
      },
    },
  } = await client.query({
    query: GET_POST_CATEGORY_BY,
    variables: { slug },
  });

  const { name: title } = category;

  // Fetch gallery images
  const { data: imageData } = await client.query({
    query: GALLERY_IMAGES,
    variables: { search: title },
  });

  const images = imageData.mediaItems.edges;

  // Helper function to extract caption text
  const extractCaptionText = (caption: string) => {
    if (!caption.includes(">")) return "";

    const start = caption.indexOf(">") + 1;
    let end = caption.lastIndexOf("<");

    if (caption.includes("&")) {
      end = caption.lastIndexOf("&");
    }

    return caption.substring(start, end);
  };

  const postsArray = (postData.posts.edges as any[]).reduce((prev, post) => {
    if (images.length === 0) {
      return prev;
    } else {
      const coverImage = images.find((image) => {
        const caption = extractCaptionText(image.node.caption.split("\n")[0]);

        if (
          caption.toLowerCase().includes(post.node.title.toLowerCase()) &&
          caption.toLowerCase().includes(title.toLowerCase()) &&
          caption.toLowerCase().includes("cover")
        ) {
          return image
        }
      });

      if (coverImage) {
        return [...prev, { post: post.node, image: coverImage.node }];
      }
      return prev
    }
  }, []);

  return {
    props: {
      posts: postsArray,
      title: title || "",
    },
    revalidate: 0,
  };
}

export async function getStaticPaths() {
  const pathsData = [];

  return {
    paths: pathsData,
    fallback: true,
  };
}
