import { Instagram, Youtube, TikTok } from "../icons";
import { useContext, useState } from "react";
import { FooterContext } from "../context/FooterContext";

import styles from "../styles/footer.module.css";
import Dialog from "../Dialog";
import Link from "next/link";

interface IFooter extends React.HTMLAttributes<any> {
  newsletterOpen: boolean;
  setNewsletterOpen?: React.Dispatch<boolean>;
}

const FooterStart = ({
  className,
  style,
  newsletterOpen,
  setNewsletterOpen,
  newsletterImage
}: IFooter) => {
  const [footerLeft, , footerRight] = useContext(FooterContext);

  return (
    <div className={`footer ${className} p-6 text-white`} style={{ zIndex: 1 }}>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        {setNewsletterOpen && (
          <button
            onClick={() => setNewsletterOpen(!newsletterOpen)}
            className="bg-black text-white p-2 rounded-full text-sm outline-black hover:bg-white hover:text-black"
            style={{ transition: "all 0.3s ease-in-out" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
          >
            Sign up for Newsletter
          </button>
        )}
        <div>
          <ul className="social-social-links flex items-center justify-center gap-3">
            {/* <li><a href="https://www.facebook.com/codeytek" className="fa fa-facebook" target="_blank"><Facebook/></a></li> */}
            {/* <li className="ml-2 mt-1"><a href="https://twitter.com/tenwiarchive" target="_blank"><Twitter/></a></li> */}
            <li style={{ marginTop: 6 }}>
              <a
                href="https://www.youtube.com/channel/UCvqRwEJd3kUlFzb98HnxuKQ"
                className="fa fa-youtube"
                target="_blank"
              >
                <Youtube width={18} />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.instagram.com/tenwiofficial/"
                className="fa fa-instagram"
                target="_blank"
              >
                <Instagram width={18} />
              </a>
            </li>
            <li className="">
              <a
                href="https://www.tiktok.com/tenwi/"
                className="fa fa-tiktok"
                target="_blank"
              >
                <TikTok width={18} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          <Link className="text-[9px]" href={"/post/terms-conditions"}>
            Terms and Conditions
          </Link>
          •
          <Link className="text-[9px]" href={"/post/contact"}>
            Contact
          </Link>
          •
          <Link className="text-[9px]" href={"/post/privacy-policy"}>
            Privacy Policy
          </Link>
        </div>
      </div>

      <dialog open={newsletterOpen}>
        <Dialog setOpen={setNewsletterOpen} newsletterImage={newsletterImage}/>
      </dialog>
    </div>
  );
};

export default FooterStart;
