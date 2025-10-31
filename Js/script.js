document.addEventListener('DOMContentLoaded', function () {
    const toSignin = document.getElementById('to-signin');
    const toSignup = document.getElementById('to-signup');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const signupTab = document.getElementById('signup-tab');
    const signinTab = document.getElementById('signin-tab');

    function showSignin(e) {
        if (e) e.preventDefault();
        if (signupForm) signupForm.style.display = 'none';
        if (signinForm) signinForm.style.display = 'block';
    }

    function showSignup(e) {
        if (e) e.preventDefault();
        if (signinForm) signinForm.style.display = 'none';
        if (signupForm) signupForm.style.display = 'block';
    }

    if (toSignin) toSignin.addEventListener('click', showSignin);
    if (toSignup) toSignup.addEventListener('click', showSignup);

    if (signupTab && signinTab && signupForm && signinForm) {
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
    }

    if (signupForm) {
        signupForm.onsubmit = function(e) {
            e.preventDefault();
            const usernameEl = document.getElementById('signup-username');
            const emailEl = document.getElementById('signup-email');
            const passwordEl = document.getElementById('signup-password');
            const username = usernameEl ? usernameEl.value.trim() : '';
            const email = emailEl ? emailEl.value.trim() : '';
            const password = passwordEl ? passwordEl.value : '';
            const message = document.getElementById('signup-message');
            if (message) {
                if (username && email && password.length >= 6) {
                    message.style.color = '#27ae60';
                    message.textContent = 'Sign up successful!';
                    signupForm.reset();
                    window.location.href = 'Home.html';
                } else {
                    message.style.color = '#e74c3c';
                    message.textContent = 'Please fill all fields and use a password with at least 6 characters.';
                }
            }
        };
    }

    if (signinForm) {
        signinForm.onsubmit = function(e) {
            e.preventDefault();
            const emailEl = document.getElementById('signin-email');
            const passwordEl = document.getElementById('signin-password');
            const email = emailEl ? emailEl.value.trim() : '';
            const password = passwordEl ? passwordEl.value : '';
            const message = document.getElementById('signin-message');
            if (message) {
                if (email && password) {
                    message.style.color = '#27ae60';
                    message.textContent = 'Sign in successful!';
                    signinForm.reset();
                    window.location.href = 'Home.html';
                } else {
                    message.style.color = '#e74c3c';
                    message.textContent = 'Please enter your email and password.';
                }
            }
        };
    }
});

 document.addEventListener("DOMContentLoaded", function () {
        const seriesTitle = document.documentElement.getAttribute("data-movie-title"); 
        if (seriesTitle) {
            document.title = seriesTitle;
            document.querySelector(".header h1").textContent = seriesTitle;

            const seriesData = {
                "Sinners": {
                    
                    poster: "../Assets/images/Sinners poster.jpg",
                    synopsis: "A haunting Southern Gothic epic. Twin brothers and World War I veterans, Smoke and Stack Moore, return home to Mississippi to open a juke joint, only to be confronted by a rising tide of supernatural evil.",
                    cast: "Michael B. Jordan (dual role), Hailee Steinfeld, Jack O'Connell, Delroy Lindo",
                    director: "Ryan Coogler",
                    rating: "⭐ 7.6/10", 
                    trailer: "https://www.youtube.com/embed/bKGxHflevuk" 
                }
            };

            const data = seriesData[seriesTitle];
            if (data) {
                // DOM manipulation to insert the data
                document.querySelector(".poster img").src = data.poster; 
                document.querySelector(".poster img").alt = `${seriesTitle} Poster`;
                document.querySelector(".info h2:nth-of-type(1) + p").textContent = data.synopsis;
                document.querySelector(".info h2:nth-of-type(2) + p").textContent = data.cast;
                document.querySelector(".info h2:nth-of-type(3) + p").textContent = data.director;
                document.querySelector(".info .rating").textContent = data.rating;
                document.querySelector(".trailer iframe").src = data.trailer;

                const infoDiv = document.querySelector(".info");
            }
        }
    });

        // Removed duplicate Swiper configuration and initializations here;
        // the consolidated swiperConfig and swiper1..swiper5 are defined later in the file.
        let watchlistCandidates = [
            { title: "Superman", rank: "TBD", description: "New start for the Man of Steel in the new DCU.", posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA2NzU3NzAtOGU3NC00ZjY2LWJjYzMtN2Q5NDdjNzk0ZTMwXkEyXkFqcGdeQXVyMTYzMDgwOTU2._V1_.jpg", swiperId: 'swiper1' },
            { title: "Thunderbolts", rank: "TBD", description: "A team of anti-heroes and villains on a government mission.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNDgwMTQ3M2UtNjIyMS00ZWE1LTg5NGEtZjA5ZDkyZDBhMWI3XkEyXkFqcGdeQXVyMzY0MTE3NzQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper1' },
            { title: "Captain America: Brave New World", rank: "TBD", description: "Sam Wilson officially takes the shield as the new Captain America.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNWRhZDAxYjQtNTQ4OC00YzE4LTk4MjItZGUzMTk1NmY4MTIwXkEyXkFqcGdeQXVyMzY0MTE3NzQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper1' },
            { title: "The Fantastic Four: First Steps", rank: "TBD", description: "The highly-anticipated MCU debut of Marvel's First Family.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMDRiNGNmMzctMzExZS00OGJkLTkxNzktMzQ4MjY2OWYwNzZhXkEyXkFqcGdeQXVyMTA3MDk2NDc2._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper1' },
        
            // Action & Thrillers (swiper2)
            { title: "Mission Impossible: The Final Reckoning", rank: "TBD", description: "Ethan Hunt's final, most dangerous mission (Part 2 of Dead Reckoning).", posterUrl: "https://m.media-amazon.com/images/M/MV5BNWRhZDAxYjQtNTQ4OC00YzE4LTk4MjItZGUzMTk1NmY4MTIwXkEyXkFqcGdeQXVyMzY0MTE3NzQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper2' },
            { title: "The Accountant 2", rank: "TBD", description: "Christian Wolff returns with more lethal math.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNDgwMTQ3M2UtNjIyMS00ZWE1LTg5NGEtZjA5ZDkyZDBhMWI3XkEyXkFqcGdeQXVyMzY0MTE3NzQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper2' },
            { title: "Nobody 2", rank: "TBD", description: "Hutch Mansell is dragged back into the high-octane life he left behind.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNDQwZmQ4ZjktMDZhMC00ZjQ1LThlNDktMGIyNmYxYzRlYmU5XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper2' },
            { title: "Ballerina", rank: "TBD", description: "A John Wick spin-off focusing on a deadly assassin's revenge.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNWE1ZDM2NWEtNTI0ZC00MjljLTgxZjktMTcwYjNmMzNmYjUzXkEyXkFqcGdeQXVyMTE0MzQwMzI0._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper2' },
            { title: "Weapons", rank: "TBD", description: "An epic, multi-story horror-action film from the director of *Barbarian*.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMGRjNWQ0ZTMtYzgzYy00MjUzLThkNmUtMTEzMzFhOWQ5MmVlXkEyXkFqcGdeQXVyMTk1Nzk1OTk@._V1_.jpg", swiperId: 'swiper2' },

            // Sci-Fi & Fantasy (swiper3)
            { title: "Avatar: Fire and Ash", rank: "TBD", description: "The next visually stunning chapter in James Cameron's Pandora saga.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNzNkZTYxOTAtOWRkNy00NWU5LWEyY2EtYzE5ZGEwZDc1YTQ2XkEyXkFqcGdeQXVyMzU3Mzk5MDQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper3' },
            { title: "Mickey 17", rank: "TBD", description: "Bong Joon-ho's high-concept sci-fi epic starring Robert Pattinson as an Expendable.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA3Yzg2ODItZDdlMS00ZTU2LWJiYzMtYTI3ZTBkMjgwMjg1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper3' },
            { title: "Companion", rank: "TBD", description: "A high-concept sci-fi thriller set in space.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNjkxMjI2NWMtYjgzMC00ZGI0LTk5ZjMtOWQ0YTBhZmU5NWRjXkEyXkFqcGdeQXVyNjgwMjkwNzU@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper3' },
            { title: "Jurassic World Rebirth", rank: "TBD", description: "A new, secretive installment that launches a new era for the franchise.", posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA2NzU3NzAtOGU3NC00ZjY2LWJjYzMtN2Q5NDdjNzk0ZTMwXkEyXkFqcGdeQXVyMTYzMDgwOTU2._V1_.jpg", swiperId: 'swiper3' },

            // Horror & Suspense (swiper4)
            { title: "28 Years Later", rank: "TBD", description: "The highly-anticipated sequel to the zombie horror classic *28 Days Later*.", posterUrl: "https://m.media-amazon.com/images/M/MV5BODg2ZjliOTQtZjIzZC00OTNjLWIyY2EtODFhN2FhZTdkMWIwXkEyXkFqcGdeQXVyMTk0NTAwMzg5._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper4' },
            { title: "Final Destination Bloodlines", rank: "TBD", description: "A new installment in the franchise where 'Death' finds intricate ways to claim victims.", posterUrl: "https://m.media-amazon.com/images/M/MV5BYzJkMWI5ODAtOGQzYi00YTVmLWE1YjQtNGUwYzY2ZGRjYTVkXkEyXkFqcGdeQXVyMTY5Mzc4Njk@._V1_.jpg", swiperId: 'swiper4' },
            { title: "Bring Her Back", rank: "TBD", description: "A suspenseful thriller about two teenagers who find a mysterious woman.", posterUrl: "https://m.media-amazon.com/images/M/MV5BN2IwNTJlOTEtZDJhMC00NzQyLTg5MDctZTY3YzY0M2YwZmU4XkEyXkFqcGdeQXVyMTYzMTg3MjQ2._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper4' },
            { title: "Black Bag", rank: "TBD", description: "An espionage thriller directed by Steven Soderbergh.", posterUrl: "https://m.media-amazon.com/images/M/MV5BYzA2NzU3NzAtOGU3NC00ZjY2LWJjYzMtN2Q5NDdjNzk0ZTMwXkEyXkFqcGdeQXVyMTYzMDgwOTU2._V1_.jpg", swiperId: 'swiper4' },
            { title: "Sinners", rank: "TBD", description: "A dark psychological thriller exploring morality and secrets.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA5MTUwODQ2M15BMl5BanBnXkFtZTcwNjk2OTk0NA@@._V1_.jpg", swiperId: 'swiper4' },
            
            // Comedy & Drama (swiper5)
            { title: "The Naked Gun", rank: "TBD", description: "A reboot of the classic Leslie Nielsen comedy starring Liam Neeson.", posterUrl: "https://m.media-amazon.com/images/M/MV5BYjE1MGUxZmQtM2RiYi00YjVjLTg4ZDYtNWI3YjM2MDc5NjQ5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg", swiperId: 'swiper5' },
            { title: "How to Train Your Dragon", rank: "TBD", description: "The live-action adaptation of the beloved animated film series.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMjgwOTAzNTIyMV5BMl5BanBnXkFtZTcwNjk0MjAyMw@@._V1_.jpg", swiperId: 'swiper5' },
            { title: "F1 The Movie", rank: "TBD", description: "A high-speed racing drama set in the world of Formula 1, starring Brad Pitt.", posterUrl: "https://m.media-amazon.com/images/M/MV5BOGQxYjMyYmItODcyZC00MWRmLWI3OTUtODliNTZlNjhlYWRhXkEyXkFqcGdeQXVyMzY0MTE3NzQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper5' },
            { title: "A Minecraft Movie", rank: "TBD", description: "The block-building video game comes to life in a major motion picture.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY3MDU5MzkxNF5BMl5BanBnXkFtZTgwNTQzMTI3ODE@._V1_.jpg", swiperId: 'swiper5' },
            { title: "Eddington", rank: "TBD", description: "A new, secretive comedy/western project from director Ari Aster.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMjQ4NzgwNzEtY2ZlYS00ZmE3LWE0ODctNGEzOWQ1NjA5YzU2XkEyXkFqcGdeQXVyMTYzMDgwOTU2._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper5' },
            { title: "Sorry, Baby", rank: "TBD", description: "Romantic drama/thriller about an unexpected relationship.", posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA3Yzg2ODItZDdlMS00ZTU2LWJiYzMtYTI3ZTBkMjgwMjg1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper5' },
            { title: "Highest 2 Lowest", rank: "TBD", description: "A high-stakes crime drama with a complex plot.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNDgwMTQ3M2UtNjIyMS00ZWE1LTg5NGEtZjA5ZDkyZDBhMWI3XkEyXkFqcGdeQXVyMzY0MTE3NzQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper5' },
            { title: "Chainsaw Man", rank: "TBD", description: "The live-action adaptation of the popular manga/anime series.", posterUrl: "https://m.media-amazon.com/images/M/MV5BYmIyNzc4MGMtZDEzMy00MTdiLTk5MWEtMWU5YTUwODViMjRkXkEyXkFqcGdeQXVyNjgwMjkwNzU@._V1_.jpg", swiperId: 'swiper1' },
            { title: "Blade", rank: "TBD", description: "Mahershala Ali stars as the half-vampire vampire hunter in the MCU.", posterUrl: "https://m.media-amazon.com/images/M/MV5BNDQwZmQ4ZjktMDZhMC00ZjQ1LThlNDktMGIyNmYxYzRlYmU5XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper1' },
            { title: "Elio", rank: "TBD", description: "Pixar's animated adventure about a boy transported across the galaxy.", posterUrl: "https://m.media-amazon.com/images/M/MV5BN2IwNTJlOTEtZDJhMC00NzQyLTg5MDctZTY3YzY0M2YwZmU4XkEyXkFqcGdeQXVyMTYzMTg3MjQ2._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper3' },
            { title: "Snow White", rank: "TBD", description: "Live-action adaptation of the Disney classic starring Rachel Zegler.", posterUrl: "https://m.media-amazon.com/images/M/MV5BYzJkMWI5ODAtOGQzYi00YTVmLWE1YjQtNGUwYzY2ZGRjYTVkXkEyXkFqcGdeQXVyMTY5Mzc4Njk@._V1_.jpg", swiperId: 'swiper5' },
            { title: "Lilo & Stitch", rank: "TBD", description: "Live-action adaptation of the Disney animated film.", posterUrl: "https://m.media-amazon.com/images/M/MV5BODg2ZjliOTQtZjIzZC00OTNjLWIyY2EtODFhN2FhZTdkMWIwXkEyXkFqcGdeQXVyMTk0NTAwMzg5._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper5' },
            { title: "Borderlands", rank: "TBD", description: "The movie adaptation of the popular looter-shooter video game.", posterUrl: "https://m.media-amazon.com/images/M/MV5BOGQxYjMyYmItODcyZC00MWRmLWI3OTUtODliNTZlNjhlYWRhXkEyXkFqcGdeQXVyMzY0MTE3NzQ@._V1_FMjpg_UX1000_.jpg", swiperId: 'swiper2' }
        ];

        // Store Swiper instances globally for access
        let swiper1, swiper2, swiper3, swiper4, swiper5;

        // Configuration object for all swipers
        const swiperConfig = {
            slidesPerView: 'auto', 
            centeredSlides: false,
            spaceBetween: 30,
            breakpoints: {
                640: { slidesPerView: 1.2, spaceBetween: 10 },
                768: { slidesPerView: 2.5, spaceBetween: 25 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
            },
        };

        // Initialize all five Swiper instances with unique selectors
        swiper1 = new Swiper('.swiper-1', { ...swiperConfig, navigation: { nextEl: '.swiper-button-next-1', prevEl: '.swiper-button-prev-1' } });
        swiper2 = new Swiper('.swiper-2', { ...swiperConfig, navigation: { nextEl: '.swiper-button-next-2', prevEl: '.swiper-button-prev-2' } });
        swiper3 = new Swiper('.swiper-3', { ...swiperConfig, navigation: { nextEl: '.swiper-button-next-3', prevEl: '.swiper-button-prev-3' } });
        swiper4 = new Swiper('.swiper-4', { ...swiperConfig, navigation: { nextEl: '.swiper-button-next-4', prevEl: '.swiper-button-prev-4' } });
        swiper5 = new Swiper('.swiper-5', { ...swiperConfig, navigation: { nextEl: '.swiper-button-next-5', prevEl: '.swiper-button-prev-5' } });

        // Map category ID to Swiper instance
        const swiperMap = {
            'swiper1': swiper1,
            'swiper2': swiper2,
            'swiper3': swiper3,
            'swiper4': swiper4,
            'swiper5': swiper5,
        };

        /**
         * The function to search for and add a movie from the candidates list.
         */
        function addMovie() {
            const searchTitle = document.getElementById('movieTitle').value.trim();

            if (!searchTitle) {
                alert('Please enter a movie title to search for.');
                return;
            }

            // Find the index of the movie in the candidates list (case-insensitive search)
            const movieIndex = watchlistCandidates.findIndex(
                movie => movie.title.toLowerCase() === searchTitle.toLowerCase()
            );

            if (movieIndex === -1) {
                alert(`"${searchTitle}" is not available to add to the watchlist. Try one of the titles mentioned in the list!`);
                return;
            }

            // Get the movie data and remove it from the candidates list
            const movieData = watchlistCandidates[movieIndex];
            watchlistCandidates.splice(movieIndex, 1);
            
            // Get the target Swiper instance
            const targetSwiper = swiperMap[movieData.swiperId];
            
            // Check if the empty placeholder slide exists in the target Swiper
            const firstSlide = targetSwiper.slides[0];
            if (firstSlide && firstSlide.classList.contains('empty-placeholder')) {
                // Remove the initial "empty" slide
                targetSwiper.removeSlide(0);
            }

            // Generate the rank HTML, ensuring the star is present
            const finalRank = movieData.rank.includes('⭐') ? movieData.rank : `<span class="star">⭐</span> ${movieData.rank}`;

            const newSlide = document.createElement('div');
            newSlide.classList.add('swiper-slide');
            newSlide.innerHTML = `
                <div class="movie-card">
                    <img src="${movieData.posterUrl}" alt="${movieData.title} Poster" class="movie-poster">
                    <div class="movie-info">
                        <h3 class="movie-title">${movieData.title}</h3>
                        <p class="movie-rank">${finalRank}</p>
                        <p class="movie-desc">${movieData.description}</p>
                    </div>
                </div>
            `;
            
            targetSwiper.appendSlide(newSlide);
            document.getElementById('movieTitle').value = '';
            alert(`Added "${movieData.title}" to the watchlist!`);
        }
