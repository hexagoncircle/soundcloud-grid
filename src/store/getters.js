import { config } from '../../app-config'

export default {
  checkPlayback: (state) => state.current_track.is_playing,
  checkPlaylist: (state) => state.current_track.in_playlist,
  getCurrentTrack: (state) => state.current_track,
  getStreamSource: (state) => state.current_track.stream_url + '?client_id=' + config.SC_CLIENT_ID,
  trackDuration: (state) => state.current_track.duration,
  viewPlaylist: (state) => state.view_playlist
}