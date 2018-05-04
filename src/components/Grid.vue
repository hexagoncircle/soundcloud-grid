<template>
  <section id="grid" class="track-grid">
    <div v-if="loadingContent" class="empty-state-container">
      <loader type="tiles" label="Fetching tracks"></loader>
      <h3>Fetching tracks...</h3>
    </div>
    <grid-track
      v-if="!loadingContent"
      v-for="track in tracklist"
      :key="`grid-${track.id}`"
      :track="track"
    />
    <div v-if="!loadingContent && tracklist.length === 0" class="empty-state-container">
      <h3>There are no results for {{searchValueStatic}}.</h3>
      <p>Check your spelling, simplify your search terms, or try searching for something else.</p>
    </div>
  </section>
</template>

<script>
import GridTrack from './GridTrack'
import Loader from './Loader'
import { mapGetters } from 'vuex';

export default {
  name: 'Grid',
  components: {
    GridTrack,
    Loader
  },

  computed: {
    ...mapGetters([
      'loadingContent',
      'searchValueStatic',
      'tracklist'
    ])
  },
  
  created() {
    this.$store.dispatch('fetchTracks');
  }
}
</script>
