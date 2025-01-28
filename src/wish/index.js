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
						Em chúc mừng năm mới gia đình anh/chị!					</h1>
					<h2>
						

Năm mới đến như cánh hoa xuân nở</h2><h2>
Mở ra một mùa thành công rực rỡ </h2><h2>
Chúc anh/chị luôn vui vẻ, sức khỏe dồi dào  </h2><h2>
Cùng nhau xây dựng những ước mơ vươn cao.</h2><h2>

Công việc như con đường rộng mở  </h2><h2>
Cùng nhau đi, cùng nhau vững bước  </h2><h2>
Chúc cho mỗi ngày làm việc thêm suôn sẻ </h2><h2>
Thành công đong đầy, niềm vui tràn ngập.</h2><h2>

Gia đình anh/chị như ngôi nhà ấm áp  </h2><h2>
Năm mới an lành, tràn đầy yêu thương  </h2><h2>
Mong anh/chị luôn tươi cười, vững vàng tiến bước  </h2><h2>
Cùng đồng hành, chúng ta chạm tới những đỉnh cao.</h2><h2>

Chúc năm 2025 sẽ là một năm tươi sáng  </h2><h2>
Chúng ta cùng nhau gặt hái nhiều thành công  </h2><h2>
Chúc anh/chị mọi điều tốt đẹp, may mắn trọn vẹn  </h2><h2>
Một năm mới an khang, thịnh vượng, tràn đầy niềm vui!
					</h2>
				</div>
			</div>
		);
	}
}

export default Wish;
