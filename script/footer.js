fetch('./json/footer.json').then(response => response.json()).then(data => {
    fetchingFooter(data);
}).catch(error => {
    fetch('../json/footer.json').then(response => response.json()).then(data => {
        fetchingFooter(data);
    });
});

function fetchingFooter (data) {
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
                if (!(window.location.pathname === '/index.html' || window.location.pathname === '/profile/') && item.path.includes('#')) {
                    item.path = '/profile' + item.path;
                }
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
}