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
						

Năm mới đến như cánh hoa xuân nở,  
Mở ra một mùa thành công rực rỡ,  
Chúc anh/chị luôn vui vẻ, sức khỏe dồi dào,  
Cùng nhau xây dựng những ước mơ vươn cao.

Công việc như con đường rộng mở,  
Cùng nhau đi, cùng nhau vững bước,  
Chúc cho mỗi ngày làm việc thêm suôn sẻ,  
Thành công đong đầy, niềm vui tràn ngập.

Gia đình anh/chị như ngôi nhà ấm áp,  
Năm mới an lành, tràn đầy yêu thương,  
Mong anh/chị luôn tươi cười, vững vàng tiến bước,  
Cùng đồng hành, chúng ta chạm tới những đỉnh cao.

Chúc năm 2025 sẽ là một năm tươi sáng,  
Chúng ta cùng nhau gặt hái nhiều thành công,  
Chúc anh/chị mọi điều tốt đẹp, may mắn trọn vẹn,  
Một năm mới an khang, thịnh vượng, tràn đầy niềm vui!
					</h2>
				</div>
			</div>
		);
	}
}

export default Wish;
