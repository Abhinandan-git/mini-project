import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useOnline } from '@uiw/react-use-online'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
	const isOnline = useOnline();
	const [status, setStatus] = useState(isOnline ? 'online' : 'offline');

	useEffect(() => {
		const handleOnlineStatusChange = () => {
			setStatus(window.navigator.onLine ? 'online' : 'offline');
		};

		window.addEventListener('online', handleOnlineStatusChange);
		window.addEventListener('offline', handleOnlineStatusChange);

		return () => {
			window.removeEventListener('online', handleOnlineStatusChange);
			window.removeEventListener('offline', handleOnlineStatusChange);
		};
	}, []);

	return (
		<>
			{
				(status === 'online') ?
					<Router>
						<Routes>
							<Route path="/" exact element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/signin" element={<Signin />} />
							<Route path="/signup" element={<Signup />} />
						</Routes>
					</Router> :
					<div className='off-txt-wrapper'>
						<p className='offline-txt'>
							This page is not available while offline. Please try again with when connected to the internet.
						</p>
					</div>
			}
		</>
	);
}

export default App;