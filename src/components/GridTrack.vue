<template>
  <div
    class="track"
    :data-track-id="id"
    :data-title="title"
    :data-username="user.username"
    :data-track-url="permalink_url"
  >
    <img class="track-img" :src="artwork.src" :alt="artwork.alt" />
    <button class="btn-action">
      <icon name="soundcloud"></icon>
      <icon name="stop"></icon>
      <icon name="play"></icon>
    </button>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'GridTrack',
  components: {
    Icon
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
