// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const userValue = username.value.trim();
        const passValue = password.value.trim();

        if (userValue === '' || passValue === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simple validation (for demo purposes)
        if (userValue === 'admin' && passValue === 'password') {
            alert('Login successful!');
            // Redirect or perform action here
        } else {
            alert('Invalid username or password.');
        }
    });
});