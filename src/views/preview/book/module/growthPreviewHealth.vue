<template>
  <div class="book__content-left">
    <div
      class="health__wrapper-left modules__wrapper-left"
      data="health"
      :style="{backgroundImage: `url(${background})`}">
      <div class="health__content-left">
        <div class="health-top" data="health-left">
          <div class="health-describe">
            <h3>体检结果</h3>
            <div class="health-result">
              <p>身高(cm):<span>{{handleNullString(growthData.height)}}</span></p>
              <p>体重(kg):<span>{{handleNullString(growthData.weight)}}</span></p>
              <p>视力(左):<span>{{handleNullString(growthData.leftSight)}}</span></p>
              <p>视力(右):<span>{{handleNullString(growthData.rightSight)}}</span></p>
            </div>
          </div>
        </div>
        <div class="health-bottom" data="health-left">
          <div class="health-describe">
            <h3>儿童生长发育指标(参考)</h3>
            <img class="health-standard" src="http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/default-health-standard.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewHealth',
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
