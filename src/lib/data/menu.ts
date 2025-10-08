import type { Menu } from "$lib/type/data-type";

export const menu: Menu[] = [
	{
		title: "Home",
		link: "/",
		subMenu: [
			{ title: "Home", link: "#home" },
			{ title: "About Me", link: "#about" },
			{ title: "What I Do", link: "#know-more" },
		],
	},
	{
		title: "Portfolio",
		link: "/portfolio",
		subMenu: [
			{ title: "Profile", link: "#profile" },
			{ title: "Skills", link: "#skills" },
			{ title: "Experiences", link: "#experiences" },
			{ title: "Projects", link: "#projects" },
			{ title: "Reviews", link: "#reviews" },
		],
	},
	{
		title: "Blog",
		link: "/blog",
		subMenu: [{ title: "Blog", link: "#" }],
	},
];