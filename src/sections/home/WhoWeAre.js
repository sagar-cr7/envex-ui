/* eslint-disable no-redeclare */
// MODULES //
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/WhoWeAre.module.scss";

// IMAGES //
import envex from "../../../public/img/home/who_we_are/envex.jpg";
import ourPartner from "../../../public/img/home/who_we_are/our_partner.jpg";
import Vishwajit_Dahanukar from "../../../public/img/home/Vishwajit_Dahanukar.png";
import AdityaSapru from "../../../public/img/home/Aditya_Sapru.png";
import plusIcon from "../../../public/img/plus_icon.svg";
import Close from "../../../public/img/home/close.svg";
import Linkedin from "../../../public/img/home/linkedin.svg";
import ArrowSliderRight from "../../../public/img/home/arrow_slider_right.svg";
import Pravin from "../../../public/img/home/pravin.png";

/** Home Hero Section */
export default function WhoWeAre() {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (e, targetName) => {
		setIsActive(!isActive);
		e.preventDefault();
		setTargetName(targetName);
	};
	const [isActiveC, setIsActiveC] = useState(false);

	const handleClickC = () => {
		setIsActiveC(!isActiveC);
	};
	const sliderRef = useRef(null);
	const [targetName, setTargetName] = useState(null);

	useEffect(() => {
		if (targetName) {
			const slideno = targetName.dataset.slide;
			sliderRef.current.slickGoTo(parseInt(slideno, 10) - 1);
		}
		const tabSets = document.querySelectorAll(".main_tab_row");

		tabSets.forEach(function (tabSet) {
			if (window.matchMedia("(min-width: 1px)").matches) {
				const customTab = tabSet.querySelector(".custom_tab");
				const tabTitles = customTab.querySelector(".tab_titles");

				const activeBar = document.createElement("div");
				activeBar.className = "active_bar";

				tabTitles.appendChild(activeBar);
			}

			const tabTitles = tabSet.querySelectorAll(".tab_title");
			const tabContents = tabSet.querySelectorAll(".tab_content");
			const activeBar = tabSet.querySelector(".active_bar");

			function setActiveTab(index) {
				tabTitles.forEach(function (tabTitle) {
					tabTitle.classList.remove("active");
				});

				tabTitles[index].classList.add("active");

				tabContents.forEach(function (content) {
					content.classList.remove("show");
				});

				tabContents[index].classList.add("show");

				const activeTabTitle = tabTitles[index];
				const tabWidth = activeTabTitle.offsetWidth;
				const tabLeft =
					activeTabTitle.getBoundingClientRect().left -
					tabTitles[0].parentElement.getBoundingClientRect().left;

				if (window.matchMedia("(min-width: 1px)").matches) {
					activeBar.style.width = tabWidth + "px";
					activeBar.style.left = tabLeft + "px";
				}
			}

			tabTitles.forEach(function (title, index) {
				title.addEventListener("click", function (e) {
					e.preventDefault();
					setActiveTab(index);
				});
			});

			setActiveTab(0);
		});
	}, [targetName]);

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
	};

	return (
		<div
			className={`${styles.who_we_are} who_we_are_tab ptb_100`}
			name="about_us"
		>
			<div
				className={`${styles.main_popup} ${
					isActive ? "active_pop" : "active_popC"
				} popUp`}
				id="popUp"
			>
				<div className={`${styles.popup_section}`}>
					<Slider {...settings} ref={sliderRef}>
						<div className={`${styles.popup}`}>
							<div className={`${styles.img_text}`}>
								<div className={`${styles.img}`}>
									<img src={Vishwajit_Dahanukar.src} className="img-responsive b_r_20" />
								</div>
								<div className={`${styles.text}`}>
									<h4 className="text_lg f_w_b color_secondary">Vishwajit Dahanukar <img src={Linkedin.src} className="img-responsive" /></h4>
									<h6 className="text_md pt_10">Founder & Managing Partner</h6>
									
									<p className="pt_30">
									A serial entrepreneur with a deep passion for renewables and carbon
									business. He has been actively associated with, built and managed
									businesses in the carbon space over the last 15+ years. A trained
									chemical engineer, Vishwajit has run multiple businesses over the last
									25+ years. At ENVEX, he leads the strategy and business development
									functions.
								</p>
								</div>
							</div>
							
						</div>
						<div className={`${styles.popup}`}>
							<div className={`${styles.img_text}`}>
								<div className={`${styles.img}`}>
									<img src={Pravin.src} className="img-responsive b_r_20" />
								</div>
								<div className={`${styles.text}`}>
									<h4 className="text_lg f_w_b color_secondary">Pravin Dongre <img src={Linkedin.src} className="img-responsive" /></h4>
									<h6 className="text_md pt_10">Founder & Managing Partner</h6>
									
									<p className="pt_30">
										With a degree in Chemistry and a diploma in Business Management Pravin
										started his journey in the International Commodity Markets as a junior
										trader 1986 with Marpro an International Commodity Broking firm. After
										short stints in Thailand and Australia trading commodities he returned
										to India as an entrepreneur successfully establishing one of the largest
										broking outfits in the country. Pravin currently runs a family office and
										follows both the financial and commodity markets.
									</p>
									
								</div>
							</div>
							
						</div>
						<div className={`${styles.popup}`}>
							<div className={`${styles.img_text}`}>
								<div className={`${styles.img}`}>
									<img src={AdityaSapru.src} className="img-responsive b_r_20" />
								</div>
								<div className={`${styles.text}`}>
									<h4 className="text_lg f_w_b color_secondary">Aditya Sapru <img src={Linkedin.src} className="img-responsive " /></h4>
									<h6 className="text_md pt_10">Founder & Managing Partner</h6>
									
									<p className="pt_30">
									30+ years in business strategy with a strong focus on execution. He has
									worked closely with organizations across the globe in helping them
									understand the business opportunity and to prepare and scale their
									business to benefit from these. At ENVEX, Aditya will work closely with
									the various teams in helping identifying the various GTM strategies and
									efficient scaling.
								</p>
								</div>
							</div>
							
						</div>
					</Slider>
					<div className={`${styles.close_btn}`} onClick={handleClick}>
						<img src={Close.src} className="img-responsive" />
					</div>
				</div>
			</div>
			<div className="container">
				<div className={`${styles.title} section_title pb_40`}>Who we are</div>
				<div className="main_tab_row">
					<div className="custom_tab">
						<div className="tab_titles">
							<div className="tab_title">ENVEX</div>
							<div className="tab_title">ACX - Our Partner</div>
							<div className="tab_title">Board Of Directors</div>
						</div>
					</div>

					<div className="tab_content">
						<div className={`${styles.who_we_are_box}`}>
							<div className={`${styles.who_we_are_info}`}>
								<img src={envex.src} className="img-responsive b_r_20" />
							</div>
							<div className={`${styles.who_we_are_info}`}>
								<h3 className="text_xl pb_15 color_secondary f_w_s_b">Envex</h3>
								<p className="text_reg">
									The world is talking more and more about carbon neutrality. Within the
									increased global interest and India’s own journey to a net zero
									economy, lies ENVEX and its purpose. Our aim, through our businesses,
									is to propel our clients towards carbon neutrality, help them deliver
									on their commitment towards the environment, further their ESG goals
									and achieve their net zero targets.
								</p>
							</div>
						</div>
					</div>
					<div className="tab_content">
						<div className={`${styles.who_we_are_box}`}>
							<div className={`${styles.who_we_are_info}`}>
								<img src={ourPartner.src} className="img-responsive b_r_20" />
							</div>
							<div className={`${styles.who_we_are_info}`}>
								<h3 className="text_xl pb_15 color_secondary f_w_s_b">
									ACX - Our Partner
								</h3>
								<p className="text_reg">
									A global carbon exchange using distributed ledger technology /
									blockchain on a traditional trading architecture to create securitized
									carbon credits.
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.projects_section} tab_content`}>
						<h3 className="text_xl color_secondary f_w_s_b">Board Of Directors</h3>
						<div className={`${styles.board_directors_box} pt_40`}>
							<div className={`${styles.board_directors_info}`}>
								<div className={`${styles.board_img}`}>
									<img src={Vishwajit_Dahanukar.src} className="img-responsive b_r_20" />
								</div>
								<div className={`${styles.box_inside} f_j pt_20`}>
									<h4 className="text_md f_w_b color_secondary">Vishwajit Dahanukar</h4>
									<img
										src={plusIcon.src}
										className="img-responsive"
										data-target="#popUp"
										data-slide="1"
										onClick={(e) => handleClick(e, e.target)}
									/>
								</div>
							</div>
							<div className={`${styles.board_directors_info}`}>
								<div className={`${styles.board_img}`}>
									<img src={Pravin.src} className="img-responsive b_r_20" />
								</div>
								<div className={`${styles.box_inside} f_j pt_20`}>
									<h4 className="text_md f_w_b color_secondary">Pravin Dongre</h4>
									<img
										src={plusIcon.src}
										className="img-responsive"
										data-target="#popUp"
										data-slide="2"
										onClick={(e) => handleClick(e, e.target)}
									/>
								</div>
							</div>
							<div className={`${styles.board_directors_info}`}>
								<div className={`${styles.board_img}`}>
									<img src={AdityaSapru.src} className="img-responsive b_r_20" />
								</div>
								<div className={`${styles.box_inside} f_j pt_20`}>
									<h4 className="text_md f_w_b color_secondary">Aditya Sapru</h4>
									<img
										src={plusIcon.src}
										className="img-responsive"
										// onClick={handleClick}
										data-target="#popUp"
										data-slide="3"
										onClick={(e) => handleClick(e, e.target)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
