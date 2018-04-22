webpackJsonp([1],{"90Dr":function(t,e){},LHSm:function(t,e,i){t.exports=i.p+"static/img/track-placeholder.675418f.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("/5sW"),s=i("NYxO"),r=i("T+v0"),l=i.n(r),n={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn",class:"btn-"+this.theme,attrs:{theme:this.theme,title:this.title,"aria-label":this.title}},[this._t("default")],2)},staticRenderFns:[]};var c=i("VU/8")({name:"Button",props:["theme","icon","title"]},n,!1,function(t){i("90Dr")},null,null).exports,o={name:"stop-circle-outline-icon",props:{title:{type:String,default:"Stop circle outline icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon stop-circle-outline-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,9V15H15V9"}})])])},staticRenderFns:[]},h=i("VU/8")(o,u,!1,null,null,null).exports,d={name:"GridTrack",components:{"v-button":c,StopIcon:h},props:["track"],data:function(){return{show_element:!1}},computed:{setGridSpan:function(){return"span-"+Math.floor(2*Math.random()+1)}},methods:{imageLoaded:function(){this.show_element=!0},setPlaceholder:function(){this.track.artwork_url=this.$store.state.placeholder},togglePlayback:function(){this.$store.commit("SET_CURRENT_TRACK",this.track)}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"track"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_element,expression:"show_element"}],class:"grid-track "+t.setGridSpan+(t.track.is_playing?" is-playing":"")+(t.track.has_error?" has-error":"")},[i("v-button",{attrs:{theme:"overlay",title:t.track.is_playing?"Stop playback":"Play track",disabled:!0===t.track.has_error},nativeOn:{click:function(e){return t.togglePlayback(e)}}},[i("stop-icon")],1),t._v(" "),i("img",{staticClass:"track-image",attrs:{src:t.track.artwork_url,alt:"Album art for "+t.track.title},on:{error:t.setPlaceholder,load:t.imageLoaded}})],1)])},staticRenderFns:[]},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader",attrs:{"aria-label":"Loading content"}},[e("div",{staticClass:"loader-tile"}),this._v(" "),e("div",{staticClass:"loader-tile"}),this._v(" "),e("div",{staticClass:"loader-tile"}),this._v(" "),e("div",{staticClass:"loader-tile"})])}]},v={name:"Grid",components:{GridTrack:i("VU/8")(d,p,!1,null,null,null).exports,Loader:i("VU/8")({name:"Loader"},_,!1,null,null,null).exports},computed:{loading:function(){return this.$store.state.loading},searchValue:function(){return this.$store.state.search.static_value},tracks:function(){return this.$store.state.tracklist}},created:function(){this.$store.dispatch("fetchTracks")}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"track-grid",attrs:{id:"grid"}},[t.loading?i("div",{staticClass:"empty-state-container"},[i("loader"),t._v(" "),i("h3",[t._v("Fetching tracks...")])],1):t._e(),t._v(" "),t._l(t.tracks,function(e){return t.loading?t._e():i("grid-track",{key:"grid-"+e.id,attrs:{track:e}})}),t._v(" "),t.loading||0!==t.tracks.length?t._e():i("div",{staticClass:"empty-state-container"},[i("h3",[t._v("There are no results for "+t._s(t.searchValue)+".")]),t._v(" "),i("p",[t._v("Check your spelling, simplify your search terms, or try searching for something else.")])])],2)},staticRenderFns:[]},m=i("VU/8")(v,f,!1,null,null,null).exports,g={name:"view-grid-icon",props:{title:{type:String,default:"View grid icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon view-grid-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"}})])])},staticRenderFns:[]},k=i("VU/8")(g,y,!1,null,null,null).exports,C={name:"magnify-icon",props:{title:{type:String,default:"Magnify icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon magnify-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M9.5,3C13.09,3 16,5.91 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16C5.91,16 3,13.09 3,9.5C3,5.91 5.91,3 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}})])])},staticRenderFns:[]},P=i("VU/8")(C,V,!1,null,null,null).exports,w={name:"playlist-play-icon",props:{title:{type:String,default:"Playlist play icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon playlist-play-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M19,9H2V11H19V9M19,5H2V7H19V5M2,15H15V13H2V15M17,13V19L22,16L17,13Z"}})])])},staticRenderFns:[]},b=i("VU/8")(w,$,!1,null,null,null).exports,T={name:"settings-icon",props:{title:{type:String,default:"Settings icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon settings-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}})])])},staticRenderFns:[]},L={name:"Navbar",components:{"v-button":c,GridIcon:k,MagnifyIcon:P,PlaylistPlayIcon:b,SettingsIcon:i("VU/8")(T,S,!1,null,null,null).exports},data:function(){return{selected_filter:"genre",show_filters:!1,filters:[{id:1,text:"Genre",param:"genre"},{id:2,text:"Username",param:"user"},{id:3,text:"Track Title",param:"title"}]}},computed:{loading:function(){return this.$store.state.loading},searchFilterType:function(){return this.$store.state.search.filter_type},searchPlaceholder:function(){return this.$store.state.search.placeholder},searchValue:{get:function(){return this.$store.state.search.value},set:function(t){this.$store.state.search.value=t}},viewPlaylist:function(){return this.$store.state.view_playlist}},methods:{toggleFiltersMenu:function(){this.show_filters=!this.show_filters},closeFiltersMenu:function(){this.show_filters=!1},togglePlaylist:function(){this.$store.state.view_playlist=!this.$store.state.view_playlist},selectFilter:function(t,e){t.preventDefault(),this.$store.state.search.filter_type=e,this.$store.state.search.value="",this.$store.state.search.placeholder="Enter a "+e,this.$refs.search.focus(),this.selected_filter=e,this.closeFiltersMenu()},searchTracks:function(){this.$store.dispatch("fetchTracks",this.$store.state.search.value)}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar",attrs:{id:"app-controls"}},[i("v-button",{attrs:{id:"playlist-toggle",theme:"light",title:t.viewPlaylist?"Hide playlist":"Show playlist"},nativeOn:{click:function(e){return t.togglePlaylist(e)}}},[i("playlist-play-icon"),t._v(" "),i("grid-icon")],1),t._v(" "),i("div",{staticClass:"filters-container"},[i("v-button",{class:{"is-active":t.show_filters},attrs:{id:"filters-toggle",theme:"light",title:"Select a filter"},nativeOn:{click:function(e){return t.toggleFiltersMenu(e)}}},[i("settings-icon")],1),t._v(" "),i("transition",{attrs:{name:"filters-menu"}},[t.show_filters?i("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeFiltersMenu,expression:"closeFiltersMenu"}],staticClass:"menu-filters",attrs:{id:"filters-list"}},t._l(t.filters,function(e){return i("li",{key:e.id,staticClass:"menu-item"},[i("a",{staticClass:"menu-item-link",attrs:{"data-filter-param":e.param,href:"#"},on:{click:function(i){t.selectFilter(i,e.param)}}},[t._v("\n            "+t._s(e.text)+"\n          ")])])})):t._e()])],1),t._v(" "),i("div",{staticClass:"search-container"},[i("label",{staticClass:"track-filter-label",attrs:{for:"search-tracks"}},[t._v("Search")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],ref:"search",staticClass:"track-filter-input",attrs:{id:"search-tracks",type:"text",disabled:t.loading,placeholder:t.searchPlaceholder,"data-filter-type":t.searchFilterType},domProps:{value:t.searchValue},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchTracks(e):null},input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),i("v-button",{attrs:{theme:"primary",disabled:!t.searchValue||t.loading,title:t.searchValue?"Click to search for "+t.searchValue:"Enter a search value"},nativeOn:{click:function(e){return t.searchTracks(e)}}},[i("magnify-icon")],1)],1)],1)},staticRenderFns:[]},H=i("VU/8")(L,M,!1,null,null,null).exports,E={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"btn",class:"btn-"+this.theme,attrs:{role:"button",theme:this.theme,title:this.title,"aria-label":this.title}},[this._t("default")],2)},staticRenderFns:[]},x=i("VU/8")({name:"Link",props:["theme","icon","title"]},E,!1,null,null,null).exports,R={name:"play-icon",props:{title:{type:String,default:"Play icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon play-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])])},staticRenderFns:[]},I=i("VU/8")(R,F,!1,null,null,null).exports,O={name:"playlist-remove-icon",props:{title:{type:String,default:"Playlist remove icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon playlist-remove-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M2,6V8H14V6H2M2,10V12H10V10H2M14.17,10.76L12.76,12.17L15.59,15L12.76,17.83L14.17,19.24L17,16.41L19.83,19.24L21.24,17.83L18.41,15L21.24,12.17L19.83,10.76L17,13.59L14.17,10.76M2,14V16H10V14H2Z"}})])])},staticRenderFns:[]},B=i("VU/8")(O,U,!1,null,null,null).exports,A={name:"soundcloud-icon",props:{title:{type:String,default:"Soundcloud icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon soundcloud-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M11.56,8.87V17H20.32V17C22.17,16.87 23,15.73 23,14.33C23,12.85 21.88,11.66 20.38,11.66C20,11.66 19.68,11.74 19.35,11.88C19.11,9.54 17.12,7.71 14.67,7.71C13.5,7.71 12.39,8.15 11.56,8.87M10.68,9.89C10.38,9.71 10.06,9.57 9.71,9.5V17H11.1V9.34C10.95,9.5 10.81,9.7 10.68,9.89M8.33,9.35V17H9.25V9.38C9.06,9.35 8.87,9.34 8.67,9.34C8.55,9.34 8.44,9.34 8.33,9.35M6.5,10V17H7.41V9.54C7.08,9.65 6.77,9.81 6.5,10M4.83,12.5C4.77,12.5 4.71,12.44 4.64,12.41V17H5.56V10.86C5.19,11.34 4.94,11.91 4.83,12.5M2.79,12.22V16.91C3,16.97 3.24,17 3.5,17H3.72V12.14C3.64,12.13 3.56,12.12 3.5,12.12C3.24,12.12 3,12.16 2.79,12.22M1,14.56C1,15.31 1.34,15.97 1.87,16.42V12.71C1.34,13.15 1,13.82 1,14.56Z"}})])])},staticRenderFns:[]},D=i("VU/8")(A,N,!1,null,null,null).exports,G={name:"PlaylistTrack",components:{"v-button":c,"v-link":x,PlayIcon:I,PlaylistRemoveIcon:B,SoundcloudIcon:D,StopIcon:h},props:["track"],methods:{removeFromPlaylist:function(){this.$store.commit("REMOVE_FROM_PLAYLIST",this.track)},togglePlayback:function(){this.$store.commit("SET_CURRENT_TRACK",this.track)}}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"playlist-track"},[i("img",{staticClass:"track-image",attrs:{src:t.track.artwork_url,alt:t.track.title}}),t._v(" "),i("div",{staticClass:"track-info"},[i("span",{staticClass:"track-info-title"},[t._v(t._s(t.track.title))]),t._v(" "),i("span",{staticClass:"track-info-username"},[t._v(t._s(t.track.user.username))])]),t._v(" "),i("div",{staticClass:"track-controls"},[t.track.is_playing?i("v-button",{attrs:{theme:"dark",title:"Stop playback"},nativeOn:{click:function(e){return t.togglePlayback(e)}}},[i("stop-icon")],1):i("v-button",{attrs:{theme:"dark",title:"Play track"},nativeOn:{click:function(e){return t.togglePlayback(e)}}},[i("play-icon")],1),t._v(" "),i("v-button",{attrs:{theme:"dark",title:"Remove this track from the playlist"},nativeOn:{click:function(e){return t.removeFromPlaylist(e)}}},[i("playlist-remove-icon")],1),t._v(" "),i("v-link",{attrs:{href:t.track.permalink_url,target:"_blank",theme:"dark",title:"Open this track on SoundCloud"},nativeOn:{click:function(e){return t.togglePlayback(e)}}},[i("soundcloud-icon")],1)],1)])},staticRenderFns:[]},Y={name:"Playlist",components:{PlaylistTrack:i("VU/8")(G,Z,!1,null,null,null).exports},computed:{playlist:function(){return this.$store.state.playlist}}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"playlist-container"},[t.playlist.tracks.length>0?i("div",{staticClass:"playlist-content"},[i("h2",{staticClass:"playlist-title"},[t._v(t._s(t.playlist.title))]),t._v(" "),i("ul",{staticClass:"playlist",attrs:{id:"playlist"}},t._l(t.playlist.tracks,function(t){return i("playlist-track",{key:"playlist-"+t.id,attrs:{track:t}})}))]):i("div",{staticClass:"empty-state-container"},[i("h3",[t._v("Your playlist is empty")]),t._v(" "),i("p",[t._v('Head back to the grid, select a track and click the "add" button to include a song on your playlist.')])])])},staticRenderFns:[]},q=i("VU/8")(Y,K,!1,null,null,null).exports,X={name:"playlist-plus-icon",props:{title:{type:String,default:"Playlist plus icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon playlist-plus-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z"}})])])},staticRenderFns:[]},z=i("VU/8")(X,j,!1,null,null,null).exports,J={name:"playlist-check-icon",props:{title:{type:String,default:"Playlist check icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"material-design-icon playlist-check-icon",attrs:{"aria-hidden":this.decorative,role:"img","aria-label":this.title}},[e("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:this.fillColor}},[e("title",[this._v(this._s(this.title))]),this._v(" "),e("path",{attrs:{d:"M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z"}})])])},staticRenderFns:[]},Q={name:"Player",components:{"v-button":c,"v-link":x,PlaylistAddIcon:z,PlaylistCheckIcon:i("VU/8")(J,W,!1,null,null,null).exports,SoundcloudIcon:D,StopIcon:h},computed:{currentTrack:function(){return this.$store.getters.getCurrentTrack},currentTime:function(){return this.$store.getters.getCurrentTime},duration:function(){return this.$store.getters.getDuration},hasError:function(){return this.$store.getters.hasError},isPlaying:function(){return this.$store.getters.checkPlayback},inPlaylist:function(){return this.$store.getters.checkPlaylist},streamSrc:function(){return this.$store.getters.getStreamSource}},filters:{formatTime:function(t){return Math.floor(t/6e4)+":"+((Math.floor(t%6e4/1e3)<10?"0":"")+Math.floor(t%6e4/1e3))}},methods:{addToPlaylist:function(){this.$store.commit("ADD_TO_PLAYLIST",this.currentTrack)},removeFromPlaylist:function(){this.$store.commit("REMOVE_FROM_PLAYLIST",this.currentTrack)},togglePlayback:function(){this.$store.commit("SET_CURRENT_TRACK",this.currentTrack)},updateCurrentTime:function(){this.$store.state.current_track.current_time=1e3*this.$refs.audio.currentTime,this.$refs.audio.duration?this.$refs.progress.value=this.$refs.audio.currentTime/this.$refs.audio.duration:this.$refs.progress.value=0},updatePlayback:function(){var t=this;this.$refs.audio.onerror=function(){t.$store.state.current_track.has_error=!0,t.$store.state.current_track.is_playing=!1},this.isPlaying?this.$refs.audio.play():this.$refs.audio.pause()},updateStreamSource:function(){return void 0!==this.$store.state.current_track.stream_url?this.$store.state.current_track.stream_url+"?client_id="+config.SC_CLIENT_ID:""}},watch:{isPlaying:function(){this.updatePlayback()}}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"player"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"player-container",attrs:{id:"player"}},[i("audio",{ref:"audio",attrs:{src:t.streamSrc,autoplay:""},on:{timeupdate:t.updateCurrentTime}}),t._v(" "),i("div",{staticClass:"track-content"},[i("img",{staticClass:"track-image",attrs:{src:t.currentTrack.artwork_url,alt:t.currentTrack.title}}),t._v(" "),i("div",{staticClass:"track-info"},[i("span",{staticClass:"track-info-title"},[t._v(t._s(t.currentTrack.title))]),t._v(" "),t.currentTrack.user?i("span",{staticClass:"track-info-username"},[t._v(t._s(t.currentTrack.user.username))]):t._e()])]),t._v(" "),i("div",{staticClass:"track-controls"},[i("div",{staticClass:"track-progress"},[i("span",{staticClass:"track-current-time"},[t._v(t._s(t._f("formatTime")(t.currentTime)))]),t._v(" "),i("progress",{ref:"progress",staticClass:"track-progress-bar",attrs:{value:"0",max:"1"}}),t._v(" "),i("span",{staticClass:"track-duration"},[t._v(t._s(t._f("formatTime")(t.duration)))])]),t._v(" "),i("div",{staticClass:"track-buttons"},[i("v-button",{attrs:{theme:"dark",title:"Stop playback"},nativeOn:{click:function(e){return t.togglePlayback(e)}}},[i("stop-icon")],1),t._v(" "),t.inPlaylist?i("v-button",{attrs:{theme:"dark",title:"Remove this track from the playlist"},nativeOn:{click:function(e){return t.removeFromPlaylist(e)}}},[i("playlist-check-icon")],1):i("v-button",{attrs:{theme:"dark",title:"Add this track to the playlist"},nativeOn:{click:function(e){return t.addToPlaylist(e)}}},[i("playlist-add-icon")],1),t._v(" "),i("v-link",{attrs:{href:t.currentTrack.permalink_url,target:"_blank",theme:"dark",title:"Open this track on SoundCloud"},nativeOn:{click:function(e){return t.togglePlayback(e)}}},[i("soundcloud-icon")],1)],1)])])])},staticRenderFns:[]};const et="c92343835f607734d719d94afcb679d7";var it={name:"App",components:{Grid:m,Navbar:H,Playlist:q,Player:i("VU/8")(Q,tt,!1,null,null,null).exports},methods:{closePlaylist:function(){this.$store.state.view_playlist=!1},initSoundCloud:function(){SC.initialize({client_id:et})}},computed:{viewPlaylist:function(){return this.$store.getters.viewPlaylist}},watch:{viewPlaylist:function(){var t="viewing-playlist",e=document.documentElement;this.viewPlaylist?e.classList.add(t):e.classList.remove(t)}},created:function(){this.initSoundCloud()}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("main",{staticClass:"view-container"},[e("div",{staticClass:"view-overlay",on:{click:this.closePlaylist}}),this._v(" "),e("grid"),this._v(" "),e("playlist")],1),this._v(" "),e("player")],1)},staticRenderFns:[]},st=i("VU/8")(it,at,!1,null,null,null).exports,rt=i("LHSm"),lt={current_track:{},loading:!0,placeholder:i.n(rt).a,playlist:{title:"Current Playlist",tracks:[]},sc_options:{kind:"trending",limit:100},search:{filter_type:"genre",placeholder:"Enter a genre",static_value:"",value:""},tracklist:[],view_playlist:!1};const nt="c92343835f607734d719d94afcb679d7";var ct={checkPlayback:function(t){return t.current_track.is_playing},checkPlaylist:function(t){return t.current_track.in_playlist},getCurrentTrack:function(t){return t.current_track},getCurrentTime:function(t){return t.current_track.current_time},getDuration:function(t){return t.current_track.duration},getStreamSource:function(t){return void 0!==t.current_track.stream_url?t.current_track.stream_url+"?client_id="+nt:""},hasError:function(t){return t.current_track.has_error},trackDuration:function(t){return t.current_track.duration},viewPlaylist:function(t){return t.view_playlist}},ot={ADD_TO_PLAYLIST:function(t,e){t.playlist.tracks.some(function(t,i){return t.id===e.id})||(t.playlist.tracks.push(e),t.current_track.in_playlist=!0)},OPTIMIZE_TRACK_IMAGE:function(t,e){null!==e.artwork_url?e.artwork_url=e.artwork_url.replace("large","t500x500"):e.artwork_url=e.user.avatar_url.replace("large","t500x500")},REMOVE_FROM_PLAYLIST:function(t,e){t.playlist.tracks.forEach(function(i,a){i.id===e.id&&(t.playlist.tracks.splice(a,1),t.current_track.in_playlist=!1)})},SET_CURRENT_TRACK:function(t,e){t.tracklist.concat(t.playlist.tracks).forEach(function(t){t.id!==e.id&&(t.is_playing=!1)}),t.current_track=e,t.current_track.is_playing=!t.current_track.is_playing}},ut={fetchTracks:function(t){var e=this,i=(t.commit,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"");this.state.loading=!0,"genre"===this.state.search.filter_type?(this.state.sc_options.genres=i,this.state.sc_options.q=""):(this.state.sc_options.genres="",this.state.sc_options.q=i),SC.get("/tracks",this.state.sc_options).then(function(t){var i=[];t.forEach(function(t){t.current_time=0,t.has_error=!1,t.is_playing=!1,t.in_playlist=!1,e.commit("OPTIMIZE_TRACK_IMAGE",t),i.push(t)}),e.state.search.static_value=e.state.search.value,e.state.tracklist=i,e.state.loading=!1}).catch(function(t){})}},ht=function(){return new s.a.Store({state:lt,getters:ct,mutations:ot,actions:ut})};i("lPpX");a.a.config.productionTip=!1,a.a.use(s.a),a.a.use(l.a),a.a.prototype.$app_name="Soundcloud Grid",new a.a({el:"#app",store:ht,render:function(t){return t(st)}})},lPpX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b243cd71050bbf7497a0.js.map