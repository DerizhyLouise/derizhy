<script lang="ts">
	import logo from "$lib/assets/svg/logo.svg";
	import { menu } from "$lib/data/menu";

	type HeaderProps = {
		currentUrl: URL;
	};

	let { currentUrl }: HeaderProps = $props();
</script>

<header
	class="fixed w-full h-28 bg-gray flex items-center justify-between px-10 md:px-20 xl:px-40 2xl:px-60 py-2 z-30 text-white"
>
	<div class="w-full">
		<a href="#home" class="flex items-center gap-4">
			<img class="h-24" src={logo} alt="logo" />
			<h1 class="text-4xl">Louise Derizhy</h1>
		</a>
	</div>
	<nav
		class="font-semibold text-xl justify-self-end w-[768px] hidden lg:block"
	>
		<ul class="flex justify-end gap-4 lg:gap-16">
			{#each menu as item (item.title)}
				<li
					class="text-yellow flex items-center border-b-2 border-yellow border-opacity-0 transition ease-in-out hover:border-opacity-100 hover:duration-300 cursor-pointer"
				>
					<button
						id="dropdownHome"
						data-dropdown-toggle="dropdownHome2"
					>
						Home
						<i class="fa-solid fa-chevron-down"></i>
					</button>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="flex justify-end w-6/12 lg:hidden">
		<button
			class="text-3xl hover:duration-300 hover:scale-150 transition"
			type="button"
			data-drawer-target="drawer-navigation"
			data-drawer-show="drawer-navigation"
			data-drawer-placement="right"
			aria-controls="drawer-navigation"
		>
			<i class="fa-solid fa-bars"></i>
		</button>
	</div>
	<div
		id="dropdownHome2"
		class="z-10 hidden bg-gray border-2 border-yellow rounded-lg shadow w-28"
	>
		<ul class="py-2 text-sm">
			<li>
				<a
					href="#home"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>Home</a
				>
			</li>
			<li>
				<a
					href="#about"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>About Me</a
				>
			</li>
			<li>
				<a
					href="#know-more"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>What I Do?</a
				>
			</li>
		</ul>
	</div>
	<div
		id="dropdownPort2"
		class="z-10 hidden bg-gray border-2 border-yellow rounded-lg shadow w-36"
	>
		<ul class="py-2 text-sm">
			<li>
				<a
					href="./portfolio#profile"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>Profile</a
				>
			</li>
			<li>
				<a
					href="./portfolio#skills"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>Skills</a
				>
			</li>
			<li>
				<a
					href="./portfolio#experiences"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>Experiences</a
				>
			</li>
			<li>
				<a
					href="./portfolio#projects"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>Projects</a
				>
			</li>
			<li>
				<a
					href="./portfolio#reviews"
					class="block w-full text-left px-4 py-2 hover:bg-yellow hover:text-gray duration-300"
					>Reviews</a
				>
			</li>
		</ul>
	</div>
</header>
