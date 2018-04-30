<template>
  <nav id="app-controls" class="navbar">
    <button
      @click="togglePlaylist"
      id="playlist-toggle"
      class="btn"
      theme="light"
      :title="viewPlaylist ? 'Hide playlist' : 'Show playlist'"
    >
      <playlist-play-icon></playlist-play-icon>
      <grid-icon></grid-icon>
    </button>
    <div class="filters-container">
      <button
        @click="toggleFiltersMenu"
        class="btn"
        :class="{'is-active' : show_filters}"
        id="filters-toggle"
        theme="light"
        title="Select a filter"
      >
        <settings-icon></settings-icon>
      </button>
      <transition name="filters-menu">
        <ul
          v-if="show_filters"
          v-click-outside="closeFiltersMenu"
          class="menu-filters"
          id="filters-list"
        >
          <li class="menu-item" v-for="filter in filters" :key="filter.id">
            <a
              @click="selectFilter($event, filter.param)"
              :data-filter-param="filter.param"
              class="menu-item-link"              
              href="#"
            >
              {{filter.text}}
            </a>
          </li>
        </ul>
      </transition>
    </div>
    <div class="search-container">
      <label class="track-filter-label" for="search-tracks">Search</label>
      <input
        @keyup.enter="searchTracks"
        v-model="searchValue"
        id="search-tracks"
        ref="search"
        class="track-filter-input"
        type="text"
        :disabled="loading"
        :placeholder="searchPlaceholder"
        :data-filter-type="searchFilterType"
      />
      <button
        @click="searchTracks"
        class="btn"
        theme="primary"
        :disabled="!searchValue || loading"
        :title="searchValue ? 'Click to search for ' + searchValue : 'Enter a search value'"
      >
        <magnify-icon></magnify-icon>
      </button>
    </div>
  </nav>
</template>

<script>
import GridIcon from 'vue-material-design-icons/view-grid'
import MagnifyIcon from 'vue-material-design-icons/magnify'
import PlaylistPlayIcon from 'vue-material-design-icons/playlist-play'
import SettingsIcon from 'vue-material-design-icons/settings'

export default {
  name: 'Navbar',
  components: {
    GridIcon,
    MagnifyIcon,
    PlaylistPlayIcon,
    SettingsIcon
  },

  data() {
    return {
      selected_filter: 'genre',
      show_filters: false,
      filters: [
        { id: 1, text: "Genre", param: "genre" },
        { id: 2, text: "Username", param: "user" },
        { id: 3, text: "Track Title", param: "title" }
      ]
    }
  },

  computed: {
    loading() {
      return this.$store.state.loading;
    },

    searchFilterType() {
      return this.$store.state.search.filter_type;
    },

    searchPlaceholder() {
      return this.$store.state.search.placeholder;
    },

    searchValue: {
      get() {
        return this.$store.state.search.value;
      },
      set(value) {
        this.$store.state.search.value = value;
      }
    },

    viewPlaylist() {
      return this.$store.state.view_playlist;
    }
  },

  methods: {
    toggleFiltersMenu() {
      this.show_filters = !this.show_filters;
    },

    closeFiltersMenu() {
      this.show_filters = false;
    },

    togglePlaylist() {
      this.$store.state.view_playlist = !this.$store.state.view_playlist;
    },

    selectFilter(event, type) {
      event.preventDefault();
      this.$store.state.search.filter_type = type;
      this.$store.state.search.value = '';
      this.$store.state.search.placeholder = `Enter a ${type}`;
      this.$refs.search.focus();
      this.selected_filter = type;
      this.closeFiltersMenu();
    },

    searchTracks() {
      this.$store.dispatch('fetchTracks', this.$store.state.search.value);
    }
  }
}
</script>