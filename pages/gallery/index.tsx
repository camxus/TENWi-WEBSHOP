import IntroImage from "../../src/components/IntroImage";
import { useRouter } from "next/router";
import client from "../../src/components/ApolloClient";
import GALLERY_IMAGES from "../../src/queries/gallery-images.js";
import Image from "next/image";

import gallery from "../../src/styles/gallery.module.css";

import LayoutStart from "../../src/components/Layouts/LayoutStart";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Gallery({ images }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <IntroImage></IntroImage>;
  }

  return (
    <LayoutStart>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        {!!images.length ? (
          images.map(
            (image: { node: { sourceUrl: string | StaticImport } }) => (
              <div className={gallery.image}>
                <Image
                  className="object-cover"
                  src={image.node.sourceUrl}
                  fill
                  alt={""}
                ></Image>
              </div>
            )
          )
        ) : (
          <h1>Nohting to see here</h1>
        )}
      </div>
    </LayoutStart>
  );
}

export async function getStaticProps() {
  const {
    data: {
      mediaItems: { edges: images },
    },
  } = await client.query({
    query: GALLERY_IMAGES,
    variables: { search: "gallery" },
  });

  return {
    props: {
      images: images || [],
    },
    revalidate: 1,
  };
}
