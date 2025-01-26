import { useNavigate } from "react-router-dom";
import "./index.css";
import Brg from "../image/background.gif";
import { useState, useEffect } from "react";

function Time() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// co 2 cách render lại component or chuyển hướng

	// render lại component
	// const [isHappy, setIsHappy] = useState(false);

	// chuyển hướng đến trang happy
	const route = useNavigate();

	const deadline = new Date("Jan 28, 2025 23:59:59").getTime();

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date().getTime();
			const distance = deadline - now;

			if (distance <= 0) {
				route("/happy");

				// thay đổi state để render lại component khỏi cần chuyển hướng
				// setIsHappy(true);
				return null;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			return { days, hours, minutes, seconds };
		};

		const updateCountdown = () => {
			const newTimeLeft = calculateTimeLeft();
			if (newTimeLeft) {
				setTimeLeft(newTimeLeft);
			}
		};
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	}, []);

	//   if(isHappy) return <div class="box-slider">happy new year</div>;
	return (
		<div className='flex'>
			<img src={Brg} alt='' style={{ width: "100%", height: "100%" }} />
			<div className='wrapper'>
				<h1>Thời gian đém ngược đến năm mới là</h1>
				<div className='box-time'>
					<div className='time'>
						<p>Ngày</p>
						<span id='days'>{timeLeft.days}</span>
					</div>
					<div className='time'>
						<p>Giờ</p>
						<span id='hours'>{timeLeft.hours}</span>
					</div>
					<div className='time'>
						<p>Phút</p>
						<span id='minutes'>{timeLeft.minutes}</span>
					</div>
					<div className='time'>
						<p>Giây</p>
						<span id='seconds'>{timeLeft.seconds}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Time;
