tailwind.config = {
	theme: {
		extend: {
			colors: {
				gray: "#2B303B",
				lightgray: "#373D49",
				green: "#5CECC6",
				maroon: "#C32148",
				yellow: "#F8E9A1",
				navy: "#0D192B",
			},
		},
	},
};

AOS.init();

document.addEventListener("keydown", function (event) {
	if (event.key == "F12") {
		event.preventDefault();
	}

	if (
		(event.ctrlKey || event.metaKey) &&
		event.shiftKey &&
		(event.key == "C" || event.key == "I")
	) {
		event.preventDefault();
	}
});

document.querySelectorAll("#drawer-navigation a").forEach((anchor) => {
	anchor.addEventListener("click", () => {
		const button = document.getElementById("drawer-close-btn");
		if (button) {
			button.click();
		}
	});
});
