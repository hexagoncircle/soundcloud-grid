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
      <v-button theme="dark" icon="stop" title="Stop playback of the current track"></v-button>
      <v-button theme="dark" icon="playlist-remove" title="Remove this track from the playlist"></v-button>
      <v-button theme="dark" icon="soundcloud" title="Open this track page on SoundCloud"></v-button>
    </div>
  </li>
</template>

<script>
import Button from './Button'

export default {
  name: 'PlaylistTrack',
  components: {
    'v-button': Button
  },
  props: ['track']
}
</script>

<style>

</style>
