function showNavbar() {
    const body = document.getElementsByTagName('body')[0];
    const navbar = document.createElement('header');
    navbar.className = "fixed top-0 left-0 w-screen h-28 py-5 flex justify-between items-center z-50 bg-[#0D192B] px-60 max-2xl:px-48 max-xl:px-40 max-lg:px-32 max-md:px-24 max-sm:px-20 max-[480px]:px-14 max-[380px]:px-4"
    
    navbar.innerHTML = `
        <div class="flex mr-4">
            <a href="#home"><img class="w-24 h-24 mr-4" src="./assets/svg/logo.svg" alt="Logo"></a>
            <h2 class="text-4xl flex max-md:hidden items-center select-none gradient-text"><a href="#home">Louise Derizhy</a></h2>
        </div>
        <div class="w-40 inline-flex items-center">
            <button id="dropdownDefaultButton" onclick="navbarClick()" data-dropdown-toggle="dropdown" data-dropdown-offset-distance="0" class="group text-white bg-[#E91E63] hover:bg-[#BA124A] font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                Navigation
                <i id="dropdownIcon" class="fa-solid fa-chevron-down ml-2 bg-[#E91E63] group-hover:bg-[#BA124A]"></i>
            </button>
            <div id="dropdown" class="z-10 hidden w-[124px] rounded-b-lg border-b-2 border-x-2 border-[#E91E63]">
                <ul class="text-sm rounded-b-lg" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#home" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Home</a>
                    </li>
                    <li>
                        <a href="#profile" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Profile</a>
                    </li>
                    <li>
                        <a href="#skill" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Skills</a>
                    </li>
                    <li>
                        <a href="#experience" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Experiences</a>
                    </li>
                    <li>
                        <a href="#education" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Educations</a>
                    </li>
                    <li>
                        <a href="#organization" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Organizations</a>
                    </li>
                    <li>
                        <a href="#project" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Project</a>
                    </li>
                    <li>
                        <a href="#certification" class="bg-[#1B3358] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Certification</a>
                    </li>
                    <li>
                        <a href="#review" class="bg-[#1B3358] rounded-b-lg block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Review</a>
                    </li>
                </ul>
            </div>
        </div>
    `

    body.appendChild(navbar);
}

