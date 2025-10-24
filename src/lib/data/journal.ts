import { imageRender } from "$lib/image-render";
import type { JournalMenu } from "$lib/type/data-type";

export const journalMenu: JournalMenu[] = [
    {
        title: "My Organization Life",
        link: "/my-organization-life",
        description:
            "I don't want to have an ordinary life, so I found a memorable life journey",
        time: "10 October 2025",
        icon: { src: "fa-regular fa-users", type: "fa" },
    },
    {
        title: "Speedcubing",
        link: "/speedcubing",
        description:
            "People missunderstood this as a brain game, but speedcubing is fun",
        time: "23 October 2025",
        icon: { src: imageRender.cubeIcon, type: "svg" },
    },
    {
        title: "The Painful Truth",
        link: "/the-painful-truth",
        description:
            "The moment when I realize that life is beautifully painful",
        time: "24 October 2025",
        icon: { src: "fa-solid fa-yin-yang", type: "fa" },
    },
];
