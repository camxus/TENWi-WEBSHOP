import LayoutPortfolio from "../../../src/components/LayoutPortfolio.js";
import Gallery from "../../../src/components/Portfolio/Gallery.js";

import { useRouter } from "next/router";
import client from "../../../src/components/ApolloClient.js";

import { GET_POST_BY_SLUG } from "../../../src/queries/get-posts.js";
import GALLERY_IMAGES from "../../../src/queries/gallery-images.js";

import { useState, useEffect } from "react";
import Image from "next/image";

import style from "../../../src/styles/portfolio-posts.module.css";

export default function Product({ images, post }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <></>;
  }

  // const [activeCount, setActiveCount] = useState(0)
  let activeCount = 0;

  return (
    <LayoutPortfolio>
      <div className="relative w-full overflow-x-hidden">
        <Gallery images={images} title={post.title}></Gallery>
        {/* <div className={`${style["post-title"]}`}>
                    {post.title}
                </div> */}
        <div
          className={`${style["post-content"]}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <div className={`${style["post-description-images"]}`}>
          {images &&
            images.map(
              (image) =>
                // activeCount > 5 ? setActiveCount(0) : ""
                // (activeCount > 5 && activeCount = 0 )
                image.active == true &&
                (activeCount =
                  activeCount < 5 ? (activeCount += 1) : (activeCount = 1)) && (
                  // (activeCount < 5 ? setActiveCount(activeCount + 1): setActiveCount(1))
                  <div className={style[`post-description-container`]}>
                    <div
                      className={style[`description-image-${activeCount}`]}
                      style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
                    >
                      <Image
                        src={image.node.sourceUrl}
                        layout="fill"
                        objectFit="contain"
                        className="object-center"
                      />
                    </div>
                    <div
                      className={style[`description-image-text-${activeCount}`]}
                      style={{ transform: `translateY(-${offsetY * 0.12}px)` }}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: image.node.description
                            ? image.node.description
                            : "",
                        }}
                      ></span>
                    </div>
                  </div>
                )
              // setActiveCount(activeCount + 1)

              // : ""})
            )}
        </div>
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
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

  // Fetch category details
  const { data: imageData } = await client.query({
    query: GALLERY_IMAGES,
    variables: { search: postData.post.title },
  });

  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: slug },
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

  const imageslist = (images as any[]).reduce(
    (prev, image) => {
      const caption = extractCaptionText(image.node.caption.split("\n")[0]);

      if (caption.toLowerCase().includes(data.post.title.toLowerCase())) {
        return [
          ...prev,
          {
            node: image.node,
            active: caption.includes("active"),
            gallery: caption.includes("slide"),
          },
        ];
      }
    },
    []
  );

  return {
    props: {
      images: imageslist,
      post: data.post ?? [],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const pathsData = [];

  return {
    paths: pathsData,
    fallback: true,
  };
}
