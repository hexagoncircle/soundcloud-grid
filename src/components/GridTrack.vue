<template>
  <div
    class="track"
    :data-track-id="track.id"
    :data-title="track.title"
    :data-username="track.user.username"
    :data-track-url="track.permalink_url"
  >
    <img class="track-img" :src="track.artwork.src" :alt="track.artwork.alt" />
    <v-button type="action" icon="soundcloud" title="Open track page on SoundCloud"></v-button>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'GridTrack',
  components: {
    'v-button': Button
  },
  props: ['track']
}
</script>

<style>

</style>
