/** MODULES */
import { useCallback, useEffect, useRef } from "react";
/** COMPONENTS */

/** SECTIONS */

/** PLUGINS */
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
/** STYLES */
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

/** Images */

/** Lightgallery Component */
const AlbumGallery = ({ images, children }) => {
	const galleryRef = useRef(null);

	const onInit = useCallback((detail) => {
		if (detail) {
			galleryRef.current = detail.instance;
		}
	}, []);

	return (
		<div onClick={() => galleryRef.current.openGallery()}>
			<LightGallery
				ref={galleryRef}
				speed={500}
				dynamic
				dynamicEl={images}
				onInit={onInit}
				plugins={[lgThumbnail, lgZoom]}
			>
				{children}
			</LightGallery>
		</div>
	);
};

export default AlbumGallery;
