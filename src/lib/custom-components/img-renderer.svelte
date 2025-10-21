<script lang="ts">
    import type { IconImage } from "$lib/type/data-type";

    type ItemRendererProps = {
        name: string;
        icon: IconImage;
    };

    let { name, icon }: ItemRendererProps = $props();
</script>

{#if icon.type === "svg"}
    <img src={icon.src} alt={name} class="mx-auto h-12 w-12" />
{:else}
    <span class={icon.src}></span>
{/if}
