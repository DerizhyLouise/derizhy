<script lang="ts">
    import { speedcubingData } from "$lib/data/journal/speedcubing";
    import { parseBoldHTML } from "$lib/utils";
</script>

<section class="text-gray h-full min-h-screen w-full text-sm md:text-lg">
    <div
        class="flex flex-col gap-4 px-16 pt-56 min-[1536px]:px-[480px] sm:px-36 xl:px-80"
        data-aos="fade-right"
        data-aos-duration="2000"
    >
        <div class="border-b-2">
            <h2 class="text-3xl font-semibold uppercase sm:text-4xl">
                Speedcubing
            </h2>
        </div>
        {#each speedcubingData as item (item.title)}
            <div>
                <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                    {item.title}
                </h3>
                <div>
                    {#each item.paragraph as p, i (i)}
                        <p class="mb-4 text-justify">
                            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                            {@html parseBoldHTML(p, false)}
                        </p>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
