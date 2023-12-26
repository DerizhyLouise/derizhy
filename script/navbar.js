function showNavbar() {
    const body = document.getElementsByTagName('body')[0];
    const navbar = document.createElement('header');
    navbar.innerHTML = `
        <h2 class="logo"><img class="logo-img" src="../assets/image/logo.png"> Louise Derizhy</h2>
        <h2 class="logo-small"><img class="logo-img" src="../assets/image/logo.png">LD</h2>
        <nav class="navigation">
            <a href="#home" class='nav-button'>
                <span class="nav-name">Home</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#profile" class='nav-button'>
                <span class="nav-name">About</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#project" class='nav-button'>
                <span class="nav-name">Project</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#about" class='nav-button'>
                <span class="nav-name">About</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
        </nav>
    `

    body.appendChild(navbar);
}

showNavbar();