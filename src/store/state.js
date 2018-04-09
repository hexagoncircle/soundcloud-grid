import placeholder from '../assets/images/track-placeholder.png'

export default {
  current_track: {},
  sc_player: null,
  loading: true,
  sc_options: {
    kind: 'trending',
    limit: 100
  },
  placeholder: placeholder,
  playlist: {
    title: 'Current Playlist',
    tracks: []
  },
  search: {
    filter_type: 'genre',
    placeholder: 'Enter a genre',
    static_value: '',    
    value: '',
  },
  tracklist: [],
  view_playlist: false    
}