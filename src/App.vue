<template>
  <div id="app" :class="{'viewing-playlist' : viewPlaylist}">
    <navbar></navbar>
    <main class="view-container">
      <div @click="closePlaylist" class="view-overlay"></div>
      <grid></grid>
      <playlist></playlist>
    </main>
    <player></player>
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

  computed: {
    viewPlaylist() {
      return this.$store.state.view_playlist;
    }
  },

  created() {
    this.initSoundCloud();
  }
}
</script>