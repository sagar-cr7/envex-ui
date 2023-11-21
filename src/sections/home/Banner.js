/* eslint-disable no-redeclare */
// MODULES //
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/Banner.module.scss";

// IMAGES //
import BannerImg from "../../../public/img/home/banner.jpg";
import Overlay from "../../../public/img/home/banner_layer.svg";
import Image from "next/image";

/** Home Hero Section */
export default function Banner() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 500);
	}, []);
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	var settings1 = {
		dots: false,
		infinite: true,
		speed: 500,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		vertical: true,
		verticalSwiping: true,
		autoplaySpeed: 2000,
	};
	return (
		<div
			className={`${styles.banner} ${loaded && styles.banner_animation_onload}`}
		>
			<img src={Overlay.src} className={`${styles.loader_img} fullwidthimg`} />
			<img src={BannerImg.src} className={`${styles.banner_img} img-responsive`} />
			<div className={`${styles.banner_info}`}>
				<div className={`${styles.banner_title}`}>
					<h1 className="text_xxxl">
						<span className={`${styles.span1}`}>Setting the benchmark for</span>
						<div className={`${styles.banner_animaction}`}>
							<Slider {...settings1}>
								<div className={`${styles.span}`}>efficiency</div>
								<div className={`${styles.span}`}>transparency</div>
								<div className={`${styles.span}`}>liquidity</div>
							</Slider>
						</div>
						<br className="hidden-xs" />
						<span className={`${styles.span2}`}>in global environmental markets</span>
					</h1>
				</div>
				<div className={`${styles.counter_section} text_center hidden-xs`}>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							<CountUp end={40000} />
							<span className={`${styles.span1}`}> MtCO2e</span>
						</h2>
						<p className="text_md color_white">Emissions Uncovered</p>
					</div>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							<CountUp end={48000} />
							<span className={`${styles.span1}`}> MtCO2e</span>
						</h2>
						<p className="text_md color_white">Total Emissions</p>
					</div>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							<CountUp end={7700} />
							<span className={`${styles.span1}`}> MtCO2e</span>
						</h2>
						<p className="text_md color_white">Offsets – Compliance & Taxes</p>
					</div>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							<CountUp end={95} />
							<span className={`${styles.span1}`}> MtCO2e</span>
						</h2>
						<p className="text_md color_white">Offsets – Voluntary</p>
					</div>
				</div>
				<div className={`${styles.counter_section_mobile} text_center visible-xs`}>
					<Slider {...settings} className="visible-xs">
						<div className={`${styles.counter_box}`}>
							<h2 className="text_xxl">
								<CountUp end={40000} />
								<span className={`${styles.span1}`}> MtCO2e</span>
							</h2>
							<p className="text_md color_white">Emissions Uncovered</p>
						</div>
						<div className={`${styles.counter_box}`}>
							<h2 className="text_xxl">
								<CountUp end={48000} />
								<span className={`${styles.span1}`}> MtCO2e</span>
							</h2>
							<p className="text_md color_white">Total Emissions</p>
						</div>
						<div className={`${styles.counter_box}`}>
							<h2 className="text_xxl">
								<CountUp end={7700} />
								<span className={`${styles.span1}`}> MtCO2e</span>
							</h2>
							<p className="text_md color_white">Offsets – Compliance & Taxes</p>
						</div>
						<div className={`${styles.counter_box}`}>
							<h2 className="text_xxl">
								<CountUp end={95} />
								<span className={`${styles.span1}`}> MtCO2e</span>
							</h2>
							<p className="text_md color_white">Offsets – Voluntary</p>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}
