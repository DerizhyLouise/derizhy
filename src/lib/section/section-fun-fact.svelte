<script lang="ts">
    import chelseaSVG from "$lib/assets/svg/chelsea.svg";
    import cubeSVG from "$lib/assets/svg/cube.svg";
    import tailwindSVG from "$lib/assets/svg/tailwind.svg";
</script>

<section
    id="fun-fact"
    class="h-full min-h-screen w-full px-4 text-white sm:px-20 xl:px-40 2xl:px-80"
>
    <div class="h-full w-full pt-40">
        <h2
            class="text-gray mb-10 text-center text-6xl font-semibold uppercase"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            About Me
        </h2>
        <div
            class="grid h-full w-full justify-center gap-6 lg:grid-cols-2 lg:gap-12"
        >
            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="https://en.wikipedia.org/wiki/Medan"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-location-dot"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I Live and Born in
                        <span class="font-semibold">Medan, Indonesia</span>
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <a
                    href="https://en.wikipedia.org/wiki/Buddhism"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-dharmachakra"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I am a <span class="font-semibold">Buddhist</span>
                        and <span class="font-semibold">Buddhism </span> is My Way
                        of Life
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="#about"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-user"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        <span class="font-semibold">張家誠</span> is My Chinese
                        Name and<br /><span class="font-semibold"
                            >Adhi Guna Dharma</span
                        > is My Buddhist Name
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <a
                    href="#about"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-square-terminal"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I Love <span class="font-semibold">Physics</span>
                        but I've Chosen
                        <span class="font-semibold">Coding</span> as My Career
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="./portfolio#project"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-code"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I am a <span class="font-semibold"
                            >Software Engineer</span
                        >, and Check Out The
                        <span class="font-semibold">Projects</span> I've Done Right
                        Here
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <a
                    href="./journal/my-organization-life"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-4xl max-sm:col-span-2">
                        <span class="fa-regular fa-users"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I Love to Do <span class="font-semibold"
                            >Organizational</span
                        > Activity
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="#about"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-microphone"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I am a <span class="font-semibold">Public Speaker</span>
                        Especially a
                        <span class="font-semibold">Dharmaduta</span>
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <a
                    href="https://www.worldcubeassociation.org/persons/2018DERI01"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div
                        class="flex items-center justify-center max-sm:col-span-2"
                    >
                        <img src={cubeSVG} class="h-32 w-32 pt-4" alt="cube" />
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        <span class="font-semibold">Speedcubing</span>
                        is My Hobby, My Current Personal Record of
                        <span class="font-semibold">3x3x3</span>
                        is
                        <span class="font-semibold"> 6.06 sec</span>
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="https://cheese.com"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-cheese-swiss"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I Love Everything About <span class="font-semibold"
                            >Cheeseeeee</span
                        >
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <a
                    href="https://www.chelseafc.com/en"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div
                        class="flex items-center justify-center max-sm:col-span-2"
                    >
                        <img src={chelseaSVG} class="h-20 w-20" alt="chelsea" />
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        <span class="font-semibold">Chelsea FC</span> is My Favorite
                        Football Club.
                    </h3>
                </a>
            </div>

            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="#about"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-cat"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I Think <span class="font-semibold">Cat</span> is The Cutest
                        Animal
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div
                        class="flex items-center justify-center max-sm:col-span-2"
                    >
                        <img
                            src={tailwindSVG}
                            class="h-20 w-20"
                            alt="tailwind"
                        />
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        My Most Favorite Framework/Library is <span
                            class="font-semibold">Tailwind CSS</span
                        >
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="https://en.wikipedia.org/wiki/Yiruma"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-music"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        <span class="font-semibold">River Flows In You </span>
                        is My Favorite Song and
                        <span class="font-semibold">Yiruma</span> is My Favorite
                        Composer
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2000">
                <a
                    href="#about"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-paint-roller"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        My Favorite Color is
                        <span class="text-maroon font-semibold"
                            >Bright Maroon #C32148</span
                        >
                    </h3>
                </a>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2000">
                <a
                    href="#about"
                    target="_blank"
                    class="bg-gray shadow-gray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-sm px-6 py-4 shadow-lg duration-300 even:justify-self-end hover:scale-110"
                >
                    <div class="text-center text-5xl max-sm:col-span-2">
                        <span class="fa-regular fa-cup-straw-swoosh"></span>
                    </div>
                    <h3
                        class="col-span-4 text-base even:text-left sm:col-span-5 sm:text-lg"
                    >
                        I Don't Like Coffee, But I Love <span
                            class="font-semibold">Milk Tea</span
                        >
                    </h3>
                </a>
            </div>
        </div>
    </div>
</section>
