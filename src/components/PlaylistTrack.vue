<template>
  <li
    class="playlist-track"
    :data-track-id="track.id"
    :data-title="track.title"
    :data-username="track.user.username"
    :data-track-url="track.permalink_url"
  >
    <img class="track-img" :src="track.artwork.src" :alt="track.artwork.alt" />
    <div class="track-info-text">
      <span class="track-info-title">{{track.title}}</span>
      <span class="track-info-username">{{track.user.username}}</span>
    </div>
  </li>
</template>

<script>

export default {
  name: 'PlaylistTrack',
  props: ['track']
}
</script>

<style>

</style>
