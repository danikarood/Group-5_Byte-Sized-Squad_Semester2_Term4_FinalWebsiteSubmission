// ===== Movie Details Page =====
const TMDB_KEY = 'aa422f87f74479ba91ae1086951f904a'; // your working v3 key
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER = '../Assets/images/placeholder.jpg';

// Simple Watchlist (localStorage)
const WL_KEY = 'watchlist';
function getWatchlist() {
  try { return JSON.parse(localStorage.getItem(WL_KEY)) || []; } catch { return []; }
}
function inWatchlist(id) { return getWatchlist().some(m => m.id === id); }
function addToWatchlist(movie) {
  const list = getWatchlist();
  if (!inWatchlist(movie.id)) {
    list.push({ id: movie.id, title: movie.title, poster_path: movie.poster_path, vote_average: movie.vote_average });
    localStorage.setItem(WL_KEY, JSON.stringify(list));
  }
}

// Helpers
const $ = (id) => document.getElementById(id);
const posterUrl = (p) => p ? `${IMG_BASE}${p}` : PLACEHOLDER;

function getIdFromQuery() {
  const p = new URLSearchParams(location.search);
  return Number(p.get('id'));
}

async function fetchMovie(id) {
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
  url.searchParams.set('api_key', TMDB_KEY);
  url.searchParams.set('append_to_response', 'videos,credits');
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) throw new Error(data.status_message || ('HTTP ' + res.status));
  return data;
}

function fillTrailer(videos) {
  const t = (videos?.results || []).find(v => v.site === 'YouTube' && v.type === 'Trailer');
  if (t) {
    $('trailer').innerHTML = `
      <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/${t.key}" title="Trailer" allowfullscreen></iframe>
      </div>`;
  } else {
    $('trailer').innerHTML = `<div class="alert alert-secondary">No trailer available.</div>`;
  }
}

async function init() {
  const id = getIdFromQuery();
  if (!id) {
    $('error').classList.remove('d-none');
    $('error').textContent = 'No movie id provided.';
    return;
  }

  try {
    const m = await fetchMovie(id);

    // Title & head title
    $('title').textContent = m.title || 'Untitled';
    document.title = m.title ? `${m.title} | Movie Details` : 'Movie Details';

    // Poster & overview
    $('poster').src = posterUrl(m.poster_path);
    $('poster').alt = `${m.title} poster`;
    $('overview').textContent = m.overview || 'No synopsis available.';

    // Rating
    $('rating').textContent = m.vote_average ? m.vote_average.toFixed(1) : 'N/A';

    // Director + Cast
    const director = (m.credits?.crew || []).find(p => p.job === 'Director');
    $('director').textContent = director?.name || 'N/A';
    $('cast').textContent = (m.credits?.cast || []).slice(0, 5).map(a => a.name).join(', ') || 'N/A';

    // Trailer
    fillTrailer(m.videos);

    // Watchlist button
    const btn = $('addToWatchlist');
    if (inWatchlist(m.id)) {
      btn.textContent = 'Added to Watchlist';
      btn.disabled = true;
    }
    btn.addEventListener('click', () => {
      addToWatchlist({
        id: m.id,
        title: m.title,
        poster_path: m.poster_path,
        vote_average: m.vote_average
      });
      btn.textContent = 'Added to Watchlist';
      btn.disabled = true;
    });

  } catch (err) {
    console.error(err);
    $('error').classList.remove('d-none');
    $('error').textContent = 'Could not load movie details. Check your API key or internet.';
  }
}

document.addEventListener('DOMContentLoaded', init);
