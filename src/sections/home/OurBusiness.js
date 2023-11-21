/* eslint-disable no-redeclare */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/OurBusiness.module.scss";

// IMAGES //
import Business from "../../../public/img/home/business.png";
import Dots1 from "../../../public/img/home/dots_1.png";
import LiDots from "../../../public/img/home/li_dots.png";

/** Home Hero Section */
export default function OurBusiness() {
	return (
		<div className={`${styles.business_section} sticky_animation`} name="ace">
			<div className="container">
				<div className={`${styles.business} ptb_100`}>
					<img src={Dots1.src} className={`${styles.dots} img-responsive`} />
					<div className={`${styles.box}`}>
						{/* <div className={`${styles.title} section_title`}>Our business</div> */}
						<h4 className="pt_20 pb_40 text_lg">ACX-ENVEX Partnership</h4>
						<p className="pb_40">
							By understanding India’s evolving ESG scenario and to pave the way
							towards its international targets, we have partnered with ACX - a global
							environmental financial products platform, that enables the establishment
							of local environmental product trading platforms with access to its
							global liquidity pool in one connected order book. Through this
							partnership, we aim to facilitate India’s commitment towards a net zero
							economy.
						</p>
						<ul>
							<li>
								<img src={LiDots.src} className={`${styles.li_img} img-responsive`} />
								Mumbai/Gift City, India
							</li>
							<li>
								<img src={LiDots.src} className={`${styles.li_img} img-responsive`} />
								Singapore
							</li>
							<li>
								<img src={LiDots.src} className={`${styles.li_img} img-responsive`} />
								Abu Dhabi, UAE
							</li>
						</ul>
					</div>
					<div className={`${styles.box}`}>
						<img src={Business.src} className="img-responsive" />
					</div>
				</div>
			</div>
		</div>
	);
}
