<template>
  <img
    :class="`icon icon-${name}`"
    :src="require(`../assets/icons/${name}.svg`)"
  />
</template>

<script>
export default {
  name: 'Icon',
  props: ['name']
}
</script>
