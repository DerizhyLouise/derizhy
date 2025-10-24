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
            { title: "Review", link: "#review" },
        ],
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
        title: "My Organization Life",
        link: "/my-organization-life",
    },
    {
        title: "Speedcubing",
        link: "/speedcubing",
    },
    {
        title: "The Painful Truth",
        link: "/the-painful-truth",
    },
];
