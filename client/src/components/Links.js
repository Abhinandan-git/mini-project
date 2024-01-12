import './css/Links.css';
import './css/common.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
	return (
		<div className="links-bar">
			<Link className='sign-link' to="/signup">Sign up</Link>
			<Link className='sign-link' to="/signin">Sign in</Link>
		</div>
	);
}

export default Links;
