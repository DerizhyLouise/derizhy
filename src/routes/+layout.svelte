<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/svg/favicon.svg";
	import Header from "$lib/custom-components/header.svelte";
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header currentUrl={page.url}></Header>
{@render children?.()}
