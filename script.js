/* ---------- Mobile nav ---------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/* ---------- Scroll spy ---------- */
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let navLink = document.querySelector('header nav a[href="#' + id + '"]');

        if (navLink && top >= offset && top < offset + height) {
            navLinks.forEach(links => links.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
};

/* ---------- Role rotator ---------- */
const roles = ['AI Engineer', 'Data Analyst', 'BI Analyst', 'ML Researcher', 'Python Developer'];
const roleEl = document.getElementById('role-text');
let roleIndex = 0;

function cycleRole() {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.style.opacity = 0;

    setTimeout(() => {
        roleEl.textContent = roles[roleIndex];
        roleEl.style.opacity = 1;
    }, 250);
}

if (roleEl) {
    roleEl.style.transition = 'opacity 0.25s ease';
    setInterval(cycleRole, 2400);
}