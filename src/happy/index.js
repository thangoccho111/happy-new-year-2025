import "./index.css";
import Brg from "../image/bgr.jpg";
import Rim from "../image/rim1.png";
import Snake from "../image/z6254314613546_995fc4873c1cf1bba26ac398462a678a-removebg-preview.png";
import Lanterns from "../image/lanterns.png";
import PhaoHoa from "../image/phaohoa (22).gif";

function Happy() {
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
						<img src='../image/pattern.png' alt='' />
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
					<div className='box-slider-img4'>
						<div className='slider-img4'>
							<img src={Lanterns} alt='' />
						</div>
					</div>
					<div className='cat'>
						<img src={Snake} alt='' />
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
