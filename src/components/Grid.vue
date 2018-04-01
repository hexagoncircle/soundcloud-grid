<template>
  <section id="grid" class="track-grid">
    <div v-if="loading" class="empty-state-container">
      <h3>Fetching tracks...</h3>
    </div>
    <grid-track v-if="!loading" v-for="track in tracks" :key="`grid-${track.id}`" :track="track" />
    <div v-if="!loading && tracks.length === 0" class="empty-state-container">
      <h3>There are no results for {{searchValue}}.</h3>
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
    loading() {
      return this.$store.state.loading;
    },

    searchValue() {
      return this.$store.state.search.static_value;
    },

    tracks() {
      return this.$store.state.tracklist;
    }
  },
  
  created() {
    this.$store.dispatch('fetchTracks');
  }
}
</script>
