<script lang="ts">
    import type { IconImage } from "$lib/type/data-type";
    import ImgRenderer from "./img-renderer.svelte";

    type SkillBadgeProps = {
        name: string;
        icon: IconImage;
        className?: string;
    };

    let { name, icon, className }: SkillBadgeProps = $props();
</script>

<div
    class={`bg-lightgray flex cursor-pointer items-center rounded-full px-4 py-2 text-xs text-white duration-300 hover:brightness-150 sm:text-sm ${className}`}
>
    <ImgRenderer
        {icon}
        {name}
        imgClassName="mr-1 h-3 sm:h-4"
        iconClassName="mr-2"
    />
    {name}
</div>
