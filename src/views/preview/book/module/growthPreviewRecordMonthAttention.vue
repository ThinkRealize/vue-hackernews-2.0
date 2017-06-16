<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="month-attention__wrapper-left modules__wrapper-left"
        data="month-attention"
        :style="{backgroundImage: `url(${background})`}">
        <div class="month-attention__content-left">
          <p>
            {{growthData.length && growthData[0].follow ? handleNullString(growthData[0].follow.content) : ''}}
          </p>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="month-attention__wrapper-right modules__wrapper-right"
        data="month-attention"
        :style="{backgroundImage: `url(${background})`}">
        <div class="month-attention__content-right">
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewRecordMonthAttention',
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
    growthData: Array,
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

.month-attention__wrapper-left,
.month-attention__wrapper-right {
    background: url(http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/month-attention-bg.png);
}

.month-attention__content-left,
.month-attention__content-right {
    width: 400px;
    position: absolute;
    overflow: hidden;
}

.month-attention__content-left {
    height: 500px;
    top: 80px;
    left: 60px;
}

.month-attention__content-right {
    height: 432px;
    top: 148px;
    right: 60px;
}

div[data="month-attention"] p {
    font-size: 16px;
    color: #333;
    line-height: 30px;
    margin-top: 30px;
}

.month-attention__content-left h2 {
    font-size: 28px;
    color: #333;
    line-height: 68px;
    font-weight: normal;
}
</style>
