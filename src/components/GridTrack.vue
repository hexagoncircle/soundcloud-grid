<template>
  <transition name="track">
    <div v-show="show_element" :class="`grid-track ${setGridSpan}${track.is_playing ? ' is-playing' : ''}${track.has_error ? ' has-error' : ''}`">
      <button 
        @click="togglePlayback"
        class="btn"
        theme="overlay"
        :title="track.is_playing ? 'Stop playback' : 'Play track'"
        :disabled="track.has_error === true"
      >
        <stop-icon></stop-icon>        
      </button>
      <img
        @error="setPlaceholder"
        @load="imageLoaded"
        :src="track.artwork_url"
        :alt="`Album art for ${track.title}`"
        class="track-image"        
      />
    </div>
  </transition>  
</template>

<script>
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'GridTrack',
  components: {
    StopIcon
  },
  props: ['track'],

  data() {
    return {
      show_element: false
    }
  },

  computed: {
    setGridSpan() {
      return 'span-' + Math.floor(Math.random() * 2 + 1);
    }
  },
  
  methods: {
    imageLoaded() {
      this.show_element = true;
    },

    setPlaceholder() {
      this.track.artwork_url = this.$store.state.placeholder;
    },

    togglePlayback() {
      this.$store.commit('SET_CURRENT_TRACK', this.track); 
    }
  }
}
</script>
