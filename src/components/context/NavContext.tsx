import React, { useState, useEffect } from "react";
import client from "../ApolloClient";
import { GET_PRODUCT_TAGS } from "../../queries/get-tags";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../queries/product-and-categories";

interface INavContext {
  tags?: {
    name: string;
    slug: string;
  }[];
  categories?: {
    name: string;
    slug: string;
  }[];
}

export const NavContext = React.createContext<INavContext>({
  tags: undefined,
  categories: undefined,
});

export const NavProvider = (props: any) => {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[]
  >(props.categories);
  const [tags, setTags] = useState<{ name: string; slug: string }[]>(
    props.tags
  );

  useEffect(() => {
    client
      .query({
        query: GET_PRODUCT_TAGS,
      })
      .then(
        ({
          data: {
            productTags: { nodes: tags },
          },
        }) => {
          setTags(
            tags.filter(
              (tag: { isRestricted: string }) => !JSON.parse(tag.isRestricted)
            )
          );
        }
      );

    client
      .query({
        query: PRODUCTS_AND_CATEGORIES_QUERY,
      })
      .then(
        ({
          data: {
            productCategories: { nodes: categories },
          },
        }) => {
          setCategories(categories);
        }
      );
  }, []);

  useEffect(() => {
    if (categories)
      setCategories(categories.filter((category) => category.name !== "ALL"));
  }, [JSON.stringify(categories)]);

  return (
    <NavContext.Provider value={{ tags, categories }}>
      {props.children}
    </NavContext.Provider>
  );
};
