import { config } from '../../app-config'

export default {
  getCurrentTrack: (state) => state.current_track,
  getStreamSource: (state) => state.current_track.stream_url + '?client_id=' + config.SC_CLIENT_ID,
  checkPlayback: (state) => state.current_track.is_playing,
  checkPlaylist: (state) => state.current_track.in_playlist,
  viewPlaylist: (state) => state.view_playlist
}