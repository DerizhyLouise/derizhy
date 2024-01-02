function showNavbar() {
    const body = document.getElementsByTagName('body')[0];
    const navbar = document.createElement('header');
    navbar.innerHTML = `
        <h2 class="logo gradient-text"><img class="logo-img" src="../assets/svg/logo.svg"> Louise Derizhy</h2>
        <h2 class="logo-small gradient-text"><img class="logo-img" src="../assets/svg/logo.svg"></h2>
        <nav class="navigation">
            <a href="#home" class='nav-button'>
                <span class="nav-name">Home</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#profile" class='nav-button'>
                <span class="nav-name">Profile</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#resume" class='nav-button'>
                <span class="nav-name">Resume</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#project" class='nav-button'>
                <span class="nav-name">Project</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#review" class='nav-button'>
                <span class="nav-name">Review</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
        </nav>
    `

    body.appendChild(navbar);
}

showNavbar();