<script lang="ts">
    import {
        organizationExperience,
        organizationIntro,
    } from "$lib/data/organization";
</script>

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat">
    <section class="text-gray h-full min-h-screen w-full text-sm md:text-lg">
        <div
            class="flex flex-col gap-4 px-16 pt-56 pb-28 sm:px-36 xl:px-80 2xl:px-[480px]"
        >
            <div class="border-b-2">
                <h2 class="text-3xl font-semibold uppercase sm:text-4xl">
                    My Organization Life
                </h2>
            </div>
            <div>
                <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                    {organizationIntro.title}
                </h3>
                <div>
                    {#each organizationIntro.paragraph as p, i (i)}
                        <p class="mb-4">
                            {p}
                        </p>
                    {/each}
                </div>
            </div>
            <div>
                <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                    My Organization Experiences
                </h3>
                <div class="flex flex-col gap-6">
                    {#each organizationExperience as item (item.name)}
                        <a class="mt-2" href="">
                            <div
                                class="flex items-center gap-2 max-[540px]:mb-2 max-[540px]:flex-col"
                            >
                                <img
                                    src={item.logo.src}
                                    alt={item.name}
                                    class="h-20 w-20"
                                />
                                <div class="max-[540px]:text-center">
                                    <h4 class="font-semibold">
                                        {item.name}
                                    </h4>
                                    <p>{item.location} ({item.time})</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                {#each item.description as p, i (i)}
                                    <p>
                                        {p}
                                    </p>
                                {/each}
                            </div>
                            <div class="mt-1 flex flex-col">
                                <h4 class="font-semibold">Position Held</h4>
                                <ul class="list-disc">
                                    {#each item.experience as experience (experience.time)}
                                        <li>
                                            {experience.position} ({experience.time})
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</div>
