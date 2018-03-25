<template>
  <div
    :class="`track ${gridSpan} ${isPlaying ? 'is-playing' : ''}`"
    :data-track-id="track.id"
    :data-title="track.title"
    :data-username="track.user.username"
    :data-track-url="track.permalink_url"
  >
    <img
      @error="setPlaceholder($event)"
      class="track-img"
      :src="track.artwork_url"
      :alt="`Album art for ${track.title}`"
    />
    <v-button
      @click.native="setSelectedTrack"
      theme="overlay"
      icon="stop"
      :title="isPlaying ? 'Play track' : 'Stop playback'"
    ></v-button>
  </div>
</template>

<script>
import Button from './Button'
import { placeholder } from './mixins/placeholder'

export default {
  name: 'GridTrack',
  components: {
    'v-button': Button
  },
  props: ['track', 'playback'],
  mixins: [placeholder],

  data() {
    return {
      isPlaying: this.playback,
      size: ''
    }
  },
  
  methods: {
    setSelectedTrack() {
      this.isPlaying = !this.isPlaying;
      this.$emit('selected', this.track);
    }
  },

  computed: {
    gridSpan() {
      return 'span-' + Math.floor(Math.random() * 2 + 1);
    }
  },

  created() {
    this.size = this.randomSize();
  }
}
</script>

<style>

</style>
