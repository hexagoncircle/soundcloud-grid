<template>
  <li class="playlist-track">
    <img class="track-image" :src="track.artwork_url" :alt="track.title" />
    <div class="track-info">
      <span class="track-info-title">{{track.title}}</span>
      <span class="track-info-username">{{track.user.username}}</span>
    </div>
    <div class="track-controls">
      <v-button @click.native="togglePlayback" v-if="track.is_playing" theme="dark" title="Stop playback">
        <stop-icon></stop-icon>
      </v-button>
      <v-button @click.native="togglePlayback" v-else theme="dark" title="Play track">
        <play-icon></play-icon>
      </v-button>
      <v-button @click.native="removeFromPlaylist" theme="dark" title="Remove this track from the playlist">
        <playlist-remove-icon></playlist-remove-icon>
      </v-button>
      <v-link @click.native="togglePlayback" :href="track.permalink_url" target="_blank" theme="dark" title="Open this track on SoundCloud">
        <soundcloud-icon></soundcloud-icon>
      </v-link>
    </div>
  </li>
</template>

<script>
import PlayIcon from 'vue-material-design-icons/play'
import PlaylistRemoveIcon from 'vue-material-design-icons/playlist-remove'
import SoundcloudIcon from 'vue-material-design-icons/soundcloud'
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'PlaylistTrack',
  components: {
    PlayIcon,
    PlaylistRemoveIcon,
    SoundcloudIcon,
    StopIcon
  },
  props: ['track'],

  methods: {
    removeFromPlaylist() {
      this.$store.commit('REMOVE_FROM_PLAYLIST', this.track);
    },
    
    togglePlayback() {
      this.$store.commit('SET_CURRENT_TRACK', this.track);
    }
  }
}
</script>