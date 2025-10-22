<script lang="ts">
    import { education } from "$lib/data/education";
</script>

<section
    id="education"
    class="h-full min-h-screen w-full px-4 text-white sm:px-20 xl:px-40 2xl:px-80"
>
    <div class="pt-40">
        <h2
            class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Educations
        </h2>
        <div
            class="flex flex-wrap items-center justify-center gap-8"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            {#each education as item (item.id)}
                <a
                    href={item.link}
                    target="_blank"
                    class="group bg-gray shadow-gray h-72 w-full max-w-[440px] rounded-sm p-8 shadow-lg transition hover:scale-110 hover:duration-300"
                >
                    <div class="flex h-full items-center justify-center">
                        <div class="flex flex-col items-center text-center">
                            <img
                                src={item.logo}
                                alt={item.institute}
                                class="mx-auto h-20 w-20 rounded-full bg-white transition-transform duration-500 group-hover:rotate-360"
                            />
                            <div class="flex flex-col items-center">
                                <h3 class="text-xl font-semibold md:text-2xl">
                                    {item.institute}
                                </h3>
                                <div class="text-lg md:text-xl">
                                    {item.subject}
                                    <br />
                                    {item.time}
                                </div>
                            </div>
                        </div>
                        <div class="my-4 sm:text-justify">
                            {#each item.description as p (p)}
                                {p}
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>
