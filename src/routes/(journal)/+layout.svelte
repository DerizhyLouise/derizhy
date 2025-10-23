<script lang="ts">
    let { children } = $props();
</script>

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat">
    {@render children()}
</div>
