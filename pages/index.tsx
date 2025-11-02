import LayoutStart from "../src/components/Layouts/LayoutStart";
import client from "../src/components/ApolloClient";
import { GET_POST_CATEGORIES } from "../src/queries/get-posts";
import Link from "next/link";
import Image from "next/image";
import { UrlObject } from "url";
import { useMemo, useState } from "react";
import Countdown from "react-countdown";
import GALLERY_IMAGES, { MediaItemNode } from "../src/queries/gallery-images";
import { extractCaptionText, getWebshopImages } from "../src/utils";

interface Notification {
  onClick?: React.DOMAttributes<HTMLDivElement>["onClick"];
  link: string | UrlObject;
  header: string;
  timestamp: string;
  sender: string;
  message: string;
  more: string;
}

export default function Home({
  notifications,
  images,
}: {
  notifications: Notification[];
  images: ({ node: MediaItemNode } & { [x: string]: boolean })[];
}) {
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  const releaseDate = new Date("2025-11-02T18:00:00+02:00");
  const now = new Date();

  const shopMessages =
    now < releaseDate
      ? {
          header: "TENWI",
          timestamp: <Countdown date={releaseDate} />,
          sender: <Countdown date={releaseDate} />,
          message: "WINTER 25 ESSENTIALS RELEASING 02/11 | 18:00 PARIS TIME",
          link: "",
          more: "2 new messages from TENWI",
          onClick: () => setNewsletterOpen(true),
        }
      : {
          header: "TENWi",
          timestamp: "Now",
          sender: "TENWi",
          message: "WEBSHOP",
          link: "/shop",
          more: "2 new messages from TENWI",
        };

  const notifs = useMemo(() => {
    return [
      ...notifications,
      // shopMessages,
      {
        header: "TENWI",
        timestamp: "Now",
        sender: "TENWI",
        message: "CLAIM YOUR -10% MEMBER'S DISCOUNT. JOIN THE CULT",
        link: "",
        more: "2 new messages from TENWI",
        onClick: () => setNewsletterOpen(true),
      },
    ];
  }, [notifications]);

  return (
    <LayoutStart
      {...{
        newsletterOpen,
        setNewsletterOpen,
        newsletterImage:
          images.find((image) => !!image.newsletter)?.node.sourceUrl || "",
      }}
    >
      <div>
        <div className="before">
          <Image
            src={images.find((image) => !!image.homepage)?.node.sourceUrl || ""}
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
                  <ul id="one" className="notification-button">
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
                ))}
            </div>
          </main>
        </div>
      </div>
    </LayoutStart>
  );
}

export async function getStaticProps() {
  const notifications: {
    header: React.ReactElement | string | number;
    timestamp: string;
    sender: React.ReactElement | string | number;
    message: any;
    link: string;
    more: string;
  }[] = [
    // {
    //   header: "TENWi",
    //   timestamp: "Now",
    //   sender: "TENWi",
    //   message: "WEBSHOP",
    //   link: "/shop",
    //   more: "2 new messages from TENWI",
    // },
    // {
    //   header: "TENWi",
    //   timestamp: "Now",
    //   sender: "TENWi",
    //   message: "GALLERY",
    //   link: "/gallery",
    //   more: "2 new messages from TENWI",
    // },
  ];

  const { data } = await client.query({
    query: GET_POST_CATEGORIES,
  });

  const categories = data.categories.edges;
  categories.map((category: { node: { slug: any; name: any } }) => {
    let slug = category.node.slug;

    if (
      !slug.includes("footer") &&
      !slug.includes("size-charts") &&
      !slug.includes("styling-art-direction") &&
      slug !== "uncategorized"
    ) {
      !notifications.find((element) => element.link === `portfolio/${slug}`) &&
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

  const imagesList = await getWebshopImages();
  
  return {
    props: {
      images: imagesList,
      notifications,
    },
    revalidate: 1,
  };
}
