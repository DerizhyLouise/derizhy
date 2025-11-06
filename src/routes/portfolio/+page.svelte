<script lang="ts">
    import SectionEducation from "$lib/section/section-education.svelte";
    import SectionExperience from "$lib/section/section-experience.svelte";
    import SectionProfile from "$lib/section/section-profile.svelte";
    import SectionProject from "$lib/section/section-project.svelte";
    import SectionSkill from "$lib/section/section-skill.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://derizhy.com/portfolio" />
    <meta
        name="description"
        content="Louise Derizhy — Software Engineer specializing in full stack development with Svelte, Tailwind CSS, and TypeScript."
    />
</svelte:head>

<SectionProfile />

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat pb-40">
    <SectionSkill />
    <SectionExperience />
    <SectionProject />
    <SectionEducation />
</div>
