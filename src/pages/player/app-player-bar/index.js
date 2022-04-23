import React, { memo, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { 
  getCurrentSongAction, 
  changePlaySequenceAction, 
  changeCurrentSongAnIndexAction,
  changeCurrentLyricIndexAction 
} from '../store/action';
import { getSizeImage, formatMinuteSecond, getPlayUrl } from '@/utils/format-data';

import { Slider } from 'antd';
import ZLPlayerMessage from '../player-message';
import ZLPlayerPanel from '../player-panel';
import ZLPlayerVolume from '../player-volume';
import { 
  AppPlayerBarWrapper, 
  Control, 
  PlayInfo, 
  Operator 
} from './style';

export default memo(function ZLAppPlayerBar() {
  // state & prop
  // 歌曲总时长
  const [duration,setDuration] = useState(0);
  // 歌曲当前播放时间
  const [currentTime,setCurrentTime] = useState(0);
  // 进度条的值
  const [progress,setProgress] = useState(0);
  // 控制是否正在改变进度
  const [isChanging,setIsChanging] = useState(false);
  // 控制歌曲是否播放
  const [isPlay,setIsPlay] = useState(false);
  // 保存歌词
  const [lyricContent,setLyricContent] = useState("");
  // 控制歌曲列表是否显示
  const [showPanel,setShowPanel] = useState(false);
  // 控制音量进度条是否显示
  const [showVolume,setShowVolume] = useState(false);
  // 控制音量
  const [volume,setVolume] = useState(0.5);

  // redux hooks
  const dispatch = useDispatch();
  const { currentSong, playList, playSequence, lyricList, currentLyricIndex } = useSelector(state => ({
    currentSong: state.player.currentSong,
    playList: state.player.playList,
    playSequence: state.player.playSequence,
    lyricList: state.player.lyricList,
    currentLyricIndex: state.player.currentLyricIndex
  }),shallowEqual)


  // other hooks
  const playRef = useRef();
  useEffect(() => {
    dispatch(getCurrentSongAction(167876));
  },[dispatch])

  // 页面一挂载就将当前歌曲的总时长存储起来
  useEffect(() => {
    playRef.current.src=getPlayUrl(currentSong.id);
    playRef.current.play().then(res => {
      setIsPlay(true);
    }).catch(error => {
      setIsPlay(false);
    })
    setDuration(currentSong.dt);
  },[currentSong])

  // 业务逻辑
  // 点击播放按钮播放歌曲
  const playMusic = () => {
    isPlay ? playRef.current.pause() : playRef.current.play(); 
    setIsPlay(!isPlay);
    playRef.current.volume = volume;
  }

  // 当歌曲时间改变触发
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if(!isChanging) {
      // 将歌播放的当前时间存储起来
      setCurrentTime(currentTime * 1000);
      // 根据当前歌曲播放时间设置进度条的值
      setProgress((currentTime * 1000) / duration * 100);
    }
    // 获取当前时间对应的歌词
    let i = 0;
    for(; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if((currentTime*1000) < lyricItem.time) {
        break;
      }
    }
    // 对dispatch进行优化
    const finalIndex = i - 1;
    if(currentLyricIndex !== finalIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex));
      const content = lyricList[finalIndex] && lyricList[finalIndex].content;
      setLyricContent(content);
    }
    // 控制音量
    playRef.current.volume = volume;
  }

  // slider值改变时触发
  const sliderChange = (value) => {
    setIsChanging(true);
    setProgress(value);
    const time = value / 100 * duration ; 
    setCurrentTime(time);
  }

  // 与 onmouseup 触发时机一致，把当前值作为参数传入
  const sliderAfterChange = (value) => {
    const time = value / 100 * duration / 1000;
    playRef.current.currentTime = time;
    setIsChanging(false);
  }

  // 处理歌曲播放方式
  const handleSequence = () => {
    let currentSequence = playSequence + 1;
    if(currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changePlaySequenceAction(currentSequence));
  }

  // 点击播放下一首，上一首歌曲
  const changeMusic = (tag) => {
    dispatch(changeCurrentSongAnIndexAction(tag));
  }

  // 放钱歌曲播放完毕触发
  const timeEnded = () => {
    // 表示当前模式为单曲循环
    if (playSequence === 2 ) {
      playRef.current.currentTime = 0;
      playRef.current.play();
    } else {
      // 如果不是单曲循环，则按照点击下一首的方式进行播放
      dispatch(changeCurrentSongAnIndexAction(1));
    }
  }

  // 改变音量
  const volumeClick = (value) => {
    setVolume(value);
  }

  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlay={isPlay}>
          <button className="sprite_playbar btn prev" onClick={() => changeMusic(-1)}></button>
          <button className="sprite_playbar btn play" onClick={() => playMusic()}></button>
          <button className="sprite_playbar btn next" onClick={() => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage((currentSong.al && currentSong.al.picUrl),35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong && currentSong.name}</span>
              <span className="singer-name">{currentSong.ar && currentSong.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} ></Slider>
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="total-time">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume" onClick={() => setShowVolume(!showVolume)}></button>
            <button className="sprite_playbar btn loop" onClick={() => handleSequence()}></button>
            <button className="sprite_playbar btn playlist" onClick={() => setShowPanel(!showPanel)}>{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={playRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      {
        lyricContent ? <ZLPlayerMessage info={lyricContent} /> : "" 
      }
      {
        showPanel && <ZLPlayerPanel />
      }
      {
        showVolume && <ZLPlayerVolume volumeClick={(value) => volumeClick(value)} volume={volume} />
      }
    </AppPlayerBarWrapper>
  )
})