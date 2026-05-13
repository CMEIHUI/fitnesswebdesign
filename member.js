document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Here you would typically validate the user's credentials.
            // For this example, we'll just simulate a successful login
            // and redirect to the member page.
            
            // Redirect to the member page
            window.location.href = 'memberlogin.html';
        });
    }
});
