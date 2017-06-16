<template>
  <div>
    <growth-preview-memory
      type="thing"
      :growthData="growthData"
      :background="background"
      :titleList="['我最想做的事', '我最喜欢的游戏', '我不愿意做的事', '我最好的朋友']">
    </growth-preview-memory>
  </div>
</template>
<script>

import growthPreviewMemory from '../component/growthPreviewMemory.vue'
export default {
  name: 'growthPreviewMemoryThing',
  // 按照字母顺序排列各类属性
  created () {
  },
  // 组件
  components: {
    growthPreviewMemory
  },
  // 计算属性
  computed: {
  },
  // 页面数据
  data: function () {
    return {
    }
  },
  // 页面方法
  methods: {
  },
  // 组件属性
  props: {
    growthData: Object,
    background: String
  },
  // 监视属性变化
  watch: {
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
</style>
