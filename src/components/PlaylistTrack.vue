<template>
  <li
    class="playlist-track"
    :data-track-id="track.id"
    :data-title="track.title"
    :data-username="track.user.username"
    :data-track-url="track.permalink_url"
  >
    <img class="track-img" :src="track.artwork.src" :alt="track.artwork.alt" />
    <div class="track-info">
      <span class="track-info-title">{{track.title}}</span>
      <span class="track-info-username">{{track.user.username}}</span>
    </div>
    <div class="track-controls">
      <v-button theme="dark" title="Stop playback of the current track">
        <stop-icon></stop-icon>
      </v-button>
      <v-button theme="dark" title="Remove this track from the playlist">
        <playlist-remove-icon></playlist-remove-icon>
      </v-button>
      <v-button theme="dark" title="Open this track page on SoundCloud">
        <soundcloud-icon></soundcloud-icon>
      </v-button>
    </div>
  </li>
</template>

<script>
import Button from './Button'
import PlaylistRemoveIcon from 'vue-material-design-icons/playlist-remove'
import SoundcloudIcon from 'vue-material-design-icons/soundcloud'
import StopIcon from 'vue-material-design-icons/stop'

export default {
  name: 'PlaylistTrack',
  components: {
    'v-button': Button,
    PlaylistRemoveIcon,
    SoundcloudIcon,
    StopIcon
  },
  props: ['track']
}
</script>

<style>

</style>
