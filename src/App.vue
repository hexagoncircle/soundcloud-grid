<template>
  <div id="app">
    <grid-filters></grid-filters>
    <grid></grid>
    <playlist></playlist>
  </div>
</template>

<script>
import Grid from './components/Grid'
import GridFilters from './components/GridFilters'
import GridTrack from './components/GridTrack'
import Playlist from './components/Playlist'
import PlaylistTrack from './components/PlaylistTrack'
import Player from './components/Player'


export default {
  name: 'App',
  components: {
    Grid,
    GridFilters,
    Playlist,
    Player
  },

  data() {
    return {
      tracks: [],
      playlist: {
        name: 'Current Playlist',
        tracks: []
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
