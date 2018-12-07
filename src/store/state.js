import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {}, // 歌手
  playing: false, // 播放状态
  fullScreen: false, // 全屏播放
  playlist: [], // 播放列表
  sequenceList: [], // 列表顺序
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放歌曲索引
  disc: {}, // 歌单
  topList: {}, // 排行榜
  searchHistory: loadSearch(), // 搜索历史
  playHistory: loadPlay(), // 播放历史
  favoriteList: loadFavorite()
}

export default state
