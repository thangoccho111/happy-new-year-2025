import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Time from "./time";
import HappyNewYear from "./happy";
import Wish from "./wish";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Time />} />
				<Route path='/happy' element={<HappyNewYear />} />
				<Route path='/wish' element={<Wish />} />
			</Routes>
		</Router>
	);
}

export default App;
