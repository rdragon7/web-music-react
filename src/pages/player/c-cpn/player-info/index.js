import React, { memo, useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-data';
import { getSongCommentAction } from '../../store/action';

import ZLSongOperationBar from '@/components/song-operation-bar';
import { PlayerInfoWrapper, InfoLeft, InfoRight } from './style';

export default memo(function ZLPlayerInfo() {
  // state & props
  // 控制歌词收起展开
  const [isSpread, setIsSpread] = useState(false);

  // redux hooks
  const dispatch = useDispatch();
  const { currentSong, songComment, lyricList } = useSelector(state => ({
    currentSong: state.player.currentSong,
    songComment: state.player.songComment,
    lyricList: state.player.lyricList
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id;
    dispatch(getSongCommentAction(id));
  },[dispatch,currentSong])

  // 业务逻辑
  const totalLyricCount = isSpread ? lyricList.length : 13;

  return (
    <PlayerInfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al && currentSong.al.picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="/todo">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong && currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/todo" className="name">{currentSong.ar && currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/todo" className="name">{currentSong.al && currentSong.al.name}</a>
        </div>
        <ZLSongOperationBar favorTitle="收藏"
                            shareTitle="分享"
                            downloadTitle="下载"
                            commentTitle={songComment && songComment.total} />
        <div className="lyric">
          <div className="lyric-info">
            {
              lyricList.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control" onClick={() => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </PlayerInfoWrapper>
  )
})