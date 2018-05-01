import { config } from '../../config/app-config'

export default {
  checkPlayback: (state) => state.current_track.is_playing,
  checkPlaylist: (state) => state.current_track.in_playlist,
  getCurrentTrack: (state) => state.current_track,
  getCurrentTime: (state) => state.current_track.current_time,
  getDuration: (state) => state.current_track.duration,
  getStreamSource: (state) => state.current_track.stream_url !== undefined ? state.current_track.stream_url + '?client_id=' + config.SC_CLIENT_ID : '',
  getSoundCloudLink: (state) => state.current_track.permalink_url,  
  getTrackProgress: (state) => state.current_track.progress,
  hasError: (state) => state.current_track.has_error,
  loadContent: (state) => state.loading_content,
  loadCurrentTrack: (state) => state.loading_current_track,
  trackDuration: (state) => state.current_track.duration,
  viewPlaylist: (state) => state.view_playlist
}