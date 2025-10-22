<script lang="ts">
    import Avatar from "$lib/assets/image/profile/derizhy.webp";
    import { homeContactData } from "$lib/data/contact";
</script>

<section
    id="home"
    class="bg-gray flex h-full min-h-screen w-full flex-col items-center justify-center px-10 pt-32 pb-20 text-white"
>
    <div class="text-center" data-aos="fade-up" data-aos-duration="2000">
        <h2 class="mb-10 text-4xl font-semibold tracking-wide sm:text-5xl">
            Hi! I am <span class="text-yellow underline">Louise Derizhy</span>
        </h2>
        <p class="text-lg sm:text-xl">
            By profession, I'm a
            <span class="font-semibold">Software Engineer</span>.<br />
            Outside of coding, I'm deeply involved in
            <span class="font-semibold">Organizations</span>, passionate about
            <span class="font-semibold">Public Speaking</span>, <br />
            and love solving Rubik's cubes as a
            <span class="font-semibold">Speedcuber</span>.
        </p>
        <div class="my-5 flex justify-center sm:my-10">
            <img
                src={Avatar}
                alt="Louise Derizhy"
                class="h-40 w-40 rounded-full transition-transform duration-300 hover:scale-110 hover:sm:scale-125"
            />
        </div>
        <div class="text-gray flex flex-wrap justify-center gap-6 text-2xl">
            {#each homeContactData as contact (contact.label)}
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
