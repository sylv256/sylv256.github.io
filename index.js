window.onload = () => {
	Array.from(document.getElementsByTagName("a")).forEach((node) => {
		if (!node.classList.contains("current-tab")) {
			node.target = "_blank";
			node.rel = "noopener noreferrer";
		}
	});
};
