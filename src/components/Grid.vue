<template>
  <section id="grid" class="track-grid">
    <h1>Track Grid</h1>
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
  props: ['tracks']
}
</script>

<style>

</style>
