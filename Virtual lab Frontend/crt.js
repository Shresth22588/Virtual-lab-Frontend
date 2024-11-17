document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordField.value !== confirmPasswordField.value) {
            errorMessage.style.display = 'block'; 
        } else {
            errorMessage.style.display = 'none'; 
            alert('Account created successfully!');
            window.location.href = 'login.html'; 
        }
    });
});
