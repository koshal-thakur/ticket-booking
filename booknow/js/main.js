document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const bookingForm = document.getElementById('booking-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle login logic here
            const username = loginForm.username.value;
            const password = loginForm.password.value;
            console.log('Logging in:', username);
            // Add authentication logic
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle registration logic here
            const username = registerForm.username.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            console.log('Registering:', username);
            // Add registration logic
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle booking logic here
            const destination = bookingForm.destination.value;
            const date = bookingForm.date.value;
            console.log('Booking for:', destination, 'on', date);
            // Add booking logic
        });
    }

    // Add any additional event listeners or functions as needed
});