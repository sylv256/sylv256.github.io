---
title: Projects
permalink: /projects/
---

# Projects

<!-- TODO: replace this with a better system -->
<div id="projects">
	<!-- copy-paste this template and fill in the css vars to add new projects -->
	<template id="project-template">
		<project
			style="
				--icon: url(/projects/icons/);
				--icon-color: ;
				--name: '';
			"
			id="REPLACE_ME_WITH_ID"
		>
			<div class="project-icon" title="REPLACE_ME_WITH_ALT_TEXT"></div>
			<div class="project-info">
				<h3 class="project-name"></h3>
				<div class="project-data">
					<a href="https://github.com/"><img alt="github" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/github_vector.svg"></a>
					<a href="https://modrinth.com/mod/"><img alt="modrinth" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/modrinth_vector.svg"></a>
				</div>
				<div class="project-desc">
					DESCRIPTION_HERE
				</div>
			</div>
		</project>
	</template>
	<project
		style="
			--icon: url(/projects/icons/fishpixel.png);
			--icon-color: #822c2b;
			--name: 'Fishpixel';
		"
		id="fishpixel"
	>
		<div class="project-icon" title="Icon of Fishpixel"></div>
		<div class="project-info">
			<a href="/fishpixel"><h3 class="project-name"></h3></a>
			<div class="project-data">
				<a href="https://github.com/VulpixelMC"><img alt="github" height="40" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/github_vector.svg"></a>
				<a href="/fishpixel/discord"><img alt="discord-singular" height="40" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/social/discord-singular_vector.svg"></a>
			</div>
			<div class="project-desc">
				A queer-friendly Minecraft modding group!
			</div>
		</div>
	</project>
</div>
