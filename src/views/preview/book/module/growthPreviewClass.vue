<template>
  <div class="book__content-right">
    <div
      class="health__wrapper-right modules__wrapper-right"
      data="health"
      :style="{backgroundImage: `url(${background})`}">
      <div class="health__content-right">
        <div class="health-top" data="health-right">
          <div class="health-describe">
            <h3>班级合影</h3>
            <img class="class-photo" :src="handleNullString(growthData.picpath)">
          </div>
        </div>
        <div class="health-bottom" data="health-right">
          <div class="health-describe">
            <h3>班级成员</h3>
            <div class="class-members">
              {{handleNullString(growthData.content)}}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewClass',
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
    }
  },
  mixins: [handleNull],
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
</style>
