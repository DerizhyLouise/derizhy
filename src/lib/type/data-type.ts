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
    type: "svg" | "fa" | "img";
};

export type Experience = {
    id: number;
    position: string;
    company: string;
    time: string;
    logo: IconImage;
    description: string[];
    techs: {
        name: string;
        icon: IconImage;
    }[];
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
    media: {
        title: string;
        url: string;
        type: string;
        typeSymbol: IconImage;
    }[];
    time: string;
    type: string;
    description: string[];
    techs: {
        name: string;
        pic: IconImage;
    }[];
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

export type BlogData = {
    title: string;
    paragraph: string[];
};

export type BlogMenu = {
    title: string;
    link: string;
    description: string;
    icon: IconImage;
};

export type OrganizationExperience = {
    position: string;
    time: string;
};

export type OrganizationBlog = {
    name: string;
    location: string;
    time: string;
    logo: IconImage;
    description: string[];
    experience: OrganizationExperience[];
};
