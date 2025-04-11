// This file handles authentication-related JavaScript functions, such as user registration and login processes.

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;
            // Add registration logic here (e.g., API call)
            console.log('User registered:', username);
            alert('Registration successful!');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;
            // Add login logic here (e.g., API call)
            console.log('User logged in:', username);
            alert('Login successful!');
        });
    }
});