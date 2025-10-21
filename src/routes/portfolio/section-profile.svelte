<script lang="ts">
    import Avatar from "$lib/assets/image/profile/derizhy.webp";
    import { portfolioContactData } from "$lib/data/contact";
</script>

<section
    id="profile"
    class="bg-gray flex h-full min-h-screen w-full flex-col items-center justify-center px-10 pt-32 pb-20 text-white"
>
    <div class="text-center" data-aos="fade-up" data-aos-duration="2000">
        <h2 class="mb-2 text-xl font-semibold tracking-wide sm:text-3xl">
            Hi! I am <span class="text-yellow underline">Louise Derizhy</span>
        </h2>
        <p class="mb-10 text-4xl font-extrabold sm:text-5xl">
            A Software Engineer
        </p>
        <p class="text-lg sm:text-xl">
            Expertised in
            <span class="font-semibold">Full-Stack Web Development</span>
            with
            <span class="font-semibold">Svelte</span>,
            <span class="font-semibold">TypeScript</span>, and
            <span class="font-semibold">Tailwind CSS</span>
            <br />
            with additional experience in
            <span class="font-semibold">Java</span> and
            <span class="font-semibold">SQL</span> for backend systems.
        </p>
        <div class="my-5 flex justify-center sm:my-10">
            <img
                src={Avatar}
                alt="Louise Derizhy"
                class="h-40 w-40 rounded-full transition-transform duration-300 hover:scale-110 hover:sm:scale-125"
            />
        </div>
        <div class="text-gray flex flex-wrap justify-center gap-6 text-2xl">
            {#each portfolioContactData as contact (contact.label)}
                <a
                    aria-label={contact.label}
                    href={contact.link}
                    target="_blank"
                    class="bg-yellow flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-700 hover:rotate-360"
                >
                    <span class={contact.icon}></span>
                </a>
            {/each}
        </div>
    </div>
</section>
