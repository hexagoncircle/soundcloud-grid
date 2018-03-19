<template>
  <div :id="id" class="track-grid">
    <h1>Track Grid</h1>
    <grid-track></grid-track>
  </div>
</template>

<script>
import GridTrack from './GridTrack'

export default {
  name: 'Grid',
  components: {
    GridTrack
  },

  data() {
    return {
      id: 'grid'
    }
  }
}
</script>

<style>

</style>
