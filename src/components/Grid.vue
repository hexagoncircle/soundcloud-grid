<template>
  <section id="grid" class="track-grid">
    <grid-track
      v-for="track in tracks"
      :key="track.id"
      :track="track"
      :playback="isPlaying"
      @selected="setSelectedTrack"
    ></grid-track>
  </section>
</template>

<script>
import GridTrack from './GridTrack'

export default {
  name: 'Grid',
  components: {
    GridTrack
  },
  props: ['tracks'],

  data() {
    return {
      isPlaying: false
    }
  },

  methods: {
    setSelectedTrack(selectedTrack) {
      this.$emit('selected', selectedTrack);
      this.tracks.forEach(track => {
        track === selectedTrack ? track.isPlaying : !track.isPlaying;
      });
    }
  }
}
</script>

<style>

</style>
