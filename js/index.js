const html = document.documentElement;
const grid = document.getElementById('grid');
const viewOverlay = document.querySelector('.view-overlay');
const info = document.getElementById('info');
const search = document.getElementById('btn-search');
const input = document.getElementById('filter-search');
const filters = document.getElementById('filters');
const filtersList = document.getElementById('filters-list');
const filtersToggle = document.getElementById('filters-toggle');
const playlist = document.getElementById('playlist');
const playlistToggle = document.getElementById('playlist-toggle');

const dataTrackId = 'data-track-id';
const dataTrackUrl = 'data-track-url';
const dataTitle = 'data-title';
const dataUsername = 'data-username';
const dataGenre = 'data-genre';
const dataFilterType = 'data-filter-type';
const dataFilterParam = 'data-filter-param';

const cls = {
  active: 'is-active',
  ctrlView: 'track-controls-view',
  ctrlPlayback: 'track-controls-playback',
  ctrlAdd: 'track-controls-add',
  error: 'has-error',
  hide: 'is-hidden',
  infoBtn: 'btn-primary',
  loading: 'is-loading',
  play: 'is-playing',
  show: 'is-showing',
  stopPlayback: 'stop-playback',
  track: 'track',
  viewPlaylist: 'view-playlist'
};

let trackPlayer, currentTrack, tracks;

SC.initialize({
  client_id: 'c92343835f607734d719d94afcb679d7'
});

fetchTracks();

// Event Handlers
document.addEventListener("click", (e) => {
	if (e.target.matches(`#${filtersToggle.id}`)) {
    filtersToggle.classList.toggle(cls.active);
    filtersList.classList.toggle(cls.show);
  } else {
    filtersToggle.classList.remove(cls.active);
    filtersList.classList.remove(cls.show);
  }
});

playlistToggle.addEventListener('click', () => {
  html.classList.toggle(cls.viewPlaylist);
});

viewOverlay.addEventListener('click', () => {
  html.classList.remove(cls.viewPlaylist);
});

filtersList.addEventListener('click', (e) => {
  let selection = e.target.getAttribute(dataFilterParam);
  switchFilter(selection);
});

info.addEventListener('click', (e) => {
  let btnAdd = document.querySelector('.add')
  if (e.target.classList.contains(cls.stopPlayback)) {
    stopTrack(currentTrack);
  }
  
  if (e.target.classList.contains(cls.ctrlAdd)) {
    let btn = e.target;
    addTrackToPlaylist(currentTrack, btn);
  }
});

search.addEventListener('click', (e) => searchTracks(e));

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    searchTracks(e);
  }
});


// Functions
function switchFilter(selection) {  
  input.setAttribute(dataFilterType, selection);
  
  if (selection === 'genre') {
    input.placeholder = 'Enter a genre';
  } else if (selection === 'user') {
    input.placeholder = 'Enter a username';
  } else if (selection === 'title') {
    input.placeholder = 'Enter a song title';
  }
  
  filtersList.classList.remove(cls.show);
  input.value = '';
  input.focus();
}

function searchTracks(e) {
  let val = input.value;
  
  html.classList.remove(cls.viewPlaylist);

  while (grid.firstChild) {
    grid.firstChild.remove();
  }

  fetchTracks(val);
}

function fetchTracks(val) {
  let type = input.getAttribute(dataFilterType);
  let options = {limit: 100, kind: 'trending'};
  
  if (type === 'genre') {
    options.genres = val;
  } else {
    options.q = val;
  }
  
  SC.get('/tracks', options).then(function(results) {
    if (results.length > 0) {
      appendTracks(results);
    } else {
      grid.innerHTML = noResultsTpl(val);
    }
  }).catch(function(error) {
    console.log(error);
  });
}

