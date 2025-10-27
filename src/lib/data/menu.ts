import type { Menu } from "$lib/type/data-type";

export const menuForNav: Menu[] = [
    {
        title: "Home",
        link: "/",
        subMenu: [
            { title: "Home", link: "#home" },
            { title: "Journal", link: "#journal" },
            { title: "Fun Fact", link: "#fun-fact" },
            { title: "Contact", link: "#footer" },
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
        ],
    },
    {
        title: "Journal",
        link: "/journal",
    },
];

export const menu: Menu[] = [
    {
        title: "",
        link: "/",
    },
    {
        title: "Portfolio",
        link: "/portfolio",
    },
    {
        title: "Journal",
        link: "/journal",
    },
    {
        title: "My Organization Life",
        link: "/journal/my-organization-life",
    },
    {
        title: "Speedcubing",
        link: "/journal/speedcubing",
    },
    {
        title: "The Painful Truth",
        link: "/journal/the-painful-truth",
    },
];
