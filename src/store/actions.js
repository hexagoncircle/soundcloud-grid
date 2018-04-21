export default {
  fetchTracks({commit}, type = '') {
    this.state.loading = true;
    
    if (this.state.search.filter_type === 'genre') {
      this.state.sc_options.genres = type
      this.state.sc_options.q = '';
    } else {
      this.state.sc_options.genres = '';
      this.state.sc_options.q = type;
    }

    SC.get('/tracks', this.state.sc_options).then(tracks => {
      let results = [];

      tracks.forEach(track => {
        track.is_playing = false;
        track.in_playlist = false;
        track.current_time = null;
        this.commit('OPTIMIZE_TRACK_IMAGE', track);
        results.push(track);
      });

      this.state.search.static_value = this.state.search.value;
      this.state.tracklist = results;
      this.state.loading = false;
    }).catch(error => {
      // console.log(error);
    });
  }
}