function navbarClick() {
    const icon = document.getElementById("dropdownIcon")
    if (icon) {
        if (icon.classList.contains('fa-chevron-down')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }
}

function handleOutsideClick(event) {
    const dropdownButton = document.getElementById('dropdownDefaultButton');
    const dropdown = document.getElementById('dropdown');
    const icon = document.getElementById('dropdownIcon');

    if (!dropdownButton.contains(event.target) && !dropdown.contains(event.target)) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

fetch('./json/footer.json').then(response => response.json()).then(data => {
    const footer = document.querySelector('footer');
    const footerContainer = document.createElement('div');
    const footerRow = document.createElement('div');
    footerContainer.className = "footer-container";
    footerRow.className = "footer-row";
    
    data.forEach(category  => {
        const element = document.createElement('div');
        element.className = "footer-col";
        
        element.innerHTML = `
            <h4><span class="gradient-text">${category.name}</span></h4>
        `

        if (category.type === 'social') {
            const div = document.createElement('div');
            div.className = "social-links";
            category.item.forEach(item => {
                div.innerHTML += `
                    <a href="${item.path}" target="${item.target}"><i class="${item.icon}"></i></a>
                `
                element.appendChild(div);
            });
        } else {
            const ul = document.createElement('ul');
            category.item.forEach(item => {
                ul.innerHTML += `
                    <li><a href="${item.path}" target="${item.target}">${item.name}</a></li>
                `
                element.appendChild(ul);
            });
        }

        footerRow.appendChild(element);
    });
    footerContainer.appendChild(footerRow);
    footer.appendChild(footerContainer);
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

function openModal (id) {
    const modal = document.getElementById("projectModal");

    if (isOpen) {
        return;
    }

    fetch('./json/projects.json').then(response => response.json()).then(data => {
        const project = data.find(item => item.id === parseInt(id));
        const content = document.querySelector(".project-modal-info");

        if (project) {
            content.innerHTML += `
                <h2 class="text-4xl max-md:text-3xl"><span class="gradient-text">${project.title}</span></h2>
                <h2 class="mt-4 mb-4 pt-4 font-semibold text-2xl max-md:text-xl border-t-2 border-[#E91E63]">Description</h2>
                <p class="text-base mb-5 max-md:text-sm">${project.time}</p>
                <p class="text-base mb-5 max-md:text-sm">${project.description.join('')}</p>
                <h2 class="mt-4 mb-4 pt-4 font-semibold text-2xl max-md:text-xl border-t-2 border-[#E91E63]">Project's Media</h2>
            `;
            
            const projectMedia = document.createElement('div');
            
            if (project.media.length === 0) {
                const empty = document.createElement('p');
                empty.innerHTML = "No media available in this project.<br/>I will upload the media soon after the project has done.";
                empty.className = "mt-2"
                projectMedia.append(empty);
            }

            project.media.forEach(media => {
                const list = document.createElement('div');
                list.className = "flex w-full my-5 mr-5 h-44";
                list.innerHTML = `
                    <div class="bg-[#0D192B] p-8 w-64 max-[480px]:py-8 max-[480px]:px-2.5 rounded-l-lg">
                        <h3 class="text-sm font-semibold text-white opacity-80 m-0 uppercase tracking-wider bg-[#0D192B] max-[480px]:text-xs">MEDIA TYPE :</h3>
                        <h2 class="text-2xl text-white tracking-wider my-2.5 bg-[#0D192B] max-[480px]:text-base">${media.type}</h2>
                        <a href="#"></a>
                    </div>
                    <div class="bg-[#7175DA] p-8 relative w-full max-xl:px-8 max-[480px]:py-8 max-[480px]:px-2.5 rounded-r-lg">
                        <h3 class="text-sm font-semibold opacity-80 m-0 uppercase tracking-wider bg-[#7175DA] text-[#0D192B] max-[480px]:text-xs">TITLE :</h3>
                        <h2 class="text-2xl tracking-wider my-2.5 bg-[#7175DA] text-[#0D192B] max-[480px]:text-base">${media.title}</h2>
                        <button class="bg-[#2A265F] rounded-lg shadow-md text-white text-base px-4 py-2 absolute bottom-3.5 right-7 max-sm:right-3.5 max-sm:text-xs tracking-wide transition-transform transition-colors duration-200 ease-in-out hover:scale-110 hover:bg-[#334579]" onClick="directToMedia('${media.url}')">View</button>
                    </div>
                `;

                projectMedia.append(list);
            })

            content.append(projectMedia);

            modal.onclick = function(event) {
                event.stopPropagation();
            }
        }

        const header = document.getElementsByTagName("header")[0];
        const main = document.getElementsByClassName("main")[0];
        const sideBar = document.getElementsByClassName("side-bar")[0];
        const footer = document.getElementsByTagName("footer")[0];

        header.style.filter = 'blur(20px)';
        main.style.filter = 'blur(20px)';
        sideBar.style.filter = 'blur(20px)';
        footer.style.filter = 'blur(20px)';

        isOpen = true;
        modal.style.display = "block";

        window.onclick = function() {
            closeModal();
        }
    }).catch(error => {
        console.error('Error fetching or processing JSON data:', error);
    });
}

function closeModal () {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    modal.innerHTML = `
        <div class="p-12 w-full">
            <div class="absolute right-20 top-5 z-50">
                <button class="bg-[#E91E63] rounded-full text-white w-14 h-14 max-md:w-12 max-md:h-12 fixed hover:bg-[#E91EA5] hover:ease-in-out hover:scale-105 hover:rotate-[360deg] hover:duration-300 transition-transform transform origin-center" title="Close" onClick="closeModal()">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="project-modal-info"></div>
        </div>
    `;

    const header = document.getElementsByTagName("header")[0];
    const main = document.getElementsByClassName("main")[0];
    const sideBar = document.getElementsByClassName("side-bar")[0];
    const footer = document.getElementsByTagName("footer")[0];

    header.style.filter = 'none';
    main.style.filter = 'none';
    sideBar.style.filter = 'none';
    footer.style.filter = 'none';

    isOpen = false; 
    modal.onclick = null;
}

let isOpen = false;
showNavbar();
document.body.addEventListener('click', handleOutsideClick);