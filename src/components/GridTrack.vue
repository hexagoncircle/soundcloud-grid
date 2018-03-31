<template>
  <transition name="track">
    <div
      v-show="show_element"
      :class="`track ${setGridSpan} ${track.is_playing ? 'is-playing' : ''}`"
      :data-track-id="track.id"
      :data-title="track.title"
      :data-username="track.user.username"
      :data-track-url="track.permalink_url"
    >
      <v-button @click.native="selectTrack" theme="overlay" :title="track.is_playing ? 'Stop playback' : 'Play track'">
        <stop-icon></stop-icon>        
      </v-button>
      <img
        @error="setPlaceholder"
        @load="imageLoaded"
        class="track-image"
        :src="track.artwork_url"
        :alt="`Album art for ${track.title}`"
      />
    </div>
  </transition>  
</template>

<script>
import Button from './Button'
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'GridTrack',
  components: {
    'v-button': Button,
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

    selectTrack() {
      this.$store.commit('setCurrentTrack', this.track);
      //this.$store.dispatch('streamTrack', this.$store.state.current_track.id);
    },

    setPlaceholder() {
      this.track.artwork_url = this.$track_placeholder_image;
    }
  }
}
</script>
