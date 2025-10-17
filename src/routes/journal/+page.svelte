<script>
    import { journalMenu } from "$lib/data/journal";
</script>

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat">
    <section class="text-gray h-full min-h-screen w-full">
        <div
            class="px-16 pt-56 pb-28 min-[1536px]:px-[480px] sm:px-36 xl:px-80"
            data-aos="fade-right"
            data-aos-duration="2000"
        >
            <div class="border-b-2">
                <h2 class="text-3xl font-semibold uppercase sm:text-4xl">
                    The Writing of Myself
                </h2>
            </div>
            <div
                class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {#each journalMenu as item (item.title)}
                    <a href={item.link} class="flex flex-col overflow-hidden">
                        <div class="overflow-hidden">
                            <img
                                alt={item.title}
                                src={item.icon.src}
                                class="aspect-[16/10] w-full object-cover"
                            />
                        </div>
                        <div class="flex flex-col justify-between pt-2">
                            <div>
                                <h3 class="line-clamp-2 text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p
                                    class="mt-2 line-clamp-3 text-sm md:text-base"
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</div>
