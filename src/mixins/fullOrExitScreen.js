import {fullscreen, exitFullscreen} from '../common/screen'

export default {
  computed: {
    fullscreenLabel () {
      return this.fullscreenState ? '' : '全屏'
    }
  },
  data: function () {
    return {
      fullscreenState: false,
      fullscreenElement: document.documentElement
    }
  },
  watch: {
    fullscreenState (val) {
      val ? fullscreen(this.fullscreenElement) : exitFullscreen()
    }
  }
}
