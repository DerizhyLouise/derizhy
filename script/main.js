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
    
    if (type == "ats") {
        pdfPath = './assets/pdf/atsCV.pdf';
    } else {
        pdfPath = './assets/pdf/creCV.pdf';
    }
    link.href = pdfPath;
    link.target = "_blank";
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
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', experience.theme);
        listItem.setAttribute('data-aos', 'fade-up');
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${experience.logo}">
                <h3 class="">${experience.position} - ${experience.company} (${experience.time})</h3>
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
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', education.theme);
        listItem.setAttribute('data-aos', 'fade-up');
        listItem.setAttribute('data-aos-duration', '1500');

        listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${education.logo}">
                <h3 class="">${education.institute} - ${education.major} (${education.time})</h3>
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
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', organization.theme);
        listItem.setAttribute('data-aos', 'fade-up');
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.innerHTML = `
            <div class="resume-list-title">
                <img src="${organization.logo}">
                <h3 class="">${organization.organization}</h3>
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
        const projectItem = document.createElement('button');
        projectItem.className = "h-96 w-96 max-sm:w-80 max-sm:h-80 bg-[#142D55] my-5 mx-5 hover:bg-[#1F375C] rounded";
        projectItem.setAttribute('data-aos', 'flip-left');
        projectItem.setAttribute('data-aos-duration', '2000');
        projectItem.onclick = function() {
            openModal(project.id);
        };

        projectItem.innerHTML = `
            <div class="w-full h-64 max-sm:h-56">
                <img src="${project.img}" class="w-full h-64 max-sm:h-56 object-cover rounded-t">
            </div>
            <div class="max-[480px]:text-sm h-32 max-sm:h-24 flex items-center justify-center px-4">
                <h3 class="gradient-text text-center text-3xl font-semibold">${project.title}</h3>
            </div>
        `;

        projectsContainer.appendChild(projectItem);
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
        certiList.className = `flex bg-[#142D55] hover:bg-[#1F375C] mx-2 ${borderClasses}`;

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

    data.forEach((review) => {
        const listItem = document.createElement('a');
        listItem.className = "h-[416px] w-[416px] max-sm:h-full bg-[#142D55] hover:bg-[#1F375C] no-underline flex flex-col p-4 mb-4 rounded";
        listItem.setAttribute('data-aos', 'fade-up');
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.href = review.url;
        listItem.target = "_blank";

        listItem.innerHTML = `
            <div class="flex justify-start items-center pb-2 border-b-2 border-[#E91E63]">
                <img class="rounded-full h-20 w-20" src="${review.img}">
                <div class="pl-2">
                    <h3 class="gradient-text text-2xl">${review.name}</h3>
                    <p class="text-sm">${review.role}</p>
                </div>
            </div>
            <q class="mt-2 text-center flex justify-center">${review.desc}</q>
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