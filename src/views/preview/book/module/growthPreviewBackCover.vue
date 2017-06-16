<template>
  <div
    class="book-parent"
    :style="{'perspective': hover ? '490px' : ''}">
    <div
      class="book__content-left"
      :class="{'book-hover': hover}"
      @mouseout="hover = false"
      @mouseover="hover = true">
      <div
        class="back-cover-wrapper-left"
        :style="{backgroundImage: `url(${background})`}">
      </div>
    </div>
    <div class="book__content-right">
    </div>
  </div>
</template>
<script>

export default {
  name: 'growthPreviewBackCover',
  // 按照字母顺序排列各类属性
  created () {
  },
  // 组件
  components: {
  },
  // 计算属性
  computed: {
  },
  // 页面数据
  data: function () {
    return {
      hover: false
    }
  },
  // 页面方法
  methods: {
  },
  // 组件属性
  props: {
    growthData: {
      type: Object,
      default: () => {}
    },
    background: String
  },
  // 监视属性变化
  watch: {
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/spring.scss';
.book-hover {
  transform-origin: right center 0;
  transform: rotate3d(0,1,0,1.2deg);
}
.back-cover-wrapper-left {
  position: absolute;
  overflow: visible;
  width: 490px;
  height: 100%;
  top: 0px;
  right: 0px;
  left: auto;
  z-index: 64;
  background-size: 100% 100%;
}
</style>
