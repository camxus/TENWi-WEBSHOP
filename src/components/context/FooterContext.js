import React, { useState, useEffect } from 'react';
import {GET_POSTS_BY} from "../../queries/get-posts"
import client from "../ApolloClient"


export const FooterContext = React.createContext([
	{},
	() => {}
]);

export const FooterProvider = ( props ) => {

	const [footerLeft, setFooterLeft] = useState([]);
	const [footerRight, setFooterRight] = useState([]);

	useEffect(() => {
		async function getStaticProps() {
			const footerDataLeft = await client.query( {
			  query: GET_POSTS_BY,
			  variables: {categoryName: "footer: left"}
			  } );
			  setFooterLeft(footerDataLeft.data ? footerDataLeft.data.posts.edges : [])

			const footerDataRight = await client.query( {
			  query: GET_POSTS_BY,
			  variables: {categoryName: "footer: right"}
			  } );
			  setFooterRight(footerDataRight.data ? footerDataRight.data.posts.edges : [])
			}
		getStaticProps()
    }, []);

	return (
		<FooterContext.Provider value={ [footerLeft,setFooterLeft, footerRight,setFooterRight] }>
			{ props.children }
		</FooterContext.Provider>
	);
};
