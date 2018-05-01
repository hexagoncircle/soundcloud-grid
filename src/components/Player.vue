<template>
  <transition name="player">
    <div v-show="isPlaying" class="player-container" id="player">
      <audio
        ref="audio"
        :src="streamSrc"
        @canplaythrough="trackLoaded"
        @timeupdate="updateCurrentTime"
      ></audio>
      <div class="track-content">
        <img class="track-image" :src="currentTrack.artwork_url" :alt="currentTrack.title" />
        <div class="track-info">
          <span class="track-info-title">{{currentTrack.title}}</span>
          <span v-if="currentTrack.user" class="track-info-username">{{currentTrack.user.username}}</span>
        </div>
      </div>
      <player-controls></player-controls>
    </div>
  </transition>
</template>

<script>
import PlayerControls from './PlayerControls'

export default {
  name: 'Player',
  components: {
    PlayerControls
  },
  
  computed: {
    currentTrack() {
      return this.$store.getters.getCurrentTrack;
    },

    hasError() {
      return this.$store.getters.hasError;
    },

    isPlaying() {
      return this.$store.getters.checkPlayback;
    },

    streamSrc() {
      return this.$store.getters.getStreamSource;
    }
  },

  methods: {
    updateCurrentTime() {
      this.$store.state.current_track.current_time = this.$refs.audio.currentTime * 1000;
      if (this.$refs.audio.duration > 0) {
        this.$store.state.current_track.progress = this.$refs.audio.currentTime / this.$refs.audio.duration;
      }
    },

    trackLoaded() {
      this.$store.state.loading_current_track = false;
    }
  }
}
</script>
