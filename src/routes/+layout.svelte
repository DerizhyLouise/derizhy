<script lang="ts">
    import { page } from "$app/state";
    import favicon from "$lib/assets/svg/favicon.svg";
    import Footer from "$lib/custom-components/footer.svelte";
    import Header from "$lib/custom-components/header.svelte";
    import PortfolioHeader from "$lib/custom-components/portfolio-header.svelte";
    import { menu } from "$lib/data/menu";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { onMount } from "svelte";
    import "../app.css";

    let { children } = $props();
    let pageName = $derived.by(() => {
        const pathName = page.url.pathname;
        let result = menu.find((item) => item.link === pathName)?.title;
        return result ? " - " + result : "";
    });

    onMount(() => {
        AOS.init();
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    {#if ["/", "/journal", "/portfolio"].includes(page.url.pathname)}
        <link
            rel="canonical"
            href={"https://derizhy.com" + page.url.pathname}
        />
    {/if}
    <title>Derizhy {pageName}</title>
</svelte:head>

{#if page.url.pathname.startsWith("/portfolio")}
    <PortfolioHeader />
{:else}
    <Header />
{/if}

{@render children?.()}

<Footer />
