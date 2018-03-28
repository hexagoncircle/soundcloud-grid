<template>
  <button 
    class="btn"
    :class="`btn-${theme}`"
    :theme=theme
    :title=title
    :aria-label=title
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['theme', 'icon', 'title']
}
</script>

<style>

</style>
