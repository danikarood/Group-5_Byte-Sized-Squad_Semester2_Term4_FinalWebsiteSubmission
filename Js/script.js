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