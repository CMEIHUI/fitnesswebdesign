document.addEventListener('DOMContentLoaded', () => {

    // --- Sidebar Tab Navigation ---
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    const slides = document.querySelectorAll('.slide');

    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            const slideIndex = button.getAttribute('data-slide');

            // Update active button
            sidebarButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show the corresponding slide
            slides.forEach(slide => {
                if (slide.getAttribute('data-slide-content') === slideIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            // If on mobile, close the sidebar after clicking a button
            if (window.innerWidth <= 900) {
                document.querySelector('.sidebar').classList.remove('active');
                document.getElementById('menu-toggle').querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // --- Logout Modal ---
    const logoutBtn = document.getElementById('logout-btn');
    const logoutModal = document.getElementById('logoutModal');
    const confirmLogoutBtn = document.getElementById('confirm-logout-btn');
    const cancelLogoutBtn = document.getElementById('cancel-logout-btn');

    if (logoutBtn && logoutModal) {
        logoutBtn.addEventListener('click', () => {
            logoutModal.style.display = 'flex';
        });

        cancelLogoutBtn.addEventListener('click', () => {
            logoutModal.style.display = 'none';
        });

        confirmLogoutBtn.addEventListener('click', () => {
            // Simulate logout and redirect to the main index page
            alert("You have been logged out.");
            window.location.href = 'index.html'; 
        });

        // Close modal if clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === logoutModal) {
                logoutModal.style.display = 'none';
            }
        });
    }
});
