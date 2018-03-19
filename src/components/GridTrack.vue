<template>
  <div
    class="track"
    :data-track-id="id"
    :data-title="title"
    :data-username="user.username"
    :data-track-url="permalink_url"
  >
    <img class="track-img" :src="artwork.src" :alt="artwork.alt" />
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

  data() {
    return {
      id: '12345',
      title: 'Test Title',
      user: {
        username: 'User'
      },
      permalink_url: 'http://hexagoncircle.com',
      artwork: {
        alt: 'Album art for Test Title',
        src: 'http://via.placeholder.com/250x250'
      },
    }
  }
}
</script>

<style>

</style>
