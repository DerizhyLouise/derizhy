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
            <h4>${category.name}</h4>
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

const loadHeader = () => {
    const header = document.getElementById("header");
    header.innerHTML = `
        
    `;
}