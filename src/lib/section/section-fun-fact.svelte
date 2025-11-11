<script lang="ts">
    import { funFact } from "$lib/data/fun-fact";
    import { parseBoldHTML } from "$lib/utils";
</script>

<section
    id="fun-fact"
    class="h-full min-h-screen w-full px-4 text-white sm:px-20 xl:px-40"
>
    <div class="h-full w-full pt-40">
        <h2
            class="text-gray mb-10 text-center text-6xl font-semibold uppercase"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Fun Fact About Me
        </h2>
        <div
            class="grid h-full w-full justify-center gap-6 lg:grid-cols-2 lg:gap-12 2xl:grid-cols-3"
        >
            {#each funFact as item (item.content)}
                <div data-aos="fade-up" data-aos-duration="2000">
                    <a
                        href={item.link}
                        target={!item.link.startsWith("#") ? "_blank" : ""}
                        class="bg-gray shadow-gray flex h-40 w-full items-center rounded-sm shadow-lg duration-300 hover:sm:scale-110"
                    >
                        <div
                            class="bg-lightgray flex h-40 w-40 shrink-0 items-center justify-center rounded-l-sm text-6xl text-white"
                        >
                            {#if item.icon.type === "svg"}
                                <img
                                    src={item.icon.src}
                                    alt="Icon"
                                    class="mx-auto h-18 w-18"
                                />
                            {:else}
                                <span class={item.icon.src}></span>
                            {/if}
                        </div>
                        <div class="grow px-4 py-2 text-base text-white">
                            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                            {@html parseBoldHTML(item.content)}
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>
