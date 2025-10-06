function handleSignUp(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const email = document.getElementById('signup-email').value.trim();

    if (!username || !password || !email) {
        alert('Please fill in all fields.');
        return;
    }
    localStorage.setItem('user', JSON.stringify({ username, email }));
    alert('Sign up successful!');
    window.location.href = 'home.html'; 
}
if (document.getElementById('signup-form')) {
    document.getElementById('signup-form').addEventListener('submit', handleSignUp);
}
function loadHomePage() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('welcome-message').textContent = `Welcome, ${user.username}!`;
    } else {
        document.getElementById('welcome-message').textContent = 'Welcome, Guest!';
    }
}
if (document.getElementById('welcome-message')) {
    window.addEventListener('DOMContentLoaded', loadHomePage);
}