<script lang="ts">
    import chelseaSVG from "$lib/assets/svg/chelsea.svg";
    import cubeSVG from "$lib/assets/svg/cube.svg";
    import tailwindSVG from "$lib/assets/svg/tailwind.svg";
</script>

<div class="bg-[url('/src/lib/assets/svg/bg-1.svg')] bg-repeat">
    <section
        id="home"
        class="landing-bg flex h-full min-h-screen w-full items-center bg-black/70 bg-[url('/src/lib/assets/image/profile/bg-prof.jpeg')] bg-fixed px-4 pt-40 pb-20 text-white bg-blend-multiply sm:px-20 sm:pt-32 md:px-40 lg:px-60"
    >
        <div
            data-aos="fade-up"
            data-aos-duration="2000"
            class="flex h-full w-full items-center gap-12"
        >
            <div class="flex w-full flex-col max-md:items-center">
                <p class="text-center text-4xl md:text-left">Hey there! I'm</p>
                <h2 class="text-center text-6xl font-semibold md:text-left">
                    Louise Derizhy
                </h2>
                <ul class="pt-4 text-2xl md:list-disc md:pl-6">
                    <li class="text-center md:text-left">
                        a Software Engineer
                    </li>
                    <li class="text-center md:text-left">a Public Speaker</li>
                    <li class="text-center md:text-left">a Speedcuber</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-4 max-md:justify-center">
                    <a
                        class="hover:bg-maroon border-maroon border-2 p-2 font-semibold duration-700"
                        href="#know-more"
                    >
                        Know me more
                    </a>
                    <a
                        class="hover:bg-maroon border-maroon border-2 p-2 font-semibold duration-700"
                        href="./portfolio"
                    >
                        My Portfolio
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section
        id="about"
        class="h-full w-full px-10 text-white xl:px-40 2xl:px-80"
    >
        <div class="h-full w-full py-40">
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
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-location-dot"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
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
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-dharmachakra"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            I am a <span class="font-semibold">Buddhist</span>
                            and <span class="font-semibold">Buddhism </span> is My
                            Way of Life
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="2000">
                    <a
                        href="#about"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-user"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            <span class="font-semibold">張家誠</span> is My
                            Chinese Name and<br /><span class="font-semibold"
                                >Adhi Guna Dharma</span
                            > is My Buddhist Name
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2000">
                    <a
                        href="#about"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-square-terminal"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            I Love <span class="font-semibold">Physics</span>
                            but I've Chosen
                            <span class="font-semibold">Coding</span> as My Career
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="2000">
                    <a
                        href="./portfolio#projects"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-display-code"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            I am a <span class="font-semibold"
                                >Software Engineer</span
                            >, and Check Out The
                            <span class="font-semibold">Projects</span> I've Done
                            Right Here
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2000">
                    <a
                        href="./portfolio#organizations"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-4xl max-sm:col-span-2">
                            <span class="fa-regular fa-users"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
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
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-microphone"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            I am a <span class="font-semibold"
                                >Public Speaker</span
                            >
                            Especially a
                            <span class="font-semibold">Dharmaduta</span>
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2000">
                    <a
                        href="https://www.worldcubeassociation.org/persons/2018DERI01"
                        target="_blank"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div
                            class="flex items-center justify-center max-sm:col-span-2"
                        >
                            <img
                                src={cubeSVG}
                                class="h-32 w-32 pt-4"
                                alt="cube"
                            />
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            <span class="font-semibold">Speedcubing </span>is My
                            Hobby, My Current Personal Record of
                            <span class="font-semibold">3x3x3 </span>is
                            <span class="font-semibold">6.06 sec</span>
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="2000">
                    <a
                        href="https://cheese.com"
                        target="_blank"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-cheese-swiss"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
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
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div
                            class="flex items-center justify-center max-sm:col-span-2"
                        >
                            <img
                                src={chelseaSVG}
                                class="h-20 w-20"
                                alt="chelsea"
                            />
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            <span class="font-semibold">Chelsea FC</span> is My Favorite
                            Football Club.
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="2000">
                    <a
                        href="#about"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-message-quote"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            <q
                                >The More <span class="font-semibold"
                                    >Influential</span
                                > You Are, The More People Want to Bring You Down</q
                            >
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2000">
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
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
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
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
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-music"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            <span class="font-semibold"
                                >River Flows In You
                            </span>
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
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-paint-roller"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
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
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-cup-straw-swoosh"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            I Don't Like Coffee, But I Love <span
                                class="font-semibold">Milk Tea</span
                            >
                        </h3>
                    </a>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2000">
                    <a
                        href="#about"
                        target="_blank"
                        class="bg-lightgray mx-auto grid h-40 w-full grid-cols-6 items-center gap-4 rounded-lg px-6 py-4 shadow-2xl duration-300 even:justify-self-end hover:scale-110"
                    >
                        <div class="text-center text-5xl max-sm:col-span-2">
                            <span class="fa-regular fa-cat"></span>
                        </div>
                        <h3
                            class="text-md col-span-4 even:text-left sm:col-span-5 sm:text-lg"
                        >
                            I Think <span class="font-semibold">Cat</span> is The
                            Cutest Animal
                        </h3>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section
        id="know-more"
        class="text-gray h-full w-full px-4 max-xl:py-40 min-[540px]:px-20 min-[1720px]:px-40 sm:px-40 xl:h-screen xl:px-20"
    >
        <div class="h-full w-full">
            <h2
                class="pb-10 text-center text-6xl font-semibold uppercase min-xl:pt-40"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                What I Do?
            </h2>
            <div
                class="h-full w-full gap-12 max-xl:flex max-xl:flex-col xl:grid xl:grid-cols-3 xl:gap-6"
            >
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    class="group shadow-gray relative mx-auto h-96 w-full overflow-hidden shadow-2xl xl:w-96"
                >
                    <div
                        class="bg-lightgray flex h-full w-full items-center text-center text-8xl text-white duration-300 ease-in-out group-hover:-translate-y-full"
                    >
                        <span
                            class="fa-regular fa-square-terminal w-full scale-150"
                        ></span>
                    </div>
                    <a
                        href="./portfolio#"
                        class="bg-yellow flex h-full w-full items-center justify-center p-4 duration-300 ease-in-out group-hover:-translate-y-full"
                    >
                        <h2 class="text-gray text-center text-5xl">Coding</h2>
                    </a>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    class="group shadow-gray relative mx-auto h-96 w-full overflow-hidden shadow-2xl xl:w-96"
                >
                    <div
                        class="bg-lightgray flex h-full w-full items-center text-center text-8xl text-white duration-300 ease-in-out group-hover:-translate-y-full"
                    >
                        <span class="fa-regular fa-microphone w-full scale-150"
                        ></span>
                    </div>
                    <a
                        href="#about"
                        class="bg-yellow flex h-full w-full items-center justify-center p-4 duration-300 ease-in-out group-hover:-translate-y-full"
                    >
                        <h2 class="text-gray text-center text-5xl">
                            Public Speaking
                        </h2>
                    </a>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    class="group shadow-gray relative mx-auto h-96 w-full overflow-hidden shadow-2xl xl:w-96"
                >
                    <div
                        class="bg-lightgray flex h-full w-full items-center justify-center duration-300 ease-in-out group-hover:-translate-y-full"
                    >
                        <img src={cubeSVG} class="h-48 w-48" alt="cube" />
                    </div>
                    <a
                        href="https://www.worldcubeassociation.org/persons/2018DERI01"
                        target="_blank"
                        class="bg-yellow flex h-full w-full items-center justify-center p-4 duration-300 ease-in-out group-hover:-translate-y-full"
                    >
                        <h2 class="text-gray text-center text-5xl">
                            Speedcubing
                        </h2>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
