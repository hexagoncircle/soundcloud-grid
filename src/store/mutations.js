export default {
  ADD_TO_PLAYLIST: (state, selection) => {
    let inPlaylist = state.playlist.tracks.some((track, index) => {
      return track.id === selection.id;
    });

    if (!inPlaylist) {
      state.playlist.tracks.push(selection);
      state.current_track.in_playlist = true;
    }
  },

  ADD_TRACK_PROPERTIES: (state, track) => {
    track.current_time = 0;
    track.progress = 0;        
    track.has_error = false;             
    track.is_playing = false;
    track.in_playlist = false;
  },

  FETCH_TRACKS: (state, type) => {
    state.loading_content = true;
    
    if (state.search.filter_type === 'genre') {
      state.sc_options.genres = type
      state.sc_options.q = '';
    } else {
      state.sc_options.genres = '';
      state.sc_options.q = type;
    }
  },

  OPTIMIZE_TRACK_IMAGE: (state, track) => {
    if (track.artwork_url !== null) {
      track.artwork_url = track.artwork_url.replace('large', 't500x500');
    } else {
      track.artwork_url = track.user.avatar_url.replace('large', 't500x500');
    }
  },

  PUSH_TO_TRACKLIST: (state, tracks) => state.tracklist = tracks,

  REMOVE_FROM_PLAYLIST: (state, selection) => {
    state.playlist.tracks.forEach((track, index) => {
      if (track.id === selection.id) state.playlist.tracks.splice(index, 1);
    });

    if (state.current_track.id === selection.id) state.current_track.in_playlist = false;    
  },

  SELECT_FILTER: (state, type) => {
    state.search.filter_type = type;
    state.search.value = '';
    state.search.placeholder = `Enter a ${type}`;
  },

  SET_CURRENT_TRACK: (state, selection) => {
    const audio = document.querySelector('audio');
    const progress = document.querySelector('progress');

    if (state.current_track.id !== selection.id) {
      state.loading_current_track = true;
      if (progress) progress.value = 0;
      state.current_track.is_playing = false;
      state.current_track = selection;
      audio.load();
    }

    state.current_track.is_playing = !state.current_track.is_playing;
    
    setTimeout(() => {
      state.current_track.is_playing ? audio.play() : audio.pause();    
      audio.onerror = () => {
        state.current_track.has_error = true;
        state.current_track.is_playing = false;
      };
    }, 100);  
  },

  SET_IMAGE_PLACEHOLDER: (state, track) => track.artwork_url = state.placeholder,

  SHOW_TRACKLIST: (state, tracks) => {
    state.search.static_value = state.search.value;
    state.loading_content = false;
  },

  UPDATE_SEARCH_VALUE: (state, value) => state.search.value = value
}