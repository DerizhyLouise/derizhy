
import { imageRender } from "$lib/image-render";
import type { Education } from "$lib/type/data-type";

export const education: Education[] = [
	{
		id: 4,
		institute: "Universitas Mikroskil",
		subject: "Master of Information Technology",
		time: "2025 - Present",
		logo: { src: imageRender.mikroskilLogo, type: "png" },
		link: "https://mikroskil.ac.id",
		description: [
		],
	},
	{
		id: 3,
		institute: "Universitas Mikroskil",
		subject: "Bachelor of Computer Science",
		time: "2020 - 2024",
		logo: { src: imageRender.mikroskilLogo, type: "png" },
		link: "https://mikroskil.ac.id",
		description: [
		],
	},
	{
		id: 2,
		institute: "RevoU",
		subject: "Data and Software Engineering",
		time: "2023",
		logo: { src: imageRender.revouLogo, type: "png" },
		link: "https://www.revou.co",
		description: [
		],
	},
	{
		id: 1,
		institute: "SMA Sisingamangaraja",
		subject: "Science",
		time: "2017 - 2018",
		logo: { src: imageRender.smrajaLogo, type: "img" },
		link: "https://smraja.sch.id/",
		description: [
		],
	},
];