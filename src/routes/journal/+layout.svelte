<script lang="ts">
    let { children } = $props();
</script>

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat pb-40">
    {@render children()}
</div>
