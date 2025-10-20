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
