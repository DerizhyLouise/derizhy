<script lang="ts">
    import SkillBadge from "$lib/custom-components/skill-badge.svelte";
    import { project } from "$lib/data/project";
    import type { Project } from "$lib/type/data-type";
    import AOS from "aos";
    import { fade, slide } from "svelte/transition";

    let search: string = $state("");
    let selectedType: string[] = $state(["All"]);
    let openDetail: number[] = $state([]);

    let projectData: Project[] = $derived.by(() => {
        let filtered = project;

        if (!selectedType.includes("All")) {
            filtered = filtered.filter((item) =>
                selectedType.includes(item.type),
            );
        }

        if (search.trim()) {
            const query = search.toLowerCase();
            filtered = filtered.filter((item) => {
                const inTitle = item.title.toLowerCase().includes(query);
                const inSubtitle = item.subtitle?.toLowerCase().includes(query);
                const inDescription = item.description.some((d) =>
                    d.toLowerCase().includes(query),
                );
                const inType = item.type.toLowerCase().includes(query);
                return inTitle || inSubtitle || inDescription || inType;
            });
        }

        return filtered;
    });

    let projectType = ["All", ...new Set(project.map((p) => p.type))];

    function toggleType(type: string) {
        if (type === "All") {
            selectedType = ["All"];
            return;
        }

        if (!selectedType.includes(type)) {
            selectedType = [...selectedType.filter((t) => t !== "All"), type];
        } else {
            selectedType = selectedType.filter((t) => t !== type);
        }

        if (selectedType.length === 0) {
            selectedType = ["All"];
        }
    }

    function openDetailFn(selectedId: number) {
        if (!openDetail.includes(selectedId)) {
            openDetail = [...openDetail, selectedId];
        } else {
            openDetail = openDetail.filter((id) => id !== selectedId);
        }
    }

    $effect(() => {
        if (projectData) {
            setTimeout(() => AOS.refreshHard(), 100);
        }
    });
</script>

<section
    id="project"
    class="h-full min-h-screen w-full px-4 text-white sm:px-20 xl:px-40 2xl:px-80"
