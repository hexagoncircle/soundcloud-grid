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

  OPTIMIZE_TRACK_IMAGE: (state, track) => {
    if (track.artwork_url !== null) {
      track.artwork_url = track.artwork_url.replace('large', 't500x500');
    } else {
      track.artwork_url = track.user.avatar_url.replace('large', 't500x500');
    }
  },

  REMOVE_FROM_PLAYLIST: (state, selection) => {
    state.playlist.tracks.forEach((track, index) => {
      if (track.id === selection.id) state.playlist.tracks.splice(index, 1);
    });

    if (state.current_track.id === selection.id) state.current_track.in_playlist = false;    
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
  }
}