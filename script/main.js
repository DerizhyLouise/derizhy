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

// Fetch Projects
fetch('../json/projects.json').then(response => response.json()).then(data => {
    const projectsContainer = document.querySelector('.project-container');

    data.forEach(project => {
        const articleWrapper = document.createElement('article');
        articleWrapper.classList.add('article-wrapper');

        const containerProject = document.createElement('div');
        containerProject.classList.add('rounded-lg', 'container-project');

        const projectImage = document.createElement('img');
        projectImage.src = project.img;

        containerProject.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');

        const titleHeading = document.createElement('h3');
        titleHeading.textContent = project.title;

        projectTitle.appendChild(titleHeading);

        const projectIdInput = document.createElement('input');
        projectIdInput.classList.add('projectId');
        projectIdInput.type = 'hidden';
        projectIdInput.value = project.id;

        const projectButton = document.createElement('a');
        projectButton.classList.add('project-button');
        projectButton.textContent = 'More';

        projectInfo.appendChild(projectTitle);
        projectInfo.appendChild(projectIdInput);
        projectInfo.appendChild(projectButton);

        articleWrapper.appendChild(containerProject);
        articleWrapper.appendChild(projectInfo);

        projectsContainer.appendChild(articleWrapper);
    });

    (function(){
        var $content = $('.project-modal-info').detach();
        
        $('.project-button').on('click', function(e){
            var projectId = $(this).prev('.projectId').val();
            
            fetch('../json/projects.json').then(response => response.json()).then(data => {
                var project = data.find(item => item.id === parseInt(projectId));
                if (project) {
                    const h1 = document.createElement('h1');
                    const p = document.createElement('p');
    
                    h1.textContent = project.title;
                    p.innerHTML = project.description.join('');
    
                    $content.empty();
                    $content.append(h1, p);
                }
    
                modal.open({
                    content: $content,
                    width: '100vh',
                    height: '100vh',
                });
    
                $content.addClass('modal_content');
                $('.modal, .project-modal-overlay').addClass('display');
                $('.project-button').addClass('load');
            }).catch(error => {
                console.error('Error fetching or processing JSON data:', error);
            });
        });
    }());
      
    var modal = (function(){
        var $close = $('<button role="button" class="project-modal-close" title="Close"><span></span></button>');
        var $content = $('<div class="modal_content"/>');
        var $modal = $('<div class="modal"/>');
        var $window = $(window);
      
        $modal.append($content, $close);
      
        $close.on('click', function(e){
            $('.modal, .project-modal-overlay').addClass('conceal');
            $('.modal, .project-modal-overlay').removeClass('display');
            $('.project-button').removeClass('load');
            e.preventDefault();
            modal.close();
        });
      
        return {
            center: function(){
                var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
                var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
                
                $modal.css({
                    top: top + $window.scrollTop(),
                    left: left + $window.scrollLeft(),
                });
            }, open: function(settings){
                const body = document.querySelector('html');
                const main = document.querySelector('.main');
                const sidebar = document.querySelector('.side-bar');
                const navbar = document.querySelector('header');
                const footer = document.querySelector('footer');
                body.style.overflow = 'hidden';
                main.style.filter = 'blur(20px)';
                sidebar.style.filter = 'blur(20px)';
                navbar.style.filter = 'blur(20px)';
                footer.style.filter = 'blur(20px)';
    
                $content.empty().append(settings.content);
        
                $modal.css({
                    width: settings.width || '100vh',
                    height: settings.height || '100vh'
                }).appendTo('body');
      
                modal.center();
                $(window).on('resize', modal.center);
            }, close: function(){
                const body = document.querySelector('html');
                const main = document.querySelector('.main');
                const sidebar = document.querySelector('.side-bar');
                const navbar = document.querySelector('header');
                const footer = document.querySelector('footer');
                body.style.overflow = 'scroll';
                main.style.filter = 'none';
                sidebar.style.filter = 'none';
                navbar.style.filter = 'none';
                footer.style.filter = 'none';
    
                $content.empty();
                $modal.detach();
                $(window).off('resize', modal.center);
            }
        };
    }());
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

AOS.init();