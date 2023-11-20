// MODULES //
import { useState, useRef, useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

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
	return (
		<div className={`${styles.main_header}`}>
			<div className="container">
				<div className={`${styles.header_box}`}>
					<div className={`${styles.left_box}`}>
						<img src={Logo.src} className="img-responsive" />
					</div>
					<div className={`${styles.right_box} ${isActive ? "active_header" : ""}`}>
						<ul>
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">ACX-ENVEX Partnership</a>
							</li>
							<li>
								<a href="#">COMIT</a>
							</li>
							<li>
								<a href="#">USPs</a>
							</li>
							<li>
								<a href="#">Events</a>
							</li>
							<li>
								<a href="#">Contact Us</a>
							</li>
						</ul>
					</div>
					<div onClick={handleButtonClick} className={`${styles.left} visible-xs`}>
						{/* Left-side menu icon */}
						{/* <div className={styles.menuIcon}>☰</div> */}

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
