function showNavbar() {
    const body = document.getElementsByTagName('body')[0];
    const navbar = document.createElement('header');
    
    navbar.innerHTML = `
        <h2 class="logo gradient-text"><img class="logo-img" src="./assets/svg/logo.svg"> Louise Derizhy</h2>
        <h2 class="logo-small gradient-text"><img class="logo-img" src="./assets/svg/logo.svg"></h2>
        <div class="w-40 inline-flex items-center">
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-dropdown-offset-distance="2" class="group text-white bg-[#E91E63] hover:bg-[#BA124A] font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                Page's Menu
                <i class="ml-2 fa-regular fa-chevron-down bg-[#E91E63] group-hover:bg-[#BA124A]"></i>
            </button>
            <div id="dropdown" class="z-10 hidden w-36 rounded-lg border-2 border-[#E91E63]">
                <ul class="text-sm rounded-lg" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#home" class="bg-[#1F375C] rounded-t-lg block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Home</a>
                    </li>
                    <li>
                        <a href="#profile" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Profile</a>
                    </li>
                    <li>
                        <a href="#skill" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Skills</a>
                    </li>
                    <li>
                        <a href="#experience" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Experiences</a>
                    </li>
                    <li>
                        <a href="#education" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Educations</a>
                    </li>
                    <li>
                        <a href="#organization" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Organizations</a>
                    </li>
                    <li>
                        <a href="#project" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Project</a>
                    </li>
                    <li>
                        <a href="#certification" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Certification</a>
                    </li>
                    <li>
                        <a href="#review" class="bg-[#1F375C] rounded-b-lg block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Review</a>
                    </li>
                </ul>
            </div>
        </div>
    `

    body.appendChild(navbar);
}

showNavbar();