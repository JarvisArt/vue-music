import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false, // 播放状态
  fullScreen: false, // 全屏播放
  playlist: [], // 播放列表
  sequenceList: [], // 列表顺序
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放歌曲索引
}

export default state
