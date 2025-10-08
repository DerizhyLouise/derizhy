export type Menu = {
	title: string;
	link: string;
	subMenu?: Menu[];
};

export type subMenu = {
	title: string;
	link: string;
};

export type Experience = {
	position: string;
	company: string;
	time: string;
	logo: string;
	description: string;
	techs: {
		name: string;
		pic: string;
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
	category: string;
	icon: string;
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
		typeSymbol: string;
	}[];
	time: string;
	type: string;
	description: string;
	techs: {
		name: string;
		pic: string;
	}[];
};
