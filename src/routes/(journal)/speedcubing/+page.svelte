<script lang="ts">
    import { speedcubingIntro } from "$lib/data/journal/speedcubing";
</script>

<section class="text-gray h-full min-h-screen w-full text-sm md:text-lg">
    <div
        class="flex flex-col gap-4 px-16 pt-56 pb-40 min-[1536px]:px-[480px] sm:px-36 xl:px-80"
        data-aos="fade-right"
        data-aos-duration="2000"
    >
        <div class="border-b-2">
            <h2 class="text-3xl font-semibold uppercase sm:text-4xl">
                Speedcubing
            </h2>
        </div>
        {#each speedcubingIntro as item (item.title)}
            <div>
                <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                    {item.title}
                </h3>
                <div>
                    {#each item.paragraph as p, i (i)}
                        <p class="mb-4 text-justify">
                            {p}
                        </p>
                    {/each}
                </div>
            </div>
        {/each}
        <div>
            <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                My Official Stats
            </h3>
            <div>
                <p class="mb-4 text-justify">
                    Check out my official WCA record and competition stats
                    <span class="fa-regular fa-chevron-right"></span>
                    <a
                        target="_blank"
                        class="text-maroon hover:text-maroon/80 decoration-maroon/70 hover:decoration-maroon inline-flex items-center gap-1 font-medium underline underline-offset-4 transition-colors duration-200"
                        href="https://www.worldcubeassociation.org/persons/2018DERI01"
                    >
                        Louise Derizhy (張家誠) | World Cube Association
                    </a>
                </p>
            </div>
        </div>
    </div>
</section>
