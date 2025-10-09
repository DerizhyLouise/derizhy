<script lang="ts">
    import favicon from "$lib/assets/svg/favicon.svg";
    import Footer from "$lib/custom-components/footer.svelte";
    import Header from "$lib/custom-components/header.svelte";
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

<Header></Header>

{@render children?.()}

<Footer></Footer>
