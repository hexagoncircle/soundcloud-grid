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
    if (track.artwork_url === null) {
      track.artwork_url = track.user.avatar_url.replace('large', 't500x500');
    } else {
      track.artwork_url = track.artwork_url.replace('large', 't500x500');
    }
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
    selectedTrack.is_playing = !selectedTrack.is_playing;
    state.current_track = selectedTrack;
    state.current_track.is_playing ? state.sc_player.play() : state.sc_player.pause();    
  },

  SET_CURRENT_TIME: (state, time) => {
    var minutes = Math.floor(time / 60);
    var seconds = (Math.floor(time % 60) < 10 ? '0' : '') + Math.floor(time % 60);
    state.current_track.current_time = minutes + ':' + seconds;
  },

  SET_DURATION: (state, time) => {
    var minutes = Math.floor(time / 60);
    var seconds = (Math.floor(time % 60) < 10 ? '0' : '') + Math.floor(time % 60);
    state.current_track.duration = minutes + ":" + seconds;
  }
}