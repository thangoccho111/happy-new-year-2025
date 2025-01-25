import "./index.css";
import Brg from "../image/background.jpg";
import Bank from "../image/bank.jpg";
import { useLocation } from "react-router-dom";

function Wish() {
	const location = useLocation();
	const { name } = location.state || "";

	if (name === 2) {
		return (
			<div className='background'>
				<img src={Bank} alt='' style={{ width: "100%", height: "100%" }} />
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
						Em chúc anh/chị năm mới: Bầu trời sức khỏa, biển cả tình thường, đại dương tình
						bạn,sự nghiệp rạng rỡ, gia đình hạnh phúc. Happy new year 2025
					</h2>
				</div>
			</div>
		);
	}
}

export default Wish;
