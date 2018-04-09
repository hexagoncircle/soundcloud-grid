<template>
  <transition name="player">
    <div v-show="isPlaying" class="player-container" id="player">
      <audio ref="audio" :src="streamSrc" autoPlay></audio>
      
      <div class="track-content">
        <img class="track-image" :src="currentTrack.artwork_url" :alt="currentTrack.title" />
        <div class="track-info">
          <span class="track-info-title">{{currentTrack.title}}</span>
          <span v-if="currentTrack.user" class="track-info-username">{{currentTrack.user.username}}</span>
        </div>
      </div>

      <div class="track-controls">
        <v-button @click.native="stopTrack" theme="dark" title="Stop playback">
          <stop-icon></stop-icon>        
        </v-button>
        <v-button v-if="!currentTrack.in_playlist" @click.native="addToPlaylist" theme="dark" title="Add this track to the playlist">
          <playlist-add-icon></playlist-add-icon>
        </v-button>
        <v-button v-else @click.native="removeFromPlaylist" theme="dark" title="Remove this track from the playlist">
          <playlist-check-icon></playlist-check-icon>
        </v-button>
        <v-link @click.native="stopTrack" :href="currentTrack.permalink_url" target="_blank" theme="dark" title="Open this track on SoundCloud">
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

  methods: {
    addToPlaylist() {
      this.$store.commit('ADD_TO_PLAYLIST', this.currentTrack);
    },

    removeFromPlaylist() {
      this.$store.commit('REMOVE_FROM_PLAYLIST', this.currentTrack);
    },

    stopTrack() {
      this.$store.commit('STOP_TRACK', this.currentTrack);
    },
  },
  
  computed: {
    currentTrack() {
      return this.$store.getters.getCurrentTrack;
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

  watch: {
    inPlaylist() {
      console.log('watch');
    }
  },

  mounted() {
    this.$store.state.sc_player = document.querySelector('audio');
  }
}
</script>
