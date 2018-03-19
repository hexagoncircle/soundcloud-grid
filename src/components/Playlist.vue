<template>
  <div class="playlist-container">
    <div class="playlist-content is-hidden">
      <h2 class="playlist-title">{{playlist.title}}</h2>
      <ul v-if="playlist.tracks.length" id="playlist" class="playlist">
        <playlist-track v-for="track in playlist.tracks" :key="track.id" :track="track"></playlist-track>
      </ul>
    </div>
    <div v-if="!playlist.tracks.length" class="empty-state-container">
      <h3>Your playlist is empty</h3>
      <p>Head back to the grid, select a track and click the "add" button to include a song on your playlist.</p>
    </div>
  </div>
</template>

<script>
import PlaylistTrack from './PlaylistTrack'

export default {
  name: 'Playlist',
  components: {
    PlaylistTrack
  },
  props: ['playlist']
}
</script>

<style>

</style>
