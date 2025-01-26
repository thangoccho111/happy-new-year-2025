import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Time from "./time";
import HappyNewYear from "./happy";
import Wish from "./wish";

function App() {
	window.addEventListener("orientationchange", function () {
		if (window.orientation === 90 || window.orientation === -90) {
			alert("Vui lòng quay thiết bị về chế độ dọc để tiếp tục.");
			// Ẩn toàn bộ nội dung khi xoay ngang
			document.body.style.display = "none";
		} else {
			document.body.style.display = "block"; // Hiển thị lại khi ở chế độ dọc
		}
	});

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
