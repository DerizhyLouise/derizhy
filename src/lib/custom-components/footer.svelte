<script lang="ts">
    import { footerData } from "$lib/data/footer";
</script>

<footer class="bg-gray py-2 text-white">
    <div class="footer-container">
        <div class="footer-row">
            {#each footerData.sections as section (section.title)}
                <div class="footer-col">
                    <h4>{section.title}</h4>
                    <ul>
                        {#each section.links as link (link.title)}
                            <li>
                                <a
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
            <div class="footer-col">
                <h4>Find Me</h4>
                <div class="social-links">
                    {#each footerData.social as social (social.href)}
                        {#if social.href}
                            <a
                                href={social.href}
                                target={social.target ?? "_self"}
                                aria-label={social.label ?? social.icon}
                                title={social.label ?? social.icon}
                            >
                                <i class={social.icon}></i>
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
        <h2 class="mx-auto my-2 text-center">© 2025 Louise Derizhy</h2>
    </div>
</footer>

<style>
    footer {
        height: 100%;
        position: relative;
        z-index: 2;
        user-select: none;
    }

    .footer-container {
        max-width: 1170px;
        margin: 50px auto;
    }

    .footer-row {
        display: flex;
        flex-wrap: wrap;
    }

    .footer-container ul {
        list-style: none;
    }

    .footer-col {
        width: 25%;
        padding: 0 15px;
    }

    .footer-col h4 {
        font-size: 18px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
    }

    .footer-col h4::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #f8e9a1;
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }

    .footer-col ul li:not(:last-child) {
        margin-bottom: 10px;
    }

    .footer-col ul li a {
        font-size: 16px;
        text-transform: capitalize;
        color: #ffffff;
        text-decoration: none;
        font-weight: 300;
        display: block;
        transition: all 0.3s ease;
    }

    .footer-col ul li a:hover {
        color: #ffffff;
        padding-left: 8px;
    }

    .footer-col .social-links a {
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
    }

    .footer-col .social-links a i {
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
    }

    .footer-col .social-links a:hover {
        color: #24262b;
        background-color: #ffffff;
    }

    .footer-col .social-links a:hover i {
        color: #24262b;
        background-color: #ffffff;
    }

    @media (max-width: 767px) {
        .footer-col {
            width: 50%;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 574px) {
        .footer-col {
            width: 100%;
        }
    }
</style>
