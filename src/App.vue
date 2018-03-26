<template>
  <div id="app" :class="{'viewing-playlist' : viewPlaylist}">
    <navbar></navbar>
    <main class="view-container">
      <div class="view-overlay"></div>
      <grid></grid>
      <playlist></playlist>
    </main>
    <player v-if="isPlaying"></player>
  </div>
</template>

<script>
import Grid from './components/Grid'
import Navbar from './components/Navbar'
import Playlist from './components/Playlist'
import Player from './components/Player'

export default {
  name: 'App',
  components: {
    Grid,
    Navbar,
    Playlist,
    Player
  },

  data() {
    return {
      viewPlaylist: false,
      isPlaying: false
    }
  },

  computed: {
    tracks() {
      return this.$store.state.tracklist;
    }
  },

  created() {
    this.$store.commit('optimizeTrackImages', this.$store.state.tracklist);
  },

  mounted() {
    // SC.initialize({
    //   client_id: SC_CLIENT_ID
    // });
    // this.fetchTracks('rap');    

  methods: {
    fetchTracks(val) {
      // let type = input.getAttribute(dataFilterType);

      // type === 'genre' ? this.options.genres = val : this.options.q = val;

      SC.get('/tracks', this.options).then(results => {
        if (results.length > 0) {
          this.tracklist = results;
        } else {
          // grid.innerHTML = noResultsTpl(val);
        }
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss">
// ================================================
// Variables
// ================================================
@import url('https://fonts.googleapis.com/css?family=Lato:400,900');
$baseFont: 'Lato', serif;
$bpSm: 500px;
$bpMd: 650px;
$bpLg: 800px;
$basePaddingSm: 6px;
$basePadding: 12px;
$basePaddingLg: 18px;
$baseBorderRadius: 2px;
$baseFontSize: 1em;
$baseTransSpeed: 0.4s;
$gridGap: 6px;
$transTimeFuncEase: cubic-bezier(0.23, 1, 0.32, 1);
$transTimeFuncBounce: cubic-bezier(0.68, -0.25, 0.265, 1.55);

$gridImageSize: 500px;
$playerImageSize: 100px;
$playerImageSizeSm: 54px;

$blue: #46A7D9;
$shade: #0F0F0F;
$darkgray: #3d3d3d;
$darkgraytint: darken($darkgray, 2%);
$lightgray: #ededed;
$gray: gainsboro;
$orange: #ff7700;
$containerBgColor: rgba($shade, 0.9);

// ================================================
// Mixins
// ================================================
@mixin visually-hidden {
  position: absolute !important;
  height: 1px; width: 1px; 
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

@mixin hide-element {
  position: fixed;
  top: 100%;
  opacity: 0;
}

@mixin show-element {
  position: relative;
  top: auto;
  opacity: 1;
}

@mixin track-foundation($size) {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: $size;
  background-color: $darkgray;
  background-image:
    linear-gradient(45deg,
      $darkgray,
      $darkgray 50%,
      $darkgraytint 50%,
      $darkgraytint
    );
  border-radius: $baseBorderRadius;
}

@mixin btn-colors($color, $bg, $hColor: $color, $hBg: $bg) {
  color: $color;
  background-color: $bg;
  
  &:hover {
    color: $hColor;
    background-color: darken($hBg, 10%);
  }
}

// ================================================
// Base
// ================================================
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: white;
  background-color: black;
  font-family: $baseFont;
  line-height: 1.4;
  
  .view-playlist & {
    overflow: hidden;
  }
}

h1, h2, h3, h4, h5, p {
  margin-bottom: $basePaddingLg;
}

h1, h2, h3, h4, h5, strong {
  font-weight: bold;
  line-height: 1.2;
}

h2 {
  font-size: 1.4em;
}

h3 {
  font-size: 1.8em;
  line-height: 1.2;
}

p {
  line-height: 1.5;
}


[class^='icon-'] {
  pointer-events: none;
}

.placeholder-img {
  padding: 20%;
}

.callout-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
}

.view-container {
  position: relative;
  overflow-x: hidden;
}

// ================================================
// Buttons
// ================================================
.btn {
  position: relative;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  padding: 6px 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: $baseFont;
  font-size: 0.8em;
  border: none;
  border-radius: $baseBorderRadius;
  
  &:active {
    transform: translateY(1px);
  }
}

.btn-primary {
  @include btn-colors(white, $orange);
}

.btn-light {
  @include btn-colors(black, $lightgray);
}

.btn-dark {
  @include btn-colors($gray, transparent, $orange);
}

.btn-has-icon {
  display: inline-flex;
  align-items: center;
  
  .btn-text {
    pointer-events: none;
    margin-right: 4px;
    
    @media (max-width: $bpSm) {
      @include visually-hidden;
    }
  }
  
  [class^='icon-'] {
    width: 24px;
  }
}

// ================================================
// Track Grid
// ================================================
.track-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-flow: dense;
  grid-gap: $gridGap;
  padding: 0 $gridGap $gridGap;
  width: 100%;
  transform: translateX(0);
  transition: 
    opacity ($baseTransSpeed * 2) $transTimeFuncEase,
    transform ($baseTransSpeed * 2) $transTimeFuncEase;
  
  @media (min-width: $bpMd) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    
    .span-2 {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
  
  &:hover {
    @media (hover: hover) {
       .track {
          opacity: 0.6;
       }
    }

    .track:hover,
    .track.is-playing {
      opacity: 1;
    } 
  }
  
  .view-playlist & {
    opacity: 0.2;
    transform: translateX(25%);
  }
}

.view-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .view-playlist & {
    z-index: 100;
  }
}

// ================================================
// Track Element
// ================================================
.track {
  @include track-foundation($gridImageSize);
  grid-column: span 1;
  grid-row: span 1;
  z-index: 1;
  opacity: 1;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transition: 
    opacity ($baseTransSpeed * 1.5) ease-out,
    transform $baseTransSpeed $transTimeFuncBounce;
  
  &.is-loading {
    opacity: 0;
  }
  
  &.has-error {
    background-image: repeating-linear-gradient(
      45deg,
      $darkgray,
      $darkgray 5px,
      $darkgraytint 5px,
      $darkgraytint 10px
    );

    img {
      opacity: 0.1 !important;
      transition: opacity ($baseTransSpeed / 2) ease-out;
    }
    
    &:after {
      content: 'Cannot load track';
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.5em;
      text-transform: uppercase;
      letter-spacing: 0.025em;
      text-shadow: rgba(black, 0.2) 1px 1px 0;
      color: white;
    }
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// Track states
.track {
  &:hover,
  &:focus {
    z-index: 2;
    transition: 
      opacity 0.2s ease-out,
      transform 0.3s $transTimeFuncBounce;
  }
  
  &:active {
    transform: scale(0.98);
    transition: transform 0s;
  }
}

// Track actions
.btn-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color ($baseTransSpeed / 2) ease-out;
  
  [class*='icon'] {
    @include hide-element;
    color: white;
  }
  
  .icon-play {
    $size: 30px;
    padding: 2px;
    width: $size;
    height: $size;
    background-color: rgba($shade, 0.8);
    border-radius: 100%;
  }
  
  .icon-pause,
  .icon-stop {
    width: 50%;
    height: 50%;
    opacity: 0;
    transform: scale(0.1) translateY(6px);
    transition: 
      opacity $baseTransSpeed 0.15s ease-out,
      transform $baseTransSpeed $transTimeFuncBounce;
  }
}

// Track playing
.track.is-playing {
  transform: scale(1.1);
  box-shadow: rgba(black, 0.4) 0 2px 12px 6px;
  border: none;
  z-index: 3;
  opacity: 1;
  
  &:active {
    transform: scale(1.08);
    transition: transform 0s;
  }
  
  .btn-overlay {
    opacity: 1;
    background-color: rgba($orange, 0.8);
  }
  
  .icon-play {
    @include hide-element;
  }
  
  .icon-pause,
  .icon-stop {
    @include show-element;
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

// ================================================
// Track Info
// ================================================
.player-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  bottom: $basePadding - $gridGap;
  width: calc(100% - (#{$basePadding} * 2));
  padding: $basePadding;
  margin: 0 $basePadding;
  background-color: $containerBgColor;
  border-radius: $baseBorderRadius;
  z-index: 500;
  opacity: 0;
  transform: translateY(calc(100% + (#{$playerImageSize} / 2) + #{$basePadding}));
  transition: 
    opacity 0s $baseTransSpeed,
    transform $baseTransSpeed $transTimeFuncBounce;
  
  @media (min-width: $bpMd) {
    flex-direction: row;
    align-items: center;
  }
  
  &.is-showing {
    opacity: 1;
    transform: translateY(0);
    transition: transform $baseTransSpeed 0.1s $transTimeFuncEase;
  }
}

.track-info {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
  
  .player-container & {
    margin-bottom: $basePadding;
  
    @media (min-width: $bpMd) {
      margin-bottom: 0;
    } 
  }
  
  .playlist-item & {
    flex: 1;
    margin-bottom: 0;
    
    @media (min-width: $bpSm) {
      padding-left: $basePadding;
      transform: translateX(#{-$basePadding});
      transition: transform ($baseTransSpeed / 2) ease-out;
    } 
  }
  
  .playlist-item:hover & {
    transform: translateX(0);
  }
}
  
.track-info-img {
  @include track-foundation($playerImageSizeSm);
  
  .player-container & {
    @media (min-width: $bpSm) {
      position: absolute;
      bottom: 0;
      margin-top: -$playerImageSize / 2;
      max-width: $playerImageSize;
      box-shadow: rgba(black, 0.2) 0 4px 12px; 
    }
  }
  
  .playlist-item & {
    width: 36px;
  }
}

.track-info-text {
  flex: 1;
  min-width: 0;
  margin-left: $basePadding;
  
  > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .player-container & {
    @media (min-width: $bpSm) {
      margin-left: $playerImageSize + $basePadding;
    }
  }
}

.track-info-title {
  display: block;
  margin-right: 2px;
  margin-bottom: 4px;
  font-size: 1.2em;
  line-height: 1.2;
  color: white;
  
  .playlist-item & {
    font-size: 1em;
  }
}

.track-info-username {
  display: block;
  font-size: 0.8em;
  line-height: 1.2;
  color: lightgray;
}

.track-controls {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  
  @media (min-width: $bpMd) {
    margin-left: $basePadding;
  }
  
  .player-container & {
    .btn-has-icon [class^='icon-'] {
      width: 30px;
    }
  }
  
  .playlist-item & {
    opacity: 0;
    transform: translateX(#{-$basePadding});
    transition: 
      opacity ($baseTransSpeed / 2) ease-out,
      transform ($baseTransSpeed / 2) ease-out;
  }
  
  .playlist-item:hover & {
    opacity: 1;
    transform: translateX(0);
    transition: 
      opacity ($baseTransSpeed / 2) ($baseTransSpeed / 2) ease-out,
      transform ($baseTransSpeed / 2) ($baseTransSpeed / 2) ease-out;
  }
}

// ================================================
// Track Filters
// ================================================
.filters-container {
  position: relative;
}

.navbar {
  display: flex;
  position: sticky;
  top: 0;
  padding: $basePadding;
  width: 100%;
  background-color: $containerBgColor;
  z-index: 300;

  >:not(:last-child) {
    margin-right: 6px;
  }
}

.search-container {
  display: flex;
  flex: 1;
  
  >:not(:last-child) {
    margin-right: 6px;
  }
  
  label {
    @include visually-hidden;
  }

  input {
    flex: 1;
    padding: 8px;
    min-width: 0;
    font-family: $baseFont;
    font-size: $baseFontSize;
    border: none;
    border-radius: $baseBorderRadius;
    
    @media (min-width: $bpLg) {
      max-width: 400px;
    }
  }
}

.menu-filters {
  $itemPadding: 6px;
  pointer-events: none;
  position: absolute;
  top: 100%;
  color: black;
  background-color: white;
  padding: $basePadding;
  width: 150px;
  border-radius: $baseBorderRadius;
  box-shadow: rgba(black, 0.2) 0 2px 6px 0;
  z-index: -1;
  opacity: 0;
  transform: translateY(6px);
  transition: 
    top 0s $baseTransSpeed,
    opacity $baseTransSpeed $transTimeFuncEase,
    transform $baseTransSpeed $transTimeFuncEase;
  
  &.is-showing {
    pointer-events: auto;
    top: calc(100% + 4px);
    z-index: 300;
    opacity: 1;
    transform: translateY(0);
    transition: 
      top 0s,
      opacity $baseTransSpeed $transTimeFuncEase,
      transform $baseTransSpeed $transTimeFuncEase;
  }
  
  &:before {
    $size: 12px;
    content: '';
    position: absolute;
    top: -$size / 2;
    left: ($size * 2) - $itemPadding;
    width: $size;
    height: $size;
    background-color: inherit;
    border-top-left-radius: $baseBorderRadius;
    transform: rotate(45deg);
  }
  
  .menu-item-link {
    display: block;
    padding: ($itemPadding / 2) $itemPadding;
    color: black;
    text-decoration: none;
    
    &:hover {
      color: $blue;
    }
    
    &:active {
      transform: translateY(1px);
    }
  }
}

[id="filters-toggle"] {
  .icon-filter {
    transform: rotate(0);
    transition: transform $baseTransSpeed $transTimeFuncEase;
  }
  
  &.is-active {
    .icon-filter {
      transform: rotate(720deg);
    }
  }
}

[id="playlist-toggle"] {
  position: relative;
  overflow: hidden;
  
  [class^="icon"] {
    transition: transform ($baseTransSpeed * 2) $transTimeFuncEase;
  }
  
  .icon-grid {
    transform: translateX(-150%);
  }
  
  .icon-playlist {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: auto;
  }
  
  .view-playlist & {
    [class^="icon"] {
      transition: transform $baseTransSpeed $transTimeFuncEase;
    }
    
    .icon-grid {
      transform: translateX(0);
    }
    
    .icon-playlist {
      transform: translateX(150%);
    }
  }
}

.empty-state-container {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: $basePadding;
  height: 50vh;
  max-width: 500px;
  text-align: center;
}

// ================================================
// Track Playlist
// ================================================
.playlist-container {
  position: fixed;
  top: 0; left: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  height: 100%;
  background-color: black;
  border-radius: $baseBorderRadius;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform ($baseTransSpeed * 1.5) $transTimeFuncEase;
  
  .view-playlist & {
    transform: translateX(0);
    transition: transform $baseTransSpeed $transTimeFuncEase;
  }
}

.playlist-content {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  margin-top: 60px;
  padding: $basePadding 0 120px;
}

.playlist-label {
  padding: 0 $basePadding;
}

.playlist {
  list-style: none;
  margin-left: 0;
  width: 100%;
}

.playlist-item {
  position: relative;
  overflow: hidden;
  display: flex;
  padding: $basePadding;
  transition: background-color 0.2s ease-out;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-image: linear-gradient(to right, $shade, $shade 50%, transparent);
    transform: translateX(-100%);
    transition: transform $baseTransSpeed ease-out;
    z-index: -1;
  }
  
  &:hover {
    &:before {
      transform: translateX(0);
    }
  }
}

// ================================================
// Actions
// ================================================
.is-hidden {
  display: none;
}

.track-enter-active,
.track-leave-active {
  transition: 
    transform 0.4s 0.2s $transTimeFuncEase,
    opacity 0.4s 0.2s $transTimeFuncEase;
}
.track-enter,
.track-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
</style>