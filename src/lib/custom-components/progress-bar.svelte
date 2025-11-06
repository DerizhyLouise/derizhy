<script lang="ts">
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { onMount } from "svelte";

    let progressBar: HTMLDivElement | null = $state(null);

    onMount(() => {
        progressBar = document.getElementById("progress-bar") as HTMLDivElement;

        beforeNavigate(() => {
            if (progressBar) {
                progressBar.style.width = "0%";
                progressBar.style.transition = "none";
                progressBar.style.transition = "width 0.4s ease";
                progressBar.style.width = "60%";
            }
        });

        afterNavigate(() => {
            if (progressBar) {
                progressBar.style.width = "100%";
                setTimeout(() => {
                    progressBar!.style.width = "0%";
                }, 400);
            }
        });
    });
</script>

<div
    class="bg-yellow fixed top-0 left-0 z-[9999] h-[3px] w-0 transition-[width] duration-300 ease-linear"
    id="progress-bar"
></div>
