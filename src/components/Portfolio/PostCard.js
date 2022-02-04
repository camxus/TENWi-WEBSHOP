import React from 'react'
import style from "../../styles/postcards.module.css"
import Image from 'next/image'
import Link from 'next/link';


export default function PostCard({post, image}) {
    return (
        <>
            {post.slug ? 
            <Link href={`/portfolio/post/${post.slug}`}>
            <a>
                <div className={`${style["post-card-container"]}`}>
                    <div className={`${style["post-card-title"]}`}>
                        {post.title}
                    </div>
                    <div className={`${style["post-card-image-wrapper"]}`}>
                        <Image src={image?.sourceUrl ? image?.sourceUrl : "/" }
                            layout="fill"
                            objectFit="cover"/>
                    </div>
                </div>
            </a>
            </Link> :
            <div className={`${style["post-card-container"]}`}>
                <div className={`${style["post-card-title"]} ${style["black"]}`}>
                    {post.title}
                </div>
            </div>
            }
        </>
    )
}
