<script>
    import { blogMenu } from "$lib/data/blog";
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
            <div class="mt-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {#each blogMenu as item (item.title)}
                    <a class="h-full w-full" href={item.link}>
                        <div class="mb-2">
                            <img
                                alt={item.title}
                                src={item.icon.src}
                                class="rounded-sm"
                            />
                        </div>
                        <div class="text-lg font-semibold md:text-xl">
                            {item.title}
                        </div>
                        <div>
                            {item.description}
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</div>
