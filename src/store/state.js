import placeholder from '../assets/images/track-placeholder.png'

export default {
  current_track: {},
  loading: true,
  placeholder: placeholder,
  playlist: {
    title: 'Current Playlist',
    tracks: []
  },
  sc_options: {
    kind: 'trending',
    limit: 100
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