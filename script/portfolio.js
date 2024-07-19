fetch('../json/skills.json').then(response => response.json()).then(data => {
    const skillsContainer = document.getElementById("skills-container");

    data.forEach(skill => {
        const item = document.createElement('a');
        item.className = "w-40 h-40 p-4 bg-[#F76C6C] flex flex-col justify-center items-center gap-2 shadow-lg shadow-[#24305E] hover:scale-125 hover:duration-300 transition";
        item.setAttribute("href", skill.link);
        item.setAttribute("target", "_blank");

        const iconElement = document.createElement('div');
        iconElement.className = "text-5xl text-center";
        if (skill.icon.startsWith('fa-')) {
            iconElement.innerHTML = `<span class="${skill.icon}"></span>`;
        } else {
            const img = document.createElement('img');
            img.src = skill.icon;
            img.alt = skill.skill;
            img.className = "w-12 h-12 mx-auto"
            iconElement.appendChild(img);
        }

        item.innerHTML = `
            ${iconElement.outerHTML}
            <h4 class="font-semibold text-center">
                ${skill.skill}
            </h4>
        `;

        skillsContainer.appendChild(item);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

fetch('../json/experiences.json').then(response => response.json()).then(data => {
    const experienceContainer = document.querySelector('.resume-listing-content ol');
    experienceContainer.style.setProperty('--length', data.length);

    data.forEach((experience, index) => {
        const listItem = document.createElement('li');
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', experience.theme);
        listItem.setAttribute('data-aos', 'fade-up');
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${experience.logo}" alt="${experience.company}'s Logo" class="bg-center bg-white rounded-full w-16 h-16 border border-[#24305E]">
                <h3>${experience.position} - ${experience.company} (${experience.time})</h3>
            </div>
            <p>${experience.description.replace(/\n/g, '<br/>')}</p>
        `;

        experienceContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});