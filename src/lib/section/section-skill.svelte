<script lang="ts">
    import ImgRenderer from "$lib/custom-components/img-renderer.svelte";
    import {
        databaseSkill,
        frameworkSkill,
        languageSkill,
        toolSkill,
    } from "$lib/data/skill";
</script>

<section
    id="skill"
    class="h-full min-h-screen w-full px-4 text-white sm:px-20 xl:px-40 2xl:px-80"
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
                    class="text-gray text-center text-3xl font-semibold uppercase sm:text-4xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <span class="fa-regular fa-code"></span>
                    Languages
                    <span class="fa-regular fa-code"></span>
                </h3>
                <div
                    class="flex flex-wrap items-center justify-center gap-4 overflow-hidden pt-6 pb-12 group-open:max-h-screen sm:gap-8"
                >
                    {#each languageSkill as item (item.skill)}
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <a
                                href={item.link}
                                target="_blank"
                                class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-sm p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
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
                    class="text-gray text-center text-3xl font-semibold uppercase sm:text-4xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <span class="fa-regular fa-layer-group"></span>
                    Frameworks
                    <span class="fa-regular fa-layer-group"></span>
                </h3>
                <div
                    class="flex flex-wrap items-center justify-center gap-4 overflow-hidden pt-6 pb-12 group-open:max-h-screen sm:gap-8"
                >
                    {#each frameworkSkill as item (item.skill)}
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <a
                                href={item.link}
                                target="_blank"
                                class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-sm p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
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
                    class="text-gray text-center text-3xl font-semibold uppercase sm:text-4xl"
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
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <a
                                href={item.link}
                                target="_blank"
                                class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-sm p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
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
                    class="text-gray text-center text-3xl font-semibold uppercase sm:text-4xl"
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
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <a
                                href={item.link}
                                target="_blank"
                                class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-sm p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
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
