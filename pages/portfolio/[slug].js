import LayoutPortfolio from '../../src/components/LayoutPortfolio.js';
import PostCard from '../../src/components/Portfolio/PostCard';

import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';

import {GET_POSTS_BY, POSTS_SLUGS} from '../../src/queries/get-posts';
import GALLERY_IMAGES from '../../src/queries/gallery-images';


import style from "../../src/styles/postcards.module.css"


export default function Product({posts, title}) {
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <></>
    }
    console.log("tilte",title)
	return (
            <LayoutPortfolio>
                <div className={`${style["posts-body"]}`}>
                <PostCard post={{title: `${title}`}} image={[]}></PostCard>
                { posts && (
                    <div>
                        { posts.map(post => 
                            <PostCard post={post.post} image={post.image}></PostCard>
                        )}
                        
                    </div>
                )}
                </div>
            </LayoutPortfolio>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: GET_POSTS_BY,
        variables: { categoryName: slug }
    })
    var postsarray = []


    const images = await client.query({
        query: GALLERY_IMAGES,
        variables: { search: slug }
    })
    
    var caption = null
    data.posts.edges.map(post => {
        images.data.mediaItems.edges.map(image => {
            caption = image.node.caption.includes("\n") ? image.node.caption.split("\n")[0] : image.node.caption
            caption = image.node.caption.includes("&") ? 
                caption.substring(
                caption.indexOf(">") + 1, 
                caption.lastIndexOf("&")
            ) : caption.substring(
                caption.indexOf(">") + 1, 
                caption.lastIndexOf("<")
            )
            image.node.title === post.node.title && caption === slug? 
            postsarray.push({post: post.node, image: image.node})
                : ""
        })
    })
    console.log(slug)
        return {
            props: {
                posts: postsarray ? postsarray : [],
                title: slug ? slug.toUpperCase() : [], 
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
