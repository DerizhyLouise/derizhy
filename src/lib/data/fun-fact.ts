import { imageRender } from "$lib/image-render";
import type { FunFact } from "$lib/type/data-type";

export const funFact: FunFact[] = [
    {
        link: "https://en.wikipedia.org/wiki/Medan",
        icon: { src: "fa-regular fa-location-dot", type: "fa" },
        content: "I live and born in Medan, Indonesia",
    },
    {
        link: "https://en.wikipedia.org/wiki/Buddhism",
        icon: { src: "fa-regular fa-dharmachakra", type: "fa" },
        content: "I am a Buddhist and Buddhism is my way of life",
    },
    {
        link: "#fun-fact",
        icon: { src: "fa-regular fa-user", type: "fa" },
        content:
            "張家誠 is my chinese name and Adhi Guna Dharma is my buddhist name",
    },
    {
        link: "#fun-fact",
        icon: { src: "fa-regular fa-microscope", type: "fa" },
        content:
            "I'm Interested in Science, Psychology, History, Philosophy, and Conspiracy",
    },
    {
        link: "./portfolio#project",
        icon: { src: "fa-regular fa-code", type: "fa" },
        content: "I am a Software Engineer and check out my projects here",
    },
    {
        link: "./my-organization-life",
        icon: { src: "fa-regular fa-users", type: "fa" },
        content: "I love to do organizational activity",
    },
    {
        link: "#fun-fact",
        icon: { src: "fa-regular fa-microphone", type: "fa" },
        content: "I am a Public Speaker especially a Dharmaduta",
    },
    {
        link: "https://www.worldcubeassociation.org/persons/2018DERI01",
        icon: { src: imageRender.cubeIcon, type: "svg" },
        content:
            "Speedcubing is my hobby, my current personal record of 3x3x3 is 6.06 sec",
    },
    {
        link: "https://cheese.com",
        icon: { src: "fa-regular fa-cheese-swiss", type: "fa" },
        content: "I love everything about cheeseeeee",
    },
    {
        link: "https://www.chelseafc.com/en",
        icon: { src: imageRender.chelseaIcon, type: "svg" },
        content: "Chelsea FC is my favorite football club",
    },
    {
        link: "#fun-fact",
        icon: { src: "fa-regular fa-cat", type: "fa" },
        content: "Cat is cute, especially Munchkin Cat. Miaww!",
    },
    {
        link: "https://tailwindcss.com/",
        icon: { src: imageRender.tailwindYellowIcon, type: "svg" },
        content: "Tailwind CSS is so good until I forgot how to code with CSS",
    },
    {
        link: "https://svelte.dev/",
        icon: { src: imageRender.svelteYellowIcon, type: "svg" },
        content: "Svelte is my most favorite framework",
    },
    {
        link: "https://en.wikipedia.org/wiki/Yiruma/",
        icon: { src: "fa-regular fa-music", type: "fa" },
        content:
            "Who don't know Yiruma? I like his song 'River Flows In You' so much",
    },
    {
        link: "#fun-fact",
        icon: { src: "fa-regular fa-paint-roller", type: "fa" },
        content: "My favorite color is Bright Maroon #C32148",
    },
    {
        link: "#fun-fact",
        icon: { src: "fa-regular fa-cup-straw-swoosh", type: "fa" },
        content: "I don't like Coffee, but i love Milk Tea",
    },
    {
        link: "https://www.16personalities.com/profiles/39b4ed81dddba",
        icon: { src: "fa-regular fa-crown", type: "fa" },
        content: "My MBTI is ENTJ",
    },
];
