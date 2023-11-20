/* eslint-disable no-redeclare */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/Partner.module.scss";

// IMAGES //
import ComitImg from "../../../public/img/home/comit.png";

/** Home Hero Section */
export default function Partner() {
	return (
		<div className={`${styles.partner_section}`}>
			<div className="container">
				<div className={`${styles.partner}`}>
					<div className={`${styles.box} pb_100`}>
						<div className={`${styles.title} section_title color_white`}>
							Partner with us!
						</div>
						<p className="color_white">
							An app for everyone, no matter where they are in their journey to carbon
							neutrality. Comit brings buyers and sellers to one platform, enabling
							them to trade multiple environmental products in just a few taps.
						</p>
					</div>
					<div className={`${styles.box}`}>
						<img src={ComitImg.src} className="img-responsive" />
					</div>
				</div>
			</div>
		</div>
	);
}
