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


    // --- Tabbed Content Functionality ---
    const tabContainer = document.querySelector('.tabs-container');

    // Only run the tabs script if the container exists on the page
    if (tabContainer) {
        const tabLinks = tabContainer.querySelectorAll('.tab-link');
        const tabPanes = tabContainer.querySelectorAll('.tab-pane');

        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                const tabId = link.getAttribute('data-tab');

                // Remove 'active' class from all links and panes
                tabLinks.forEach(item => item.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Add 'active' class to the clicked link and corresponding pane
                link.classList.add('active');
                const activePane = document.getElementById(tabId);
                if (activePane) {
                    activePane.classList.add('active');
                }
            });
        });
    }
});
