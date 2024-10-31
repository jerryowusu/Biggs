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

  

  // document.addEventListener("DOMContentLoaded", () => {
  //   const typingElements = document.querySelectorAll(".lazy-fade");
  
  //   typingElements.forEach((element) => {
  //     const originalText = element.getAttribute("data-text");
  //     let isTyping = false; // Flag to track typing status
  
  //     element.addEventListener("mouseover", () => {
  //       if (isTyping) return; // Exit if already typing
  
  //       isTyping = true; // Set typing status
  //       element.textContent = ""; // Reset content
  //       let i = 0;
  
  //       // Interval to type each character
  //       element.typingInterval = setInterval(() => {
  //         element.textContent += originalText.charAt(i); // Type one character
  //         i++;
  
  //         if (i === originalText.length) {
  //           clearInterval(element.typingInterval); // Stop typing when complete
  //           isTyping = false; // Reset typing status
  //         }
  //       }, 100); // Adjust speed as needed (100ms)
  //     });
  //   });
  // });
  
  