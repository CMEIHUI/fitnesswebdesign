 document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('menu-btn');
            const navLinks = document.querySelector('.nav_links');

            if (menuBtn && navLinks) {
                menuBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    menuBtn.classList.toggle('fa-bars');
                    menuBtn.classList.toggle('fa-times');
                });
            }
        });