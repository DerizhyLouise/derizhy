<script lang="ts">
	import chelseaSVG from "$lib/assets/svg/chelsea.svg";
	import cubeSVG from "$lib/assets/svg/cube.svg";
	import tailwindSVG from "$lib/assets/svg/tailwind.svg";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<div class="bg-[url('/src/lib/assets/svg/bg-1.svg')] bg-repeat">
	<section
		id="home"
		class="px-4 sm:px-20 md:px-40 lg:px-60 flex items-center pt-40 pb-20 sm:pt-32 h-full min-h-screen w-full bg-[url('/src/lib/assets/image/profile/bg-prof.jpeg')] landing-bg bg-fixed bg-black/70 bg-blend-multiply text-white"
	>
		<div
			data-aos="fade-up"
			data-aos-duration="2000"
			class="h-full w-full flex items-center gap-12"
		>
			<div class="w-full flex flex-col max-md:items-center">
				<p class="text-4xl text-center md:text-left">Hey there! I'm</p>
				<h2 class="text-6xl font-semibold text-center md:text-left">
					Louise Derizhy
				</h2>
				<ul class="md:list-disc text-2xl md:pl-6 pt-4">
					<li class="text-center md:text-left">
						a Software Engineer
					</li>
					<li class="text-center md:text-left">a Public Speaker</li>
					<li class="text-center md:text-left">a Speedcuber</li>
				</ul>
				<div class="mt-4 flex max-md:justify-center flex-wrap gap-4">
					<a
						class="p-2 font-semibold hover:bg-maroon border-2 border-maroon duration-700"
						href="#know-more"
					>
						Know me more
					</a>
					<a
						class="p-2 font-semibold hover:bg-maroon border-2 border-maroon duration-700"
						href="./portfolio"
					>
						My Portfolio
					</a>
				</div>
			</div>
		</div>
	</section>

	<section
		id="about"
		class="px-10 xl:px-40 2xl:px-80 h-full w-full text-white"
	>
		<div class="h-full w-full py-40">
			<h2
				class="uppercase text-6xl text-center font-semibold mb-10 text-gray"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				About Me
			</h2>
			<div
				class="h-full w-full grid lg:grid-cols-2 justify-center gap-6 lg:gap-12"
			>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="https://en.wikipedia.org/wiki/Medan"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-location-dot"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I Live and Born in
							<span class="font-semibold">Medan, Indonesia</span>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="https://en.wikipedia.org/wiki/Buddhism"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-dharmachakra"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I am a <span class="font-semibold">Buddhist</span>
							and <span class="font-semibold">Buddhism </span> is My
							Way of Life
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="#about"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-user"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							<span class="font-semibold">張家誠</span> is My
							Chinese Name and<br /><span class="font-semibold"
								>Adhi Guna Dharma</span
							> is My Buddhist Name
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="#about"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-square-terminal"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I Love <span class="font-semibold">Physics</span>
							but I've Chosen
							<span class="font-semibold">Coding</span> as My Career
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="./portfolio#projects"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-display-code"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I am a <span class="font-semibold"
								>Software Engineer</span
							>, and Check Out The
							<span class="font-semibold">Projects</span> I've Done
							Right Here
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="./portfolio#organizations"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-4xl text-center">
							<span class="fa-regular fa-users"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I Love to Do <span class="font-semibold"
								>Organizational</span
							> Activity
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="#about"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-microphone"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I am a <span class="font-semibold"
								>Public Speaker</span
							>
							Especially a
							<span class="font-semibold">Dharmaduta</span>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="https://www.worldcubeassociation.org/persons/2018DERI01"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div
							class="max-sm:col-span-2 flex justify-center items-center"
						>
							<img
								src={cubeSVG}
								class="pt-4 w-32 h-32"
								alt="cube"
							/>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							<span class="font-semibold">Speedcubing </span>is My
							Hobby, My Current Personal Record of
							<span class="font-semibold">3x3x3 </span>is
							<span class="font-semibold">6.06 sec</span>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="https://cheese.com"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-cheese-swiss"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I Love Everything About <span class="font-semibold"
								>Cheeseeeee</span
							>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="https://www.chelseafc.com/en"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div
							class="max-sm:col-span-2 flex justify-center items-center"
						>
							<img
								src={chelseaSVG}
								class="w-20 h-20"
								alt="chelsea"
							/>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							<span class="font-semibold">Chelsea FC</span> is My Favorite
							Football Club.
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="#about"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-message-quote"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							<q
								>The More <span class="font-semibold"
									>Influential</span
								> You Are, The More People Want to Bring You Down</q
							>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div
							class="max-sm:col-span-2 flex justify-center items-center"
						>
							<img
								src={tailwindSVG}
								class="w-20 h-20"
								alt="tailwind"
							/>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							My Most Favorite Framework/Library is <span
								class="font-semibold">Tailwind CSS</span
							>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="https://en.wikipedia.org/wiki/Yiruma"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-music"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							<span class="font-semibold"
								>River Flows In You
							</span>
							is My Favorite Song and
							<span class="font-semibold">Yiruma</span> is My Favorite
							Composer
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="#about"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-paint-roller"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							My Favorite Color is
							<span class="font-semibold text-maroon"
								>Bright Maroon #C32148</span
							>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-right" data-aos-duration="2000">
					<a
						href="#about"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-cup-straw-swoosh"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I Don't Like Coffee, But I Love <span
								class="font-semibold">Milk Tea</span
							>
						</h3>
					</a>
				</div>
				<div data-aos="fade-up-left" data-aos-duration="2000">
					<a
						href="#about"
						target="_blank"
						class="even:justify-self-end grid grid-cols-6 gap-4 items-center w-full h-40 mx-auto px-6 py-4 rounded-lg shadow-2xl bg-lightgray hover:scale-110 duration-300"
					>
						<div class="max-sm:col-span-2 text-5xl text-center">
							<span class="fa-regular fa-cat"></span>
						</div>
						<h3
							class="text-md sm:text-lg even:text-left col-span-4 sm:col-span-5"
						>
							I Think <span class="font-semibold">Cat</span> is The
							Cutest Animal
						</h3>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section
		id="know-more"
		class="px-4 min-[540px]:px-20 sm:px-40 xl:px-20 min-[1720px]:px-40 max-xl:py-40 h-full xl:h-screen w-full text-gray"
	>
		<div class="h-full w-full">
			<h2
				class="uppercase text-6xl text-center font-semibold pb-10 pt-40"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				What I Do?
			</h2>
			<div
				class="h-full w-full xl:grid xl:grid-cols-3 max-xl:flex max-xl:flex-col gap-12 xl:gap-6"
			>
				<div
					data-aos="fade-up"
					data-aos-duration="2000"
					class="relative group w-full h-96 xl:w-96 mx-auto overflow-hidden shadow-2xl shadow-gray"
				>
					<div
						class="group-hover:-translate-y-full duration-300 ease-in-out w-full h-full bg-lightgray text-white text-center text-8xl flex items-center"
					>
						<span
							class="fa-regular fa-square-terminal w-full scale-150"
						></span>
					</div>
					<a
						href="./portfolio#"
						class="bg-yellow p-4 w-full h-full flex justify-center items-center group-hover:-translate-y-full duration-300 ease-in-out"
					>
						<h2 class="text-5xl text-gray text-center">Coding</h2>
					</a>
				</div>
				<div
					data-aos="fade-up"
					data-aos-duration="2000"
					class="relative group w-full h-96 xl:w-96 mx-auto overflow-hidden shadow-2xl shadow-gray"
				>
					<div
						class="group-hover:-translate-y-full duration-300 ease-in-out w-full h-full bg-lightgray text-white text-center text-8xl flex items-center"
					>
						<span class="fa-regular fa-microphone w-full scale-150"
						></span>
					</div>
					<a
						href="#"
						class="bg-yellow p-4 w-full h-full flex justify-center items-center group-hover:-translate-y-full duration-300 ease-in-out"
					>
						<h2 class="text-5xl text-gray text-center">
							Public Speaking
						</h2>
					</a>
				</div>
				<div
					data-aos="fade-up"
					data-aos-duration="2000"
					class="relative group w-full h-96 xl:w-96 mx-auto overflow-hidden shadow-2xl shadow-gray"
				>
					<div
						class="group-hover:-translate-y-full duration-300 ease-in-out w-full h-full bg-lightgray flex items-center justify-center"
					>
						<img src={cubeSVG} class="w-48 h-48" alt="cube" />
					</div>
					<a
						href="https://www.worldcubeassociation.org/persons/2018DERI01"
						target="_blank"
						class="bg-yellow p-4 w-full h-full flex justify-center items-center group-hover:-translate-y-full duration-300 ease-in-out"
					>
						<h2 class="text-5xl text-gray text-center">
							Speedcubing
						</h2>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
