import type { Project } from "$lib/type/data-type";

export const project: Project[] = [
	{
		id: 11,
		title: "MT-PRINTER",
		subtitle: "An Electron Printing App",
		media: [
			{
				title: "Preview",
				url: "https://derizhy.com/assets/pdf/mtprinter.pdf",
				type: "PDF",
				typeSymbol: "fa-regular fa-file-pdf",
			},
		],
		time: "April - July 2025",
		type: "Desktop App",
		description: `
			This is side projects of MTHIS 2.0's Project.
			MT-Printer is a desktop application that acts as a bridge between MTHIS 2.0 and a local printer. When a user clicks the 'Print' button on the web, the web app sends a request to MT-Printer, which then automatically prints the received file using pre-configured printer settings.
		`,
		techs: [
			{
				name: "React",
				pic: "fa-brands fa-react",
			},
			{
				name: "Electron",
				pic: "../assets/svg/electron.svg",
			},
			{
				name: "Tailwind CSS",
				pic: "../assets/svg/tailwind.svg",
			},
			{
				name: "Git",
				pic: "fa-brands fa-git-alt",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
		description: `
			his is side projects of MTHIS 2.0's Project.
			his project was initiated to meet a hospital's need for a custom-built, functional assessment tool with integrated database storage. was entrusted with leading the development of the <strong>Assessment Builder</strong>, a web-based solution that empowers users to design and manage their own assessment templates. Built with <strong>GrapesJS</strong>, the tool allows users to create dynamic templates and extend functionality through custom JavaScript code, enabling a high degree of flexibility and control.
		`,
		techs: [
			{
				name: "Svelte",
				pic: "../assets/svg/svelte.svg",
			},
			{
				name: "Tailwind CSS",
				pic: "../assets/svg/tailwind.svg",
			},
			{
				name: "GrapesJs",
				pic: "../assets/svg/grapesjs.svg",
			},
			{
				name: "MongoDB",
				pic: "../assets/svg/mongodb.svg",
			},
			{
				name: "CodeMirror",
				pic: "../assets/svg/codemirror.svg",
			},
			{
				name: "Git",
				pic: "fa-brands fa-git-alt",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-brands fa-github",
			},
			{
				title: "Peduli Anak Website",
				url: "https://peduli-anak.derizhy.com",
				type: "Web",
				typeSymbol: "fa-regular fa-browser",
			},
		],
		time: "March - August 2024",
		description: `
			"This is final project for Mikroskil University - Informatics Engineering's Bachelor Degree.",
			"This is an UI for a Stunting web based app.",
			"Account for testing purpose: ",
			"- email 1: user@mail.com ",
			"- email 2: nakes@mail.com ",
			"- email 3: admin@mail.com ",
			"- Pass: 123",
		`,
		techs: [
			{
				name: "Tailwind CSS",
				pic: "../assets/svg/tailwind.svg",
			},
			{
				name: "HTML",
				pic: "fa-brands fa-html5",
			},
			{
				name: "JavaScript",
				pic: "fa-brands fa-js",
			},
			{
				name: "Git",
				pic: "fa-brands fa-git-alt",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
		description: `
			"MTHIS (Murni Teguh Hospital Information System) is an information system digital platform that manages and integrates medical, administrative, and financial functions within a healthcare facility to streamline operations and improve patient care.",
			"This project is related to my position as a Software Developer in PT Murni Sadar Tbk.",
		`,
		techs: [
			{
				name: "Svelte",
				pic: "../assets/svg/svelte.svg",
			},
			{
				name: "TypeScript",
				pic: "../assets/svg/typescript.svg",
			},
			{
				name: "Java",
				pic: "fa-brands fa-java",
			},
			{
				name: "Tailwind CSS",
				pic: "../assets/svg/tailwind.svg",
			},
			{
				name: "SQL",
				pic: "fa-regular fa-database",
			},
			{
				name: "Redis",
				pic: "../assets/svg/redis.svg",
			},
			{
				name: "Spring Boot",
				pic: "../assets/svg/springboot.svg",
			},
			{
				name: "PostgreSQL",
				pic: "../assets/svg/postgresql.svg",
			},
			{
				name: "MongoDB",
				pic: "../assets/svg/mongodb.svg",
			},
			{
				name: "shadcn-svelte",
				pic: "../assets/svg/shadcn.svg",
			},
			{
				name: "pnpm",
				pic: "../assets/svg/pnpm.svg",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-brands fa-github",
			},
			{
				title: "Personal Website",
				url: "https://derizhy.com",
				type: "Web",
				typeSymbol: "fa-regular fa-browser",
			},
		],
		time: "December 2023 - Now",
		description: `
			"My personal website deployed with Github Pages. This website built with HTML, Tailwind CSS, and JavaScript without any framework.",
		`,
		techs: [
			{
				name: "Tailwind CSS",
				pic: "../assets/svg/tailwind.svg",
			},
			{
				name: "JavaScript",
				pic: "fa-brands fa-js",
			},
			{
				name: "HTML",
				pic: "fa-brands fa-html5",
			},
			{
				name: "CSS",
				pic: "fa-brands fa-css3-alt",
			},
			{
				name: "Git",
				pic: "fa-brands fa-git-alt",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-regular fa-file-pdf",
			},
			{
				title: "Dashboard",
				url: "https://lookerstudio.google.com/reporting/948d021d-22ff-4e25-948d-c1b320b163ef",
				type: "Looker Studio",
				typeSymbol: "fa-regular fa-square-question",
			},
			{
				title: "Analysis Process",
				url: "https://github.com/DerizhyLouise/RevoU-Data-Analytics-Capstone-Project",
				type: "Github",
				typeSymbol: "fa-brands fa-github",
			},
		],
		time: "October - December 2023",
		description: `
			"This is Kampus Merdeka Batch 5 - RevoU's Data Analytics Capstone Project.",
			"This is our RevoU's Data Analytics Capstone Project. Our study case is a dataset of Shopping Cart Database. In this project I have been chosen to take the role of Project Leader of Group 6 - Balikpapan Section. Also in addition, we achieved the <strong>best group</strong> in Shopping Cart's category.",
			"Background : From August to December, there was a 24% decrease in revenue.",
			"Potential analytics direction : How can we increase revenue by 10-15% in two months?",
			"RCA : <a href='https://whimsical.com/revou-s-captsone-project-data-analytics-shopping-cart-database-PJ4mAePDiDp8LQ9mzvsqEa'>https://whimsical.com/revou-s-captsone-project-data-analytics-shopping-cart-database-PJ4mAePDiDp8LQ9mzvsqEa</a>",
			"Business Question :",
			"1. What is the percentage of customers who have become inactive over the last three months?",
			"2. What is the average delivery time for customers to receive their orders or products from past 3 months?",
			"3. Which product category generates the most revenue?",
			"Scope :",
			"- Australia territory",
			"- Time range January 2021 - December 2021",
			"- Sample size from 1000 to 5000 data",
			"Hypothesis : The effect of price, more promotion, fast and charge of delivery can affected to customer for purchase more items.",
			"Metrics :",
			"- Monthly revenue",
			"- Total sold product",
			"- Product price",
			"- Time range",
			"Data Source : <a href='https://www.kaggle.com/datasets/ruchi798/shopping-cart-database?select=sales.csv'>https://www.kaggle.com/datasets/ruchi798/shopping-cart-database?select=sales.csv</a>",
		`,
		techs: [
			{
				name: "Python",
				pic: "fa-brands fa-python",
			},
			{
				name: "SQL",
				pic: "fa-regular fa-database",
			},
			{
				name: "Pandas",
				pic: "../assets/svg/pandas.svg",
			},
			{
				name: "Looker Studio",
				pic: "../assets/svg/looker.svg",
			},
			{
				name: "Git",
				pic: "fa-brands fa-git-alt",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-regular fa-file-pdf",
			},
			{
				title: "Clo - Prototype",
				url: "https://www.figma.com/file/hpcYi1s67YbdTRZomSKrgV/RevoU-Group6-team-library?type=design&node-id=0-1&mode=design&t=rZgGG7FrgtWLBMtF-0",
				type: "Figma",
				typeSymbol: "fa-brands fa-figma",
			},
			{
				title: "Clo - Front-End",
				url: "https://github.com/Kampus-Merdeka-Software-Engineering/FE-Balikpapan-6",
				type: "Github",
				typeSymbol: "fa-brands fa-github",
			},
			{
				title: "Clo - Back-End",
				url: "https://github.com/Kampus-Merdeka-Software-Engineering/BE-Balikpapan-6",
				type: "Github",
				typeSymbol: "fa-brands fa-github",
			},
		],
		time: "August - October 2023",
		description: `
			"This is Kampus Merdeka Batch 5 - RevoU's Software Engineering Capstone Project.",
			"In this project I have been chosen to take the role of Project Leader of Group 6 - Balikpapan Section. Our primary objective is the development of an e-commerce website called 'Clo', with a specific focus on clothing retail.",
		`,
		techs: [
			{
				name: "JavaScript",
				pic: "fa-brands fa-js",
			},
			{
				name: "HTML",
				pic: "fa-brands fa-html5",
			},
			{
				name: "CSS",
				pic: "fa-brands fa-css3-alt",
			},
			{
				name: "Figma",
				pic: "fa-brands fa-figma",
			},
			{
				name: "Node.js",
				pic: "fa-brands fa-node-js",
			},
			{
				name: "Express.js",
				pic: "../assets/svg/express.svg",
			},
			{
				name: "Prisma",
				pic: "../assets/svg/prisma.svg",
			},
			{
				name: "PostgreSQL",
				pic: "../assets/svg/postgresql.svg",
			},
			{
				name: "Supabase",
				pic: "../assets/svg/supabase.svg",
			},
			{
				name: "Railway",
				pic: "../assets/svg/railway.svg",
			},
			{
				name: "Git",
				pic: "fa-brands fa-git-alt",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-brands fa-github",
			},
		],
		time: "September 2023",
		description: `
			"Dicoding - Belajar Analisis Data dengan Python Project.",
			"This project is submission for Last Project in Dicoding's Python Data Analytics Course. I use Bike Sharing Dataset to deal with this project. This project include of Data Wrangling, Exploratory Data Analysis, Data Visualization, and Making Dashboard with Streamlit.",
		`,
		techs: [
			{
				name: "Python",
				pic: "fa-brands fa-python",
			},
			{
				name: "Pandas",
				pic: "../assets/svg/pandas.svg",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-brands fa-github",
			},
		],
		time: "April - July 2023",
		description: `
			"Mikroskil University - Cryptography Project.",
			"This project is an assignment from lecturer in my Cryptography Lecture.",
			"This project contain some cryptographic algorithms such as:",
			"- Digital Signature Algorithm (DSA)",
			"- Elgamal",
			"- Steganography with Least Significant Bit (LSB)",
			"- RSA",
			"- SHA-256",
			"- Schnorr",
		`,
		techs: [
			{
				name: "Python",
				pic: "fa-brands fa-python",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-brands fa-github",
			},
		],
		time: "April - July 2023",
		description: `
			"Mikroskil University - Computer Vision Project.",
			"This project is an assignment from lecturer in my Computer Vision Lecture.",
			"This project contain some methods / algorithms such as:",
			"- Harris Corner Detection",
			"- K-Means",
			"- Oriented Fast and Rotated BRIEF (ORB)",
			"- Prewitt Sobel",
			"- Scale Invariant Feature Transform (SIFT)",
			"- Convolutional Neural Network (CNN)",
			"- Histogram of Oriented Gradients (HOG)",
		`,
		techs: [
			{
				name: "Python",
				pic: "fa-brands fa-python",
			},
			{
				name: "VS Code",
				pic: "../assets/svg/vscode.svg",
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
				typeSymbol: "fa-brands fa-figma",
			},
		],
		time: "April - July 2023",
		description: `
			"Mikroskil University - Digital Start Up Project.",
			"This is a project from Digital Start Up Lecture where I built a prototype of an application called 'Help Me'. The concept of this application is to provide services to connect peoples who called 'Requester' whom requesting for helps and create tasks and peoples who called 'Helper' whom will take the tasks and solve them to get rewards.",
		`,
		techs: [
			{
				name: "Figma",
				pic: "fa-brands fa-figma",
			},
		],
	},
];
