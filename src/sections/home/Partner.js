/* eslint-disable no-redeclare */
// MODULES //
import { useRef } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/Partner.module.scss";

// IMAGES //
import Mailto from "../../../public/img/home/email.png";
import Location from "../../../public/img/home/location.png";
import close from "../../../public/img/home/close.svg";

/** Home Hero Section */
export default function Partner() {
	const contactForm = useRef();
	/** openPopup function */
	function openPopup() {
		const popup = document.getElementById("popup");
		popup.style.display = "block";
		contactForm.current.reset();
	}
	/** closePopup function */
	function closePopup() {
		const popup = document.getElementById("popup");
		popup.style.display = "none";
	}
	/** handleSubmit function */
	const handleSubmit = (event) => {
		event.preventDefault();
		const scriptURL =
			"https://script.google.com/macros/s/AKfycbzqnRB2hsqy8oh_4JqjptJurGUGtgnLoiEQsiFjsXa2OnBnJmnVlkeKqzpbIMf9LBmHAQ/exec";

		fetch(scriptURL, {
			method: "POST",
			body: new FormData(contactForm.current),
		})
			// .then((response) => alert("You have successfully submitted."))
			.then((response) => openPopup())
			.catch((error) => console.error("Error!", error.message));
	};

	return (
		<div className={`${styles.partner_section} ptb_80`} name="contact">
			<div className="container">
				<div className={`${styles.partner}`}>
					<div className={`${styles.info} pb_30`}>
						<div className={`${styles.title} section_title color_white`}>
							Partner with us!
						</div>
						<p className="color_white pt_20">
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
						<form
							ref={contactForm}
							onSubmit={handleSubmit}
							name="Home Contact"
							method="POST"
							id="contactForm"
						>
							<div className={`${styles.form_group} fadeInUp`}>
								<div className={`${styles.form_field}`}>
									<input
										type="text"
										placeholder="Full Name"
										name="Name"
										pattern="[A-Za-z]+"
										title="letters only"
										required
									/>
								</div>
								<div className={`${styles.form_field}`}>
									<input type="email" placeholder="Email ID" name="Email" required />
								</div>
								<div className={`${styles.form_field}`}>
									<input
										type="text"
										placeholder="Phone"
										name="Mobile"
										pattern="[0-9]+"
										title="only numbers"
										required
									/>
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
			<div id="popup" class={styles.popup}>
				<div class={styles.popup_content}>
					<span class={styles.close_btn} onClick={closePopup}>
						<img src={close.src} alt="" />
					</span>
					<p className="text_reg">Thank You for contacting us.</p>
					<p className="text_reg">We will get back to you shortly.</p>
				</div>
			</div>
		</div>
	);
}
