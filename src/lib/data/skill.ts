import { imageRender } from "$lib/image-render";
import type { Skill } from "$lib/type/data-type";

export const languageSkill: Skill[] = [
	{
		skill: "TypeScript",
		icon: { src: imageRender.typescriptIcon, type: "svg" },
		link: "https://www.typescriptlang.org/",
	},
	{
		skill: "JavaScript",
		icon: { src: "fa-brands fa-js", type: "fa" },
		link: "https://www.javascript.com/",
	},
	{
		skill: "Python",
		icon: { src: "fa-brands fa-python", type: "fa" },
		link: "https://www.python.org/",
	},
	{
		skill: "Java",
		icon: { src: "fa-brands fa-java", type: "fa" },
		link: "https://www.java.com/en/",
	},
	{
		skill: "SQL",
		icon: { src: "fa-regular fa-database", type: "fa" },
		link: "https://en.wikipedia.org/wiki/SQL",
	},
	{
		skill: "HTML",
		icon: { src: "fa-brands fa-html5", type: "fa" },
		link: "https://en.wikipedia.org/wiki/HTML",
	},
	{
		skill: "CSS",
		icon: { src: "fa-brands fa-css3-alt", type: "fa" },
		link: "https://en.wikipedia.org/wiki/CSS",
	},
];

export const frameworkSkill: Skill[] = [
	{
		skill: "Svelte",
		icon: { src: imageRender.svelteIcon, type: "svg" },
		link: "https://svelte.dev/",
	},
	{
		skill: "Tailwind CSS",
		icon: { src: imageRender.tailwindIcon, type: "svg" },
		link: "https://tailwindcss.com/",
	},
	{
		skill: "Node.js",
		icon: { src: "fa-brands fa-node-js", type: "fa" },
		link: "https://nodejs.org/en",
	},
	{
		skill: "Spring Boot",
		icon: { src: imageRender.springbootIcon, type: "svg" },
		link: "https://spring.io/",
	},
	{
		skill: "Express.js",
		icon: { src: imageRender.expressIcon, type: "svg" },
		link: "https://expressjs.com/",
	},
];

export const databaseSkill: Skill[] = [
	{
		skill: "PostgreSQL",
		icon: { src: imageRender.postgresqlIcon, type: "svg" },
		link: "https://www.postgresql.org/",
	},
	{
		skill: "Redis",
		icon: { src: imageRender.redisIcon, type: "svg" },
		link: "https://redis.io/",
	},
	{
		skill: "MongoDB",
		icon: { src: imageRender.mongodbIcon, type: "svg" },
		link: "https://www.mongodb.com/",
	},
	{
		skill: "MySQL",
		icon: { src: imageRender.mysqlIcon, type: "svg" },
		link: "https://www.mysql.com/",
	},
];

export const toolSkill: Skill[] = [
	{
		skill: "Git",
		icon: { src: "fa-brands fa-git-alt", type: "fa" },
		link: "https://git-scm.com/",
	},
	{
		skill: "pnpm",
		icon: { src: imageRender.pnpmIcon, type: "svg" },
		link: "https://pnpm.io/",
	},
	{
		skill: "Figma",
		icon: { src: "fa-brands fa-figma", type: "fa" },
		link: "https://www.figma.com/",
	},
];
