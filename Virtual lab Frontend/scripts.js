document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const createAccountBtn = document.getElementById('create-account-btn');
    const errorMessage = document.getElementById('error-message');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === '' || password === '') {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none'; 
            if (username === 'student' && password === '12345') {
                alert('Login successful!');
                window.location.href = 'profile.html';  
            } else {
                alert('Invalid credentials, please try again.');
            }
        }
    });
    createAccountBtn.addEventListener('click', () => {
        window.location.href = 'create-account.html'; 
    });
});
