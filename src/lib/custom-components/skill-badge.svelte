<script lang="ts">
    type SkillBadgeProps = {
        name: string;
    };

    let { name }: SkillBadgeProps = $props();
</script>

<div
    class="text-gray flex cursor-pointer items-center rounded-full bg-white px-4 py-2 text-xs duration-300 hover:bg-white/80 sm:text-sm"
>
    {name}
</div>
