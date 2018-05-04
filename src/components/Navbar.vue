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
    <div v-click-outside="closeFiltersMenu" class="filters-container">
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
        @input="updateSearchValue"
        id="search-tracks"
        ref="search"
        class="track-filter-input"
        type="text"
        :value="searchValue"        
        :disabled="loadingContent"
        :placeholder="searchPlaceholder"
        :data-filter-type="searchFilterType"
      />
      <button
        @click="searchTracks"
        class="btn"
        theme="primary"
        :disabled="!searchValue || loadingContent"
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
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';

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
    ...mapGetters([
      'loadingContent',
      'searchFilterType',
      'searchValue',
      'searchPlaceholder',
      'viewPlaylist'
    ]),
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

    selectFilter(e, type) {
      e.preventDefault();
      this.$store.commit('SELECT_FILTER', type);
      this.selected_filter = type;
      this.$refs.search.focus();      
      this.closeFiltersMenu();
    },

    searchTracks() {
      this.$store.dispatch('fetchTracks', this.$store.state.search.value);
    },

    updateSearchValue(e) {
      this.$store.commit('UPDATE_SEARCH_VALUE', e.target.value);
    }
  }
}
</script>