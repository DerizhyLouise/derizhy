<script lang="ts">
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { onDestroy, onMount } from "svelte";

    let progressBar: HTMLDivElement | null = $state(null);
    let progress: number = $state(0);
    let interval: ReturnType<typeof setInterval> | null = $state(null);

    onMount(() => {
        beforeNavigate(() => {
            if (!progressBar) return;

            progress = 0;
            progressBar.style.width = "0%";
            progressBar.style.transition = "width 0.4s ease";

            progress = 40;
            progressBar.style.width = progress + "%";

            interval = setInterval(() => {
                if (progress < 90) {
                    progress += 10;
                    progressBar!.style.width = progress + "%";
                }
            }, 400);
        });

        afterNavigate(() => {
            if (!progressBar) return;

            progress = 100;
            progressBar.style.width = "100%";

            if (interval) {
                clearInterval(interval);
                interval = null;
            }

            setTimeout(() => {
                progress = 0;
                progressBar!.style.width = "0%";
            }, 500);
        });
    });

    onDestroy(() => {
        if (interval) {
            clearInterval(interval);
        }
    });
</script>

<div
    class="bg-yellow fixed top-0 left-0 z-[9999] h-[3px] w-0 transition-[width] duration-300 ease-linear"
    bind:this={progressBar}
></div>
