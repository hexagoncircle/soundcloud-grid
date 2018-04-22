<template>
  <transition name="player">
    <div v-show="isPlaying" class="player-container" id="player">
      <audio @timeupdate="updateCurrentTime" ref="audio" :src="streamSrc" autoplay></audio>
      
      <div class="track-content">
        <img class="track-image" :src="currentTrack.artwork_url" :alt="currentTrack.title" />
        <div class="track-info">
          <span class="track-info-title">{{currentTrack.title}}</span>
          <span v-if="currentTrack.user" class="track-info-username">{{currentTrack.user.username}}</span>
        </div>
      </div>

      <div class="track-controls">
        <div class="track-progress">
          <span class="track-current-time">{{currentTime | formatTime}}</span>
          <progress ref="progress" class="track-progress-bar" value="0" max="1"></progress>
          <span class="track-duration">{{duration | formatTime}}</span>
        </div>
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
  </transition>
</template>

<script>
import Button from './Button'
import Link from './ButtonLink'
import PlaylistAddIcon from 'vue-material-design-icons/playlist-plus'
import PlaylistCheckIcon from 'vue-material-design-icons/playlist-check'
import SoundcloudIcon from 'vue-material-design-icons/soundcloud'
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'Player',
  components: {
    'v-button': Button,
    'v-link': Link,
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
      if (this.$refs.audio.duration) {
        this.$refs.progress.value = this.$refs.audio.currentTime / this.$refs.audio.duration;
      } else {
        this.$refs.progress.value = 0;
      }
    },

    updatePlayback() {
      this.$refs.audio.onerror = () => {
        this.$store.state.current_track.has_error = true;
        this.$store.state.current_track.is_playing = false;
      };
      this.isPlaying ? this.$refs.audio.play() : this.$refs.audio.pause();
    },

    updateStreamSource() {
      return this.$store.state.current_track.stream_url !== undefined ? this.$store.state.current_track.stream_url + '?client_id=' + config.SC_CLIENT_ID : '';
    }
  },

  watch: {
    isPlaying() {
      this.updatePlayback();
    }
  }
}
</script>
