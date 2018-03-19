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
      <v-button theme="dark" icon="stop" title="Stop playback of the current track"></v-button>
      <v-button theme="dark" icon="playlist-plus" title="Add this track to the playlist"></v-button>
      <v-button theme="dark" icon="soundcloud" title="Open this track page on SoundCloud"></v-button>
    </div>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'Player',
  components: {
    'v-button': Button
  },
  props: ['currentTrack']
}
</script>

<style>

</style>
