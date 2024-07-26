import React, { useState, useEffect } from "react";
import { GET_POSTS_BY } from "../../queries/get-posts";
import client from "../ApolloClient";

type Context = [
  footerLeft: any[],
  setFooterLeft: React.Dispatch<React.SetStateAction<any[]>>,
  footerRight: any[],
  setFooterRight: React.Dispatch<React.SetStateAction<any[]>>
];

export const FooterContext = React.createContext<Context>([
  [],
  () => {},
  [],
  () => {},
]);

export const FooterProvider = (props: any) => {
  const [footerLeft, setFooterLeft] = useState<any[]>([]);
  const [footerRight, setFooterRight] = useState<any[]>([]);

  useEffect(() => {
    async function getStaticProps() {
      const {
        data: {
          posts: { edges: left },
        },
      } = await client.query({
        query: GET_POSTS_BY,
        variables: { categoryName: "footer: left" },
      });
      setFooterLeft(left || []);

      const {
        data: {
          posts: { edges: right },
        },
      } = await client.query({
        query: GET_POSTS_BY,
        variables: { categoryName: "footer: right" },
      });

      setFooterRight(right || []);
    }
    getStaticProps();
  }, []);

  return (
    <FooterContext.Provider
      value={[footerLeft, setFooterLeft, footerRight, setFooterRight]}
    >
      {props.children}
    </FooterContext.Provider>
  );
};
