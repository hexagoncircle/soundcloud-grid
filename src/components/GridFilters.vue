<template>
  <div :id="id" class="grid-filters">
    <v-button id="playlist-toggle" type="action" icon="playlist-play" title="Toggle playlist container"></v-button>
    <div class="filters-container">
      <v-button id="filters-toggle" type="action" icon="settings" title="Select a filter"></v-button>
      <ul class="menu-filters" id="filters-list">
        <li class="menu-item" v-for="filter in filters" :key="filter.id">
          <a :data-filter-param="filter.param" href="#">{{filter.text}}</a>
        </li>
      </ul>
    </div>
    <label class="track-filter-label" for="filter-search">Search</label>
    <input class="track-filter-input" type="text" id="filter-search" placeholder="Enter a genre" data-filter-type="genre"/>
    <v-button type="action" icon="magnify" title="Click to search">Search</v-button>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'GridFilters',
  components: {
    'v-button': Button
  },
  
  data() {
    return {
      id: 'filters',
      filters: [
        { id: 1, text: "Genre", param: "genre" },
        { id: 2, text: "Username", param: "user" },
        { id: 3, text: "Track Title", param: "title" }
      ]
    }
  }
}
</script>

<style>

</style>
