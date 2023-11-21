// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Footer.module.scss";

// IMAGES //
import TingLogo from "../../public/img/home/ting.svg";

/** Footer Component */
const Footer = () => {
	return (
		<footer className={`${styles.main_footer}`}>
			<div className="container">
				<div className={`${styles.footer_box}`}>
					<div className={`${styles.left_box}`}>
						<p className="color_white">
							© {new Date().getFullYear()} Envex. All Right Reserved.
						</p>
					</div>
					<div className={`${styles.right_box}`}>
						<a target="_blank" href="https://www.ting.in/">
							<img src={TingLogo.src} alt="ting logo" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
