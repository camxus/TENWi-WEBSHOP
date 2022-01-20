import React from 'react'
import style from "../../styles/postcards.module.css"
import Image from 'next/image'


export default function PostCard({post, image}) {
    return (
        <>
            {post.slug ? <a href={`/portfolio/post/${post.slug}`}>
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
            </a> :
            <div className={`${style["post-card-container"]}`}>
                <div className={`${style["post-card-title"]} ${style["black"]}`}>
                    {post.title}
                </div>
            </div>
            }
        </>
    )
}
