let isOpen = false;

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
                <h1 class="text-4xl max-md:text-3xl"><span class="gradient-text">${project.title}</span></h1>
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