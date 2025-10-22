<script lang="ts">
    import { footerData } from "$lib/data/footer";
</script>

<footer
    id="footer"
    class="bg-gray relative z-20 h-full py-2 text-white select-none"
>
    <div class="mx-auto my-12.5 max-w-[1170px]">
        <div class="flex flex-wrap">
            {#each footerData.sections as section (section.title)}
                <div
                    class="mb-8 w-full px-4 min-[576px]:mb-0 min-[576px]:w-1/2 md:w-1/4"
                >
                    <h4
                        class="before:bg-yellow relative mb-9 text-lg font-medium text-white content-[''] before:absolute before:-bottom-2.5 before:left-0 before:box-border before:h-0.5 before:w-12.5"
                    >
                        {section.title}
                    </h4>
                    <ul class="list-none">
                        {#each section.links as link (link.title)}
                            <li class="not-last:mb-2.5">
                                <a
                                    class="block text-base font-light text-white transition-all duration-300 ease-in-out hover:pl-2"
                                    href={link.href}
                                    target={link.target ?? "_self"}
                                >
                                    {link.title}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
            <div
                class="mb-8 w-full px-4 max-[576px]:mb-0 min-[576px]:w-1/2 md:w-1/4"
            >
                <h4
                    class="before:bg-yellow relative mb-9 text-lg font-medium text-white content-[''] before:absolute before:-bottom-2.5 before:left-0 before:box-border before:h-0.5 before:w-12.5"
                >
                    Find Me
                </h4>
                <div class="social-links">
                    {#each footerData.social as social (social.href)}
                        {#if social.href}
                            <a
                                class="ease mr-2.5 mb-2.5 inline-block h-10 w-10 rounded-full bg-white/20 text-center leading-10 text-white transition-all duration-500 hover:bg-white hover:text-[#24262b]"
                                href={social.href}
                                target={social.target ?? "_self"}
                                aria-label={social.label ?? social.icon}
                                title={social.label ?? social.icon}
                            >
                                <i
                                    class={`${social.icon} ease mr-2.5 mb-2.5 inline-block h-full w-full rounded-full bg-white/20 text-center leading-10 text-white transition-all duration-500 hover:bg-white hover:text-[#24262b]`}
                                ></i>
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
        <h2 class="mx-auto my-4 text-center">© 2025 Louise Derizhy</h2>
    </div>
</footer>
