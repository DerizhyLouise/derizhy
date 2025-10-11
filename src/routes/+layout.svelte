<script lang="ts">
    import { page } from "$app/state";
    import favicon from "$lib/assets/svg/favicon.svg";
    import Footer from "$lib/custom-components/footer.svelte";
    import Header from "$lib/custom-components/header.svelte";
    import PortfolioHeader from "$lib/custom-components/portfolio-header.svelte";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { onMount } from "svelte";
    import "../app.css";

    let { children } = $props();

    onMount(() => {
        AOS.init();
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{#if page.url.pathname.startsWith("/portfolio")}
    <PortfolioHeader />
{:else}
    <Header />
{/if}

{@render children?.()}

<Footer />
