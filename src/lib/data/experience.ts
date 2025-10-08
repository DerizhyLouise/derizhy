
import { imageRender } from "$lib/image-render";
import type { Experience } from "$lib/type/data-type";

export const experience: Experience[] = [
	{
		id: 2,
		position: "Software Developer",
		company: "PT Murni Sadar Tbk",
		time: "Oct 2022 - Present",
		logo: { src: imageRender.mtLogo, type: "img" },
		description: [
			"Experienced in designing, developing, maintaining, and deploying healthcare software.",
			"I am part of the core team that builds a Hospital Information System called MTHIS 2.0. I created front-end components in a Svelte environment, handled authentication and authorization, and participated in database design for scalable data management.",
		],
		techs: [
			{ name: "Svelte", icon: { src: imageRender.svelteIcon, type: "svg" } },
			{ name: "TypeScript", icon: { src: imageRender.typescriptIcon, type: "svg" } },
			{ name: "Java", icon: { src: "fa-brands fa-java", type: "fa" } },
			{ name: "Tailwind CSS", icon: { src: imageRender.tailwindIcon, type: "svg" } },
			{ name: "SQL", icon: { src: "fa-regular fa-database", type: "fa" } },
			{ name: "Redis", icon: { src: imageRender.redisIcon, type: "svg" } },
			{ name: "Spring Boot", icon: { src: imageRender.springbootIcon, type: "svg" } },
			{ name: "PostgreSQL", icon: { src: imageRender.postgresqlIcon, type: "svg" } },
			{ name: "MongoDB", icon: { src: imageRender.mongodbIcon, type: "svg" } },
			{ name: "shadcn-svelte", icon: { src: imageRender.shadcnIcon, type: "svg" } },
			{ name: "pnpm", icon: { src: imageRender.pnpmIcon, type: "svg" } },
			{ name: "GrapesJs", icon: { src: imageRender.grapesjsIcon, type: "svg" } },
			{ name: "CodeMirror", icon: { src: imageRender.codemirrorIcon, type: "svg" } },
			{ name: "VS Code", icon: { src: imageRender.vscodeIcon, type: "svg" } },
		],
	},
	{
		id: 1,
		position: "Project Leader",
		company: "RevoU",
		time: "Aug 2023 - Dec 2023",
		logo: { src: imageRender.revouLogo, type: "img" },
		description: [
			"Led Group 6 Balikpapan Section in the Studi Independen - Kampus Merdeka program by the Ministry of Education",
			"",
			"Oversaw two main projects: Clo (E-Commerce Website) and Shopping Cart Database Analysis (Data Analytics).",
		],
		techs: [
			{ name: "Python", icon: { src: "fa-brands fa-python", type: "fa" } },
			{ name: "SQL", icon: { src: "fa-regular fa-database", type: "fa" } },
			{ name: "JavaScript", icon: { src: "fa-brands fa-js", type: "fa" } },
			{ name: "HTML", icon: { src: "fa-brands fa-html5", type: "fa" } },
			{ name: "CSS", icon: { src: "fa-brands fa-css3-alt", type: "fa" } },
			{ name: "Figma", icon: { src: "fa-brands fa-figma", type: "fa" } },
			{ name: "Node.js", icon: { src: "fa-brands fa-node-js", type: "fa" } },
			{ name: "Express.js", icon: { src: imageRender.expressIcon, type: "svg" } },
			{ name: "Prisma", icon: { src: imageRender.prismaIcon, type: "svg" } },
			{ name: "PostgreSQL", icon: { src: imageRender.postgresqlIcon, type: "svg" } },
			{ name: "Pandas", icon: { src: imageRender.pandasIcon, type: "svg" } },
			{ name: "Supabase", icon: { src: imageRender.supabaseIcon, type: "svg" } },
			{ name: "Railway", icon: { src: imageRender.railwayIcon, type: "svg" } },
			{ name: "Git", icon: { src: "fa-brands fa-git-alt", type: "fa" } },
			{ name: "VS Code", icon: { src: imageRender.vscodeIcon, type: "svg" } },
			{ name: "Looker Studio", icon: { src: imageRender.lookerIcon, type: "svg" } },
		],
	},
];