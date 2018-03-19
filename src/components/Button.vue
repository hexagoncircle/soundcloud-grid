<template>
  <button 
    class="btn"
    :class="{'btn-has-icon': icon}"
    :theme=theme
    :title=title
    :aria-label=title
  >
    <icon v-if=icon :name=icon></icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'Button',
  components: {
    Icon
  },
  props: ['theme', 'icon', 'title']
}
</script>

<style>

</style>
