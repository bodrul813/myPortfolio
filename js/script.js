// ✅ Section and Navbar Link Logic
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header'); // fixed: use 'header', not '.header'
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1000);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1000);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1000);
        }
    });
});

// ✅ Fix for logo click not working
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1000);
    }
});

// ✅ Resume Section Button Toggle
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// ✅ Project Carousel Logic
const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');
const imgSlide = document.querySelector('.project-corousel .img-slide');
const projectDetails = document.querySelectorAll('.project-detail');
const totalSlides = document.querySelectorAll('.project-corousel .img-item').length;

let index = 0;

const activeProject = () => {
    imgSlide.style.transform = `translateX(-${index * 100}%)`;

    projectDetails.forEach(detail => detail.classList.remove('active'));
    projectDetails[index].classList.add('active');

    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalSlides - 1);
};

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        activeProject();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activeProject();
    }
});

// ✅ Initial load: activate first nav link and section
window.addEventListener('DOMContentLoaded', () => {
    navLinks[0].classList.add('active');
    sections[0].classList.add('active');
    document.querySelector('header').classList.add('active');
    document.querySelector('.bars-box').classList.add('active');
    activeProject();
});

