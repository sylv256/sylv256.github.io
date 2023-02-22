class PageFooter extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
		<footer class="centered-flex">
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
				<a href="/links">Links</a>
			</nav>
		</header>
		`;
	}
}

export let defineElements = () => {
	customElements.define("page-footer", PageFooter);
	customElements.define("page-header", PageHeader);
};
