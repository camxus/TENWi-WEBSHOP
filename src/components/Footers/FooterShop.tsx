import { Instagram, Youtube, TikTok } from "../icons";
import { useContext, useEffect, useState } from "react";
import { FooterContext } from "../context/FooterContext";

import styles from "../../styles/footer.module.css";
import Dialog from "../Dialog";

interface IFooter extends React.HTMLAttributes<any> {}

const Footer = ({ className, style }: IFooter) => {
  const [footerLeft, , footerRight] = useContext(FooterContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <div
      className={`footer ${className} bg-black p-6 text-white`}
      style={style}
    >
      <div className="container mx-auto">
        <div className={styles.footerContainer}>
          <div className={styles.rightContainer}>
            <div className={styles.rightContent}>
              <ul>
                {footerRight &&
                  footerRight.map(
                    (post: {
                      node: {
                        slug: any;
                        title: string;
                      };
                    }) => (
                      <a href={`/post/${post.node.slug}`}>
                        <li>{post.node.title}</li>
                      </a>
                    )
                  )}
                <div>
                  <button onClick={() => setOpen(!open)} className="underline">
                    Sign up for Newsletter
                  </button>
                </div>
              </ul>
            </div>
          </div>
          <div className={styles.leftContainer}>
            <div className={styles.leftContent}>
              <ul>
                {footerLeft &&
                  footerLeft.map(
                    (post: {
                      node: {
                        slug: any;
                        title: string;
                      };
                    }) => (
                      <a href={`/shop/post/${post.node.slug}`}>
                        <li>{post.node.title}</li>
                      </a>
                    )
                  )}
              </ul>
            </div>
            <ul className="social-social-links flex items-center justify-center gap-3">
              {/* <li><a href="https://www.facebook.com/codeytek" className="fa fa-facebook" target="_blank"><Facebook/></a></li> */}
              {/* <li className="ml-2 mt-1"><a href="https://twitter.com/tenwiarchive" target="_blank"><Twitter/></a></li> */}
              <li style={{ marginTop: 6 }}>
                <a
                  href="https://www.youtube.com/channel/UCvqRwEJd3kUlFzb98HnxuKQ"
                  className="fa fa-youtube"
                  target="_blank"
                >
                  <Youtube />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.instagram.com/tenwiofficial/"
                  className="fa fa-instagram"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.tiktok.com/tenwi/"
                  className="fa fa-tiktok"
                  target="_blank"
                >
                  <TikTok />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <dialog open={open}>
        <Dialog setOpen={setOpen} />
      </dialog>
    </div>
  );
};

export default Footer;
