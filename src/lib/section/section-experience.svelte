<script lang="ts">
    import SkillBadge from "$lib/custom-components/skill-badge.svelte";
    import { experience } from "$lib/data/portfolio/experience";
    import { parseBoldHTML } from "$lib/utils";

    let showMoreBadge: number[] = $state([]);

    function showMoreBadgeFn(selectedId: number) {
        if (!showMoreBadge.includes(selectedId)) {
            showMoreBadge = [...showMoreBadge, selectedId];
        } else {
            showMoreBadge = showMoreBadge.filter((id) => id !== selectedId);
        }
    }
</script>

<section
    id="experience"
    class="h-full min-h-screen w-full px-4 text-white sm:px-20 xl:px-40 2xl:px-80"
>
    <div class="pt-40">
        <h2
            class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Experiences
        </h2>
        <div
            class="flex flex-col items-center justify-center gap-8"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            {#each experience as item (item.id)}
                <div
                    class="bg-gray shadow-gray group flex w-full flex-col items-center gap-2 rounded-sm p-6 text-white shadow-lg md:flex-row md:items-start md:gap-6"
                >
                    <div
                        class="h-24 min-h-24 w-24 min-w-24 duration-300 group-hover:rotate-360"
                    >
                        <img
                            src={item.logo}
                            alt={item.company}
                            class="rounded-full bg-white"
                        />
                    </div>
                    <div class="grow">
                        <div class="text-center md:text-start">
                            <div class="text-3xl font-semibold sm:text-4xl">
                                {item.position}
                            </div>
                            <div class="text-xl sm:text-2xl md:mt-1">
                                {item.company}
                            </div>
                            <div class="text-gray-200">
                                {item.time}
                            </div>
                        </div>
                        <div class="mt-4 border-t border-white"></div>
                        <div class="text-sm sm:text-base">
                            <div class="mt-4 text-gray-200">
                                {#each item.description as desc, i (i)}
                                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                    {@html parseBoldHTML(desc)}<br />
                                {/each}
                            </div>
                            <div class="mt-6 font-semibold">
                                <span class="fa-solid fa-code text-yellow mr-1"
                                ></span>
                                Technologies
                            </div>
                            <div class="mt-2 flex flex-wrap gap-2">
                                {#if showMoreBadge.includes(item.id)}
                                    {#each item.techs as tech (tech)}
                                        <SkillBadge name={tech} />
                                    {/each}
                                    <button
                                        class="bg-maroon hover:bg-maroon/80 flex cursor-pointer items-center rounded-full px-4 py-2 text-xs text-white duration-300 sm:text-sm"
                                        onclick={() => showMoreBadgeFn(item.id)}
                                    >
                                        - Show Less
                                    </button>
                                {:else}
                                    {#each item.techs.slice(0, 4) as tech (tech)}
                                        <SkillBadge name={tech} />
                                    {/each}
                                    {#if item.techs.length > 4}
                                        <button
                                            class="bg-yellow text-gray hover:bg-yellow/80 flex cursor-pointer items-center rounded-full px-4 py-2 text-xs duration-300 sm:text-sm"
                                            title={item.techs
                                                .slice(4)
                                                .map((t) => t)
                                                .join(", ")}
                                            onclick={() =>
                                                showMoreBadgeFn(item.id)}
                                        >
                                            +{item.techs.length - 4} more
                                        </button>
                                    {/if}
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
