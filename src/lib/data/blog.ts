import { imageRender } from "$lib/image-render";
import type { BlogMenu } from "$lib/type/data-type";

export const blogMenu: BlogMenu[] = [
    {
        title: "My Organization Life",
        link: "/blog/organization",
        description:
            "I don't want to have an ordinary life, so i found a memorable life journey.",
        icon: { src: imageRender.organization, type: "img" },
    },
];
