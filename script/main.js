$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {    
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
        return false;
    } else if (event.metaKey && event.shiftKey && event.keyCode == 67) {
        return false;
    }
});

function downloadCv (type) {
    var link = document.createElement('a');
    var pdfPath = "";
    var downloadLink = "";
    
    if (type == "ats") {
        pdfPath = './assets/pdf/atsCV.pdf';
        downloadLink = "atsCV.pdf";
    } else {
        pdfPath = './assets/pdf/creCV.pdf';
        downloadLink = "creCV.pdf";
    }
    link.href = pdfPath;
    link.download = downloadLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Fetch Soft Skills
fetch('./json/softSkills.json').then(response => response.json()).then(data => {
    const softSkillsContainer = document.querySelector('.soft ul');

    data.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.style.setProperty('--accent-color', skill.theme);
        listItem.innerHTML = `
            <div class="icon text-5xl h-12 w-12 mx-auto my-2">
                <i class="${skill.icon}"></i>
            </div>
            <div class="text-md font-semibold">
                ${skill.skill}
            </div>
        `;

        softSkillsContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Technical Skills
fetch('./json/techSkills.json').then(response => response.json()).then(data => {
    const technicalSkillsContainer = document.querySelector('.tech ul');

    data.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.style.setProperty('--accent-color', skill.theme);

        const iconElement = document.createElement('i');
        if (skill.icon.startsWith('fa-')) {
            iconElement.className = skill.icon;
        } else {
            const img = document.createElement('img');
            img.src = skill.icon;
            img.alt = skill.skill;
            img.className = "w-12 h-12 mx-auto"
            iconElement.appendChild(img);
        }

        listItem.innerHTML = `
            <div class="icon text-5xl h-12 w-12 mx-auto my-2">
                ${iconElement.outerHTML}
            </div>
            <div class="text-md font-semibold">
                ${skill.skill}
            </div>
        `;

        technicalSkillsContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Experiences
fetch('./json/experiences.json').then(response => response.json()).then(data => {
    const experienceContainer = document.querySelector('.resume-listing-content ol');
    experienceContainer.style.setProperty('--length', data.length);

    data.forEach((experience, index) => {
        const listItem = document.createElement('li');
        const aosEffect = index % 2 === 0 ? 'fade-up-right' : 'fade-up-left';
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', experience.theme);
        listItem.setAttribute('data-aos', aosEffect);
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${experience.logo}">
                <h3>${experience.position} - ${experience.company} (${experience.time})</h3>
            </div>
            <p>${experience.description.replace(/\n/g, '<br/>')}</p>
        `;

        experienceContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Educations
fetch('./json/educations.json').then(response => response.json()).then(data => {
    const educationContainer = document.querySelector('.resume-education .resume-listing-content ol');
    educationContainer.style.setProperty('--length', data.length);

    data.forEach((education, index) => {
        const listItem = document.createElement('li');
        const aosEffect = index % 2 === 0 ? 'fade-up-left' : 'fade-up-right';
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', education.theme);
        listItem.setAttribute('data-aos', aosEffect);
        listItem.setAttribute('data-aos-duration', '1500');

        listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${education.logo}">
                <h3>${education.institute} - ${education.major} (${education.time})</h3>
            </div>
            <p>${education.description.replace(/\n/g, '<br/>')}</p>
        `;

        educationContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Organizations
fetch('./json/organizations.json').then(response => response.json()).then(data => {
    const organizationContainer = document.querySelector('.resume-organization .resume-listing-content ol');
    organizationContainer.style.setProperty('--length', data.length);

    data.forEach((organization, index) => {
        const listItem = document.createElement('li');
        const aosEffect = index % 2 === 0 ? 'fade-up-right' : 'fade-up-left';
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', organization.theme);
        listItem.setAttribute('data-aos', aosEffect);
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${organization.logo}">
                <h3>${organization.organization}</h3>
            </div>
            <p>${organization.detail}</p>
        `;

        organizationContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Projects
fetch('./json/projects.json').then(response => response.json()).then(data => {
    const projectsContainer = document.querySelector('.project-container');

    data.forEach((project) => {
        const articleWrapper = document.createElement('article');
        articleWrapper.className = "w-64 rounded-lg p-1 border-4 border-solid border-transparent bg-[#1F375C] my-5 mx-2.5 flex justify-between flex-col max-[480px]:w-56";
        articleWrapper.setAttribute('data-aos', 'flip-left');
        articleWrapper.setAttribute('data-aos-duration', '2000');

        articleWrapper.innerHTML = `
            <div class="rounded-lg w-full h-44">
                <img src="${project.img}" class="w-full h-44 rounded-lg object-cover">
            </div>
            <div class="max-[480px]:text-sm pt-1.5">
                <h3 class="gradient-text text-center text-2xl font-semibold">${project.title}</h3>
            </div>
            <div class="p-2.5 pt-5 flex flex-col justify-between">
                <button class="project-button" onClick="openModal(${project.id})">
                    <div class="project-button-left"></div>
                    More
                    <div class="project-button-right"></div>
                </button>
            </div>
        `;

        projectsContainer.appendChild(articleWrapper);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Certifications
fetch('./json/certifications.json').then(response => response.json()).then(data => {
    const certiContainer = document.querySelector('.certification-container');
    
    data.reverse();
    data.forEach((certi, index) => {
        const certiList = document.createElement('div');
        const isLastData = index === data.length - 1;
        const borderClasses = isLastData ? "" : "border-b-2 border-[#E91E63]";
        certiList.className = `flex bg-[#1F375C] hover:bg-[#172945] mx-2 ${borderClasses}`;

        if (certi.credentialId) {
            certiList.innerHTML = `
                <div class="flex-none w-20 ml-4 my-4">
                    <img src="${certi.logo}" class="w-14 h-14">
                </div>
                <div class="flex-initial w-full mr-4 my-4">
                    <h3 class="gradient-text text-2xl font-bold m-0">${certi.certificateName}</h3>
                    <p class="text-[#FFF9D2]">${certi.issuer}</p>
                    <p>Issued ${certi.issueDate}</p>
                    <p>Credential ID ${certi.credentialId}</p>
                    <a class="rounded my-4 h-8 px-4 bg-[#E91E63] hover:bg-[#BA124A]" target='_blank' href="${certi.url}">Show Credential</a>
                </div>
            `;
        } else {
            certiList.innerHTML = `
                <div class="flex-none w-20 ml-4 my-4">
                    <img src="${certi.logo}" class="w-14 h-14">
                </div>
                <div class="flex-initial w-full mr-4 my-4 m-0">
                    <h3 class="gradient-text text-2xl font-bold">${certi.certificateName}</h3>
                    <p class="text-[#FFF9D2]">${certi.issuer}</p>
                    <p>Issued ${certi.issueDate}</p>
                    <a class="rounded my-4 h-8 px-4 bg-[#E91E63] hover:bg-[#BA124A]" target='_blank' href="${certi.url}">Show Credential</a>
                </div>
            `;
        }

        certiContainer.appendChild(certiList);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Reviews
fetch('./json/reviews.json').then(response => response.json()).then(data => {
    const reviewContainer = document.querySelector('.review-content');

    data.forEach((review, index) => {
        const listItem = document.createElement('a');
        listItem.className = "h-full bg-[#1F375C] hover:bg-[#172945] no-underline rounded-lg flex flex-col p-4 mb-4";
        listItem.setAttribute('data-aos', 'fade-up');
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.href = review.url;
        listItem.target = "_blank";

        listItem.innerHTML = `
            <div class="flex justify-start items-center pb-2">
                <img class="rounded-full h-20 w-20" src="${review.img}">
                <div class="pl-2">
                    <h3 class="gradient-text text-2xl">${review.name}</h3>
                    <p class="text-sm">${review.role}</p>
                </div>
            </div>
            <q>${review.desc}</q>
        `;

        reviewContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

function directToMedia (url) {
    var link = document.createElement('a');
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

AOS.init();