import placeholder from '../assets/images/track-placeholder.png'

export default {
  current_track: {},
  loading_content: false,
  loading_current_track: false,
  placeholder: placeholder,
  playlist: {
    title: 'Current Playlist',
    tracks: []
  },
  sc_options: {
    kind: 'trending',
    limit: 200
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