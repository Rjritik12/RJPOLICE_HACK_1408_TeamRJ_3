const navlinks = document.querySelectorAll('.nav');

for (const nav of navlinks) {
    nav.addEventListener('click', () => {
        nav.classList.toggle('active');
        navlinks.forEach((navlink) => {
            if (navlink !== nav) {
                navlink.classList.remove('active');
            }
        })
    });
}