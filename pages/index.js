// MODULES //

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Banner from "@/sections/home/Banner";
import WhoWeAre from "@/sections/home/WhoWeAre";
import OurBusiness from "@/sections/home/OurBusiness";
import Comit from "@/sections/home/Comit";
import What from "@/sections/home/What";
import Focus from "@/sections/home/Focus";
import Partner from "@/sections/home/Partner";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Home.module.scss";

/** Home Page */
export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={`${styles.index_page}`}>
				<Banner />
				<WhoWeAre />
				<OurBusiness />
				<Comit />
				<What />
				<Focus />
				<Partner />
			</main>
			{/* <Footer /> */}
		</div>
	);
}
