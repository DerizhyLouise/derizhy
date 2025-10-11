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
            { title: "Skill", link: "#skill" },
            { title: "Experience", link: "#experience" },
            { title: "Project", link: "#project" },
            { title: "Education", link: "#education" },
            { title: "Review", link: "#review" },
        ],
    },
    {
        title: "Journal",
        link: "/journal",
    },
];
