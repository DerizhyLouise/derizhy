<script lang="ts">
    import { journalMenu } from "$lib/data/journal";
</script>

<section
    id="journal"
    class="h-full min-h-screen w-full px-10 text-white sm:px-20 xl:px-40 2xl:px-80"
>
    <div class="pt-40">
        <h2
            class="text-gray mb-10 text-center text-6xl font-semibold uppercase"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Journal
        </h2>
        <div
            class="text-gray mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 xl:gap-16"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            {#each journalMenu as item (item.title)}
                <div class="flex justify-center">
                    <a
                        href={item.link}
                        class="bg-gray shadow-gray flex h-auto flex-col rounded-sm text-white shadow-lg"
                    >
                        <div
                            class="bg-lightgray text-yellow flex h-60 items-center justify-center rounded-t-sm text-8xl"
                        >
                            {#if item.icon.type === "svg"}
                                <img
                                    src={item.icon.src}
                                    alt="Icon"
                                    class="mx-auto h-32 w-32"
                                />
                            {:else}
                                <span class={item.icon.src}></span>
                            {/if}
                        </div>
                        <div class="flex grow flex-col p-6">
                            <div class="mb-2">
                                <div class="text-yellow text-xs">
                                    <span class="fa-regular fa-calendar mr-1"
                                    ></span>
                                    {item.time}
                                </div>
                            </div>
                            <h3 class="text-2xl font-semibold">
                                {item.title}
                            </h3>
                            <p class="mt-2 text-sm text-gray-200 md:text-base">
                                {item.description}
                            </p>
                            <div class="text-yellow mt-2 flex grow items-end">
                                <div
                                    class="transition-all duration-300 hover:translate-x-2.5"
                                >
                                    Read More
                                    <span class="fa-regular fa-chevron-right"
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>
