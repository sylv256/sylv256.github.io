// hack to make this work in a convenient way

for (let node of document.querySelectorAll("div.highlighter-rouge")) {
	let pre = node.querySelector("pre");
	if (node.classList.contains("command-line")) {
		pre.classList.add("command-line");
	}

	let dataUser = node.attributes.getNamedItem("data-user");
	let dataHost = node.attributes.getNamedItem("data-host");
	if (dataUser) {
		pre.setAttribute("data-user", dataUser.value);
	}
	
	if (dataHost) {
		pre.setAttribute("data-host", dataHost.value);
	}
}
