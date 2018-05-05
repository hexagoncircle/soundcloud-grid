<template>
    <div :class="`grid-track ${setGridSpan}${track.is_playing ? ' is-playing' : ''}${track.has_error ? ' has-error' : ''}`">
      <button 
        @click="togglePlayback"
        class="btn"
        theme="overlay"
        :title="track.is_playing ? 'Stop playback' : 'Play track'"
        :disabled="track.has_error === true"
      >
        <stop-icon></stop-icon>        
      </button>
      <vue-clazy-load :src="track.artwork_url">
        <transition name="fade">
          <img
            v-show="show_image"
            @load="imageLoaded"
            :src="track.artwork_url"
            :alt="`Album art for ${track.title}`"
            class="track-image"        
          />
        </transition>
        <div slot="placeholder">
          <transition name="fade">
            <img 
              v-show="show_image"
              @error="setPlaceholder"
              :src="track.artwork_url"
              class="track-image placeholder-image"
              :alt="`Placeholder image for ${track.title}`"
            />
          </transition>
        </div>
      </vue-clazy-load>
    </div>
</template>

<script>
import StopIcon from 'vue-material-design-icons/stop-circle-outline'
import { VueClazyLoad } from 'vue-clazy-load'

export default {
  name: 'GridTrack',
  components: {
    StopIcon,
    VueClazyLoad
  },
  props: ['track'],

  data() {
    return {
      show_image: false
    }
  },

  computed: {
    setGridSpan() {
      return 'span-' + Math.floor(Math.random() * 2 + 1);
    },
  },
  
  methods: {
    imageLoaded() {
      this.show_image = true;
    },

    setPlaceholder() {
      this.$store.commit('SET_IMAGE_PLACEHOLDER', this.track);
      this.imageLoaded();
    },

    togglePlayback() {
      this.$store.commit('SET_CURRENT_TRACK', this.track); 
    }
  }
}
</script>
