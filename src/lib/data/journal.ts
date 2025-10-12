import { imageRender } from "$lib/image-render";
import type { JournalMenu } from "$lib/type/data-type";

export const journalMenu: JournalMenu[] = [
    {
        title: "My Organization Life",
        link: "/journal/my-organization-life",
        description:
            "I don't want to have an ordinary life, so i found a memorable life journey.",
        icon: { src: imageRender.organization, type: "img" },
    },
];
