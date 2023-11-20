/* eslint-disable no-redeclare */
// MODULES //
import React, { useState, useEffect, useRef } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/WhoWeAre.module.scss";

// IMAGES //
import envex from "../../../public/img/home/who_we_are/envex.jpg";
import ourPartner from "../../../public/img/home/who_we_are/our_partner.jpg";
import Vishwajit_Dahanukar from "../../../public/img/home/who_we_are/Vishwajit_Dahanukar.png";
import AdityaSapru from "../../../public/img/home/who_we_are/Aditya_Sapru.png";
import plusIcon from "../../../public/img/plus_icon.svg";

/** Home Hero Section */
export default function WhoWeAre() {
	useEffect(() => {
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
	}, []);

	return (
		<div className={`${styles.who_we_are} who_we_are_tab ptb_100`}>
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
								<img src={Vishwajit_Dahanukar.src} className="img-responsive b_r_20" />
								<div className={`${styles.box_inside} f_j pt_20`}>
									<h4 className="text_md f_w_b color_secondary">Vishwajit Dahanukar</h4>
									<img src={plusIcon.src} className="img-responsive" />
								</div>
							</div>
							<div className={`${styles.board_directors_info}`}>
								<img src={Vishwajit_Dahanukar.src} className="img-responsive b_r_20" />
								<div className={`${styles.box_inside} f_j pt_20`}>
									<h4 className="text_md f_w_b color_secondary">Pravin Dongre</h4>
									<img src={plusIcon.src} className="img-responsive" />
								</div>
							</div>
							<div className={`${styles.board_directors_info}`}>
								<img src={AdityaSapru.src} className="img-responsive b_r_20" />
								<div className={`${styles.box_inside} f_j pt_20`}>
									<h4 className="text_md f_w_b color_secondary">Aditya Sapru</h4>
									<img src={plusIcon.src} className="img-responsive" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
