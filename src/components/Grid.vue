<template>
  <section id="grid" class="track-grid">
    <grid-track v-for="track in tracks" :key="`grid-${track.id}`" :track="track" />
    <div v-if="!tracks" class="empty-state-container">
      <h3>There are no results.</h3>
      <p>Check your spelling, simplify your search terms, or try searching for something else.</p>
    </div>
  </section>
</template>

<script>
import GridTrack from './GridTrack'

export default {
  name: 'Grid',
  components: {
    GridTrack
  },

  computed: {
    tracks() {
      return this.$store.state.tracklist;
    },
  },
  
  created() {
    this.$store.dispatch('fetchTracks');
  }
}
</script>
