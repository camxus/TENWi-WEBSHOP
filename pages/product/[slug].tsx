import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
import client from "../../src/components/ApolloClient";
import AddToCartButton from "../../src/components/cart/AddToCartButton";
import {
  PRODUCT_BY_SLUG_QUERY,
  PRODUCT_SLUGS,
} from "../../src/queries/product-by-slug";
import RELATED_ITEMS_QUERY from "../../src/queries/related-items.js";

import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import prodstyles from "../../src/styles/product.module.css";

import { Key, useEffect, useRef } from "react";

import Product from "../../src/components/Product";
import { ArrowDown } from "../../src/components/icons";

export default function product({ product, variations, variationProducts, relatedItems }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    // return <IntroImage></IntroImage>
    return <></>;
  }

  const images = [product.image, ...product?.galleryImages?.nodes];

  const imageContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    {
      if (images.length > 1) {
        setTimeout(() => {
          if (imageContainer.current) {
            imageContainer.current.scrollTo({ top: 100, behavior: "smooth" });
            setTimeout(() => {
              if (imageContainer.current) {
                imageContainer.current.scrollTo({ top: 0, behavior: "smooth" });
              }
            }, 1000);
          }
        }, 1000);
      }
    }
  }, [imageContainer]);

  return (
    <Layout>
      {product ? (
        <div>
          <div className={prodstyles.card}>
            {/* <div className={prodstyles.card_header}>{product.name}</div> */}
            <div className={prodstyles.card_body}>
              <div
                id="element"
                ref={imageContainer}
                className={prodstyles.image_container}
              >
                {images.length
                  ? images.map((image) => (
                      <img
                        src={image ? image.sourceUrl : ""}
                        alt="Product Image"
                        className={prodstyles.image}
                        // objectFit="cover"
                      />
                    ))
                  : ""}
                {images.length > 1 && (
                  <div
                    className="absolute flex flex-col items-center bottom-0 text-white"
                    style={{
                      animation: "fadeOut 1s ease-in-out 2s forwards",
                      bottom: 0,
                    }}
                  >
                    <span
                      className="bg-black p-2 text-sm"
                      style={{ borderRadius: "9999px", padding: "0.5rem" }}
                    >
                      Scroll here to see more
                    </span>
                    <ArrowDown className="rounded-full" fill="white" />
                  </div>
                )}
              </div>
              <div className={`${prodstyles["right-wrapper"]}`}>
                <div className={prodstyles.rightContainer}>
                  <div className={prodstyles.rightContent}>
                    <div className={prodstyles["TITLE"]}>
                      <Controller container="#element">
                        <Scene duration="1000%" triggerElement={imageContainer}>
                          {/* <Timeline wrapper={<div id="pinContainer" />}> */}
                          <Tween from={{ x: "0%" }} to={{ x: "-100%" }}>
                            <h4
                              className={
                                (prodstyles["left"], prodstyles.card_title)
                              }
                            >
                              {Array(20)
                                .fill(product.name)
                                .map((name) => name + "  ")}
                            </h4>
                          </Tween>
                        </Scene>
                      </Controller>
                      <Controller container="#element">
                        <Scene
                          duration="1000%"
                          triggerElement={imageContainer}
                          // indicators
                        >
                          <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
                            <h4
                              className={`${prodstyles["card_title"]} ${prodstyles["right"]}`}
                            >
                              {Array(20)
                                .fill(product.name)
                                .map((name) => name + "  ")}
                            </h4>
                          </Tween>
                          {/* </Timeline> */}
                        </Scene>
                      </Controller>
                    </div>
                    <div className={prodstyles.card_text}>
                      <h3 className={prodstyles.subtitle}>{product.name}</h3>
                      <span
                        className="text-sm"
                        dangerouslySetInnerHTML={{
                          __html: product.description
                            ? product.description
                            : "",
                        }}
                      />
                    </div>
                    <span
                      className={prodstyles.card_price}
                      dangerouslySetInnerHTML={{
                        __html: product.price ? product.price : "SOLD OUT",
                      }}
                    />
                  </div>
                </div>
                <div className={prodstyles.add_to_cart}>
                  {product.price && product.stockStatus === "IN_STOCK" && (
                    <AddToCartButton
                      variations={variations}
                      variationProducts={variationProducts}
                      product={product}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            {relatedItems ? (
              <div>
                <div className={`${prodstyles["related-items-header"]}`}>
                  <h1>RELATED ITEMS</h1>
                </div>
                <div className={`${prodstyles["related-items"]}`}>
                  {relatedItems.map((item: { id: string; node: any }) => (
                    <Product key={item.id} product={item.node} />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const {
    params: { slug },
  } = context;

  const {
    data: { product },
  } = await client.query({
    query: PRODUCT_BY_SLUG_QUERY,
    variables: { slug },
  });

  const variationProducts = product.variations?.nodes || [];
  const variations = product.localAttributes?.nodes || [];
  const relatedItems = await client.query({
    query: RELATED_ITEMS_QUERY,
    variables: { input: product.productId },
  });

  return {
    props: {
      product: product || {},
      variations: variations || [],
      variationProducts: variationProducts || [],
      relatedItems: relatedItems
        ? relatedItems.data.product.related.edges
        : null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const {
    data: {
      products: { nodes: products },
    },
  } = await client.query({
    query: PRODUCT_SLUGS,
  });

  const pathsData: { params: { slug: any } }[] = [];

  products.map((product: { slug: any }) => {
    if (product?.slug) {
      pathsData.push({ params: { slug: product?.slug } });
    }
  });

  return {
    paths: pathsData,
    fallback: true,
  };
}