function appendTracks(tracklist) {
  const fragments = document.createDocumentFragment();
  
  tracklist.forEach(track => {
    let div = document.createElement('div');
    let art = track.artwork_url;
    let avatar = track.user.avatar_url;
    let img;
    let title = track.title;
    let attrs = {
      [dataTrackId]: track.id,
      [dataTrackUrl]: track.permalink_url,
      [dataTitle]: track.title,
      [dataUsername]: track.user.username
    };
    
    cls.size = 's' + Math.floor(Math.random() * 2 + 1);
    
    if (art == null) {
      art = avatar.replace('large', 't500x500');
    } else {
      art = art.replace('large', 't500x500');
    }

    setAttributes(div, attrs);
    div.classList.add(cls.track, cls.size);
    div.innerHTML = createAlbumTpl(art, title);
    fragments.appendChild(div);
    div.classList.add(cls.loading);
    img = div.querySelector('img');
    imageLoadingHandler(img);
  });
  
    grid.appendChild(fragments);
    streamTracks();
};

function streamTracks() {
  tracks = document.querySelectorAll('.track');
  
  tracks.forEach(track => {
    let art = track.querySelector('img');
    let id = track.getAttribute(dataTrackId);
    let title = track.getAttribute(dataTitle);
    let user = track.getAttribute(dataUsername);
    let url = track.getAttribute(dataTrackUrl);
    
      SC.stream('/tracks/' + id).then(function(player) {
        track.addEventListener('click', (e) => {
          e.preventDefault();
          currentTrack = track;
          
          if (!track.classList.contains(cls.play)) {
            trackPlayer = player;
            tracks.forEach(track => track.classList.remove(cls.play));
            info.innerHTML = createTrackInfoTpl(art.src, title, url, user);
            imageLoadingHandler(art);
            playTrack(track);
          } else {
            stopTrack(track);
          }
        });
      }).catch(function(error) {
        if (error.status === 404) {
          track.classList.add(cls.error);
        }
      });
  });
};

function playTrack(el) {
  trackPlayer.play();
  info.classList.add(cls.show);
  el.classList.add(cls.play);
}

function stopTrack(el) {
  trackPlayer.pause();
  info.classList.remove(cls.show);
  if (el) el.classList.remove(cls.play);
}

function addTrackToPlaylist(el, btn) {
  let li = document.createElement('li');
  let art = el.querySelector('img').src;
  let id = el.getAttribute(dataTrackId);
  let title = el.getAttribute(dataTitle);
  let user = el.getAttribute(dataUsername);
  let url = el.getAttribute(dataTrackUrl);
  
  btn.innerHTML = iconPlaylistCheck;
  
  li.innerHTML = createTrackPlaylistItem(art, title, url, user);
  li.classList.add('playlist-item');
  li.setAttribute(dataTrackId, id);
  
  playlist.appendChild(li);
  checkPlaylistState();
}

function checkPlaylistState() {
  const container = document.querySelector('.playlist-container');
  const content = container.querySelector('.playlist-content');
  const empty = container.querySelector('.empty-state-container');
  
  if (playlist.childNodes.length > 0) {
    content.classList.remove(cls.hide);
    empty.classList.add(cls.hide);
  } else {
    content.classList.add(cls.hide);
    empty.classList.remove(cls.hide);
  }
  
}

const iconSoundCloud = `
  <svg class="icon-soundcloud" viewBox="0 0 24 24">
    <path fill="currentColor" d="M11.56,8.87V17H20.32V17C22.17,16.87 23,15.73 23,14.33C23,12.85 21.88,11.66 20.38,11.66C20,11.66 19.68,11.74 19.35,11.88C19.11,9.54 17.12,7.71 14.67,7.71C13.5,7.71 12.39,8.15 11.56,8.87M10.68,9.89C10.38,9.71 10.06,9.57 9.71,9.5V17H11.1V9.34C10.95,9.5 10.81,9.7 10.68,9.89M8.33,9.35V17H9.25V9.38C9.06,9.35 8.87,9.34 8.67,9.34C8.55,9.34 8.44,9.34 8.33,9.35M6.5,10V17H7.41V9.54C7.08,9.65 6.77,9.81 6.5,10M4.83,12.5C4.77,12.5 4.71,12.44 4.64,12.41V17H5.56V10.86C5.19,11.34 4.94,11.91 4.83,12.5M2.79,12.22V16.91C3,16.97 3.24,17 3.5,17H3.72V12.14C3.64,12.13 3.56,12.12 3.5,12.12C3.24,12.12 3,12.16 2.79,12.22M1,14.56C1,15.31 1.34,15.97 1.87,16.42V12.71C1.34,13.15 1,13.82 1,14.56Z" />
  </svg>
`;

