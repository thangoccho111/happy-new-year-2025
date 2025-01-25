import "./index.css";
import Brg from "../image/background.jpg";
import Bank from "../image/bank.jpg";
// import { useState } from "react";
import { useLocation } from "react-router-dom";

function Wish() {
	const location = useLocation();
	const { name } = location.state || "";
	// const [text, setText] = useState("");

	if (name === 2) {
		return (
			<div className='background'>
				<img src={Bank} alt='' style={{ width: "100%", height: "100%" }} />
				{/* <div style={{ position: "absolute", padding: "20px" }}>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<button onClick={(e) => onClick(e)}>Xong</button>
				</div> */}
			</div>
		);
	} else {
		return (
			<div className='background'>
				<img src={Brg} alt='' style={{ width: "100%", height: "100%" }} />
				<div style={{ position: "absolute", padding: "40px" }}>
					<h1 style={{ textAlign: "center", color: "#fff" }}>
						Em chúc mừng năm mới gia đình anh/chị.
					</h1>
					<h2>
						Chúc anh/chị bầu trời sức khỏa, biển cả tình thường, đại dương tình
						bạn,sự nghiệp rạng rỡ, gia đình thịnh vượng.
					</h2>
				</div>
			</div>
		);
	}
}

export default Wish;
