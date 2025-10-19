import { imageRender } from "$lib/image-render";
import type { JournalData, OrganizationJournal } from "$lib/type/data-type";

export const organizationIntro: JournalData = {
    title: "Introduction",
    paragraph: [
        "Back in 2014, when I was in middle school, my religion teacher, Mr. Dwi Susanto, invited me to visit a cetiya (a smaller version of a temple) called Cetiya Manggala Utama. That day, they were holding an election for the youth group leader. I didn't really understand anything about organizations back then. I just sat there watching the whole process.",
        "After the event, we were invited to join the youth group. And that's where my journey in organizational life began.",
        "From that moment on, my life started to change. I went from being just an ordinary kid to discovering a whole new world, the world of community and leadership. I learned so many things: how to solve problems, speak in public, take responsibility, manage tasks, and grow both spiritually and mentally.",
    ],
};

export const organizationExperience: OrganizationJournal[] = [
    {
        name: "Muda-mudi Cetiya Manggala Utama",
        location: "Cetiya Manggala Utama, Batam",
        time: "2014 - 2017",
        description: [
            "Cetiya Manggala Utama is a cetiya located in Batu Aji District, Batam. There, a youth organization was formed to organize various activities, such as Buddhist festivals and other community events.",
        ],
        logo: {
            src: imageRender.cmuLogo,
            type: "img",
        },
        experience: [
            {
                position: "Member",
                time: "2014 - 2016",
            },
            {
                position: "Member of Public Relationship",
                time: "2016 - 2017",
            },
        ],
    },
    {
        name: "Persaudaraan Muda-mudi Vihara Tri Ratna (PMVTR)",
        location: "Vihara Tri Ratna, Tanjungbalai",
        time: "2017 - 2020",
        description: [
            "It wasn't just an organization where I growed. It was a home — one I nearly broke myself to protect.",
        ],
        logo: {
            src: imageRender.pmvtrLogo,
            type: "img",
        },
        experience: [
            {
                position: "Head of Public Relationship Division",
                time: "2017 - 2018",
            },
            {
                position: "President",
                time: "2018 - 2019",
            },
            {
                position: "Head of Human Resources Development Division",
                time: "2019 - 2020",
            },
        ],
    },
    {
        name: "Organisasi Siswa Intra Sekolah (OSIS)",
        location: "SMA Sisingamangaraja, Tanjungbalai",
        time: "2017 - 2019",
        description: [
            "I had always wanted to join them when I was in middle school. Eventually, I proved myself capable enough to become one of them.",
        ],
        logo: {
            src: imageRender.smrajaLogo,
            type: "img",
        },
        experience: [
            {
                position: "Member",
                time: "2017 - 2018",
            },
            {
                position: "Head of Religious Division",
                time: "2018 - 2019",
            },
        ],
    },
    {
        name: "Big Family of Informatics Students Mikroskil (BITSMIKRO)",
        location: "Universitas Mikroskil, Medan",
        time: "2020 - 2024",
        description: [
            "A Student Association of Informatics Engineering in Mikroskil University.",
        ],
        logo: {
            src: imageRender.bitsmikroLogo,
            type: "img",
        },
        experience: [
            {
                position: "Member of Student Aspirations Collector",
                time: "2020 - 2021",
            },
            {
                position: "Vice of Student Aspirations Collector",
                time: "2021 - 2022",
            },
            {
                position: "Member of Student Aspirations Collector",
                time: "2022 - 2023",
            },
            {
                position: "Member of Human Resources Development Division",
                time: "2023 - 2024",
            },
        ],
    },
    {
        name: "Sekretariat Bersama Persaudaraan Muda-mudi Vihara-vihara Buddhayana Indonesia (Pemuda Buddhayana) Provinsi Sumatera Utara",
        location: "Sumatera Utara",
        time: "2021 - Present",
        description: [
            "After a fantastic journey with PMVTR, it's time for me to serve all PMV/C (Youth Buddhist Monastery Organization) across North Sumatra.",
        ],
        logo: {
            src: imageRender.sekberLogo,
            type: "png",
        },
        experience: [
            {
                position: "Staf IV of Secretariat Division",
                time: "2021 - 2024",
            },
            {
                position: "Head of Secretariat Division",
                time: "2024 - 2027",
            },
        ],
    },
];
