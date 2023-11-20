/* eslint-disable no-redeclare */
// MODULES //
import Image from "next/image";
import { useEffect, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/Focus.module.scss";

// IMAGES //
import ArrowSliderRight from "../../../public/img/home/arrow_slider_right.svg";
import FocusIcon1 from "../../../public/img/home/focus_icon_1.png";
import Pluse from "../../../public/img/home/focus_pluse.png";

/** Home Hero Section */
export default function Focus() {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: (
			<button className={`${styles.prevarrow}`}>
				<Image src={ArrowSliderRight.src} alt="arrow" width={56} height={56} />
			</button>
		),
		nextArrow: (
			<button className={`${styles.nextarrow}`}>
				<Image src={ArrowSliderRight.src} alt="arrow" width={56} height={56} />
			</button>
		),

		afterChange: (i) => {
			fillProgress(i + 1);
		},
	};
	const [progressWidth, setProgressWidth] = useState(0);
	useEffect(() => {
		fillProgress(1);
	}, []);
	/** slider progress calculation */
	const fillProgress = (currInd) => {
		setProgressWidth((currInd / 3) * 100);
	};
	return (
		<div className={`${styles.focuse_section} pb_100`}>
			<div className="container">
				<div className={`${styles.title} section_title`}>ENVEX in focus</div>
				<div className={`${styles.focuse} pt_40`}>
					<Slider {...settings}>
						<div className={`${styles.slider_item}`}>
							<div className={`${styles.left_box}`}>
								<img
									src={FocusIcon1.src}
									className={`${styles.focus_icon_1} img-responsive`}
								/>
							</div>
							<div className={`${styles.right_box}`}>
								<div className={`${styles.head_pluse}`}>
									<h5 className="text_lg">Insights 2022 | New Delhi</h5>
									<div className={`${styles.pluse}`}>
										<img src={Pluse.src} className="img-responsive" />
									</div>
								</div>
								<p className="pt_20 pb_40">
									Workshop on Carbon Markets: Regulations, Infrastructure and
									International Experience
								</p>
								<span className="text_xs">14th September 2023</span>
							</div>
						</div>
						<div className={`${styles.slider_item}`}>
							<div className={`${styles.left_box}`}>
								<img
									src={FocusIcon1.src}
									className={`${styles.focus_icon_1} img-responsive`}
								/>
							</div>
							<div className={`${styles.right_box}`}>
								<div className={`${styles.head_pluse}`}>
									<h5 className="text_lg">Insights 2022 | New Delhi</h5>
									<div className={`${styles.pluse}`}>
										<img src={Pluse.src} className="img-responsive" />
									</div>
								</div>
								<p className="pt_20 pb_40">
									Workshop on Carbon Markets: Regulations, Infrastructure and
									International Experience
								</p>
								<span className="text_xs">14th September 2023</span>
							</div>
						</div>
						<div className={`${styles.slider_item}`}>
							<div className={`${styles.left_box}`}>
								<img
									src={FocusIcon1.src}
									className={`${styles.focus_icon_1} img-responsive`}
								/>
							</div>
							<div className={`${styles.right_box}`}>
								<div className={`${styles.head_pluse}`}>
									<h5 className="text_lg">Insights 2022 | New Delhi</h5>
									<div className={`${styles.pluse}`}>
										<img src={Pluse.src} className="img-responsive" />
									</div>
								</div>
								<p className="pt_20 pb_40">
									Workshop on Carbon Markets: Regulations, Infrastructure and
									International Experience
								</p>
								<span className="text_xs">14th September 2023</span>
							</div>
						</div>
						<div className={`${styles.slider_item}`}>
							<div className={`${styles.left_box}`}>
								<img
									src={FocusIcon1.src}
									className={`${styles.focus_icon_1} img-responsive`}
								/>
							</div>
							<div className={`${styles.right_box}`}>
								<div className={`${styles.head_pluse}`}>
									<h5 className="text_lg">Insights 2022 | New Delhi</h5>
									<div className={`${styles.pluse}`}>
										<img src={Pluse.src} className="img-responsive" />
									</div>
								</div>
								<p className="pt_20 pb_40">
									Workshop on Carbon Markets: Regulations, Infrastructure and
									International Experience
								</p>
								<span className="text_xs">14th September 2023</span>
							</div>
						</div>
					</Slider>
				</div>
				<div className={`${styles.progress_div} pb_50`}>
					<div className={`${styles.progress_bar}`}>
						<div
							style={{ width: `${progressWidth}%` }}
							className={`${styles.color_div}`}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
