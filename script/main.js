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
            <div class="icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-list-title">
                ${skill.skill}
            </div>
        `

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

        let iconElement;
        if (skill.icon.startsWith('fa-')) {
            iconElement = document.createElement('i');
            iconElement.className = skill.icon;
        } else {
            iconElement = document.createElement('img');
            iconElement.src = skill.icon;
            iconElement.alt = skill.skill;
            iconElement.style.width = '3rem';
            iconElement.style.height = '3rem';
            iconElement.style.margin = 'auto';
            iconElement.style.backgroundColor = skill.theme;
        }

        listItem.innerHTML = `
            <div class="icon">
                ${iconElement.outerHTML}
            </div>
            <div class="skill-list-title">
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
        `

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
        `

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
        `

        organizationContainer.appendChild(listItem);
    });
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

// Fetch Projects
fetch('./json/projects.json').then(response => response.json()).then(data => {
    const projectsContainer = document.querySelector('.project-container');

    data.forEach((project, index) => {
        const articleWrapper = document.createElement('article');
        articleWrapper.classList.add('article-wrapper');
        articleWrapper.setAttribute('data-aos', 'flip-left');
        articleWrapper.setAttribute('data-aos-duration', '2000');

        articleWrapper.innerHTML = `
            <div class="rounded-lg container-project">
                <img src="${project.img}">
            </div>
            <div class="project-title">
                <h3>${project.title}</h3>
            </div>
            <div class="project-info">
                <input type="hidden" class="projectId" value="${project.id}">
                <button class="project-button">
                    <div class="project-button-left"></div>
                    More
                    <div class="project-button-right"></div>
                </button>
            </div>
        `

        projectsContainer.appendChild(articleWrapper);
    });

    (function(){
        var $content = $('.project-modal-info').detach();
        
        $('.project-button').on('click', function(e){
            var projectId = $(this).prev('.projectId').val();
            
            fetch('./json/projects.json').then(response => response.json()).then(data => {
                var project = data.find(item => item.id === parseInt(projectId));
                if (project) {
                    const h1 = document.createElement('h1');
                    const h4 = document.createElement('h4');
                    const p = document.createElement('p');
                    const div = document.createElement('div');
                    div.classList.add('project-media');
                    const h1a = document.createElement('h1');
    
                    h1.innerHTML = `
                        <span class="gradient-text">${project.title}</span>
                    `;
                    h4.textContent = project.time;
                    p.innerHTML = project.description.join('');
                    h1a.innerHTML = `
                        <span class="gradient-text">Project's Media</span>
                    `;

                    project.media.forEach(media => {
                        const list = document.createElement('div');
                        list.classList.add('project-media-child');
                        list.innerHTML = `
                            <div class="project-media-preview">
                                <h6>MEDIA TYPE :</h6>
                                <h2>${media.type}</h2>
                                <a href="#"></a>
                            </div>
                            <div class="project-media-info">
                                <h6>TITLE</h6>
                                <h2>${media.title}</h2>
                                <button class="project-media-btn" onClick="directToMedia('${media.url}')">View</button>
                            </div>
                        `

                        div.append(list);
                    })
    
                    $content.empty();
                    $content.append(h1, h4, p, h1a, div);
                }
    
                modal.open({
                    content: $content,
                    height: '100vh',
                });
    
                $content.addClass('project-modal-content');
                $('.modal, .project-modal-overlay').addClass('display');
                $('.project-button').addClass('load');
            }).catch(error => {
                console.error('Error fetching or processing JSON data:', error);
            });
        });
    }());
      
    var modal = (function(){
        var $close = $('<button role="button" class="project-modal-close" title="Close"><span></span></button>');
        var $content = $('<div class="project-modal-content"/>');
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

// Fetch Certifications
fetch('./json/certifications.json').then(response => response.json()).then(data => {
    const certiContainer = document.querySelector('.certification-container');
    
    data.reverse();
    data.forEach((certi, index) => {
        const certiList = document.createElement('div');
        const isLastData = index === data.length - 1;
        const borderClasses = isLastData ? "" : "border-b-2 border-[#E91E63]";
        certiList.className = `flex bg-[#1F375C] mx-2 ${borderClasses}`;

        if (certi.credentialId) {
            certiList.innerHTML = `
                <div class="flex-none w-20 ml-4 my-4">
                    <img src="${certi.logo}" class="w-14 h-14">
                </div>
                <div class="flex-initial w-full mr-4 my-4">
                    <h3 class=" gradient-text text-2xl font-bold m-0">${certi.certificateName}</h3>
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
                    <h3 class=" gradient-text text-2xl font-bold">${certi.certificateName}</h3>
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
        listItem.className = "h-full bg-[#1F375C] no-underline rounded-lg flex flex-col p-4 mb-4";
        listItem.setAttribute('data-aos', 'fade-up');
        listItem.setAttribute('data-aos-duration', '1500');
        listItem.href = review.url;
        listItem.target = "_blank";

        listItem.innerHTML = `
            <div class="bg-[#1F375C] flex justify-start items-center pb-2">
                <img class="rounded-full h-20 w-20" src="${review.img}">
                <div class="pl-2 bg-[#1F375C]">
                    <h3 class="gradient-text text-2xl">${review.name}</h3>
                    <p class="bg-[#1F375C] text-sm">${review.role}</p>
                </div>
            </div>
            <p class="bg-[#1F375C]">${review.desc}</p>
        `

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