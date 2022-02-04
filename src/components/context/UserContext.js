import React, { useState, useEffect } from 'react';
export const UserContext = React.createContext([
	{},
	() => {}
]);

export const UserProvider = ( props ) => {

	const [ user, setUser ] = useState( null );

	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
		if ( process.browser ) {

			let data = localStorage.getItem( 'user-info' );
			data = null !== data ? JSON.parse( data ) : '';
			setUser( data );

		}

	}, [] );

	return (
		<UserContext.Provider value={ [ user, setUser ] }>
			{ props.children }
		</UserContext.Provider>
	);
};
