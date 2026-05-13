document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Functionality ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav_links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

});
