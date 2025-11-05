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
                        class="relative mb-9 text-lg font-medium text-white content-[''] before:absolute before:-bottom-2.5 before:left-0 before:box-border before:h-0.5 before:w-12.5 before:bg-white"
                    >
                        {section.title}
                    </h4>
                    <ul class="list-none">
                        {#each section.links as link (link.title)}
                            <li class="not-last:mb-2.5">
                                <a
                                    class="block text-base font-light text-white transition-all duration-300 ease-in-out hover:pl-2"
                                    href={link.href}
                                    target={link.target}
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
                    class="relative mb-9 text-lg font-medium text-white content-[''] before:absolute before:-bottom-2.5 before:left-0 before:box-border before:h-0.5 before:w-12.5 before:bg-white"
                >
                    Find Me
                </h4>
                <div class="flex gap-2">
                    {#each footerData.social as social (social.href)}
                        {#if social.href}
                            <a
                                class="text-gray flex h-8 w-8 items-center justify-center rounded-full bg-white/90 transition-transform duration-700 hover:rotate-360"
                                href={social.href}
                                target={social.target}
                                aria-label={social.label}
                                title={social.label}
                            >
                                <i class={social.icon}></i>
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
        <h2 class="mx-auto my-4 text-center">© 2025 Louise Derizhy</h2>
    </div>
</footer>
