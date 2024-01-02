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
        pdfPath = '../assets/pdf/atsCV.pdf';
        downloadLink = "atsCV.pdf";
    } else {
        pdfPath = '../assets/pdf/creCV.pdf';
        downloadLink = "creCV.pdf";
    }
    link.href = pdfPath;
    link.download = downloadLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Fetch Soft Skills
fetch('../json/softSkills.json').then(response => response.json()).then(data => {
    const softSkillsContainer = document.querySelector('.soft ul');

    data.forEach(skill => {
      const listItem = document.createElement('li');
      listItem.style.setProperty('--accent-color', skill.theme);

      const skillIcon = document.createElement('div');
      skillIcon.classList.add('icon');
      skillIcon.innerHTML = `<i class="${skill.icon}"></i>`;

      const skillTitle = document.createElement('div');
      skillTitle.classList.add('skill-list-title');
      skillTitle.textContent = skill.skill;

      listItem.appendChild(skillIcon);
      listItem.appendChild(skillTitle);

      softSkillsContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Technical Skills
fetch('../json/techSkills.json').then(response => response.json()).then(data => {
    const technicalSkillsContainer = document.querySelector('.tech ul');

    data.forEach(skill => {
      const listItem = document.createElement('li');
      listItem.style.setProperty('--accent-color', skill.theme);

      const skillIcon = document.createElement('div');
      skillIcon.classList.add('icon');
      skillIcon.innerHTML = `<i class="${skill.icon}"></i>`;

      const skillTitle = document.createElement('div');
      skillTitle.classList.add('skill-list-title');
      skillTitle.textContent = skill.skill;

      listItem.appendChild(skillIcon);
      listItem.appendChild(skillTitle);

      technicalSkillsContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Experiences
fetch('../json/experiences.json').then(response => response.json()).then(data => {
    const experienceContainer = document.querySelector('.resume-listing-content ol');
    experienceContainer.style.setProperty('--length', data.length);

    data.forEach((experience, index) => {
        const listItem = document.createElement('li');
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', experience.theme);

        const aosEffect = index % 2 === 0 ? 'fade-up-right' : 'fade-up-left';
        listItem.setAttribute('data-aos', aosEffect);
        listItem.setAttribute('data-aos-duration', '1500');

        const experienceTitle = document.createElement('div');
        experienceTitle.classList.add('resume-list-title');

        const logoImage = document.createElement('img');
        logoImage.src = experience.logo;

        const experienceHeader = document.createElement('h3');
        experienceHeader.textContent = `${experience.position} - ${experience.company} (${experience.time})`;

        experienceTitle.appendChild(logoImage);
        experienceTitle.appendChild(experienceHeader);

        const experienceDetails = document.createElement('p');
        if (experience.description) {
            experienceDetails.innerHTML = experience.description.replace(/\n/g, '<br/>');
        }

        listItem.appendChild(experienceTitle);
        listItem.appendChild(experienceDetails);

        experienceContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Educations
fetch('../json/educations.json').then(response => response.json()).then(data => {
    const educationContainer = document.querySelector('.resume-education .resume-listing-content ol');
    educationContainer.style.setProperty('--length', data.length);

    data.forEach((education, index) => {
        const listItem = document.createElement('li');
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', education.theme);

        const aosEffect = index % 2 === 0 ? 'fade-up-left' : 'fade-up-right';
        listItem.setAttribute('data-aos', aosEffect);
        listItem.setAttribute('data-aos-duration', '1500');

        const educationTitle = document.createElement('div');
        educationTitle.classList.add('resume-list-title');

        const logoImage = document.createElement('img');
        logoImage.src = education.logo;

        const educationHeader = document.createElement('h3');
        educationHeader.textContent = `${education.institute} - ${education.major} (${education.time})`;

        educationTitle.appendChild(logoImage);
        educationTitle.appendChild(educationHeader);

        const educationDetails = document.createElement('p');
        if (education.description) {
            educationDetails.innerHTML = education.description;
        }

        listItem.appendChild(educationTitle);
        listItem.appendChild(educationDetails);

        educationContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Organizations
fetch('../json/organizations.json').then(response => response.json()).then(data => {
    const organizationContainer = document.querySelector('.resume-organization .resume-listing-content ol');
    organizationContainer.style.setProperty('--length', data.length);

    data.forEach((organization, index) => {
        const listItem = document.createElement('li');
        listItem.style.setProperty('--i', index + 1);
        listItem.style.setProperty('--col', organization.theme);

        const aosEffect = index % 2 === 0 ? 'fade-up-right' : 'fade-up-left';
        listItem.setAttribute('data-aos', aosEffect);
        listItem.setAttribute('data-aos-duration', '1500');

        const organizationTitle = document.createElement('div');
        organizationTitle.classList.add('resume-list-title');

        const logoImage = document.createElement('img');
        logoImage.src = organization.logo;

        const organizationHeader = document.createElement('h3');
        organizationHeader.textContent = organization.organization;

        organizationTitle.appendChild(logoImage);
        organizationTitle.appendChild(organizationHeader);

        const organizationDetails = document.createElement('p');
        if (organization.detail) {
            organizationDetails.innerHTML = organization.detail;
        }

        listItem.appendChild(organizationTitle);
        listItem.appendChild(organizationDetails);

        organizationContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

AOS.init();