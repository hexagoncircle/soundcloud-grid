<template>
  <li class="playlist-track">
    <img class="track-image" :src="track.artwork_url" :alt="track.title" />
    <div class="track-info">
      <span class="track-info-title">{{track.title}}</span>
      <span class="track-info-username">{{track.user.username}}</span>
    </div>
    <div class="track-controls">
      <v-button @click.native="stopTrack" v-if="track.is_playing" theme="dark" title="Stop playback">
        <stop-icon></stop-icon>
      </v-button>
      <v-button @click.native="playTrack" v-else theme="dark" title="Play track">
        <play-icon></play-icon>
      </v-button>
      <v-button @click.native="removeFromPlaylist" theme="dark" title="Remove this track from the playlist">
        <playlist-remove-icon></playlist-remove-icon>
      </v-button>
      <v-link @click.native="stopTrack" :href="track.permalink_url" target="_blank" theme="dark" title="Open this track on SoundCloud">
        <soundcloud-icon></soundcloud-icon>
      </v-link>
    </div>
  </li>
</template>

<script>
import Button from './Button'
import Link from './ButtonLink'
import PlayIcon from 'vue-material-design-icons/play'
import PlaylistRemoveIcon from 'vue-material-design-icons/playlist-remove'
import SoundcloudIcon from 'vue-material-design-icons/soundcloud'
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'PlaylistTrack',
  components: {
    'v-button': Button,
    'v-link': Link,
    PlayIcon,
    PlaylistRemoveIcon,
    SoundcloudIcon,
    StopIcon
  },
  props: ['track'],

  methods: {
    playTrack() {
      this.$store.commit('SET_CURRENT_TRACK', this.track);
    },

    removeFromPlaylist() {
      this.$store.commit('REMOVE_FROM_PLAYLIST', this.track);
    },

    stopTrack() {
      this.$store.state.current_track.is_playing = false;
    }
  }
}
</script>