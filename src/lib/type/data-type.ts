export type subMenu = {
    title: string;
    link: string;
};

export type Menu = {
    title: string;
    link: string;
    subMenu?: subMenu[];
};

export type IconImage = {
    src: string;
    type: "svg" | "fa";
};

export type Experience = {
    id: number;
    position: string;
    company: string;
    time: string;
    logo: string;
    description: string[];
    techs: string[];
};

export type Education = {
    id: number;
    institute: string;
    subject: string;
    time: string;
    logo: string;
    link: string;
};

export type Review = {
    name: string;
    role: string;
    img: string;
    url: string;
    desc: string;
};

export type Skill = {
    skill: string;
    icon: IconImage;
    link: string;
};

export type Project = {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
    media: {
        title: string;
        url: string;
        typeSymbol: IconImage;
    }[];
    time: string;
    type: string;
    description: string[];
    techs: string[];
};

export type FooterLink = {
    title: string;
    href: string;
    target?: string;
};

export type SocialLink = {
    label: string;
    icon: string;
    href: string;
    target?: string;
};

export type FooterSection = {
    title: string;
    links: FooterLink[];
};

export type FooterData = {
    sections: FooterSection[];
    social: SocialLink[];
};

export type JournalData = {
    title: string;
    paragraph: string[];
};

export type JournalMenu = {
    title: string;
    link: string;
    description: string;
    time: string;
    icon: IconImage;
};

export type OrganizationExperience = {
    position: string;
    time: string;
};

export type OrganizationJournal = {
    name: string;
    location: string;
    time: string;
    logo: string;
    description: string[];
    experience: OrganizationExperience[];
};

export type Contact = {
    icon: string;
    link: string;
    label: string;
};

export type FunFact = {
    icon: IconImage;
    link: string;
    content: string;
};
