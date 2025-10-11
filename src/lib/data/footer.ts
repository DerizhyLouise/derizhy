import type { FooterData } from "$lib/type/data-type";

export const footerData: FooterData = {
    sections: [
        {
            title: "Portfolio",
            links: [
                { title: "Profile", href: "/portfolio#profile" },
                { title: "Skills", href: "/portfolio#skills" },
                { title: "Experiences", href: "/portfolio#experiences" },
                { title: "Projects", href: "/portfolio#projects" },
                { title: "Review", href: "/portfolio#reviews" },
            ],
        },
        {
            title: "More About Me",
            links: [
                {
                    title: "Speedcubing",
                    href: "https://www.worldcubeassociation.org/persons/2018DERI01",
                    target: "_blank",
                },
                {
                    title: "Myers-Briggs Type Indicator",
                    href: "https://www.16personalities.com/profiles/39b4ed81dddba",
                    target: "_blank",
                },
            ],
        },
        {
            title: "Contact Me",
            links: [
                {
                    title: "Whatsapp",
                    href: "https://wa.me/6282367319569",
                    target: "_blank",
                },
                {
                    title: "Email",
                    href: "mailto:louise.derizhy@gmail.com",
                    target: "_blank",
                },
                {
                    title: "Telegram",
                    href: "https://t.me/derizhylouise",
                    target: "_blank",
                },
                {
                    title: "LINE",
                    href: "https://line.me/R/ti/p/eo96yTt8Ix",
                    target: "_blank",
                },
            ],
        },
    ],
    social: [
        {
            label: "Instagram",
            icon: "fab fa-instagram",
            href: "https://www.instagram.com/derizheese",
            target: "_blank",
        },
        {
            label: "Facebook",
            icon: "fab fa-facebook-f",
            href: "https://www.facebook.com/derizhylouise",
            target: "_blank",
        },
        {
            label: "LinkedIn",
            icon: "fab fa-linkedin-in",
            href: "https://www.linkedin.com/in/louisederizhy/",
            target: "_blank",
        },
        {
            label: "Github",
            icon: "fa-brands fa-github",
            href: "https://github.com/DerizhyLouise",
            target: "_blank",
        },
    ],
};