export default {
  fetchTracks({commit}, payload = '') {
    this.state.search.filter_type === 'genre' ? this.state.sc_options.genres = payload : this.state.sc_options.q = payload;
    this.state.loading = true;

    SC.get('/tracks', this.state.sc_options).then(tracks => {
      let results = [];

      tracks.forEach(track => {
        track.is_playing = false;          
        this.commit('optimizeTrackImage', track);
        results.push(track);
      });

      this.state.loading = false;
      this.state.search.static_value = this.state.search.value;
      this.state.tracklist = results;
    }).catch(error => {
      console.log(error);
    });
  },

  streamTrack({commit}, id) {
    SC.stream('/tracks/' + id).then(player => {
      this.state.player = player;
      if (this.state.current_track.is_playing) {
        this.state.player.play();
      } else {
        this.state.player.pause();
      }
    }).catch(function(error) {
        console.log(error);
    });
  }
}