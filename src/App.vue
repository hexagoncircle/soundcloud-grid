<template>
  <div id="app">
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
    }
  },

  computed: {
    viewPlaylist() {
      return this.$store.getters.viewPlaylist;
    }
  },

  watch: {
    viewPlaylist() {
      const cls = 'viewing-playlist';
      const html = document.documentElement;

      this.viewPlaylist ? html.classList.add(cls) : html.classList.remove(cls);
    }
  },

  created() {
    this.$store.dispatch('initSoundCloud');
  }
}
</script>