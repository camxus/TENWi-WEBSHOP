import { useRouter } from "next/router";
import { isEmpty } from "lodash";

import style from "../../../src/styles/posts.module.css";


export default function PostPage({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    // return <IntroImage></IntroImage>
    // setLoading(true)
    return <></>;
  }

  const body = (
    <>
      {!isEmpty(post) && (
        <div className={style[`post-wrapper`]}>
          <div className={style[`post-container`]}>
            <div className={style[`post-title`]}>{post.title}</div>
            <div
              className={style[`post-content`]}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
      )}
    </>
  );

  return body;
}
