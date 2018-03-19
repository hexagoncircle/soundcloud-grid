<template>
  <div class="icon" :data-name="name">
    <img :src="require(`../assets/icons/${name}.svg`)" />
  </div>
</template>

<script>

export default {
  name: 'Icon',
  props: { name }
}
</script>

<style>

</style>
