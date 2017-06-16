<template>
  <button
    class="growth-record__button"
    type="button"
    @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'growthPreviewButton',
  // 页面方法
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/spring.scss';
</style>
