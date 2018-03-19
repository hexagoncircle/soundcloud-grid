<template>
  <div id="app" :class="{'viewing-playlist' : viewPlaylist}">
    <grid-filters></grid-filters>
    <main class="view-container">
      <div class="view-overlay"></div>
      <grid :tracks="tracks"></grid>
      <playlist :playlist="playlist"></playlist>
    </main>
    <player v-if="isPlaying" :currentTrack="currentTrack"></player>    
  </div>
</template>

<script>
import Grid from './components/Grid'
import GridFilters from './components/GridFilters'
import Playlist from './components/Playlist'
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
      currentTrack: {},
      isPlaying: false,
      viewPlaylist: false,
      tracks: [
        {
          id: '12345',
          title: 'Test Title',
          user: {
            username: 'User'
          },
          permalink_url: 'http://hexagoncircle.com',
          artwork: {
            alt: 'Album art for Test Title',
            src: 'http://via.placeholder.com/250x250'
          }
        },
        {
          id: '33434',
          title: 'Another Track',
          user: {
            username: 'Dat Hot User Name'
          },
          permalink_url: 'http://hexagoncircle.com',
          artwork: {
            alt: 'Album art for Another Track',
            src: 'http://via.placeholder.com/250x250'
          }
        }
      ],
      playlist: {
        title: 'Current Playlist',
        tracks: [
          {
            id: '12345',
            title: 'Test Title',
            user: {
              username: 'User'
            },
            permalink_url: 'http://hexagoncircle.com',
            artwork: {
              alt: 'Album art for Test Title',
              src: 'http://via.placeholder.com/250x250'
            }
          },
          {
            id: '33434',
            title: 'Another Track',
            user: {
              username: 'Dat Hot User Name'
            },
            permalink_url: 'http://hexagoncircle.com',
            artwork: {
              alt: 'Album art for Another Track',
              src: 'http://via.placeholder.com/250x250'
            }
          }
        ]
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
