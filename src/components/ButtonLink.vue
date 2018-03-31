<template>
  <a 
    role="button"
    class="btn"
    :class="`btn-${theme}`"
    :theme=theme
    :title=title
    :aria-label=title
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: ['theme', 'icon', 'title']
}
</script>