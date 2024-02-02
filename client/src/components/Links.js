import './css/Links.css';
import './css/common.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Links() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		setLoggedIn(true);
	}, []);

	return (
		<div className="links-bar">
			{loggedIn ? <Link className='sign-link' to="/signin">Traveller</Link> : <>
				<Link className='sign-link logout' to="/signup">Sign up</Link>
				<Link className='sign-link logout' to="/signin">Sign in</Link>
			</>}
		</div>
	);
}

export default Links;