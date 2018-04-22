export default {
  ADD_TO_PLAYLIST: (state, selectedTrack) => {
    let inPlaylist = state.playlist.tracks.some((track, index) => {
      return track.id === selectedTrack.id;
    });

    if (!inPlaylist) {
      state.playlist.tracks.push(selectedTrack);
      state.current_track.in_playlist = true;
    }
  },

  OPTIMIZE_TRACK_IMAGE: (state, track) => {
    if (track.artwork_url !== null) track.artwork_url = track.artwork_url.replace('large', 't500x500');
  },

  REMOVE_FROM_PLAYLIST: (state, selectedTrack) => {
    state.playlist.tracks.forEach((track, index) => {
      if (track.id === selectedTrack.id) {
        state.playlist.tracks.splice(index, 1);
        state.current_track.in_playlist = false;
      }
    });
  },

  SET_CURRENT_TRACK: (state, selectedTrack) => {
    state.tracklist.concat(state.playlist.tracks).forEach(track => {
      if (track.id !== selectedTrack.id) track.is_playing = false
    });
    state.current_track = selectedTrack;    
    selectedTrack.is_playing = !selectedTrack.is_playing;
  }
}