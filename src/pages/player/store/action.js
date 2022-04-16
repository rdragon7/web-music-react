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

import { 
  getSongDetail, 
  getLyric,
  getSongComment, 
  getSimiPlaylist,
  getSimiSong
} from '@/api/player';

import { parseLyric } from '@/utils/parse-lyric';

export const changeCurrentSongAction = data => ({type: CHANGE_CURRENT_SONG,data});
export const changeSongCommentAction = data => ({type: CHANGE_SONG_COMMENT,data});
export const changeSimiPlayListAction = data => ({type: CHANGE_SIMI_PLAY_LIST,data});
export const changeSimiSongAction = data => ({type: CHANGE_SIMI_SONG,data});
export const changeCurrentPageAction = data => ({type: CHANGE_CURRENT_PAGE,data});
export const changePlayListAction = data => ({type: CHANGE_PLAY_LIST,data});
export const changeCurrentIndexAction = data => ({type: CHANGE_CURRENT_INDEX,data}); 
export const changePlaySequenceAction = data => ({type: CHANGE_PLAY_SEQUENCE,data});
export const changeLyricListAction = data => ({type: CHANGE_LYRIC_LIST,data}); 
export const changeCurrentLyricIndexAction = data => ({type: CHANGE_CURRENT_LYRIC_INDEX,data});
export const changeCurrentSongAnIndexAction = (tag) => {
  return (dispatch,getState) => {
    // 获取需要的信息
    const playSequence = getState().player.playSequence; 
    let currentIndex = getState().player.currentIndex; 
    const playList = getState().player.playList;

    // 2.判断当前播放列表
    switch(playSequence) {
      case 1:
        let randomIndex = Math.floor(Math.random() * playList.length);
        while(randomIndex === currentIndex) {
          randomIndex = Math.floor(Math.random() * playList.length);
        }
        currentIndex = randomIndex;
        break;
      default:
        currentIndex += tag;
        if(currentIndex >= playList.length) {
          currentIndex = 0;
        }
        if(currentIndex < 0) {
          currentIndex = playList.length-1;
        }
    }
    const currentSong = playList[currentIndex];
    dispatch(changeCurrentIndexAction(currentIndex));
    dispatch(changeCurrentSongAction(currentSong));
  }
}

export const getCurrentSongAction = (ids) => {
  return (dispatch,getState) => {
    // 根据id查找playList中是否已经有该歌曲
    const playList = getState().player.playList;
    let currentSongIndex = playList.findIndex(item => item.id === ids);
    // 判断是否找到歌曲
    if(currentSongIndex !== -1) {
      // 找到了改歌曲
      dispatch(changeCurrentIndexAction(currentSongIndex));
      const song = playList[currentSongIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(song.id));
    } else {
      getSongDetail(ids).then(res => {
        const data = res.data.songs && res.data.songs[0];
        const newPlayList = [...playList];
        newPlayList.push(data);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentIndexAction(newPlayList.length-1));
        dispatch(changeCurrentSongAction(data));
        dispatch(getLyricAction(data.id));
      })
    }
  }
}
// 获取歌曲歌词
export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const data = res.data.lrc.lyric;
      const lyricList = parseLyric(data);;
      dispatch(changeLyricListAction(lyricList))
    })
  }
}

export const getSongCommentAction = (id,limit,offset) => {
  return dispatch => {
    getSongComment(id,limit,offset).then(res => {
      const data = res.data;
      dispatch(changeSongCommentAction(data));
    })
  }
}

export const getSimiPlaylistAction = (id) => {
  return dispatch => {
    getSimiPlaylist(id).then(res => {
      const data = res.data.playlists;
      dispatch(changeSimiPlayListAction(data));
    })
  }
}

export const getSimiSongAction = (id) => {
  return dispatch => {
    getSimiSong(id).then(res => {
      const data = res.data.songs;
      dispatch(changeSimiSongAction(data));
    })
  }
}