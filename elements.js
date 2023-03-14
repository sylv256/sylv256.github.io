class PageFooter extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
		<footer class="centered-flex column">
			<p>made by Sylv</p>
			<p>This website contains AI-generated content.</p>
		</footer>
		`;
	}
}

class PageHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<header>
			<nav class="hnav">
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/projects">Projects</a>
				<a href="/system">System</a>
			</nav>
		</header>
		`;
	}
}

class SystemMember extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let name = this.getAttribute("name");
		let pronouns = this.getAttribute("pronouns");
		let member_tag = this.getAttribute("member-tag");
		member_tag = member_tag === null ? "-" + name[0].toLowerCase() : member_tag;
		let color = this.getAttribute("color");
		color = color === null ? "#dd6706" : color;
		let format = this.getAttribute("pfp-format");
		format = format === null ? "png" : format;
		let description = this.innerHTML.replace("\n", "").replaceAll("\n", "<br>").replace(/<br>	*$/g, "");
		this.setAttribute("style", `border-color: ${color};`);
		this.innerHTML = `
		<div class="pfp">
			<img src="/pfps/${name}.${format}" alt="Avatar of ${name}"  style="border-color: ${color};">
		</div>
		<div class="column">
			<div>
				<h3>${name}</h3>
			</div>
			<div class="member-data row">
				<p class="pronouns">${pronouns}</p>
				<p>${member_tag}</p>
			</div>
			<div class="member-desc">
				<p>${description}</p>
			</div>
		</div>
		`;
	}
}

export let defineElements = () => {
	customElements.define("page-footer", PageFooter);
	customElements.define("page-header", PageHeader);
	customElements.define("system-member", SystemMember);
};
