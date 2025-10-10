<script lang="ts">
    import type { IconImage } from "$lib/type/data-type";
    import ImgRenderer from "./img-renderer.svelte";

    type SkillBadgeProps = {
        name: string;
        icon: IconImage;
    };

    let { name, icon }: SkillBadgeProps = $props();
</script>

<div
    class="bg-lightgray flex cursor-pointer items-center rounded-full border border-white px-4 py-2 text-white duration-300 hover:brightness-150"
>
    <ImgRenderer {icon} {name} imgClassName="mr-1 h-4" iconClassName="mr-2" />
    {name}
</div>
