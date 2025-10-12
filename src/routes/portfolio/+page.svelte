<script lang="ts">
    import { browser } from "$app/environment";
    import cv from "$lib/assets/pdf/cv.pdf";
    import ImgRenderer from "$lib/custom-components/img-renderer.svelte";
    import SkillBadge from "$lib/custom-components/skill-badge.svelte";
    import { education } from "$lib/data/education";
    import { experience } from "$lib/data/experience";
    import { project } from "$lib/data/project";
    import { review } from "$lib/data/review";
    import {
        databaseSkill,
        frameworkSkill,
        languageSkill,
        toolSkill,
    } from "$lib/data/skill";
    import type { Project } from "$lib/type/data-type";
    import { onDestroy, onMount } from "svelte";

    let projectModalItem: Project | undefined = $state();

    function openModal(id: number) {
        projectModalItem = project.find((item) => item.id === id);
    }

    function closeModal() {
        projectModalItem = undefined;
    }

    function handleOutsideClick(event: MouseEvent) {
        if (projectModalItem) {
            const modal = document.getElementById("project-modal");
            if (modal && !modal.contains(event.target as Node)) {
                closeModal();
            }
        }
    }

    function handleEscapeKey(event: KeyboardEvent) {
        if (projectModalItem && event.key === "Escape") {
            closeModal();
        }
    }

    onMount(() => {
        if (browser) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }
    });

    onDestroy(() => {
        if (browser) {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }
    });
</script>

