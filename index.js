// Sylv API (SAPI)
window.SAPI = {
	memberCount: 0,
	updateMemberCount: () => {
		document.getElementById("member-count").innerHTML = SAPI.memberCount;
	}
};

import { defineElements } from "./elements.js";

defineElements();

window.onload = () => {
	console.log("hi there, what are you doing here?");
	
	if (window.location.pathname === "/system") {
		SAPI.updateMemberCount();
	}
};
