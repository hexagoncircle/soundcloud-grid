<template>
  <li class="playlist-track">
    <img class="track-image" :src="track.artwork_url" :alt="track.title" />
    <div class="track-info">
      <span class="track-info-title">{{track.title}}</span>
      <span class="track-info-username">{{track.user.username}}</span>
    </div>
    <div class="track-controls">
      <button @click="togglePlayback" v-if="track.is_playing" class="btn" theme="dark" title="Stop playback">
        <stop-icon></stop-icon>
      </button>
      <button @click="togglePlayback" v-else class="btn" theme="dark" title="Play track">
        <play-icon></play-icon>
      </button>
      <button @click="removeFromPlaylist" class="btn" theme="dark" title="Remove this track from the playlist">
        <playlist-remove-icon></playlist-remove-icon>
      </button>
      <a @click="togglePlayback" :href="track.permalink_url" class="btn" theme="dark" target="_blank" rel="noopener" title="Open this track on SoundCloud">
        <soundcloud-icon></soundcloud-icon>
      </a>
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