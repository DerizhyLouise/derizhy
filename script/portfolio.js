fetch("../assets/json/skills.json")
	.then((response) => response.json())
	.then((data) => {
		const skillsContainer = document.getElementById("skills-container");

		data.forEach((skill) => {
			const item = document.createElement("div");
			item.setAttribute("data-aos", "fade-up");
			item.setAttribute("data-aos-duration", "2000");

			const iconElement = document.createElement("div");
			iconElement.className = "text-5xl text-center";
			if (skill.icon.startsWith("fa-")) {
				iconElement.innerHTML = `<span class="${skill.icon}"></span>`;
			} else {
				const img = document.createElement("img");
				img.src = skill.icon;
				img.alt = skill.skill;
				img.className = "w-12 h-12 mx-auto";
				iconElement.appendChild(img);
			}

			item.innerHTML = `
				<a href="${skill.link}" target="_blank" class="w-40 h-40 p-4 bg-yellow flex flex-col justify-center items-center gap-2 shadow-lg shadow-gray hover:scale-110 sm:hover:scale-125 hover:duration-300 transition">
					${iconElement.outerHTML}
					<h4 class="font-semibold text-center">
						${skill.skill}
					</h4>
				</a>
			`;

			skillsContainer.appendChild(item);
		});
	})
	.catch((error) => {
		console.error("Error fetching or processing JSON data:", error);
	});

fetch("../assets/json/experiences.json")
	.then((response) => response.json())
	.then((data) => {
		const experienceContainer =
			document.getElementById("resume-experience");
		experienceContainer.style.setProperty("--length", data.length);

		data.forEach((experience, index) => {
			const listItem = document.createElement("li");
			listItem.style.setProperty("--i", index + 1);
			listItem.style.setProperty("--col", experience.theme);
			listItem.setAttribute("data-aos", "fade-up");
			listItem.setAttribute("data-aos-duration", "1500");
			listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${experience.logo}" alt="${
				experience.company
			}"s Logo" class="rounded-full w-16 h-16">
                <h3>${experience.position} - ${experience.company} (${
				experience.time
			})</h3>
            </div>
            <p>${experience.description.replace(/\n/g, "<br/>")}</p>
        `;

			experienceContainer.appendChild(listItem);
		});
	})
	.catch((error) => {
		console.error("Error fetching or processing JSON data:", error);
	});

fetch("../assets/json/educations.json")
	.then((response) => response.json())
	.then((data) => {
		const educationContainer = document.getElementById("resume-education");
		educationContainer.style.setProperty("--length", data.length);

		data.forEach((education, index) => {
			const listItem = document.createElement("li");
			listItem.style.setProperty("--i", index + 1);
			listItem.style.setProperty("--col", education.theme);
			listItem.setAttribute("data-aos", "fade-up");
			listItem.setAttribute("data-aos-duration", "1500");

			listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${education.logo}" alt="${
				education.institute
			}"s Logo" class="rounded-full w-16 h-16">
                <h3>${education.institute} - ${education.major} (${
				education.time
			})</h3>
            </div>
            <p>${education.description.replace(/\n/g, "<br/>")}</p>
        `;

			educationContainer.appendChild(listItem);
		});
	})
	.catch((error) => {
		console.error("Error fetching or processing JSON data:", error);
	});

