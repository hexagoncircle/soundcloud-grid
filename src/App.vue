<template>
  <div id="app" :class="{'viewing-playlist' : viewPlaylist}">
    <navbar></navbar>
    <main class="view-container">
      <div class="view-overlay"></div>
      <grid></grid>
      <playlist></playlist>
    </main>
    <player v-if="isPlaying"></player>
  </div>
</template>

<script>
import Grid from './components/Grid'
import Navbar from './components/Navbar'
import Playlist from './components/Playlist'
import Player from './components/Player'
import config from '../app-config'

export default {
  name: 'App',
  components: {
    Grid,
    Navbar,
    Playlist,
    Player
  },

  data() {
    return {
      viewPlaylist: false,
      isPlaying: false
    }
  },

  computed: {
    tracks() {
      return this.$store.state.tracklist;
    }
  },

  created() {
    this.$store.commit('optimizeTrackImages', this.$store.state.tracklist);
  },

  mounted() {
    // SC.initialize({
    //   client_id: config.SC_CLIENT_ID
    // });
    // this.fetchTracks('rap');   
  },

  methods: {
    fetchTracks(val) {
      // let type = input.getAttribute(dataFilterType);

      // type === 'genre' ? this.options.genres = val : this.options.q = val;

      SC.get('/tracks', this.options).then(results => {
        if (results.length > 0) {
          this.tracklist = results;
        } else {
          // grid.innerHTML = noResultsTpl(val);
        }
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
</style>