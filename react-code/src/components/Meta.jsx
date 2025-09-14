import { useEffect } from "react";

/**
 * Meta component for setting document title and meta tags without external libraries.
 * Usage: <Meta title="..." description="..." ogTitle="..." ogDescription="..." ogImage="..." ogUrl="..." />
 */
function Meta({
	title = "Vaishnavi G Agarwal",
	description = "Learn about Vaishnavi G Agarwal's background as a Mechanical Engineer at Airbus and IIT Bombay with expertise in aerospace systems and cross-functional collaboration.",
	ogTitle = "Vaishnavi G Agarwal",
	ogDescription = "Engineer with expertise in aerospace systems, satellite technology, and user-centered problem solving. Discover my journey from IIT Bombay to Airbus.",
	ogImage = "/api/placeholder/1200/630",
	ogUrl = "https://vaishnaviagarwal.com/about"
}) {
	useEffect(() => {
		document.title = title;
		// Set or update meta tags
		const setMeta = (name, content, property = false) => {
			let selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
			let tag = document.head.querySelector(selector);
			if (!tag) {
				tag = document.createElement('meta');
				if (property) tag.setAttribute('property', name);
				else tag.setAttribute('name', name);
				document.head.appendChild(tag);
			}
			tag.setAttribute('content', content);
		};
		setMeta('description', description);
		setMeta('og:title', ogTitle, true);
		setMeta('og:description', ogDescription, true);
		setMeta('og:image', ogImage, true);
		setMeta('og:url', ogUrl, true);
		// Always set charset and viewport if not present
		if (!document.head.querySelector("meta[charset]")) {
			const charset = document.createElement('meta');
			charset.setAttribute('charset', 'UTF-8');
			document.head.prepend(charset);
		}
		if (!document.head.querySelector("meta[name='viewport']")) {
			const viewport = document.createElement('meta');
			viewport.setAttribute('name', 'viewport');
			viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
			document.head.appendChild(viewport);
		}
	}, [title, description, ogTitle, ogDescription, ogImage, ogUrl]);
	return null;
}

export default Meta;
