<template>
  <section id="grid" class="track-grid">
    <grid-track v-for="track in tracks" :key="track.id" :track="track"></grid-track>
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
    }
  }
}
</script>

<style>

</style>
