import LayoutStart from "../src/components/LayoutStart";
import client from "../src/components/ApolloClient";
import { GET_POST_CATEGORIES } from "../src/queries/get-posts";
import Link from "next/link";
import Image from "next/image";
import { UrlObject } from "url";

interface Notification {
  link: string | UrlObject;
  header: string;
  timestamp: string;
  sender: string;
  message: string;
}

export default function Categories({ notifications }: any) {
  return (
    <LayoutStart>
      <div>
        <div className="before">
          <Image
            src={require("../public/assets/gif/IMG_3319.GIF")}
            layout="fill"
            objectFit="cover"
            alt={""}
          />
          <div className="after"></div>
        </div>
        <div className="startpage-wrapper">
          <main id="main">
            {/* <div className="before">
        <Image
        src={require("../public/assets/gif/IMG_3319.GIF")}
        layout="fill"
        objectFit="cover"
        />
      </div> */}
            <div className="notification-wrapper">
              {notifications &&
                notifications.map((item: Notification) => (
                  <ul id="one" className="notification-button">
                    <li className="one">
                      <div className="container">
                        <Link href={item.link}>
                          <div className="notification">
                            <span className="before"></span>
                            <span className="after"></span>
                            <header>
                              <h2>{item.header}</h2>
                              <span className="timestamp">
                                {item.timestamp}
                              </span>
                            </header>
                            <div className="content">
                              <span className="sender">{item.sender}</span>
                              <span className="message">{item.message}</span>
                              <span className="more">
                                2 more messages from {item.sender}
                              </span>
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
            {/* <NewsletterSubmit></NewsletterSubmit> */}
          </main>
        </div>
      </div>
    </LayoutStart>
  );
}

export async function getStaticProps() {
  const notifications = [
    // {
    // header : "TENWi",
    // timestamp : "Now",
    // sender: "TENWi",
    // message: "WEBSHOP",
    // link: "/shop"
    // },
    {
      header: "TENWi",
      timestamp: "Now",
      sender: "TENWi",
      message: "GALLERY",
      link: "/gallery",
    },
  ];

  const { data } = await client.query({
    query: GET_POST_CATEGORIES,
  });

  const categories = data.categories.edges;
  categories.map((category: { node: { slug: any; name: any } }) => {
    let slug = category.node.slug;

    if (!slug.includes("footer") && slug !== "uncategorized") {
      !notifications.find((element) => element.link === `portfolio/${slug}`) &&
        notifications.push(
          {
            header: "TENWi",
            timestamp: "Now",
            sender: "TENWi",
            message: category.node.name,
            link: `portfolio/${slug}`,
          } ?? null
        );
    }
  });

  return {
    props: {
      notifications,
    },
    revalidate: 1,
  };
}