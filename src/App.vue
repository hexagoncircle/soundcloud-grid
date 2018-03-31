<template>
  <div id="app" :class="{'viewing-playlist' : viewPlaylist}">
    <navbar />
    <main class="view-container">
      <div @click="closePlaylist" class="view-overlay"></div>
      <grid />
      <playlist />
    </main>
    <player />
  </div>
</template>

<script>
import Grid from './components/Grid'
import Navbar from './components/Navbar'
import Playlist from './components/Playlist'
import Player from './components/Player'
import { config } from '../app-config'

export default {
  name: 'App',
  components: {
    Grid,
    Navbar,
    Playlist,
    Player
  },

  computed: {
    viewPlaylist() {
      return this.$store.state.view_playlist;
    }
  },

  methods: {
    closePlaylist() {
      this.$store.state.view_playlist = false;
    },

    initSoundCloud() {
      SC.initialize({
        client_id: config.SC_CLIENT_ID
      });
    }
  },

  created() {
    this.initSoundCloud();
  }
}
</script>