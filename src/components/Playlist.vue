<template>
  <section class="playlist-container">
    <div v-if="playlist.tracks.length > 0" class="playlist-content">
      <h2 class="playlist-title">{{playlist.title}}</h2>
      <ul id="playlist" class="playlist">
        <playlist-track v-for="track in playlist.tracks" :key="`playlist-${track.id}`" :track="track"></playlist-track>
      </ul>
    </div>
    <div v-else class="empty-state-container">
      <h3>Your playlist is empty</h3>
      <p>Head back to the grid, select a track and click the "add" button to include a song on your playlist.</p>
    </div>
  </section>
</template>

<script>
import PlaylistTrack from './PlaylistTrack'

export default {
  name: 'Playlist',
  components: {
    PlaylistTrack
  },
  
  computed: {
    playlist() {
      return this.$store.state.playlist;
    }
  },
}
</script>