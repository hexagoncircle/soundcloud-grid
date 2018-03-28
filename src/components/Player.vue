<template>
  <div v-if="currentTrack.length" class="player-container" id="player">
    <div class="track-content">
      <img class="track-img" :src="currentTrack.artwork.src" :alt="currentTrack.artwork.alt" />
      <div class="track-info">
        <span class="track-info-title">{{currentTrack.title}}</span>
        <span class="track-info-username">{{currentTrack.user}}</span>
      </div>
    </div>
    <div class="track-controls">
      <v-button theme="dark" :title="track.isPlaying ? 'Play track' : 'Stop playback'">
        <stop-icon v-if="track.isPlaying"></stop-icon>        
        <play-icon v-else></play-icon>        
      </v-button>
      <v-button theme="dark" title="Add this track to the playlist">
        <playlist-add-icon></playlist-add-icon>
      </v-button>
      <v-button theme="dark" title="Open this track page on SoundCloud">
        <soundcloud-icon></soundcloud-icon>
      </v-button>
    </div>
  </div>
</template>

<script>
import Button from './Button'
import PlayIcon from 'vue-material-design-icons/play-circle-outline'
import PlaylistAddIcon from 'vue-material-design-icons/playlist-plus'
import SoundcloudIcon from 'vue-material-design-icons/soundcloud'
import StopIcon from 'vue-material-design-icons/stop-circle-outline'

export default {
  name: 'Player',
  components: {
    'v-button': Button,
    PlayIcon,
    PlaylistAddIcon,
    SoundcloudIcon,
    StopIcon
  },
  props: ['currentTrack']
}
</script>

<style>

</style>
