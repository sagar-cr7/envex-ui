/* eslint-disable no-redeclare */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/OurBusiness.module.scss";

// IMAGES //
import Business from "../../../public/img/home/business.png";

/** Home Hero Section */
export default function OurBusiness() {
	return (
		<div className={`${styles.business_section}`}>
			<div className="container">
				<div className={`${styles.business} ptb_100`}>
					<div className={`${styles.box}`}>
						<div className={`${styles.title} section_title`}>Our business</div>
						<h4 className="pt_20 pb_40 text_lg">ACX-ENVEX Partnership</h4>
						<p>
							By understanding India’s evolving ESG scenario and to pave the way
							towards its international targets, we have partnered with ACX - a global
							environmental financial products platform, that enables the establishment
							of local environmental product trading platforms with access to its
							global liquidity pool in one connected order book. Through this
							partnership, we aim to facilitate India’s commitment towards a net zero
							economy.
						</p>
					</div>
					<div className={`${styles.box}`}>
						<img src={Business.src} className="img-responsive" />
					</div>
				</div>
			</div>
		</div>
	);
}
