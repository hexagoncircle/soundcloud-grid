<template>
  <transition name="player">
    <div v-show="isPlaying" class="player-container" id="player">
      <audio @canplaythrough="trackLoaded" @timeupdate="updateCurrentTime" ref="audio" :src="streamSrc"></audio>
      
      <div class="track-content">
        <img class="track-image" :src="currentTrack.artwork_url" :alt="currentTrack.title" />
        <div class="track-info">
          <span class="track-info-title">{{currentTrack.title}}</span>
          <span v-if="currentTrack.user" class="track-info-username">{{currentTrack.user.username}}</span>
        </div>
      </div>

      <div class="track-controls">
        <transition name="progress-loading" mode="out-in">
          <div v-if="loadCurrentTrack" key="1" class="track-loading">
            <loader type="spinner" label="Loading track"></loader><span>Loading track...</span>
          </div>
          <div v-else key="2" class="track-progress">
            <span class="track-current-time">{{currentTime | formatTime}}</span>
            <progress ref="progress" class="track-progress-bar" value="0" max="1"></progress>
            <span class="track-duration">{{duration | formatTime}}</span>
          </div>
        </transition>
        <div class="track-buttons">
          <v-button @click.native="togglePlayback" theme="dark" title="Stop playback">
            <stop-icon></stop-icon>        
          </v-button>
          <v-button v-if="inPlaylist" @click.native="removeFromPlaylist" theme="dark" title="Remove this track from the playlist">
            <playlist-check-icon></playlist-check-icon>
          </v-button>
          <v-button v-else @click.native="addToPlaylist" theme="dark" title="Add this track to the playlist">
            <playlist-add-icon></playlist-add-icon>
          </v-button>
          <v-link @click.native="togglePlayback" :href="currentTrack.permalink_url" target="_blank" theme="dark" title="Open this track on SoundCloud">
            <soundcloud-icon></soundcloud-icon>
          </v-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from './Button'
import Link from './ButtonLink'
import Loader from './Loader'
import PlaylistAddIcon from 'vue-material-design-icons/playlist-plus'
import PlaylistCheckIcon from 'vue-material-design-icons/playlist-check'
import SoundcloudIcon from 'vue-material-design-icons/soundcloud'
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'Player',
  components: {
    'v-button': Button,
    'v-link': Link,
    Loader,
    PlaylistAddIcon,
    PlaylistCheckIcon,
    SoundcloudIcon,
    StopIcon
  },
  
  computed: {
    currentTrack() {
      return this.$store.getters.getCurrentTrack;
    },

    currentTime() {
      return this.$store.getters.getCurrentTime;
    },

    duration() {
      return this.$store.getters.getDuration;
    },

    hasError() {
      return this.$store.getters.hasError;
    },

    isPlaying() {
      return this.$store.getters.checkPlayback;
    },

    inPlaylist() {
      return this.$store.getters.checkPlaylist;
    },

    loadCurrentTrack() {
      return this.$store.getters.loadCurrentTrack;
    },

    streamSrc() {
      return this.$store.getters.getStreamSource;
    }
  },

  filters: {
    formatTime(ms) {
      var mins = Math.floor(ms / 60000);
      var secs = (Math.floor(ms % 60000 / 1000) < 10 ? '0' : '') + Math.floor(ms % 60000 / 1000);
      return mins + ':' + secs;
    }
  },

  methods: {
    addToPlaylist() {
      this.$store.commit('ADD_TO_PLAYLIST', this.currentTrack);
    },

    removeFromPlaylist() {
      this.$store.commit('REMOVE_FROM_PLAYLIST', this.currentTrack);
    },

    togglePlayback() {
      this.$store.commit('SET_CURRENT_TRACK', this.currentTrack);
    },
    
    updateCurrentTime() {
      this.$store.state.current_track.current_time = this.$refs.audio.currentTime * 1000;
      if (this.$refs.audio.duration > 0 && this.$refs.progress) {
        this.$refs.progress.value = this.$refs.audio.currentTime / this.$refs.audio.duration;
      }
    },

    trackLoaded() {
      this.$store.state.loading_current_track = false;
    }
  }
}
</script>
