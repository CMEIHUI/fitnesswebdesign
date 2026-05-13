document.addEventListener('DOMContentLoaded', () => {
    
    // --- Hamburger Menu Functionality ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav_links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
            menuBtn.classList.toggle('fa-bars');
        });

        document.querySelectorAll('.nav_links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
            });
        });
    }

    // --- Explore Section Scroller (for Index Page) ---
    const exploreGrid = document.querySelector('.explore_grid');
    const prevBtn = document.getElementById('explore-prev');
    const nextBtn = document.getElementById('explore-next');

    // Only run this script if the elements exist on the page
    if (exploreGrid && prevBtn && nextBtn) {
        const scrollGrid = (direction) => {
            const card = exploreGrid.querySelector('.explore_card');
            if (card) {
                // Calculate scroll amount based on card width and gap
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
    
    // --- Find a Gym Form Validation (for Membership Page) ---
    const gymForm = document.getElementById('find-gym-form');

    // Only run this script if the form exists on the page
    if (gymForm) {
        const searchInput = document.getElementById('gym-search-input');
        const formMessage = document.getElementById('form-message');

        gymForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the form from actually submitting

            if (searchInput.value.trim() === '') {
                formMessage.textContent = 'Please enter a city or postal code.';
                // Clear the message after 3 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 3000);
            } else {
                formMessage.textContent = '';
                // In a real application, you would handle the search here
                alert(`Searching for gyms near: ${searchInput.value}`);
                searchInput.value = ''; // Clear the input field
            }
        });
    }

});
