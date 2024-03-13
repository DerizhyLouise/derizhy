let isOpen = false;

function openModal (id) {
    var modal = document.getElementById("projectModal");

    if (isOpen == true) {
        return;
    }

    fetch('./json/projects.json').then(response => response.json()).then(data => {
        const project = data.find(item => item.id === parseInt(id));
        const content = document.querySelector(".project-modal-info");

        if (project) {
            const h1 = document.createElement('h1');
            h1.className = "underline decoration-[#E91E63] text-4xl max-md:text-3xl";

            const h4 = document.createElement('h4');
            h4.className = "mt-0 mb-4 font-semibold text-2xl max-md:text-xl max-md:font-medium";

            const p = document.createElement('p');
            p.className = "text-base mb-5 max-md:text-sm";

            const div = document.createElement('div');

            const h1a = document.createElement('h1');
            h1a.className = "underline decoration-[#E91E63] text-4xl max-md:text-3xl";

            h1.innerHTML = `
                <span class="gradient-text">${project.title}</span>
            `;
            h4.textContent = project.time;
            p.innerHTML = project.description.join('');
            h1a.innerHTML = `
                <span class="gradient-text">Project's Media</span>
            `;

            if (project.media.length === 0) {
                const empty = document.createElement('p');
                empty.innerHTML = "No media available in this project.<br/>I will upload the media soon after the project has done.";
                div.append(empty);
            }

            project.media.forEach(media => {
                const list = document.createElement('div');
                list.className = "flex max-w-full my-5 mr-5 w-[600px] h-44";
                list.innerHTML = `
                    <div class="bg-[#0D192B] p-8 w-64 max-[480px]:py-8 max-[480px]:px-2.5 rounded-l-lg">
                        <h6 class="text-xs text-white opacity-60 m-0 uppercase tracking-wider bg-[#0D192B] max-[480px]:text-xs">MEDIA TYPE :</h6>
                        <h2 class="text-2xl text-white tracking-wider my-2.5 bg-[#0D192B] max-[480px]:text-base">${media.type}</h2>
                        <a href="#"></a>
                    </div>
                    <div class="bg-[#7175DA] p-8 relative w-full max-xl:px-8 max-[480px]:py-8 max-[480px]:px-2.5 rounded-r-lg">
                        <h6 class="text-xs opacity-60 m-0 uppercase tracking-wider bg-[#7175DA] text-[#0D192B] max-[480px]:text-xs">TITLE</h6>
                        <h2 class="text-2xl tracking-wider my-2.5 bg-[#7175DA] text-[#0D192B] max-[480px]:text-base">${media.title}</h2>
                        <button class="bg-[#2A265F] rounded-lg shadow-md text-white text-base px-4 py-2 absolute bottom-3.5 right-7 max-sm:right-3.5 max-sm:text-xs tracking-wide transition-transform transition-colors duration-200 ease-in-out hover:scale-110 hover:bg-[#334579]" onClick="directToMedia('${media.url}')">View</button>
                    </div>
                `;

                div.append(list);
            })

            content.append(h1, h4, p, h1a, div);

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
    var modal = document.getElementById("projectModal");
    modal.style.display = "none";
    modal.innerHTML = `
            <div class="p-12 w-full">
            <button class="bg-[#E91E63] rounded-full text-white w-14 h-14 max-md:w-8 max-md:h-8 absolute right-5 top-5 hover:bg-[#E91EA5] hover:ease-in-out hover:scale-105 hover:rotate-[360deg] hover:duration-300 transition-transform transform origin-center" title="Close" onClick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
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