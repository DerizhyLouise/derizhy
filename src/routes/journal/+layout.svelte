<script lang="ts">
    let { children } = $props();
</script>

<svelte:head>
    <link rel="canonical" href="https://derizhy.com/journal" />
    <meta name="description" content="Just a random writing" />
</svelte:head>

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat pb-40">
    {@render children()}
</div>
