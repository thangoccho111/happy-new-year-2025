import "./index.css";
import Brg from "../image/bgr.jpg";
import Rim from "../image/rim1.png";
import Snake from "../image/Linhvat.png";
import Phao from "../image/phaohoa (24).gif";
import Lixi from "../image/thantai.gif";
import Loichuc from "../image/loichuc.gif";
import Lanterns from "../image/lanterns.png";
import PhaoHoa from "../image/phaohoa (22).gif";
import Pattern from "../image/pattern.png";
import { useNavigate } from "react-router-dom";

function Happy() {
	const navigate = useNavigate();
	const onPressLeft = () => {
		navigate("/wish", { state: { name: 1 } });
	};
	const onPressRight = () => {
		navigate("/wish", { state: { name: 2 } });
	};

	return (
		<div className='background'>
			<div className='box-slider'>
				<img src={Brg} alt='' style={{ width: "100%", height: "100%" }} />
				<div className='slider1'>
					<div className='happynewyear'>
						<div className='textHappynewyear'>
							<div className='box-span'>
								<span></span>
							</div>
							<div className='box-span'>
								<span></span>
							</div>
							<div className='box-span'>
								<span></span>
							</div>
							<div className='box-span'>
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
						// background: "#000",
						zIndex: 1000,
						top: "39%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							width: 200,
							height: 200,
							left: "-12%",
							position: "absolute",
						}}
					>
						<img src={PhaoHoa} alt='' />
					</div>
					<div
						style={{
							width: 200,
							height: 200,
							right: "-21%",
							position: "absolute",
						}}
					>
						<img src={PhaoHoa} alt='' />
					</div>
				</div>
				<div className='box-slider_img1'>
					<div className='slider-img1'></div>
					<div className='pattern'>
						<img src={Pattern} alt='' />
					</div>
				</div>
				<div className='circle'>
					<span></span>
				</div>
				<div className='box-slider_img2'>
					<div className='box-slider-img3'>
						<div className='slider-img3'>
							<img src={Lanterns} alt='' />
						</div>
					</div>
					<img src={Phao} alt='' style={{ width: "100%" }} />
					<div className='box-slider-img4'>
						<div className='slider-img4'>
							<img src={Lanterns} alt='' />
						</div>
					</div>
					<div className='cat'>
						<img src={Snake} alt='' style={{ width: "60%", height: "60%" }} />
					</div>
					<div className='box-number'>
						<div className='number2023'>
							<div className='number'>
								<span>2</span>
							</div>
							<div className='number'>
								<span>0</span>
							</div>
							<div className='number'>
								<span>2</span>
							</div>
							<div className='number'>
								<span>5</span>
							</div>
						</div>
					</div>
					<div className='box-rim'>
						<div className='rim1'>
							<img src={Rim} alt='' style={{ width: "100%" }} />
						</div>
						<div className='rim2'>
							<img src={Rim} alt='' style={{ width: "100%" }} />
						</div>
					</div>
				</div>
				<div className='slider'>
					<button className='buttonLeft' onClick={onPressLeft}>
						<img
							src={Loichuc}
							alt=''
							style={{ width: "100%", height: "220%" }}
						/>
						Xem lời chúc
					</button>
					<button className='buttonRight' onClick={onPressRight}>
						<img src={Lixi} alt='' style={{ width: "100%", height: "220%" }} />
						Lì Xì
					</button>
					<div className='happynewyear2'>
						<div className='textHappynewyear2'>
							<div className='box-span2'>
								<span></span>
							</div>
							<div className='box-span2'>
								<span></span>
							</div>
							<div className='box-span2'>
								<span></span>
							</div>
							<div className='box-span2'>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Happy;
