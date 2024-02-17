import React, { useState, useEffect } from "react";
import client from "../ApolloClient";
import GET_COUNTRIES from "../../queries/get-countries";
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
    const getCategories = async () => {
      const {
        data: { productTags },
      } = await client.query({
        query: GET_COUNTRIES,
      });
      const {
        data: { productCategories },
      } = await client.query({
        query: PRODUCTS_AND_CATEGORIES_QUERY,
      });

      return {
        tags: productTags?.nodes ?? [],
        categories: productCategories.nodes ?? [],
      };
    };

    getCategories().then(({ tags, categories }: any) => {
      setCategories(categories);
      setTags(tags);
    });
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
