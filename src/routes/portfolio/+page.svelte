<script lang="ts">
    import SectionEducation from "$lib/section/section-education.svelte";
    import SectionExperience from "$lib/section/section-experience.svelte";
    import SectionProfile from "$lib/section/section-profile.svelte";
    import SectionProject from "$lib/section/section-project.svelte";
    import SectionSkill from "$lib/section/section-skill.svelte";
</script>

<SectionProfile />

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat pb-40">
    <SectionSkill />
    <SectionExperience />
    <SectionProject />
    <SectionEducation />
</div>