fetch("../assets/json/organizations.json")
	.then((response) => response.json())
	.then((data) => {
		const organizationContainer = document.getElementById(
			"resume-organization"
		);
		organizationContainer.style.setProperty("--length", data.length);

		data.forEach((organization, index) => {
			const listItem = document.createElement("li");
			listItem.style.setProperty("--i", index + 1);
			listItem.style.setProperty("--col", organization.theme);
			listItem.setAttribute("data-aos", "fade-up");
			listItem.setAttribute("data-aos-duration", "1500");
			listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${organization.logo}" alt="${organization.organization}"s Logo" class="rounded-full w-16 h-16">
                <h3>${organization.organization}</h3>
            </div>
            <p>${organization.detail}</p>
        `;

			organizationContainer.appendChild(listItem);
		});
	})
	.catch((error) => {
		console.error("Error fetching or processing JSON data:", error);
	});

fetch("../assets/json/certifications.json")
	.then((response) => response.json())
	.then((data) => {
		const certiContainer = document.getElementById(
			"certification-container"
		);

		data.reverse();
		data.forEach((certi) => {
			const certiList = document.createElement("div");
			certiList.className = `flex group mx-2 border-b-2 border-gray last:border-0`;

			if (certi.credentialId) {
				certiList.innerHTML = `
                    <div class="flex items-center w-20 mr-4 sm:mr-2 ml-4">
                        <img src="${certi.logo}" class="w-14 h-14" alt="${certi.issuer}'s Logo">
                    </div>
                    <div class="flex-initial w-full mr-4 my-4">
                        <h3 class="text-lg sm:text-2xl font-bold m-0">${certi.certificateName}</h3>
                        <p class="text-sm sm:text-lg">${certi.issuer}</p>
                        <p class="text-sm sm:text-lg">Issued ${certi.issueDate}</p>
                        <p class="mb-2 text-sm sm:text-lg">Credential ID ${certi.credentialId}</p>
                        <a class="my-4 h-8 px-4 text-sm sm:text-lg hover:bg-maroon duration-300 border-2 border-maroon" target='_blank' href="${certi.url}">Show Credential</a>
                    </div>
                `;
			} else {
				certiList.innerHTML = `
                    <div class="flex items-center w-20 mr-4 sm:mr-2 ml-4">
                        <img src="${certi.logo}" class="w-14 h-14" alt="${certi.issuer}'s Logo">
                    </div>
                    <div class="flex-initial w-full mr-4 my-4 m-0">
                        <h3 class="text-lg sm:text-2xl font-bold">${certi.certificateName}</h3>
                        <p class="text-sm sm:text-lg">${certi.issuer}</p>
                        <p class="mb-2 text-sm sm:text-lg">Issued ${certi.issueDate}</p>
                        <a class="my-4 h-8 px-4 text-sm sm:text-lg hover:bg-maroon duration-300 border-2 border-maroon" target='_blank' href="${certi.url}">Show Credential</a>
                    </div>
                `;
			}

			certiContainer.appendChild(certiList);
		});
	})
	.catch((error) => {
		console.error("Error fetching or processing JSON data:", error);
	});

fetch("../assets/json/reviews.json")
	.then((response) => response.json())
	.then((data) => {
		const reviewContainer = document.getElementById("review-container");

		data.forEach((review) => {
			const listItem = document.createElement("a");
			listItem.className =
				"h-[416px] w-[416px] max-sm:h-full bg-yellow no-underline flex flex-col p-4 rounded shadow-2xl";
			listItem.setAttribute("data-aos", "fade-up");
			listItem.setAttribute("data-aos-duration", "2000");
			listItem.href = review.url;
			listItem.target = "_blank";

			listItem.innerHTML = `
                <div class="flex justify-start items-center pb-2 border-b-2 border-maroon">
                    <img class="rounded-full h-20 w-20" src="${review.img}" alt="${review.name}'s Pic">
                    <div class="pl-2">
                        <h3 class="text-2xl font-semibold">${review.name}</h3>
                        <p class="text-sm">${review.role}</p>
                    </div>
                </div>
                <q class="mt-2 text-center flex justify-center italic">${review.desc}</q>
            `;

			reviewContainer.appendChild(listItem);
		});
	})
	.catch((error) => {
		console.error("Error fetching or processing JSON data:", error);
	});

fetch("../assets/json/projects.json")
	.then((response) => response.json())
	.then((data) => {
		const projectsContainer = document.getElementById("project-container");

		data.forEach((project) => {
			const item = document.createElement("button");
			item.className =
				"relative group shadow-2xl h-96 w-96 overflow-hidden border-2 border-gray bg-yellow";
			item.onclick = function () {
				openModal(project.id);
			};
			item.setAttribute("data-aos", "fade-up");
			item.setAttribute("data-aos-duration", "2000");

			item.innerHTML = `
                <div
                    class="group-hover:-translate-y-full flex justify-center items-center duration-300 ease-in-out w-full h-full bg-yellow">
                    <img src="${project.img}" class="h-full w-full object-cover" alt="${project.title} Image">
                </div>
                <div class="bg-gray p-4 w-full h-full flex justify-center items-center group-hover:-translate-y-full duration-300 ease-in-out">
                    <h2 class="text-4xl font-semibold text-center">${project.title}</h2>
                </div>
            `;

			projectsContainer.appendChild(item);
		});
	})
	.catch((error) => {
		console.error("Error fetching or processing JSON data:", error);
	});

function openModal(id) {
	const modal = document.getElementById("project-modal");

	if (isOpen) {
		return;
	}

	fetch("../assets/json/projects.json")
		.then((response) => response.json())
		.then((data) => {
			const project = data.find((item) => item.id === parseInt(id));
			const content = document.querySelector(".project-modal-info");

			if (project) {
				content.innerHTML += `
                    <h3 class="text-4xl max-md:text-3xl text-white font-bold">${
						project.title
					}</h3>
                    <h3 class="mt-4 mb-4 pt-4 font-semibold text-2xl max-md:text-xl border-t-2 border-maroon">Description</h3>
                    <p class="text-base mb-5 max-md:text-sm">${project.time}</p>
                    <p class="text-base mb-5 max-md:text-sm">${project.description.join(
						""
					)}</p>
                    <h3 class="mt-4 mb-4 pt-4 font-semibold text-2xl max-md:text-xl border-t-2 border-maroon">Project's Media</h3>
                `;

				const projectMedia = document.createElement("div");

				if (project.media.length === 0) {
					const empty = document.createElement("p");
					empty.innerHTML =
						"No media available in this project.<br/>I will upload the media soon after the project has done.";
					empty.className = "mt-2";
					projectMedia.append(empty);
				}

				project.media.forEach((media) => {
					projectMedia.className =
						"flex flex-wrap items-center gap-4 sm:gap-12";

					const list = document.createElement("a");
					list.className =
						"relative group shadow-2xl h-60 w-60 overflow-hidden border-2 border-gray bg-yellow";
					list.setAttribute("href", media.url);
					list.setAttribute("target", "_blank");

					list.innerHTML = `
                        <div
                            class="group-hover:-translate-y-full text-gray flex justify-center items-center duration-300 ease-in-out w-full h-full bg-yellow">
                            <div class="flex flex-col items-center justify-center">
                                <span class="${media.typeSymbol} text-6xl"></span>
                                <h2 class="text-2xl font-semibold text-center">${media.type}</h2>
                            </div>
                        </div>
                        <div class="bg-maroon text-gray p-4 w-full h-full flex justify-center items-center group-hover:-translate-y-full duration-300 ease-in-out">
                            <h2 class="text-2xl font-semibold text-center">${media.title}</h2>
                        </div>
                    `;

					projectMedia.append(list);
				});

				content.append(projectMedia);

				modal.onclick = function (event) {
					event.stopPropagation();
				};
			}

			const header = document.getElementsByTagName("header")[0];
			const main = document.getElementById("container");
			const sideBar = document.getElementsByTagName("aside")[0];
			const footer = document.getElementsByTagName("footer")[0];

			header.style.filter = "blur(20px)";
			main.style.filter = "blur(20px)";
			sideBar.style.filter = "blur(20px)";
			footer.style.filter = "blur(20px)";

			isOpen = true;
			modal.style.display = "block";

			window.onclick = function () {
				closeModal();
			};
		})
		.catch((error) => {
			console.error("Error fetching or processing JSON data:", error);
		});
}

function closeModal() {
	const modal = document.getElementById("project-modal");
	modal.style.display = "none";
	modal.innerHTML = `
		<div class="p-12 w-full">
			<div class="absolute right-20 top-5 z-50">
				<button
					class="text-white w-14 h-14 max-md:w-12 max-md:h-12 fixed group hover:bg-maroon rounded-lg"
					title="Close" onClick="closeModal()">
					<i class="fa-solid fa-xmark text-2xl group-hover:rotate-180 group-hover:duration-500 transition"></i>
				</button>
			</div>
			<div class="project-modal-info"></div>
		</div>
	`;

	const header = document.getElementsByTagName("header")[0];
	const main = document.getElementById("container");
	const sideBar = document.getElementsByTagName("aside")[0];
	const footer = document.getElementsByTagName("footer")[0];

	header.style.filter = "none";
	main.style.filter = "none";
	sideBar.style.filter = "none";
	footer.style.filter = "none";

	isOpen = false;
	modal.onclick = null;
}

let isOpen = false;