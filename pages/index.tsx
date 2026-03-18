import LayoutStart from "../src/components/Layouts/LayoutStart";
import client from "../src/components/ApolloClient";
import { GET_POST_CATEGORIES } from "../src/queries/get-posts";
import Link from "next/link";
import Image from "next/image";
import { UrlObject } from "url";
import { useMemo, useState } from "react";
import Countdown from "react-countdown";
import GALLERY_IMAGES, { MediaItemNode } from "../src/queries/gallery-images";
import GET_PREFS from "../src/queries/preferences";
import { extractCaptionText, getPrefs, getWebshopImages, TenwiPreferences } from "../src/utils";

interface Notification {
  onClick?: React.DOMAttributes<HTMLDivElement>["onClick"];
  link: string | UrlObject;
  header: string;
  timestamp: string;
  sender: string;
  message: string;
  more: string;
}


const now = new Date();

export default function Home({
  notifications,
  prefs,
}: {
  notifications: Notification[];
  prefs: TenwiPreferences;
}) {
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  const releaseDate = new Date(prefs.releaseDate)

  const notifs = [
    {
      header: "TENWI",
      timestamp: now < releaseDate ? <Countdown date={releaseDate} /> : "Now",
      sender: now < releaseDate ? <Countdown date={releaseDate} /> : "Now",
      message: prefs.releaseMessage,
      link: prefs.releaseMessageLink,
      more: "2 new messages from TENWI",
      // onClick: () => setNewsletterOpen(true),
    },
    now > releaseDate && {
      header: "TENWi",
      timestamp: "Now",
      sender: "TENWi",
      message: "WEBSHOP",
      link: "/shop",
      more: "2 new messages from TENWI",
    },
    ...notifications,
    ,
  ].filter(Boolean) as Notification[]

  return (
    <LayoutStart
      {...{
        newsletterOpen,
        setNewsletterOpen,
        newsletterImage:
          prefs.newsletterImage,
      }}
    >
      <div>
        <div className="before">
          <Image
            src={prefs.homepageImage || ""}
            objectFit="cover"
            layout="fill"
            alt={""}
          />
          <div className="after"></div>
        </div>
        <div className="startpage-wrapper">
          <main id="main">
            <div className="notification-wrapper">
              {!!notifs.length &&
                notifs.map((item: Notification) => (
                  <ul key={item.message} id="one" className="notification-button">
                    <li className="one">
                      <div className="container" onClick={item.onClick}>
                        <Link href={item.link}>
                          <div className="notification">
                            <span className="notification-before"></span>
                            <span className="notification-after"></span>
                            <header>
                              <h2>{item.header}</h2>
                              <span className="timestamp">
                                {item.timestamp}
                              </span>
                            </header>
                            <div className="content">
                              <span className="sender font-bold">
                                {item.sender}
                              </span>
                              <span className="message">{item.message}</span>
                              <span className="more">{item.more}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className="two">
                      <div className="container">
                        <div className="notification">
                          <span className="before"></span>
                          <span className="after"></span>
                        </div>
                      </div>
                    </li>
                    <li className="three">
                      <div className="container">
                        <div className="notification">
                          <span className="before"></span>
                          <span className="after"></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))
              }
            </div>
          </main>
        </div>
      </div>
    </LayoutStart>
  );
}

export async function getStaticProps() {
  const notifications: ({
    header: React.ReactElement | string | number;
    timestamp: string;
    sender: React.ReactElement | string | number;
    message: any;
    link: string;
    more: string;
  } | null)[] = [].filter(Boolean);

  const { data } = await client.query({
    query: GET_POST_CATEGORIES,
  });

  const prefs = await getPrefs();

  const categories = data.categories.edges;
  categories.map((category: { node: { slug: any; name: any } }) => {
    let slug = category.node.slug;

    if (
      prefs?.showPortfolio &&
      !slug.includes("footer") &&
      !slug.includes("size-charts") &&
      slug !== "uncategorized"
    ) {
      !notifications.find((element) => element?.link === `portfolio/${slug}`) &&
        notifications.push({
          header: "TENWi",
          timestamp: "Now",
          sender: "TENWi",
          message: category.node.name,
          link: `portfolio/${slug}`,
          more: "2 new messages from TENWI",
        });
    }
  });


  return {
    props: {
      notifications,
      prefs,
    },
    revalidate: 1,
  };
}