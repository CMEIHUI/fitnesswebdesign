document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Functionality ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav_links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
            menuBtn.classList.toggle('fa-bars');
        })

        document.querySelectorAll('.nav_links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
            })
        });
    }

    // --- Explore Section Scroller ---
    const exploreGrid = document.querySelector('.explore_grid');
    const prevBtn = document.getElementById('explore-prev');
    const nextBtn = document.getElementById('explore-next');

    if (exploreGrid && prevBtn && nextBtn) {
        const scrollGrid = (direction) => {
            const card = exploreGrid.querySelector('.explore_card');
            if (card) {
                const scrollAmount = card.offsetWidth + parseInt(window.getComputedStyle(exploreGrid).gap);
                exploreGrid.scrollBy({
                    left: direction * scrollAmount,
                    behavior: 'smooth'
                });
            }
        };

        nextBtn.addEventListener('click', () => scrollGrid(1));
        prevBtn.addEventListener('click', () => scrollGrid(-1));
    }
});