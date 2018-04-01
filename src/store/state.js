export default {
  current_track: {},
  loading: true,
  sc_options: {
    kind: 'trending',
    limit: 100    
  },
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