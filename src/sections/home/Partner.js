/* eslint-disable no-redeclare */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/Partner.module.scss";

// IMAGES //
import Mailto from "../../../public/img/home/email.png";
import Location from "../../../public/img/home/location.png";

/** Home Hero Section */
export default function Partner() {
	return (
		<div className={`${styles.partner_section} ptb_100`}>
			<div className="container">
				<div className={`${styles.partner}`}>
					<div className={`${styles.info} pb_100`}>
						<div className={`${styles.title} section_title color_white`}>
							Partner with us!
						</div>
						<p className="color_white pt_20 pb_30">
							Come, join us on Day Zero of revolutionising India’s journey to Net Zero.
						</p>
						<ul>
							<li>
								<img src={Mailto.src} className={`${styles.li_img}`} />
								<a href="mailto:contactus@envex.co" className="text_reg">
									contactus@envex.co
								</a>
							</li>
							<li>
								<img src={Location.src} className={`${styles.li_img}`} />
								<a href="#" className="text_reg">
									3rd Floor, Industrial Assurance Building,
									<br /> Veer Nariman Road, Churchgate,
									<br /> Mumbai 400 020. India
								</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.form}`}>
						<form name="Home Contact" method="POST">
							<div className={`${styles.form_group} fadeInUp`}>
								<div className={`${styles.form_field}`}>
									<input type="text" placeholder="Full Name" name="Name" required />
								</div>
								<div className={`${styles.form_field}`}>
									<input type="email" placeholder="Email ID" name="Email" required />
								</div>
								<div className={`${styles.form_field}`}>
									<input type="text" placeholder="Phone" name="Mobile" required />
								</div>
								<div className={`${styles.msg}`}>
									<textarea
										className={styles.input_field}
										name="Message"
										placeholder="Message"
										rows="0"
									></textarea>
								</div>
							</div>
							<div className={`${styles.submit_button} fadeInUp`}>
								<div className={`${styles.button}`}>
									<input type="submit" value="SUBMIT" />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
