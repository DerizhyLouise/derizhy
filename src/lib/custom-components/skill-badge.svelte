<script lang="ts">
    type SkillBadgeProps = {
        name: string;
    };

    let { name }: SkillBadgeProps = $props();
</script>

<div
    class="bg-yellow text-gray hover:bg-yellow/80 flex cursor-pointer items-center rounded-full px-4 py-2 text-xs duration-300 sm:text-sm"
>
    {name}
</div>
