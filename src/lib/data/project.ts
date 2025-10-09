import helpMeProposal from "$lib/assets/pdf/helpMeProposal.pdf";
import mtPrinter from "$lib/assets/pdf/mtprinter.pdf";
import { imageRender } from "$lib/image-render";
import type { Project } from "$lib/type/data-type";

export const project: Project[] = [
	{
		id: 11,
		title: "MT-PRINTER",
		subtitle: "An Electron Printing App",
		media: [
			{
				title: "Preview",
				url: mtPrinter,
				type: "PDF",
				typeSymbol: { src: "fa-regular fa-file-pdf", type: "fa" },
			},
		],
		time: "April - July 2025",
		type: "Desktop App",
		description: [
			"This is side projects of MTHIS 2.0's Project.",
			"MT-Printer is a desktop application that acts as a bridge between MTHIS 2.0 and a local printer. When a user clicks the 'Print' button on the web, the web app sends a request to MT-Printer, which then automatically prints the received file using pre-configured printer settings."
		],
		techs: [
			{
				name: "React",
				pic: { src: "fa-brands fa-react", type: "fa" },
			},
			{
				name: "Electron",
				pic: { src: imageRender.electronIcon, type: "svg" },
			},
			{
				name: "Tailwind CSS",
				pic: { src: imageRender.tailwindIcon, type: "svg" },
			},
			{
				name: "Git",
				pic: { src: "fa-brands fa-git-alt", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 10,
		title: "Assessment Builder",
		subtitle: "GrapesJs Web Builder",
		media: [],
		time: "August 2024 - Now",
		type: "Full-Stack Web",
		description: [
			"This is side projects of MTHIS 2.0's Project.",
			"",
			"This project was initiated to meet a hospital's need for a custom-built, functional assessment tool with integrated database storage. was entrusted with leading the development of the Assessment Builder, a web-based solution that empowers users to design and manage their own assessment templates. Built with GrapesJS, the tool allows users to create dynamic templates and extend functionality through custom JavaScript code, enabling a high degree of flexibility and control."
		],
		techs: [
			{
				name: "Svelte",
				pic: { src: imageRender.svelteIcon, type: "svg" },
			},
			{
				name: "Tailwind CSS",
				pic: { src: imageRender.tailwindIcon, type: "svg" },
			},
			{
				name: "GrapesJs",
				pic: { src: imageRender.grapesjsIcon, type: "svg" },
			},
			{
				name: "MongoDB",
				pic: { src: imageRender.mongodbIcon, type: "svg" },
			},
			{
				name: "CodeMirror",
				pic: { src: imageRender.codemirrorIcon, type: "svg" },
			},
			{
				name: "Git",
				pic: { src: "fa-brands fa-git-alt", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 9,
		title: "Peduli Anak",
		subtitle: "Stunting Web Based App",
		type: "Front-End Web",
		media: [
			{
				title: "Source Code",
				url: "https://github.com/DerizhyLouise/peduli-anak",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
			{
				title: "Peduli Anak Website",
				url: "https://peduli-anak.derizhy.com",
				type: "Web",
				typeSymbol: { src: "fa-brands fa-browser", type: "fa" },
			},
		],
		time: "March - August 2024",
		description: [
			"This is final project for Mikroskil University - Informatics Engineering's Bachelor Degree.",
			"",
			"This is an UI for a Stunting web based app.",
			"Account for testing purpose: ",
			"- email 1: user@mail.com ",
			"- email 2: nakes@mail.com ",
			"- email 3: admin@mail.com ",
			"- Pass: 123",
		],
		techs: [
			{
				name: "Tailwind CSS",
				pic: { src: imageRender.tailwindIcon, type: "svg" },
			},
			{
				name: "HTML",
				pic: { src: "fa-brands fa-html5", type: "fa" },
			},
			{
				name: "JavaScript",
				pic: { src: "fa-brands fa-js", type: "fa" },
			},
			{
				name: "Git",
				pic: { src: "fa-brands fa-git-alt", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 8,
		title: "MTHIS 2.0",
		subtitle: "Murni Teguh Hospital Information System",
		type: "Full-Stack Web",
		media: [],
		time: "January 2024 - Now",
		description: [
			"MTHIS (Murni Teguh Hospital Information System) is an information system digital platform that manages and integrates medical, administrative, and financial functions within a healthcare facility to streamline operations and improve patient care.",
			"",
			"This project is related to my position as a Software Developer in PT Murni Sadar Tbk.",
		],
		techs: [
			{
				name: "Svelte",
				pic: { src: imageRender.svelteIcon, type: "svg" },
			},
			{
				name: "TypeScript",
				pic: { src: imageRender.typescriptIcon, type: "svg" },
			},
			{
				name: "Java",
				pic: { src: "fa-brands fa-java", type: "fa" },
			},
			{
				name: "Tailwind CSS",
				pic: { src: imageRender.tailwindIcon, type: "svg" },
			},
			{
				name: "SQL",
				pic: { src: "fa-regular fa-database", type: "fa" },
			},
			{
				name: "Redis",
				pic: { src: imageRender.redisIcon, type: "svg" },
			},
			{
				name: "Spring Boot",
				pic: { src: imageRender.springbootIcon, type: "svg" },
			},
			{
				name: "PostgreSQL",
				pic: { src: imageRender.postgresqlIcon, type: "svg" },
			},
			{
				name: "MongoDB",
				pic: { src: imageRender.mongodbIcon, type: "svg" },
			},
			{
				name: "shadcn-svelte",
				pic: { src: imageRender.shadcnIcon, type: "svg" },
			},
			{
				name: "pnpm",
				pic: { src: imageRender.pnpmIcon, type: "svg" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 7,
		title: "derizhy.com",
		subtitle: "Personal Website",
		type: "Front-End Web",
		media: [
			{
				title: "Source Code",
				url: "https://github.com/DerizhyLouise/derizhy",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
			{
				title: "Personal Website",
				url: "https://derizhy.com",
				type: "Web",
				typeSymbol: { src: "fa-brands fa-browser", type: "fa" },
			},
		],
		time: "December 2023 - Now",
		description: [
			"My personal dan portfolio website that basesd SvelteKit, Tailwind CSS, TypeScript and deployed with Github Pages.",
		],
		techs: [
			{
				name: "Svelte",
				pic: { src: imageRender.svelteIcon, type: "svg" },
			},
			{
				name: "Tailwind CSS",
				pic: { src: imageRender.tailwindIcon, type: "svg" },
			},
			{
				name: "TypeScript",
				pic: { src: imageRender.typescriptIcon, type: "svg" },
			},
			{
				name: "HTML",
				pic: { src: "fa-brands fa-html5", type: "fa" },
			},
			{
				name: "Git",
				pic: { src: "fa-brands fa-git-alt", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 6,
		title: "Shopping Cart Database",
		subtitle: "Data Analytics Project",
		type: "Data Analytics",
		media: [
			{
				title: "Presentation",
				url: "https://drive.google.com/file/d/1IApQxj4iHTQDTRybVrOtbfcbCe0bmvoc/view?usp=drive_link",
				type: "PDF",
				typeSymbol: { src: "fa-regular fa-file-pdf", type: "fa" },
			},
			{
				title: "Dashboard",
				url: "https://lookerstudio.google.com/reporting/948d021d-22ff-4e25-948d-c1b320b163ef",
				type: "Looker Studio",
				typeSymbol: { src: "fa-regular fa-square-question", type: "fa" },
			},
			{
				title: "Analysis Process",
				url: "https://github.com/DerizhyLouise/RevoU-Data-Analytics-Capstone-Project",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
		],
		time: "October - December 2023",
		description: [
			"This is Kampus Merdeka Batch 5 - RevoU's Data Analytics Capstone Project.",
			"",
			"This is our RevoU's Data Analytics Capstone Project. Our study case is a dataset of Shopping Cart Database. In this project I have been chosen to take the role of Project Leader of Group 6 - Balikpapan Section. Also in addition, we achieved the best group in Shopping Cart's category.",
		],
		techs: [
			{
				name: "Python",
				pic: { src: "fa-brands fa-python", type: "fa" },
			},
			{
				name: "SQL",
				pic: { src: "fa-regular fa-database", type: "fa" },
			},
			{
				name: "Pandas",
				pic: { src: imageRender.pandasIcon, type: "svg" },
			},
			{
				name: "Looker Studio",
				pic: { src: imageRender.lookerIcon, type: "svg" },
			},
			{
				name: "Git",
				pic: { src: "fa-brands fa-git-alt", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 5,
		title: "Clo",
		subtitle: "E-Commerce Web",
		type: "Full-Stack Web",
		media: [
			{
				title: "Presentation",
				url: "https://drive.google.com/file/d/169NUNmykmGugSSSLY031DE7DgjflnXar/view?usp=drive_link",
				type: "PDF",
				typeSymbol: { src: "fa-regular fa-file-pdf", type: "fa" },
			},
			{
				title: "Clo - Prototype",
				url: "https://www.figma.com/file/hpcYi1s67YbdTRZomSKrgV/RevoU-Group6-team-library?type=design&node-id=0-1&mode=design&t=rZgGG7FrgtWLBMtF-0",
				type: "Figma",
				typeSymbol: { src: "fa-brands fa-figma", type: "fa" },
			},
			{
				title: "Clo - Front-End",
				url: "https://github.com/Kampus-Merdeka-Software-Engineering/FE-Balikpapan-6",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
			{
				title: "Clo - Back-End",
				url: "https://github.com/Kampus-Merdeka-Software-Engineering/BE-Balikpapan-6",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
		],
		time: "August - October 2023",
		description: [
			"This is Kampus Merdeka Batch 5 - RevoU's Software Engineering Capstone Project.",
			"",
			"In this project I have been chosen to take the role of Project Leader of Group 6 - Balikpapan Section. Our primary objective is the development of an e-commerce website called 'Clo', with a specific focus on clothing retail.",
		],
		techs: [
			{
				name: "JavaScript",
				pic: { src: "fa-brands fa-js", type: "fa" },
			},
			{
				name: "HTML",
				pic: { src: "fa-brands fa-html5", type: "fa" },
			},
			{
				name: "CSS",
				pic: { src: "fa-brands fa-css3-alt", type: "fa" },
			},
			{
				name: "Figma",
				pic: { src: "fa-brands fa-figma", type: "fa" },
			},
			{
				name: "Node.js",
				pic: { src: "fa-brands fa-node-js", type: "fa" },
			},
			{
				name: "Express.js",
				pic: { src: imageRender.expressIcon, type: "svg" },
			},
			{
				name: "Prisma",
				pic: { src: imageRender.prismaIcon, type: "svg" },
			},
			{
				name: "PostgreSQL",
				pic: { src: imageRender.postgresqlIcon, type: "svg" },
			},
			{
				name: "Supabase",
				pic: { src: imageRender.supabaseIcon, type: "svg" },
			},
			{
				name: "Railway",
				pic: { src: imageRender.railwayIcon, type: "svg" },
			},
			{
				name: "Git",
				pic: { src: "fa-brands fa-git-alt", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 4,
		title: "Bike Rental",
		subtitle: "Data Analytics Project",
		type: "Data Analytics",
		media: [
			{
				title: "Analysis Process",
				url: "https://github.com/DerizhyLouise/Bike-Rental-Data-Analysis-Project",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
		],
		time: "September 2023",
		description: [
			"Dicoding - Belajar Analisis Data dengan Python Project.",
			"",
			"This project is submission for Last Project in Dicoding's Python Data Analytics Course. I use Bike Sharing Dataset to deal with this project. This project include of Data Wrangling, Exploratory Data Analysis, Data Visualization, and Making Dashboard with Streamlit.",
		],
		techs: [
			{
				name: "Python",
				pic: { src: "fa-brands fa-python", type: "fa" },
			},
			{
				name: "Pandas",
				pic: { src: imageRender.pandasIcon, type: "svg" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 3,
		title: "Cryptography",
		subtitle: "Cryptography Algorithm Source Code",
		type: "Cryptography",
		media: [
			{
				title: "Source Code",
				url: "https://github.com/DerizhyLouise/Cryptography-Project",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
		],
		time: "April - July 2023",
		description: [
			"Mikroskil University - Cryptography Project.",
			"",
			"This project is an assignment from lecturer in my Cryptography Lecture.",
			"This project contain some cryptographic algorithms such as:",
			"- Digital Signature Algorithm (DSA)",
			"- Elgamal",
			"- Steganography with Least Significant Bit (LSB)",
			"- RSA",
			"- SHA-256",
			"- Schnorr",
		],
		techs: [
			{
				name: "Python",
				pic: { src: "fa-brands fa-python", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 2,
		title: "Image Processing",
		subtitle: "Image Processing Algorithm Source Code",
		type: "Artificial Intelligence",
		media: [
			{
				title: "Source Code",
				url: "https://github.com/DerizhyLouise/Image-Processing-PythonProject",
				type: "Github",
				typeSymbol: { src: "fa-brands fa-github", type: "fa" },
			},
		],
		time: "April - July 2023",
		description: [
			"Mikroskil University - Computer Vision Project.",
			"",
			"This project is an assignment from lecturer in my Computer Vision Lecture.",
			"This project contain some methods / algorithms such as:",
			"- Harris Corner Detection",
			"- K-Means",
			"- Oriented Fast and Rotated BRIEF (ORB)",
			"- Prewitt Sobel",
			"- Scale Invariant Feature Transform (SIFT)",
			"- Convolutional Neural Network (CNN)",
			"- Histogram of Oriented Gradients (HOG)",
		],
		techs: [
			{
				name: "Python",
				pic: { src: "fa-brands fa-python", type: "fa" },
			},
			{
				name: "VS Code",
				pic: { src: imageRender.vscodeIcon, type: "svg" },
			},
		],
	},
	{
		id: 1,
		title: "Help Me",
		subtitle: "UI Design of Mobile App",
		type: "UI & UX",
		media: [
			{
				title: "Prototype",
				url: "https://www.figma.com/proto/mEWc3Po2FCXFfyuSgQGrwR/Help-Me?type=design&node-id=1-418&t=mXhQibhWYwIFbFPJ-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A418",
				type: "Figma",
				typeSymbol: { src: "fa-brands fa-figma", type: "fa" },
			},
			{
				title: "Proposal",
				url: helpMeProposal,
				type: "PDF",
				typeSymbol: { src: "fa-regular fa-file-pdf", type: "fa" },
			},
		],
		time: "April - July 2023",
		description: [
			"Mikroskil University - Digital Start Up Project.",
			"",
			"This is a project from Digital Start Up Lecture where I built a prototype of an application called 'Help Me'. The concept of this application is to provide services to connect peoples who called 'Requester' whom requesting for helps and create tasks and peoples who called 'Helper' whom will take the tasks and solve them to get rewards.",
		],
		techs: [
			{
				name: "Figma",
				pic: { src: "fa-brands fa-figma", type: "fa" },
			},
		],
	},
];
