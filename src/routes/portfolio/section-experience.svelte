<script lang="ts">
    import ImgRenderer from "$lib/custom-components/img-renderer.svelte";
    import SkillBadge from "$lib/custom-components/skill-badge.svelte";
    import { experience } from "$lib/data/experience";
</script>

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
                            <h3 class="text-2xl font-semibold md:text-4xl">
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
                            <h4 class="hidden text-lg max-[480px]:block">
                                {item.time}
                            </h4>
                        </div>
                    </div>
                    <div class="my-4 sm:text-justify">
                        {#each item.description as p (p)}
                            {p}
                        {/each}
                    </div>
                    <div class="text-gray mt-4 flex flex-wrap items-end gap-2">
                        {#each item.techs as tech (tech.name)}
                            <SkillBadge name={tech.name} icon={tech.icon} />
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
