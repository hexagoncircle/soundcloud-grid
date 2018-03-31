export default {
  addToPlaylist: (state, selectedTrack) => {
    let inPlaylist = state.playlist.tracks.some((track, index) => {
      return track.id === selectedTrack.id;
    });

    if (!inPlaylist) {
      state.playlist.tracks.push(selectedTrack);
      state.current_track.in_playlist = true;
    }

    return state.current_track;
  },

  optimizeTrackImage: (state, track) => {
    if (track.artwork_url === null) {
      track.artwork_url = track.user.avatar_url.replace('large', 't500x500');
    } else {
      track.artwork_url = track.artwork_url.replace('large', 't500x500');
    }

    return track.artwork_url;
  },

  removeFromPlaylist: (state, selectedTrack) => {
    state.playlist.tracks.forEach((track, index) => {
      if (track.id === selectedTrack.id) {
        state.playlist.tracks.splice(index, 1);
        state.current_track.in_playlist = false;
      }
    });

    return state.current_track;
  },

  setCurrentTrack: (state, selectedTrack) => {
    state.tracklist.forEach(track => {
      if(track === selectedTrack && !track.is_playing) {
        track.is_playing = true;
        state.current_track = selectedTrack;
      } else {
        track.is_playing = false;
      }
    });

    return state.current_track;
  },

  stopTrack: state => {
    return state.current_track.is_playing = false;
  }
}