<div id="container">
    <section
        id="profile"
        class="landing-bg flex h-full min-h-screen w-full flex-col items-center justify-center bg-black/70 bg-[url('$lib/assets/image/profile/bg-prof.jpeg')] bg-fixed px-10 pt-32 pb-20 text-white bg-blend-multiply min-[892px]:pb-40 min-[1408px]:px-40 min-[1664px]:px-80"
    >
        <div data-aos="fade-up" data-aos-duration="2000">
            <h2
                class="text-center text-5xl font-extrabold tracking-wide uppercase sm:text-7xl"
            >
                Louise Derizhy
            </h2>
        </div>
        <div
            class="mt-4 w-full max-w-3xl rounded-lg bg-white/90 p-6 text-gray-900 shadow-lg backdrop-blur-sm"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <p class="sm:text-justify">
                I am a <span class="font-semibold">Software Engineer</span> with
                expertise in
                <span class="font-semibold">full stack development</span>,
                particularly with the <span class="font-semibold">Svelte</span>
                framework and <span class="font-semibold">Tailwind CSS</span>
                library. I excel in <span class="font-semibold">analyzing</span>
                and <span class="font-semibold">problem-solving</span>,
                proficient in
                <span class="font-semibold">JavaScript</span> and
                <span class="font-semibold">TypeScript</span>, and skilled in
                creating <span class="font-semibold">back-end servers</span>
                using <span class="font-semibold">Java Spring Boot</span>.
                Additionally, I have strong
                <span class="font-semibold">SQL</span>
                skills, especially with
                <span class="font-semibold">PostgreSQL</span>, and can utilize
                <span class="font-semibold">Python</span>
                for various purposes.<br />
            </p>
            <p class="mt-2 text-right">
                <a
                    href={cv}
                    target="_blank"
                    class="hover:bg-gray border-gray place-content-end border-2 px-2 font-semibold duration-700 hover:text-white"
                    >Download CV</a
                >
            </p>
        </div>
    </section>

    <div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat">
        <section
            id="skill"
            class="h-full min-h-screen w-full text-white sm:px-10 2xl:px-40"
        >
            <div class="pt-40">
                <h2
                    class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Skills
                </h2>
                <div class="flex flex-col gap-4">
                    <div class="h-full">
                        <h3
                            class="text-gray text-center text-2xl font-semibold uppercase sm:text-4xl"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <span class="fa-regular fa-display-code"></span>
                            Languages
                            <span class="fa-regular fa-display-code"></span>
                        </h3>
                        <div
                            class="flex flex-wrap items-center justify-center gap-4 overflow-hidden pt-6 pb-12 group-open:max-h-screen sm:gap-8"
                        >
                            {#each languageSkill as item (item.skill)}
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
                                    >
                                        <div class="text-center text-5xl">
                                            <ImgRenderer
                                                name={item.skill}
                                                icon={item.icon}
                                            />
                                        </div>
                                        <h4 class="text-center font-semibold">
                                            {item.skill}
                                        </h4>
                                    </a>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="h-full">
                        <h3
                            class="text-gray text-center text-2xl font-semibold uppercase sm:text-4xl"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <span class="fa-regular fa-globe"></span>
                            Frameworks & Libraries
                            <span class="fa-regular fa-globe"></span>
                        </h3>
                        <div
                            class="flex flex-wrap items-center justify-center gap-4 overflow-hidden pt-6 pb-12 group-open:max-h-screen sm:gap-8"
                        >
                            {#each frameworkSkill as item (item.skill)}
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
                                    >
                                        <div class="text-center text-5xl">
                                            <ImgRenderer
                                                name={item.skill}
                                                icon={item.icon}
                                            />
                                        </div>
                                        <h4 class="text-center font-semibold">
                                            {item.skill}
                                        </h4>
                                    </a>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="h-full">
                        <h3
                            class="text-gray text-center text-2xl font-semibold uppercase sm:text-4xl"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <span class="fa-regular fa-database"></span>
                            Databases
                            <span class="fa-regular fa-database"></span>
                        </h3>
                        <div
                            class="flex flex-wrap items-center justify-center gap-4 overflow-hidden pt-6 pb-12 group-open:max-h-screen sm:gap-8"
                        >
                            {#each databaseSkill as item (item.skill)}
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
                                    >
                                        <div class="text-center text-5xl">
                                            <ImgRenderer
                                                name={item.skill}
                                                icon={item.icon}
                                            />
                                        </div>
                                        <h4 class="text-center font-semibold">
                                            {item.skill}
                                        </h4>
                                    </a>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="h-full">
                        <h3
                            class="text-gray text-center text-2xl font-semibold uppercase sm:text-4xl"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <span class="fa-regular fa-pen-ruler"></span>
                            Tools
                            <span class="fa-regular fa-pen-ruler"></span>
                        </h3>
                        <div
                            class="flex flex-wrap items-center justify-center gap-4 overflow-hidden pt-6 pb-12 group-open:max-h-screen sm:gap-8"
                        >
                            {#each toolSkill as item (item.skill)}
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
                                    >
                                        <div class="text-center text-5xl">
                                            <ImgRenderer
                                                name={item.skill}
                                                icon={item.icon}
                                            />
                                        </div>
                                        <h4 class="text-center font-semibold">
                                            {item.skill}
                                        </h4>
                                    </a>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            id="experience"
            class="h-full w-full px-4 text-white xl:px-40 2xl:px-80"
        >
            <div class="pt-40">
                <h2
                    class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Experiences
                </h2>
                <div class="flex flex-col items-center justify-center gap-8">
                    {#each experience as item (item.id)}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            class="bg-gray shadow-gray w-full rounded-sm p-8 shadow-xl"
                        >
                            <div
                                class="flex max-[480px]:flex-col max-[480px]:items-center"
                            >
                                <ImgRenderer
                                    name={item.company}
                                    icon={item.logo}
                                    imgClassName="h-20 w-20 rounded-full"
                                />
                                <div
                                    class="flex flex-col justify-center max-[480px]:mt-2 max-[480px]:items-center min-[480px]:ml-4"
                                >
                                    <h3
                                        class="text-2xl font-semibold md:text-4xl"
                                    >
                                        {item.position}
                                        <span
                                            class="text-lg font-semibold max-[480px]:hidden"
                                        >
                                            {item.time}
                                        </span>
                                    </h3>
                                    <h3 class="text-xl md:text-2xl">
                                        {item.company}
                                    </h3>
                                    <h4
                                        class="hidden text-lg max-[480px]:block"
                                    >
                                        {item.time}
                                    </h4>
                                </div>
                            </div>
                            <div class="my-4 sm:text-justify">
                                {#each item.description as p (p)}
                                    {p}
                                {/each}
                            </div>
                            <div
                                class="text-gray mt-4 flex flex-wrap items-end gap-2"
                            >
                                {#each item.techs as tech (tech.name)}
                                    <SkillBadge
                                        name={tech.name}
                                        icon={tech.icon}
                                    />
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <section id="project" class="h-full w-full px-4 xl:px-20">
            <div class="pt-40">
                <h2
                    class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Projects
                </h2>
                <div
                    class="flex flex-wrap items-center justify-center gap-8 text-white"
                >
                    {#each project as item (item.id)}
                        <button
                            class="group shadow-gray relative h-96 w-96 cursor-pointer overflow-hidden shadow-2xl"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            onclick={() => openModal(item.id)}
                        >
                            <div
                                class="bg-maroon before:bg-maroon after:bg-maroon absolute top-0 right-0 z-10 origin-top-left translate-x-1/3 rotate-45 px-2 py-4 text-center font-semibold text-white before:absolute before:top-0 before:right-full before:-mx-1 before:h-full before:w-full after:absolute after:top-0 after:left-full after:-mx-1 after:h-full after:w-full"
                            >
                                {item.type}
                            </div>
                            <div
                                class="bg-gray flex h-full w-full items-center justify-center duration-300 ease-in-out group-hover:-translate-y-full"
                            >
                                <h2 class="text-center text-4xl">
                                    {item.title}
                                </h2>
                            </div>
                            <div
                                class="bg-yellow flex h-full w-full items-center justify-center p-4 duration-300 ease-in-out group-hover:-translate-y-full"
                            >
                                <h2 class="text-gray text-center text-4xl">
                                    {item.subtitle}
                                </h2>
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        </section>

        <section
            id="education"
            class="h-full w-full px-4 text-white xl:px-40 2xl:px-80"
        >
            <div class="pt-40">
                <h2
                    class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Educations
                </h2>
                <div
                    class="grid place-items-center gap-8 md:grid-cols-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    {#each education as item (item.id)}
                        <a
                            href={item.link}
                            target="_blank"
                            class="group bg-gray shadow-gray h-72 w-full max-w-[440px] rounded-sm p-8 shadow-xl transition hover:scale-110 hover:duration-300"
                        >
                            <div
                                class="flex h-full items-center justify-center"
                            >
                                <div
                                    class="flex flex-col items-center text-center"
                                >
                                    <ImgRenderer
                                        name={item.institute}
                                        icon={item.logo}
                                        imgClassName="h-20 w-20 rounded-full transition-transform duration-500 group-hover:rotate-360"
                                    />
                                    <div class="flex flex-col items-center">
                                        <h3
                                            class="text-xl font-semibold md:text-2xl"
                                        >
                                            {item.institute}
                                        </h3>
                                        <div class="text-lg md:text-xl">
                                            {item.subject}
                                            <br />
                                            {item.time}
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4 sm:text-justify">
                                    {#each item.description as p (p)}
                                        {p}
                                    {/each}
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </section>

        <section
            id="review"
            class="h-full min-h-screen w-full px-4 text-white xl:px-40 2xl:px-80"
        >
            <div class="py-40">
                <h2
                    class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    Reviews
                </h2>
                <div class="flex flex-wrap justify-center gap-12">
                    {#each review as item (item.name)}
                        <a
                            class="bg-gray shadow-gray flex h-[416px] w-[416px] flex-col p-4 no-underline shadow-2xl max-sm:h-full"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            href={item.url}
                            target="_blank"
                        >
                            <div
                                class="border-yellow flex items-center justify-start border-b-2 pb-2"
                            >
                                <img
                                    class="h-20 w-20 rounded-full"
                                    src={item.img}
                                    alt={item.name}
                                />
                                <div class="pl-2">
                                    <h3 class="text-2xl font-semibold">
                                        {item.name}
                                    </h3>
                                    <p class="text-sm">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                            <q
                                class="mt-2 flex justify-center text-center italic"
                            >
                                {item.desc}
                            </q>
                        </a>
                    {/each}
                </div>
            </div>
        </section>
    </div>
</div>

<!-- Project Modal -->
{#if projectModalItem}
    <div class="fixed inset-0 z-[998] bg-black/50 brightness-50"></div>

    <div class="fixed inset-0 z-[999] flex items-center justify-center p-4">
        <div
            id="project-modal"
            class="bg-gray relative max-h-[90vh] w-3/6 overflow-y-auto rounded text-white shadow-2xl max-xl:w-5/6 max-md:w-full max-md:rounded-none"
        >
            <button
                class="group hover:bg-maroon absolute top-6 right-6 z-50 h-12 w-12 rounded-lg text-white"
                title="Close"
                onclick={closeModal}
            >
                <i
                    class="fa-solid fa-xmark text-2xl transition group-hover:rotate-180 group-hover:duration-500"
                ></i>
            </button>
            <div class="w-full p-12 max-md:p-6">
                <h3 class="text-4xl font-bold text-white max-md:text-3xl">
                    {projectModalItem.title}
                </h3>
                <p class="mt-2 text-base max-md:text-sm">
                    {projectModalItem.time}
                </p>

                <h3
                    class="border-yellow mt-4 mb-4 border-t-2 pt-4 text-2xl font-semibold max-md:text-xl"
                >
                    Description
                </h3>
                <p class="mb-4 text-base max-md:text-sm sm:text-justify">
                    {#each projectModalItem.description as desc, i (i)}
                        {desc}<br />
                    {/each}
                </p>

                <h3
                    class="border-yellow mt-4 mb-4 border-t-2 pt-4 text-2xl font-semibold max-md:text-xl"
                >
                    Techs
                </h3>
                <div class="flex flex-wrap items-end gap-2">
                    {#each projectModalItem.techs as tech (tech.name)}
                        <SkillBadge name={tech.name} icon={tech.pic} />
                    {/each}
                </div>

                <h3
                    class="border-yellow mt-4 mb-4 border-t-2 pt-4 text-2xl font-semibold max-md:text-xl"
                >
                    Media
                </h3>
                <div class="flex flex-wrap items-center gap-4 sm:gap-6">
                    {#if projectModalItem.media.length > 0}
                        {#each projectModalItem.media as media (media.title)}
                            <a
                                class="group relative h-60 w-60 overflow-hidden shadow-2xl shadow-black"
                                href={media.url}
                                target="_blank"
                            >
                                <div
                                    class="bg-lightgray flex h-full w-full items-center justify-center duration-300 ease-in-out group-hover:-translate-y-full"
                                >
                                    <div
                                        class="flex flex-col items-center justify-center"
                                    >
                                        <ImgRenderer
                                            name={media.title}
                                            icon={media.typeSymbol}
                                            iconClassName="text-6xl"
                                        />
                                        <h2 class="text-center text-2xl">
                                            {media.type}
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    class="bg-yellow text-gray flex h-full w-full items-center justify-center p-4 duration-300 ease-in-out group-hover:-translate-y-full"
                                >
                                    <h2 class="text-center text-2xl">
                                        {media.title}
                                    </h2>
                                </div>
                            </a>
                        {/each}
                    {:else}
                        No media available in this project.<br />
                        I will upload the media soon after the project has done.
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/if}
