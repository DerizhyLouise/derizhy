<script lang="ts">
    import SectionFunFact from "$lib/section/section-fun-fact.svelte";
    import SectionHome from "$lib/section/section-home.svelte";
    import SectionJournal from "$lib/section/section-journal.svelte";
</script>

<SectionHome />

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat pb-40">
    <SectionJournal />

    <SectionFunFact />
</div>
