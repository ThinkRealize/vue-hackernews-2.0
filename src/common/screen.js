/**
 * 调用Element节点的requestFullscreen方法，可以使得这个节点全屏。
 * 例子：fullscreen(document.documentElement)
 * fullscreen(document.getElementById("videoElement"))
 * @param  {Element} element Element节点
 */
export function fullscreen (element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}
/**
 * document对象的exitFullscreen方法用于取消全屏
 */
export function exitFullscreen () {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
