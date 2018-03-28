<template>
  <nav id="app-controls" class="navbar">
    <v-button id="playlist-toggle" theme="light" title="Toggle playlist container">
      <playlist-play-icon></playlist-play-icon>
    </v-button>
    <div class="filters-container">
      <v-button id="filters-toggle" theme="light" title="Select a filter">
        <settings-icon></settings-icon>
      </v-button>
      <ul class="menu-filters" id="filters-list">
        <li class="menu-item" v-for="filter in filters" :key="filter.id">
          <a :data-filter-param="filter.param" href="#">{{filter.text}}</a>
        </li>
      </ul>
    </div>
    <div class="search-container">
      <label class="track-filter-label" for="filter-search">Search</label>
      <input class="track-filter-input" type="text" id="filter-search" placeholder="Enter a genre" data-filter-type="genre" />
      <v-button theme="primary" :title="'Click to search by ' + selectedFilter">
        <magnify-icon></magnify-icon>
      </v-button>
    </div>
  </nav>
</template>

<script>
import Button from './Button'
import MagnifyIcon from 'vue-material-design-icons/magnify'
import PlaylistPlayIcon from 'vue-material-design-icons/playlist-play'
import SettingsIcon from 'vue-material-design-icons/settings'

export default {
  name: 'Navbar',
  components: {
    'v-button': Button,
    MagnifyIcon,
    PlaylistPlayIcon,
    SettingsIcon
  },

  data() {
    return {
      selectedFilter: 'genre',
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
