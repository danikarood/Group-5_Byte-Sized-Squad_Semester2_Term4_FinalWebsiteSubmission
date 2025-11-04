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

// ===== NEW trailer handling =====
function pickBestVideo(videos) {
  const list = (videos?.results || []).filter(v => v.site === 'YouTube');
  let best = list.find(v => v.type === 'Trailer' && /official/i.test(v.name));
  if (best) return best;
  best = list.find(v => v.type === 'Trailer');
  if (best) return best;
  best = list.find(v => v.type === 'Teaser') || list.find(v => v.type === 'Clip');
  return best || list[0] || null;
}

function iframeHTML(youtubeKey, title = 'Trailer') {
  // default to privacy-friendly domain; include origin
  const origin = encodeURIComponent(location.origin || 'http://127.0.0.1:5500');
  const srcNoCookie = `https://www.youtube-nocookie.com/embed/${youtubeKey}?rel=0&modestbranding=1&playsinline=1&origin=${origin}`;

  // extra controls below the iframe so user can switch if nocookie fails for them
  return `
    <div class="ratio ratio-16x9">
      <iframe
        id="ytFrame"
        src="${srcNoCookie}"
        title="${title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"></iframe>
    </div>
    <div class="d-flex justify-content-end gap-2 mt-2">
      <button id="altPlayerBtn" class="btn btn-sm btn-outline-light">Try alternate player</button>
      <a class="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener"
         href="https://www.youtube.com/watch?v=${youtubeKey}">Open on YouTube</a>
    </div>
    <script>
      (function(){
        const btn = document.getElementById('altPlayerBtn');
        const f = document.getElementById('ytFrame');
        if (btn && f) {
          btn.addEventListener('click', () => {
            const origin = encodeURIComponent(location.origin || 'http://127.0.0.1:5500');
            // swap to standard youtube.com embed (some videos only work here)
            f.src = "https://www.youtube.com/embed/${youtubeKey}?rel=0&modestbranding=1&playsinline=1&origin=" + origin + "&enablejsapi=1";
          });
        }
      })();
    </script>
  `;
}

function renderTrailer(videos) {
  const container = document.getElementById('trailer') || document.getElementById('trailerWrap');
  if (!container) return;

  const list = (videos?.results || []).filter(v => v.site === 'YouTube');
  // prefer "Official Trailer", then any Trailer, then Teaser/Clip
  let best = list.find(v => v.type === 'Trailer' && /official/i.test(v.name))
           || list.find(v => v.type === 'Trailer')
           || list.find(v => v.type === 'Teaser')
           || list.find(v => v.type === 'Clip')
           || list[0];

  if (best?.key) {
    container.innerHTML = iframeHTML(best.key, best.name || 'Trailer');
  } else {
    container.innerHTML = `
      <div class="alert alert-secondary">
        No trailer available from TMDB.
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(document.title.replace(' | Movie Details',''))}+trailer" target="_blank" rel="noopener">
          Search on YouTube
        </a>.
      </div>`;
  }
}


// ===== MAIN INIT =====
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

    // Trailer (new system)
    renderTrailer(m.videos);

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

