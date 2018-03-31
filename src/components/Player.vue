<template>
  <transition name="player">
    <div v-show="currentTrack.is_playing" class="player-container" id="player">
      <div class="track-content">
        <img class="track-info-img" :src="currentTrack.artwork_url" :alt="currentTrack.title" />
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
        <v-button @click.native="stopTrack" theme="dark" title="Open this track on SoundCloud">
          <a :href="currentTrack.permalink_url" target="_blank">
            <soundcloud-icon></soundcloud-icon>
          </a>
        </v-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from './Button'
import PlayIcon from 'vue-material-design-icons/play-circle-outline'
import PlaylistAddIcon from 'vue-material-design-icons/playlist-plus'
import PlaylistCheckIcon from 'vue-material-design-icons/playlist-check'
import SoundcloudIcon from 'vue-material-design-icons/soundcloud'
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'Player',
  components: {
    'v-button': Button,
    PlayIcon,
    PlaylistAddIcon,
    PlaylistCheckIcon,
    SoundcloudIcon,
    StopIcon
  },

  methods: {
    addToPlaylist() {
      this.$store.commit('addToPlaylist', this.currentTrack);
    },

    removeFromPlaylist() {
      this.$store.commit('removeFromPlaylist', this.currentTrack);
    },

    stopTrack() {
      this.$store.commit('stopTrack', this.currentTrack);
    },
  },
  
  computed: {
    currentTrack() {
      return this.$store.state.current_track;
    }
  }
}
</script>
