// ToTop button showHide 
let toTopBtn = document.querySelector('.toTop');
toTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})

// Show toTop button and navbar with animation while scrolling
window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
    toTopBtn.classList.remove('d-none');
    toTopBtn.classList.add('block');
    let header = document.querySelector('.header');
    header.classList.add('fadeIn')
    header.classList.remove('fadeOut')
} 
if(window.scrollY > 0 && window.scrollY < 500) {
let header = document.querySelector('.header');
    header.classList.add('fadeOut')
    header.classList.remove('fadeIn')
}
if(window.scrollY === 0) {
    toTopBtn.classList.add('d-none');
    toTopBtn.classList.remove('d-block');
    let header = document.querySelector('.header');
    header.classList.remove('fadeOut')
    // header.classList.add('fadeIn')
}
})

// Active menu links when link is clicked
let navLinks = document.querySelectorAll('.link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => {
            l.classList.remove('active');
            link.classList.add('active');
        })
    })
})

// Highlight navbar links when the current section appears
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navbarLinks = Array.from(document.querySelectorAll('.link'));

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 3;
        if ((window.scrollY >= sectionTop) && (window.scrollY < sectionTop + section.offsetHeight)) {
            currentSection = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});