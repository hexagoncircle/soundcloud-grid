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
      if (track.id === selection.id) {
        state.playlist.tracks.splice(index, 1);
        state.current_track.in_playlist = false;
      }
    });
  },

  SET_CURRENT_TRACK: (state, selection) => {
    state.tracklist.concat(state.playlist.tracks).forEach(track => {
      if (track.id !== selection.id) track.is_playing = false
    });
    state.current_track = selection;
    state.current_track.is_playing = !state.current_track.is_playing;
  }
}