function toggleMenu() {
    const nav  = document.querySelector('.nav');
    const toggleButton = document.querySelector('.menu-toggle');

    nav.classList.toggle('active');

    toggleButton.textContent = nav.classList.contains('active')? 'X' : '☰';
}

document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    nav.classList.remove('active');
    menuToggle.textContent = '☰';
    })
})


// function to switch between tabs 

function showTab(tabName) {

const eServices = document.querySelector('.e-services-container');
const education = document.querySelector('.education-container');

const eServiceTab = document.querySelector('.e-service-tab');
const educationTab = document.querySelector('.education-tab');

eServices.classList.add('hidden');
education.classList.add('hidden');

eServiceTab.classList.remove('active-tab');
educationTab.classList.remove('active-tab');


if (tabName === 'e-services') {
    eServices.classList.remove('hidden');
    eServiceTab.classList.add('active-tab');
}  else if (tabName === 'education') {
    education.classList.remove('hidden');
    educationTab.classList.add('active-tab');
}
}

showTab('e-services');


document.addEventListener('DOMContentLoaded', () => {
    const navItems= document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateZ(10px)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateZ(0)';
        });
    })
})


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default scroll behavior

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 80; 
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
