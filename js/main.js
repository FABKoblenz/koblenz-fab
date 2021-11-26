function initMap() {
		const fab_loc = { lat: 50.38028649499958, lng: 7.54943587324097}
		const map = new google.maps.Map(document.getElementById("map"), {
				zoom: 18,
				center: fab_loc,
		});
		const marker = new google.maps.Marker({
				position: fab_loc,
				map: map,
		});
}

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

let currentBackgroundImage = 0;
const maxBackgroundImages = 3;
function changeBannerImage() {
		if (currentBackgroundImage >= maxBackgroundImages) {
				currentBackgroundImage = 0;
		}

		const bannerImageItem = document.getElementsByClassName("bgimg");
		bannerImageItem[0].style.backgroundImage = "url(/assets/pool-table-0" + currentBackgroundImage + ".jpg)"
		currentBackgroundImage++;
}

setInterval(changeBannerImage, 10000);

