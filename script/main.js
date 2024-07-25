tailwind.config = {
	theme: {
		extend: {
			colors: {
				darkblue: "#24305E",
				blue: "#374785",
				softblue: "#A8D0E6",
				red: "#F76C6C",
				yellow: "#F8E9A1",
			},
		},
	},
};

AOS.init();

document.addEventListener("keydown", function (event) {
	if (event.keyCode === 123) {
		event.preventDefault();
	}

	if (
		(event.ctrlKey || event.metaKey) &&
		event.shiftKey &&
		(event.keyCode === 67 || event.keyCode === 73)
	) {
		event.preventDefault();
	}
});
