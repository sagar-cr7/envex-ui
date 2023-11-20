/* eslint-disable no-redeclare */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/Banner.module.scss";

// IMAGES //
import BannerImg from "../../../public/img/home/banner.jpg";
import Image from "next/image";

/** Home Hero Section */
export default function Banner() {
	return (
		<div className={styles.banner}>
			<img src={BannerImg.src} className={`${styles.banner_img} img-responsive`} />
			<div className={`${styles.banner_info}`}>
				<div className={`${styles.banner_title}`}>
					<h1 className="text_xxxl">
						Setting the benchmark for <span>efficiency</span> <br />
						in global environmental markets
					</h1>
				</div>
				<div className={`${styles.counter_section} text_center`}>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							~40,000 <span>MtCO2e</span>
						</h2>
						<p className="text_md color_white">Emissions Uncovered</p>
					</div>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							48,000 <span>MtCO2e</span>
						</h2>
						<p className="text_md color_white">Total Emissions</p>
					</div>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							7,700 <span>MtCO2e</span>
						</h2>
						<p className="text_md color_white">Offsets – Compliance & Taxes</p>
					</div>
					<div className={`${styles.counter_box}`}>
						<h2 className="text_xxl">
							95 <span>MtCO2e</span>
						</h2>
						<p className="text_md color_white">Offsets – Voluntary</p>
					</div>
				</div>
			</div>
		</div>
	);
}
