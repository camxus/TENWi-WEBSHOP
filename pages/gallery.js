import IntroImage from '../src/components/IntroImage';
import { useRouter } from 'next/router';
import client from '../src/components/ApolloClient';
import GALLERY_IMAGES from '../src/queries/gallery-images.js';
import Image from 'next/image'
import header from "../src/styles/header.module.css";

import gallery from "../src/styles/gallery.module.css"

import style from "../src/styles/posts.module.css"
import LayoutStart from '../src/components/LayoutStart';

export default function Gallery ( {images} ) {
  // const { product } = props;

  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
      return <IntroImage></IntroImage>
  }

  // const products  = props.products.productsData 
  // console.log(images)
	return (
    <LayoutStart>
          <div>
          {images && images.map(image => 
            <div className={gallery.image}>
              <Image
              src={image.node.sourceUrl}
              layout="fill"
              objectFit="cover"
              ></Image>
            </div>
            )}
          {/* <CartIcon/> */}
    </div>
  </LayoutStart>
  )
}

export async function getStaticProps() {
  const {data} = await client.query( {
    query: GALLERY_IMAGES,
    variables: { search : "gallery" }
    } );
    // console.log(data)
  return {
      props: {
          images: data ? data.mediaItems.edges : [],
      },
      revalidate: 1
  };
}

