<script lang="ts">
    import { browser } from "$app/environment";
    import logo from "$lib/assets/svg/logo.svg";
    import { menu } from "$lib/data/menu";
    import { getLink } from "$lib/utils";
    import { onDestroy, onMount } from "svelte";

    let portfolioMenu = menu.find((item) => item.title === "Portfolio")!;
    let isDrawerOpen = $state(false);

    function toggleDrawer() {
        isDrawerOpen = !isDrawerOpen;
    }

    function closeDrawer() {
        isDrawerOpen = false;
    }

    function handleSidebarClickOutside(event: MouseEvent) {
        const sidebar = document.querySelector("aside");
        let clickedInside = false;

        if (sidebar === (event.target as Node)) {
            clickedInside = true;
        }

        if (!clickedInside) {
            closeDrawer();
        }
    }

    onMount(() => {
        if (browser) {
            document.addEventListener("mousedown", handleSidebarClickOutside);
        }
    });

    onDestroy(() => {
        if (browser) {
            document.removeEventListener(
                "mousedown",
                handleSidebarClickOutside,
            );
        }
    });
</script>

<header
    class="bg-gray fixed z-30 flex h-28 w-full items-center justify-between px-10 py-2 text-white md:px-20 xl:px-40 2xl:px-60"
>
    <!-- LOGO -->
    <div class="w-full">
        <a href="/" class="flex items-center gap-4">
            <img class="h-24" src={logo} alt="logo" />
            <h1 class="text-4xl font-semibold">Louise Derizhy</h1>
        </a>
    </div>

    <!-- DESKTOP NAV -->
    <nav class="hidden justify-self-end text-xl font-semibold lg:block">
        <ul class="flex justify-end gap-6 xl:gap-10">
            {#each portfolioMenu.subMenu as item (item.title)}
                <li class="group relative" data-dropdown>
                    <a
                        href={getLink(portfolioMenu.link, item.link)}
                        class="relative flex cursor-pointer items-center gap-2 text-white
							   after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]
							   after:w-0 after:bg-white after:transition-all
							   after:duration-300 after:content-[''] hover:after:w-full"
                    >
                        {item.title}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>

    <!-- MOBILE BUTTON -->
    <div class="flex w-6/12 justify-end lg:hidden">
        <button
            class="text-3xl transition hover:scale-150 hover:duration-300"
            type="button"
            aria-label="Open navigation menu"
            onclick={toggleDrawer}
        >
            <i class="fa-solid fa-bars"></i>
        </button>
    </div>
</header>

<aside
    class={`bg-lightgray fixed top-0 right-0 z-40 h-screen w-80 transform transition-transform duration-500 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
    }`}
>
    <button
        type="button"
        onclick={closeDrawer}
        class="hover:bg-maroon group absolute end-2.5 top-2.5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-transparent text-lg text-white"
        aria-label="Close sidebar"
    >
        <span
            class="fa-solid fa-xmark transition group-hover:rotate-180 group-hover:duration-500"
        ></span>
    </button>

    <div class="flex flex-col gap-4 px-8 py-16">
        <div>
            <a
                class="text-yellow mb-2 text-3xl font-semibold"
                href={getLink(portfolioMenu.link, "")}
            >
                {portfolioMenu.title}
            </a>
            <div class="flex flex-col text-xl text-white">
                {#if portfolioMenu.subMenu}
                    {#each portfolioMenu.subMenu as subItem (subItem.title)}
                        <a
                            href={getLink(portfolioMenu.link, subItem.link)}
                            onclick={closeDrawer}
                            class="hover:bg-maroon rounded-lg p-2 pl-4 transition-all duration-300"
                        >
                            {subItem.title}
                        </a>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</aside>
