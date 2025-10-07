<<<<<<< HEAD
<script>
    Tab switching
        const signupTab = document.getElementById('signup-tab');
        const signinTab = document.getElementById('signin-tab');
        const signupForm = document.getElementById('signup-form');
        const signinForm = document.getElementById('signin-form');

        signupTab.onclick = () => {
            signupTab.classList.add('active');
            signinTab.classList.remove('active');
            signupForm.classList.add('active');
            signinForm.classList.remove('active');
        };
        signinTab.onclick = () => {
            signinTab.classList.add('active');
            signupTab.classList.remove('active');
            signinForm.classList.add('active');
            signupForm.classList.remove('active');
        };

        // Dummy form handlers
        signupForm.onsubmit = function(e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;
            const message = document.getElementById('signup-message');
            if (username && email && password.length >= 6) {
                message.style.color = '#27ae60';
                message.textContent = 'Sign up successful!';
                signupForm.reset();
            } else {
                message.style.color = '#e74c3c';
                message.textContent = 'Please fill all fields and use a password with at least 6 characters.';
            }
        };

        signinForm.onsubmit = function(e) {
            e.preventDefault();
            const email = document.getElementById('signin-email').value.trim();
            const password = document.getElementById('signin-password').value;
            const message = document.getElementById('signin-message');
            if (email && password) {
                message.style.color = '#27ae60';
                message.textContent = 'Sign in successful!';
                signinForm.reset();
            } else {
                message.style.color = '#e74c3c';
                message.textContent = 'Please enter your email and password.';
            }
        };
    </script>
=======
const signupForm = document.getElementById('signup-form');
        const signinForm = document.getElementById('signin-form');
        document.getElementById('to-signin').onclick = function() {
            signupForm.style.display = 'none';
            signinForm.style.display = 'block';
        };
        document.getElementById('to-signup').onclick = function() {
            signinForm.style.display = 'none';
            signupForm.style.display = 'block';
        };
        signupForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Sign Up submitted!');
        };
        signinForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Sign In submitted!');
        };
>>>>>>> Danika-Rood_251165
