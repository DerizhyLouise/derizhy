<script lang="ts">
    import type { IconImage } from "$lib/type/data-type";

    type ItemRendererProps = {
        name: string;
        icon: IconImage;
        imgClassName?: string;
        iconClassName?: string;
    };

    let { name, icon, imgClassName, iconClassName }: ItemRendererProps =
        $props();
</script>

{#if icon.type === "svg" || icon.type === "img" || icon.type === "png"}
    <img
        src={icon.src}
        alt={name}
        class={`${icon.type === "png" ? "bg-white" : ""} ${imgClassName ? imgClassName : "mx-auto h-12 w-12"} `}
    />
{:else}
    <span class={`${icon.src} ${iconClassName ? iconClassName : ""}`}></span>
{/if}
