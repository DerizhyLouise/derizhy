function showNavbar() {
    const body = document.getElementsByTagName('body')[0];
    const navbar = document.createElement('header');
    navbar.className = "fixed top-0 left-0 w-full h-[100px] py-5 flex justify-between items-center z-50 bg-[#0D192B]"
    
    navbar.innerHTML = `
        <div class="flex mr-4">
            <a href="#home"><img class="w-24 h-24 mr-4" src="./assets/svg/logo.svg"></a>
            <h2 class="text-4xl flex max-sm:hidden items-center select-none gradient-text"><a href="#home">Louise Derizhy</a></h2>
        </div>
        <div class="w-40 inline-flex items-center">
            <button id="dropdownDefaultButton" onclick="navbarClick()" data-dropdown-toggle="dropdown" data-dropdown-offset-distance="0" class="group text-white bg-[#E91E63] hover:bg-[#BA124A] font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                Page's Menu
                <i id="dropdownIcon" class="fa-solid fa-chevron-down ml-2 bg-[#E91E63] group-hover:bg-[#BA124A]"></i>
            </button>
            <div id="dropdown" class="z-10 hidden w-36 rounded-b-lg border-b-2 border-x-2 border-[#E91E63]">
                <ul class="text-sm rounded-b-lg" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#home" class="bg-[#1F375C] block px-4 py-2 hover:bg-gray-100 hover:text-[#0D192B]">Home</a>
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

function navbarClick() {
    const icon = document.getElementById("dropdownIcon")
    if (icon) {
        if (icon.classList.contains('fa-chevron-down')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }
}

    function handleOutsideClick(event) {
        var dropdownButton = document.getElementById('dropdownDefaultButton');
        var dropdown = document.getElementById('dropdown');
        var icon = document.getElementById('dropdownIcon');

        if (!dropdownButton.contains(event.target) && !dropdown.contains(event.target)) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }

showNavbar();
document.body.addEventListener('click', handleOutsideClick);