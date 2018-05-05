import { config } from '../../config/app-config'

export default {
  isPlaying: (state) => state.current_track.is_playing,
  inPlaylist: (state) => state.current_track.in_playlist,
  currentTrack: (state) => state.current_track,
  currentTime: (state) => state.current_track.current_time,
  duration: (state) => state.current_track.duration,
  placeholder: (state) => state.placeholder,
  playlist: (state) => state.playlist.tracks,
  streamSource: (state) => state.current_track.stream_url !== undefined ? state.current_track.stream_url + '?client_id=' + config.SC_CLIENT_ID : '',
  soundcloudUrl: (state) => state.current_track.permalink_url,  
  searchFilterType: (state) => state.search.filter_type,
  searchPlaceholder: (state) => state.search.placeholder,
  searchValue: (state) => state.search.value,
  searchValueStatic: (state) => state.search.static_value,
  tracklist: (state) => state.tracklist,
  trackProgress: (state) => state.current_track.progress,
  hasError: (state) => state.current_track.has_error,
  loadingContent: (state) => state.loading_content,
  loadingCurrentTrack: (state) => state.loading_current_track,
  duration: (state) => state.current_track.duration,
  viewPlaylist: (state) => state.view_playlist
}