function closeTopNav() {
		const x = document.getElementById("topNav");
		x.className = "topnav";
}

function toggleTopNav() {
		const x = document.getElementById("topNav");
		if (x.className === "topnav") {
				x.className += " responsive";
		} else {
				x.className = "topnav";
		}
}