const iconPlay = `
  <svg class="icon-play" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
  </svg>
`;

const iconPlaylist = `
  <svg class="icon-playlist" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,9H2V11H19V9M19,5H2V7H19V5M2,15H15V13H2V15M17,13V19L22,16L17,13Z" />
  </svg>
`;

const iconPlaylistAdd = `
  <svg class="icon-playlist-add" viewBox="0 0 24 24">
      <path fill="currentColor" d="M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z" />
  </svg>
`;

const iconPlaylistCheck = `
  <svg class="icon-playlist-check" viewBox="0 0 24 24">
      <path fill="currentColor" d="M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z" />
  </svg>
`

const iconPlaylistRemove = `
  <svg class="icon-playlist-add" viewBox="0 0 24 24">
      <path fill="currentColor" d="M2,6V8H14V6H2M2,10V12H10V10H2M14.17,10.76L12.76,12.17L15.59,15L12.76,17.83L14.17,19.24L17,16.41L19.83,19.24L21.24,17.83L18.41,15L21.24,12.17L19.83,10.76L17,13.59L14.17,10.76M2,14V16H10V14H2Z" />
  </svg>
`

const iconPause = `
  <svg class="icon-pause" viewBox="0 0 24 24">
      <path fill="currentColor" d="M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>
`;

const iconStop = `
  <svg class="icon-stop" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,9V15H15V9" />
  </svg>
`;

// Template town
function createAlbumTpl(art, title) {
  return `
    <img class="track-img" src="${art}" alt="Album art for ${title}" />
    <button class="btn-action">
      ${iconStop}
    </button>
  `;
};

function createTrackInfoTpl(art, title, url, user) {
  return `
    <div class="track-info">
      <img class="track-info-img" src="${art}" alt="Album art for ${title}" />
      <div class="track-info-text">
        <span class="track-info-title">${title}</span>
        <span class="track-info-username">${user}</span>
      </div>
    </div>
    <div class="track-controls">
      <a class="btn btn-dark btn-has-icon track-controls-playback stop-playback" target="_blank" title="Stop the current track">
        ${iconStop}
      </a>
      <a class="btn btn-dark btn-has-icon track-controls-add add-to-playlist" target="_blank" title="Add this track to your playlist">
        ${iconPlaylistAdd}
      </a>
      <a class="btn btn-dark btn-has-icon track-controls-view stop-playback" href="${url}" target="_blank" title="View this track page on SoundCloud">
        ${iconSoundCloud}
      </a>
    </div>
  `;
};

function createTrackPlaylistItem(art, title, url, user) {
  return `
    <div class="track-info">
      <img class="track-info-img" src="${art}" alt="Album art for ${title}" />
      <div class="track-info-text">
        <span class="track-info-title">${title}</span>
        <span class="track-info-username">${user}</span>
      </div>
    </div>
    <div class="track-controls">
      <a class="btn btn-dark btn-has-icon track-controls-playback stop-playback" target="_blank" title="Stop the current track">
        ${iconStop}
      </a>
      <a class="btn btn-dark btn-has-icon track-controls-add add-to-playlist" target="_blank" title="Add this track to your playlist">
        ${iconPlaylistRemove}
      </a>
      <a class="btn btn-dark btn-has-icon track-controls-view stop-playback" href="${url}" target="_blank" title="View this track page on SoundCloud">
        ${iconSoundCloud}
      </a>
    </div>
  `;
}

function noResultsTpl(val) {
  return `
    <div class="empty-state-container">
      <h3>There are no results for "${val}"</h3>
      <p>Check your spelling, simplify your search terms, or try searching for something else.</p>
    </div>
  `;
}

// Utility function for setting mutiple attributes
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// Handle image loading
function imageLoadingHandler(img) {
  const placeholder = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/track-placeholder.png';
  
  img.onerror = function() {
    img.setAttribute('src', placeholder);
    img.classList.add('placeholder-img');
  };
  
  img.onload = function() {
    setTimeout(function() {
      img.parentNode.classList.remove(cls.loading);
    }, 500);
  };
}