import { config } from '../../app-config'

export default {
  checkPlayback: (state) => state.current_track.is_playing,
  checkPlaylist: (state) => state.current_track.in_playlist,
  getCurrentTrack: (state) => state.current_track,
  getCurrentTime: (state) => state.current_track.current_time,
  getDuration: (state) => state.current_track.duration,
  getPlayer: (state) => state.sc_player,
  getStreamSource: (state) => state.current_track.permalink_url !== undefined ? state.current_track.stream_url + '?client_id=' + config.SC_CLIENT_ID : '',
  trackDuration: (state) => state.current_track.duration,
  viewPlaylist: (state) => state.view_playlist
}