<template>
  <img class="icon" :name="name" :src="require(`../assets/icons/${name}.svg`)" />
</template>

<script>
export default {
  name: 'Icon',
  props: ['name']
}
</script>

<style>

</style>
