import { imageRender } from "$lib/image-render";
import type { Education } from "$lib/type/data-type";

export const education: Education[] = [
    {
        id: 4,
        institute: "Universitas Mikroskil",
        subject: "Master of Information Technology",
        time: "2025 - Present",
        logo: imageRender.mikroskilLogo,
        link: "https://mikroskil.ac.id",
    },
    {
        id: 3,
        institute: "Universitas Mikroskil",
        subject: "Bachelor of Computer Science",
        time: "2020 - 2024",
        logo: imageRender.mikroskilLogo,
        link: "https://mikroskil.ac.id",
    },
    {
        id: 2,
        institute: "RevoU",
        subject: "Data and Software Engineering",
        time: "2023",
        logo: imageRender.revouLogo,
        link: "https://www.revou.co",
    },
    {
        id: 1,
        institute: "SMA Sisingamangaraja",
        subject: "Science",
        time: "2017 - 2018",
        logo: imageRender.smrajaLogo,
        link: "https://smraja.sch.id/",
    },
];
