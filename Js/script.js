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
       
        window.addEventListener('load', function(){
        function redirectHome(e){
        e.preventDefault();
        window.location.href = 'Home.html';
    }
    var signup = document.getElementById('signup-form');
    var signin = document.getElementById('signin-form');
    if (signup) signup.addEventListener('submit', redirectHome);
    if (signin) signin.addEventListener('submit', redirectHome);
});
