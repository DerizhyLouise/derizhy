<script lang="ts">
    import { review } from "$lib/data/review";
</script>

<section
    id="review"
    class="h-full min-h-screen w-full px-4 text-white xl:px-40 2xl:px-80"
>
    <div class="py-40">
        <h2
            class="text-gray mb-10 text-center text-5xl font-semibold uppercase sm:text-7xl"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Reviews
        </h2>
        <div class="flex flex-wrap justify-center gap-12">
            {#each review as item (item.name)}
                <a
                    class="bg-gray shadow-gray flex h-[416px] w-[416px] flex-col p-4 no-underline shadow-2xl max-sm:h-full"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    href={item.url}
                    target="_blank"
                >
                    <div
                        class="border-yellow flex items-center justify-start border-b-2 pb-2"
                    >
                        <img
                            class="h-20 w-20 rounded-full"
                            src={item.img}
                            alt={item.name}
                        />
                        <div class="pl-2">
                            <h3 class="text-2xl font-semibold">
                                {item.name}
                            </h3>
                            <p class="text-sm">
                                {item.role}
                            </p>
                        </div>
                    </div>
                    <q class="mt-2 flex justify-center text-center italic">
                        {item.desc}
                    </q>
                </a>
            {/each}
        </div>
    </div>
</section>
