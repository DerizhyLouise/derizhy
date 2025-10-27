<script lang="ts">
    import type { SearchBarTypeCount } from "$lib/type/data-type";

    type SearchBarProps = {
        search: string;
        selectedType: string[];
        types: SearchBarTypeCount[];
        placeholder: string;
    };

    let {
        search = $bindable(),
        selectedType = $bindable(),
        types,
        placeholder = "Search...",
    }: SearchBarProps = $props();

    function toggleType(type: string) {
        if (type === "All") {
            selectedType = ["All"];
            return;
        }

        if (!selectedType.includes(type)) {
            selectedType = [...selectedType.filter((t) => t !== "All"), type];
        } else {
            selectedType = selectedType.filter((t) => t !== type);
        }

        if (selectedType.length === 0) {
            selectedType = ["All"];
        }
    }
</script>

<div
    class="shadow-gray bg-gray relative rounded-sm p-6 shadow-lg sm:p-10 md:p-12"
    data-aos="fade-up"
    data-aos-duration="2000"
>
    <div class="relative flex items-center justify-center">
        <span
            class="fa-solid fa-magnifying-glass text-gray absolute top-1/2 left-5 -translate-y-1/2 text-lg sm:left-6 sm:text-xl md:left-7"
        ></span>
        <input
            type="text"
            {placeholder}
            bind:value={search}
            class="text-gray w-full rounded-sm bg-white py-3 pr-12 pl-12 text-sm focus:outline-none sm:py-4 sm:pr-14 sm:pl-16 sm:text-base md:py-5"
        />
        <button
            class="text-gray absolute top-1/2 right-5 -translate-y-1/2 text-lg active:scale-125 sm:right-6 sm:text-xl md:right-7"
            onclick={() => (search = "")}
            aria-label="Clear search"
            title="Clear search"
        >
            <span class="fa-solid fa-xmark" aria-hidden="true"></span>
        </button>
    </div>

    <div
        class="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:justify-start sm:gap-3 md:gap-4"
    >
        {#each types as item (item)}
            <button
                class={`hover:bg-yellow/80 text-gray flex gap-2 rounded-full px-3 py-1.5 text-xs leading-6 duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                    selectedType.includes(item.type)
                        ? "bg-yellow outline-yellow outline-1 outline-offset-4"
                        : "bg-white"
                }`}
                onclick={() => toggleType(item.type)}
            >
                {item.type}
                <span
                    class="bg-maroon flex h-6 w-6 items-center justify-center rounded-full text-white"
                >
                    {item.count}
                </span>
            </button>
        {/each}
    </div>
</div>
