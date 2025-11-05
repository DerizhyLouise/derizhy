import cv from "$lib/assets/pdf/cv.pdf";
import type { Contact } from "$lib/type/data-type";

export const portfolioContactData: Contact[] = [
    {
        icon: "fa-regular fa-envelope",
        link: "mailto:louise.derizhy@gmail.com",
        label: "Email",
    },
    {
        icon: "fab fa-whatsapp",
        link: "https://wa.me/6282367319569",
        label: "Whatsapp",
    },
    {
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/derizheese",
        label: "Instagram",
    },
    {
        icon: "fab fa-facebook-f",
        link: "https://www.facebook.com/derizhylouise",
        label: "Facebook",
    },
    {
        icon: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/in/louisederizhy/",
        label: "LinkedIn",
    },
    {
        icon: "fab fa-github",
        link: "https://github.com/DerizhyLouise",
        label: "Github",
    },
    {
        icon: "before:content-['CV'] font-semibold",
        link: cv,
        label: "Curriculum Vitae",
    },
];

export const homeContactData: Contact[] = [
    {
        icon: "fab fa-whatsapp",
        link: "https://wa.me/6282367319569",
        label: "Whatsapp",
    },
    {
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/derizheese",
        label: "Instagram",
    },
    {
        icon: "fab fa-facebook-f",
        link: "https://www.facebook.com/derizhylouise",
        label: "Facebook",
    },
    {
        icon: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/in/louisederizhy/",
        label: "LinkedIn",
    },
];
