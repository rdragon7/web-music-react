import { combineReducers } from 'redux';

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { reducer as rankingReducer } from '@/pages/discover/c-pages/ranking/store';
import { reducer as songReducer} from '@/pages/discover/c-pages/song/store';
import { reducer as radioReducer } from '@/pages/discover/c-pages/radio/store';
import { reducer as artistReducer } from '@/pages/discover/c-pages/artist/store';
import { reducer as albumReducer } from '@/pages/discover/c-pages/album/store';

const reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  song: songReducer,
  radio: radioReducer,
  artist: artistReducer,
  album: albumReducer
})

export default reducer;