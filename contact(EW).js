// Wait for the document to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // --- Hamburger Menu Logic ---
        const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.querySelector('.nav_links');

        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                if (menuBtn.classList.contains('fa-bars')) {
                    menuBtn.classList.remove('fa-bars');
                    menuBtn.classList.add('fa-times');
                } else {
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
            });
        }

        // --- Form Submission Logic ---
        const contactForm = document.getElementById('contact-form');
        const formWrapper = document.getElementById('form-wrapper');
        const successMessage = document.getElementById('success-message');

        if(contactForm && formWrapper && successMessage) {
            contactForm.addEventListener('submit', (e) => {
                // Prevent the default form submission (which would reload the page)
                e.preventDefault();

                // Here you would typically send the form data to a server.
                // For this example, we'll just show the success message.
                
                // Hide the form and show the success message
                formWrapper.style.display = 'none';
                successMessage.style.display = 'block';
            });
        }
    });