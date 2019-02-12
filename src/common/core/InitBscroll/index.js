import InitBscrollComponet from './InitBscroll.vue'
const InitBetterScroll = {
  install: function (Vue) {
    Vue.component('InitBetterScroll', InitBscrollComponet)
  }
}
// 将导出的内容以对象形式导出
export {InitBetterScroll}
