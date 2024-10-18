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

import { Key, SetStateAction, useEffect, useRef, useState } from "react";

import Product from "../../src/components/Product";
import { ArrowDown } from "../../src/components/icons";
import useJustifiedText from "../../src/hooks/useJustifyText";
import { isEmpty, size } from "lodash";
import { GET_POST_BY_SLUG, GET_SIZE_CHARTS } from "../../src/queries/get-posts";
import SizeChart from "../../src/components/SizeChart";
import Accordion from "../../src/components/Accordion";

export default function product({
  product,
  options,
  variations,
  relatedItems,
  sizeChart,
}: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    // return <IntroImage></IntroImage>
    return <></>;
  }

  const imageContainer = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  const [images, setImages] = useState<any>([
    product.image,
    ...product?.galleryImages?.nodes,
  ]);
  const [sizeChartOpen, setSizeChartOpen] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] = useState<any>({});

  useJustifiedText(subtitleRef);

  useEffect(() => {
    if (!isEmpty(selectedVariation)) {
      setImages([selectedVariation.image]);
    } else {
      setImages([product.image, ...product?.galleryImages?.nodes]);
    }
  }, [selectedVariation]);

  useEffect(() => {
    if (!isEmpty(product)) {
      setImages([product.image, ...product?.galleryImages?.nodes]);
      setSelectedVariation({});
    }
  }, [product]);

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
                  ? images.map(
                      (image: {
                        id: string;
                        sourceUrl: string | undefined;
                      }) => (
                        <img
                          key={image.id}
                          src={image ? image.sourceUrl : ""}
                          alt="Product Image"
                          className={prodstyles.image}
                          // objectFit="cover"
                        />
                      )
                    )
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
                      className="bg-black p-2 text-xs"
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
                      <h3 ref={subtitleRef} className={prodstyles.subtitle}>
                        {product.name}
                      </h3>
                      <div className="flex flex-col" style={{ gap: "0.5rem" }}>
                        {sizeChart && (
                          <div className="flex w-full">
                            <button
                              className="text-slate-400	hover:text-black transition-all text-sm w-full flex"
                              onClick={() => setSizeChartOpen(true)}
                            >
                              Size Chart
                            </button>
                          </div>
                        )}
                        <Accordion
                          items={[
                            {
                              title: "Description",
                              body: (
                                <span
                                  className="text-xs"
                                  dangerouslySetInnerHTML={{
                                    __html: product.description
                                      ? product.description
                                      : "",
                                  }}
                                />
                              ),
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={prodstyles.add_to_cart}>
                  {product.price && product.stockStatus === "IN_STOCK" && (
                    <AddToCartButton
                      options={options}
                      variations={variations}
                      product={product}
                      selectedVariation={selectedVariation}
                      setSelectedVariation={setSelectedVariation}
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
      <SizeChart open={sizeChartOpen} setOpen={setSizeChartOpen}>
        <div
          className={[
            "wp-block-group h-full text-xs flex flex-col justify-center p-6",
            prodstyles["size-chart"],
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: sizeChart.content }}
        />
      </SizeChart>
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

  const variations = product.variations?.nodes || [];
  const options = product.localAttributes?.nodes || [];
  const relatedItems = await client.query({
    query: RELATED_ITEMS_QUERY,
    variables: { input: product.productId },
  });

  let standardSizeChart;
  const {
    data: {
      posts: {
        edges: [post],
      },
    },
  } = await client.query({
    query: GET_SIZE_CHARTS,
    variables: { search: product?.name },
  });

  const sizeChart = post?.node;

  if (!sizeChart) {
    const {
      data: {
        posts: {
          edges: [post],
        },
      },
    } = await client.query({
      query: GET_SIZE_CHARTS,
    });

    standardSizeChart = post?.node;
  }

  return {
    props: {
      product: product || {},
      options: options || [],
      variations: variations || [],
      sizeChart: sizeChart || standardSizeChart,
      relatedItems: relatedItems
        ? relatedItems.data.product.related.edges
        : null,
    },
    revalidate: 0,
  };
}

export async function getStaticPaths() {
  const {
    data: {
      products: {
        nodes: [product],
      },
    },
  } = await client.query({
    query: PRODUCT_SLUGS,
  });

  const pathsData: { params: { slug: any } }[] = [];

  if (product?.slug) {
    pathsData.push({ params: { slug: product?.slug } });
  }

  return {
    paths: pathsData,
    fallback: true,
  };
}
