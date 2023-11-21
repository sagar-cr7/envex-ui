/* eslint-disable no-redeclare */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/What.module.scss";

// IMAGES //
import WhatIcon1 from "../../../public/img/home/gif/WhatIcon1.gif";
import WhatIcon2 from "../../../public/img/home/gif/WhatIcon2.gif";
import WhatIcon3 from "../../../public/img/home/gif/WhatIcon3.gif";
import WhatIcon4 from "../../../public/img/home/gif/WhatIcon4.gif";
import WhatIcon5 from "../../../public/img/home/gif/WhatIcon5.gif";
import WhatIcon6 from "../../../public/img/home/gif/WhatIcon6.gif";

/** Home Hero Section */
export default function What() {
	return (
		<div className={`${styles.what_make} ptb_100`} name="usps">
			<div className="container">
				<div className={`${styles.title} section_title pb_40`}>Our business</div>
				<div className={`${styles.what_section}`}>
					<div className={`${styles.box}`}>
						<img src={WhatIcon1.src} className="img-responsive pb_20" />
						<p>
							We have access to the quality, traceability and reliability Information
							about support projects.
						</p>
					</div>
					<div className={`${styles.box}`}>
						<img src={WhatIcon2.src} className="img-responsive pb_20" />
						<p>
							We offer transparent and fair carbon trading so more people feel
							encouraged to take the step to reduce their carbon footprint.
						</p>
					</div>
					<div className={`${styles.box}`}>
						<img src={WhatIcon3.src} className="img-responsive pb_20" />
						<p>
							Our price to offset is best in class, empowering more and more
							organisations of all sizes to start their journey to net zero.
						</p>
					</div>
					<div className={`${styles.box}`}>
						<img src={WhatIcon4.src} className="img-responsive pb_20" />
						<p>
							You can rely on us to possess the important awareness on the efficacy of
							carbon offsets.
						</p>
					</div>
					<div className={`${styles.box}`}>
						<img src={WhatIcon5.src} className="img-responsive pb_20" />
						<p>
							We ensure you get all the Information you need on the emission impact of
							your purchase.
						</p>
					</div>
					<div className={`${styles.box}`}>
						<img src={WhatIcon6.src} className="img-responsive pb_20" />
						<p>
							The ease of offsetting process makes it more accessible to different
							organisations and individuals.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
