<template>
  <button :type=type class="btn" :class="{'btn-has-icon': icon}">
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
  props: ['type', 'icon']
}
</script>

<style>

</style>
