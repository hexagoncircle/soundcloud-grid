<template>
  <transition name="track">
    <div
      v-show="showElement"
      :class="`track ${gridSpan} ${track.isPlaying ? 'is-playing' : ''}`"
      :data-track-id="track.id"
      :data-title="track.title"
      :data-username="track.user.username"
      :data-track-url="track.permalink_url"
    >
      <img
        @error="setPlaceholder($event)"
        @load="imageLoaded()"
        class="track-img"
        :src="track.artwork_url"
        :alt="`Album art for ${track.title}`"
      />
      <v-button
        @click.native="selectTrack"
        theme="overlay"
        icon="stop"
        :title="track.isPlaying ? 'Play track' : 'Stop playback'"
      ></v-button>
    </div>
  </transition>  
</template>

<script>
import Button from './Button'
import { placeholder } from './mixins/placeholder'

export default {
  name: 'GridTrack',
  components: {
    'v-button': Button
  },
  props: ['track'],
  mixins: [placeholder],

  data() {
    return {
      showElement: false
    }
  },
  
  methods: {
    selectTrack() {
      this.$store.commit('setCurrentTrack', this.track);      
    },
    
    imageLoaded() {
      this.showElement = true;
    }
  },

  computed: {
    gridSpan() {
      return 'span-' + Math.floor(Math.random() * 2 + 1);
    }
  }
}
</script>

<style>

</style>
