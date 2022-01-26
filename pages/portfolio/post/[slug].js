import LayoutPortfolio from '../../../src/components/LayoutPortfolio.js';
import Gallery from '../../../src/components/Portfolio/Gallery.js';

import { useRouter } from 'next/router';
import client from '../../../src/components/ApolloClient';

import {GET_POST_BY_SLUG} from '../../../src/queries/get-posts';
import GALLERY_IMAGES from '../../../src/queries/gallery-images';

import {useState, useEffect} from "react"
import Image from "next/image"

import style from "../../../src/styles/portfolio-posts.module.css"


export default function Product({images, post}) {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <></>
    }

    // const [activeCount, setActiveCount] = useState(0)
    let activeCount = 0
    // console.log("image",images)
	return (
            <LayoutPortfolio>
                <Gallery images={images}></Gallery>
                <div className={`${style["post-title"]}`}>
                    {post.title}
                </div>
                <div className={`${style["post-content"]}`} dangerouslySetInnerHTML={{ __html: post.content }}>

                </div>
                <div className={`${style["post-description-images"]}`}>
                    {images && 
                        images.map(image => (
                            // activeCount > 5 ? setActiveCount(0) : ""
                            // (activeCount > 5 && activeCount = 0 )
                            image.active == true &&
                                (activeCount = activeCount < 5 ? activeCount += 1 : activeCount = 1)
                                // (activeCount < 5 ? setActiveCount(activeCount + 1): setActiveCount(1))
                            &&
                                <div className={style[`post-description-container`]}>
                                    <div className={style[`description-image-${activeCount}`]}
                                            style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
                                            >
                                        <Image 
                                        src={image.node.sourceUrl}
                                        layout="fill"
                                        objectFit="cover"/>
                                    </div>
                                    <div className={style[`description-image-text-${activeCount}`]}
                                        style={{ transform: `translateY(-${offsetY * 0.12}px)` }} >
                                        <span dangerouslySetInnerHTML={{ __html: image.node.description? image.node.description : "" }}></span>
                                    </div>
                                </div> 
                            // setActiveCount(activeCount + 1)
                            
                        // : ""})
                            ))
                        }
                </div>
            </LayoutPortfolio>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: GET_POST_BY_SLUG,
        variables: { slug: slug }
    })
    var imageslist = []

    const images = await client.query({
        query: GALLERY_IMAGES,
        variables: { search: data.post.title }
    })
    
    images.data.mediaItems.edges.map(image => {                           
        var caption = image.node.caption.split("\n")[0]
        caption = image.node.caption.includes("\n") ? image.node.caption.split("\n")[0] : image.node.caption
            caption = image.node.caption.includes("&") ? 
                caption.substring(
                caption.indexOf(">") + 1, 
                caption.lastIndexOf("&")
            ) : caption.substring(
                caption.indexOf(">") + 1, 
                caption.lastIndexOf("<")
            )
            
            let active = null
            let gallery = null
            caption.toLowerCase().includes(data.post.title.toLowerCase()) &&
                (caption.includes("active") ? active = true : active = false) &&
                    (caption.includes("slide") ? gallery = true : gallery = false) && 
                    imageslist.push({"node": image.node, "active": active, "gallery": gallery}) 
                    // console.log("caption", imageslist)

        })
        return {
            props: {
                images: imageslist ? imageslist : [],
                post: data.post ? data.post : [],
            },
            revalidate: 1
        };
}

export async function getStaticPaths () {

    const pathsData = []

    return {
        paths: pathsData,
        fallback: true
    }
}
