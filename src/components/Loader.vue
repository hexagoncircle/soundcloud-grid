<template>
  <div :class="type === 'tiles' ? 'loader-tiles' : 'loader-spinner'" :aria-label="label">
    <template v-if="type === 'tiles'">
        <div class="loader-tile"></div>
        <div class="loader-tile"></div>
        <div class="loader-tile"></div>
        <div class="loader-tile"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: ['type', 'label']
}
</script>