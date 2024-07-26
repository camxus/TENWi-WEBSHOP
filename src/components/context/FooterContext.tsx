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
    client
      .query({
        query: GET_POSTS_BY,
        variables: { categoryName: "footer: left" },
      })
      .then(({ data: { posts: { edges } } }) => setFooterLeft(edges || []));

    client
      .query({
        query: GET_POSTS_BY,
        variables: { categoryName: "footer: right" },
      })
      .then(({ data: { posts: { edges } } }) => setFooterRight(edges || []));
  }, []);

  return (
    <FooterContext.Provider
      value={[footerLeft, setFooterLeft, footerRight, setFooterRight]}
    >
      {props.children}
    </FooterContext.Provider>
  );
};
