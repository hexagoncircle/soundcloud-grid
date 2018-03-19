<template>
  <div :id="id" class="grid-filters">
    <div class="input-group">
      <button class="btn btn-light btn-has-icon" id="playlist-toggle" title="Toggle playlist">
        <icon name="playlist-play"></icon>
        <icon name="grid"></icon> 
      </button>
      <div class="filters-container">
        <button class="btn btn-light btn-has-icon" id="filters-toggle" title="Toggle filters menu">
          <icon name="settings"></icon>
        </button>
        <ul class="menu-filters" id="filters-list">
          <li class="menu-item" v-for="filter in filters" :key="filter.id">
            <a :data-filter-param="filter.param" href="#">{{filter.text}}</a>
          </li>
        </ul>
      </div>
      <label class="track-filter-label" for="filter-search">Search</label>
      <input class="track-filter-input" type="text" id="filter-search" placeholder="Enter a genre" data-filter-type="genre"/>
      <button class="btn btn-primary btn-has-icon" id="btn-search"><span class="btn-text">Search</span>
        <icon name="magnify"></icon>
      </button>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'GridFilters',
  components: {
    Icon
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