>
    <div class="pt-40">
        <h2
            class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Projects
        </h2>
        <div>
            <div
                class="shadow-gray bg-gray relative rounded-sm p-6 shadow-lg sm:p-10 md:p-12"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <div class="relative flex items-center justify-center">
                    <span
                        class="fa-solid fa-magnifying-glass text-gray absolute top-1/2 left-5 -translate-y-1/2 text-lg sm:left-6 sm:text-xl md:left-7"
                    ></span>
                    <input
                        type="text"
                        placeholder="Search Projects..."
                        bind:value={search}
                        class="w-full rounded-sm bg-white py-3 pr-12 pl-12 text-sm focus:outline-none sm:py-4 sm:pr-14 sm:pl-16 sm:text-base md:py-5"
                    />
                    <button
                        class="text-gray absolute top-1/2 right-5 -translate-y-1/2 text-lg active:scale-125 sm:right-6 sm:text-xl md:right-7"
                        onclick={() => (search = "")}
                        aria-label="Clear search"
                        title="Clear search"
                    >
                        <span class="fa-solid fa-xmark" aria-hidden="true"
                        ></span>
                    </button>
                </div>

                <div
                    class="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:justify-start sm:gap-3 md:gap-4"
                >
                    {#each projectType as type (type)}
                        <button
                            class={`hover:bg-yellow/80 flex gap-2 rounded-full px-3 py-1.5 text-xs leading-6 duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                                selectedType.includes(type)
                                    ? "bg-yellow outline-yellow outline-1 outline-offset-4"
                                    : "bg-white"
                            }`}
                            onclick={() => toggleType(type)}
                        >
                            {type}
                            <span
                                class="bg-maroon flex h-6 w-6 items-center justify-center rounded-full text-white"
                            >
                                {#if type === "All"}
                                    {project.length}
                                {:else}
                                    {project.filter(
                                        (item) => item.type === type,
                                    ).length}
                                {/if}
                            </span>
                        </button>
                    {/each}
                </div>
            </div>
            <div
                class="mt-16 mb-5 ml-2"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                Showing <span class="font-semibold">{projectData.length}</span>
                project{projectData.length > 1 ? "s" : ""} in
                <span class="text-maroon font-semibold">
                    {selectedType.join(", ")}
                </span>
            </div>
            <div
                class="grid grid-cols-1 gap-6 md:grid-cols-2"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                {#each projectData as item (item.id)}
                    <div
                        class="bg-gray shadow-gray cursor-pointer rounded-sm p-6 text-white shadow-lg"
                        role="button"
                        tabindex="0"
                        onclick={() => openDetailFn(item.id)}
                        onkeydown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                openDetailFn(item.id);
                            }
                        }}
                    >
                        <div class="flex w-full justify-between">
                            <div class="flex">
                                <div
                                    class="bg-lightgray text-yellow flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-sm text-xl duration-300 hover:scale-125"
                                >
                                    <span class={item.icon}></span>
                                </div>
                                <div class="ml-4">
                                    <div class="text-lg font-semibold">
                                        {item.title}
                                    </div>
                                    <div class="text-sm text-gray-200">
                                        {item.subtitle}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-center">
                                    <span
                                        class="fa-regular fa-chevron-down transform transition-transform duration-300"
                                        class:rotate-180={openDetail.includes(
                                            item.id,
                                        )}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="mt-4 flex flex-wrap justify-between gap-2 text-xs sm:text-sm"
                        >
                            <div
                                class="bg-yellow text-gray hover:bg-yellow/80 rounded-full px-4 py-2"
                            >
                                {item.type}
                            </div>
                            <div
                                class="bg-lightgray rounded-full px-4 py-2 hover:brightness-150"
                            >
                                {item.time}
                            </div>
                        </div>
                        <div class="mt-4 border-t border-white"></div>
                        {#if openDetail.includes(item.id)}
                            <div
                                class="overflow-hidden text-sm xl:text-base"
                                transition:slide|local
                            >
                                <div
                                    class="mt-4 text-gray-200"
                                    transition:fade={{ duration: 300 }}
                                >
                                    {#each item.description as desc, i (i)}
                                        {desc}<br />
                                    {/each}
                                </div>
                                <div class="mt-6 font-semibold">
                                    <span
                                        class="fa-solid fa-link text-yellow mr-1"
                                    ></span>
                                    Project Resources
                                </div>
                                <div class="mt-2 flex flex-wrap gap-2">
                                    {#if item.media.length > 0}
                                        {#each item.media as media (media.title)}
                                            <a
                                                class="bg-yellow text-gray hover:bg-yellow/80 flex items-center rounded-sm px-4 py-2 text-xs duration-300 sm:text-sm"
                                                target="_blank"
                                                href={media.url}
                                            >
                                                <span
                                                    class={media.typeSymbol
                                                        .src + " mr-2"}
                                                ></span>
                                                {media.title}
                                            </a>
                                        {/each}
                                    {:else}
                                        No media available in this project.
                                        <br />
                                        I will upload the media soon after the project
                                        has done.
                                    {/if}
                                </div>
                                <div class="mt-6 font-semibold">
                                    <span
                                        class="fa-solid fa-code text-yellow mr-1"
                                    ></span>
                                    Technologies
                                </div>
                                <div
                                    class="mt-2 flex flex-wrap gap-2"
                                    transition:fade={{ duration: 300 }}
                                >
                                    {#each item.techs as tech (tech)}
                                        <SkillBadge name={tech} />
                                    {/each}
                                </div>
                            </div>
                        {:else}
                            <div
                                class="mt-4 flex flex-wrap gap-2"
                                transition:fade={{ duration: 200 }}
                            >
                                {#each item.techs.slice(0, 4) as tech (tech)}
                                    <SkillBadge name={tech} />
                                {/each}

                                {#if item.techs.length > 4}
                                    <div
                                        class="bg-yellow text-gray hover:bg-yellow/80 flex cursor-pointer items-center rounded-full px-4 py-2 text-xs duration-300 sm:text-sm"
                                        title={item.techs
                                            .slice(4)
                                            .map((t) => t)
                                            .join(", ")}
                                    >
                                        +{item.techs.length - 4} more
                                    </div>
                                {/if}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
