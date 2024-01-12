import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Signin from "./components/Signin";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
			</Routes>
		</Router>
	);
}

export default App;