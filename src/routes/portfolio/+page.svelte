<script lang="ts">
    import SectionEducation from "./section-education.svelte";
    import SectionExperience from "./section-experience.svelte";
    import SectionProfile from "./section-profile.svelte";
    import SectionProject from "./section-project.svelte";
    import SectionReview from "./section-review.svelte";
    import SectionSkill from "./section-skill.svelte";
</script>

<SectionProfile />

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat">
    <SectionSkill />
    <SectionExperience />
    <SectionProject />
    <SectionEducation />
    <SectionReview />
</div>
