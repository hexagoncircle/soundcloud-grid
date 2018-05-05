export default {
  fetchTracks({commit}, type = '') {
    commit('SEARCH_TRACKS_BY_TYPE', type);

    SC.get('/tracks', this.state.sc_options).then(tracks => {
      let results = [];

      new Promise((resolve, reject) => {
        tracks.forEach(track => {
          commit('ADD_TRACK_PROPERTIES', track);
          results.push(track);
        });
        resolve();
      })
      .then(() => results.forEach(track => commit('OPTIMIZE_TRACK_IMAGE', track)))
      .then(() => commit('PUSH_TO_TRACKLIST', results))
      .then(() => commit('SHOW_TRACKLIST'));
    }).catch(error => {
      // console.log(error);
    });
  }
}