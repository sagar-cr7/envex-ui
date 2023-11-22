// MODULES //
import { useState, useRef, useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import * as Scroll from "react-scroll";
import Link from "next/link";
import {
	Link as ScrollSection,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

// STYLES //
import styles from "../styles/components/Header.module.scss";

// IMAGES //
import Logo from "../../public/img/home/logo.svg";

/** Header Component */
const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	/** handleButtonClick */
	const handleButtonClick = () => {
		setIsActive(!isActive);
	};

	/** toggleMenu */
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const [sidebarActive, setSidebarActive] = useState(false);
	let scroll = Scroll.animateScroll;

	return (
		<div className={`${styles.main_header}`}>
			<div className="container">
				<div className={`${styles.header_box}`}>
					<div className={`${styles.left_box}`}>
						<a href="/">
							<img src={Logo.src} className="img-responsive" />
						</a>
					</div>
					<div className={`${styles.right_box} ${isActive ? "active_header" : ""}`}>
						<ul>
							<li>
								<ScrollSection
									onClick={() => setSidebarActive(!sidebarActive)}
									activeClass="active"
									to="about_us"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.menu_link} `}
								>
									About us
								</ScrollSection>
							</li>
							<li>
								<ScrollSection
									onClick={() => setSidebarActive(!sidebarActive)}
									activeClass="active"
									to="ace"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.menu_link} `}
								>
									ACX-ENVEX Partnership
								</ScrollSection>
							</li>
							<li>
								<ScrollSection
									onClick={() => setSidebarActive(!sidebarActive)}
									activeClass="active"
									to="comit"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.menu_link} `}
								>
									COMIT
								</ScrollSection>
							</li>
							<li>
								<ScrollSection
									onClick={() => setSidebarActive(!sidebarActive)}
									activeClass="active"
									to="usps"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.menu_link} `}
								>
									Advantages
								</ScrollSection>
							</li>
							<li>
								<ScrollSection
									onClick={() => setSidebarActive(!sidebarActive)}
									activeClass="active"
									to="event"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.menu_link} `}
								>
									Events
								</ScrollSection>
							</li>
							<li>
								<ScrollSection
									onClick={() => setSidebarActive(!sidebarActive)}
									activeClass="active"
									to="contact"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className={`${styles.menu_link} `}
								>
									Contact Us
								</ScrollSection>
							</li>
						</ul>
					</div>
					<div onClick={handleButtonClick} className={`${styles.left} visible-xs`}>
						<div
							className={`${styles.menu_icon} ${isOpen ? styles.menu_open : ""}`}
							onClick={toggleMenu}
						>
							<div className={`${styles.line} ${styles.line_1}`}></div>
							<div className={`${styles.line} ${styles.line_2}`}></div>
							<div className={`${styles.line} ${styles.line_3}`}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
