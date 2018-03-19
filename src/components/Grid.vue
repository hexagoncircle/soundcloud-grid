<template>
  <div :id="id" class="track-grid">
    <h1>Track Grid</h1>
    <grid-track v-for="track in tracks" :key="track.id" :track="track"></grid-track>
  </div>
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
      id: 'grid'
    }
  }
}
</script>

<style>

</style>
