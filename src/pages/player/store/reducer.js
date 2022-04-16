import { 
  CHANGE_CURRENT_SONG, 
  CHANGE_SONG_COMMENT, 
  CHANGE_SIMI_PLAY_LIST,
  CHANGE_SIMI_SONG,
  CHANGE_CURRENT_PAGE,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_INDEX,
  CHANGE_PLAY_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from './constants';

const defaultState = {
  currentSong: {},
  songComment: {},
  simiPlayList: [],
  simiSong: [],
  currentPage: 1,
  playList: [],
  currentIndex: 0,
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  lyricList: [],
  currentLyricIndex: 0
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch(type) {
    case CHANGE_CURRENT_SONG:
      return {...preState,currentSong: data}
    case CHANGE_SONG_COMMENT:
      return {...preState,songComment: data}
    case CHANGE_SIMI_PLAY_LIST:
      return {...preState,simiPlayList: data}
    case CHANGE_SIMI_SONG:
      return {...preState,simiSong: data}
    case CHANGE_CURRENT_PAGE:
      return {...preState,currentPage: data}
    case CHANGE_PLAY_LIST:
      return {...preState,playList: data}
    case CHANGE_CURRENT_INDEX:
      return {...preState,currentIndex: data}
    case CHANGE_PLAY_SEQUENCE:
      return {...preState,playSequence: data}
    case CHANGE_LYRIC_LIST:
      return {...preState,lyricList: data}
    case CHANGE_CURRENT_LYRIC_INDEX:
      return {...preState,currentLyricIndex: data}
    default:
      return preState
  }
}

export default reducer;