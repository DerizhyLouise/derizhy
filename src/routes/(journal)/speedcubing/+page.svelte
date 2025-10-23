<script lang="ts">
    import { organizationIntro } from "$lib/data/journal/organization";
</script>

<section class="text-gray h-full min-h-screen w-full text-sm md:text-lg">
    <div
        class="flex flex-col gap-4 px-16 pt-56 pb-28 min-[1536px]:px-[480px] sm:px-36 xl:px-80"
        data-aos="fade-right"
        data-aos-duration="2000"
    >
        <div class="border-b-2">
            <h2 class="text-3xl font-semibold uppercase sm:text-4xl">
                Speedcubing
            </h2>
        </div>
        <div>
            <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                {organizationIntro.title}
            </h3>
            <div>
                {#each organizationIntro.paragraph as p, i (i)}
                    <p class="mb-4 text-justify">
                        {p}
                    </p>
                {/each}
            </div>
        </div>
    </div>
</section>
