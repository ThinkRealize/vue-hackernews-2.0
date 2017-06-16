<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="final-message__wrapper-left modules__wrapper-left"
        data="final-message"
        :style="{backgroundImage: `url(${background})`}">
        <div class="teacher-eye-me">
          {{handleNullString(growthData.teacherComment)}}
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="final-message__wrapper-right modules__wrapper-right"
        data="final-message"
        :style="{backgroundImage: `url(${background})`}">
        <div class="parent-eye-me">{{handleNullString(growthData.parentComment)}}</div>
        <div class="child-language">{{handleNullString(growthData.stuComment)}}</div>
      </div>

    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'

export default {
  name: 'growthPreviewFinalComment',
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
.final-message__wrapper-left,
.final-message__wrapper-right {
}

.teacher-eye-me {
  width: 380px;
  max-height: 150px;
  position: absolute;
  top: 210px;
  left: 60px;
  overflow-y: auto;
  font-size: 16px;
}

.parent-eye-me {
  width: 340px;
  max-height: 100px;
  position: absolute;
  top: 100px;
  left: 85px;
  overflow-y:auto;
  font-size: 16px;
}

.child-language {
  width: 290px;
  max-height: 100px;
  position: absolute;
  top: 315px;
  left: 50px;
  overflow-y:auto;
  font-size: 16px;
}
</style>
