<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="family__wrapper-left modules__wrapper-left"
        data="family"
        :style="{backgroundImage: `url(${background})`}">
        <div
          class="family-layer"
          :style="{backgroundImage: `url(${background})`}">
        </div>
        <div class="family__content-left">
          <img
            class="mom-img"
            :src="handleNullString(growthData.motherPicpath)">
          <img
            class="family-img"
            :src="handleNullString(growthData.familyPicpath)">
          <img
            class="dad-img"
            :src="handleNullString(growthData.fatherPicpath)">
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="family__wrapper-right modules__wrapper-right"
        data="family"
        :style="{backgroundImage: `url(${background})`}">
        <div class="family__content-right">
          <div class="family-details">
            <div class="details-top">
              <div class="detail-mom">
                <p>我妈妈的名字：<span>{{handleNullString(growthData.motherName)}}</span></p>
                <p>电话：<b>{{handleNullString(growthData.motherPhone)}}</b></p>
                <p>职业：<span>{{handleNullString(growthData.motherCareer)}}</span></p>
                <p>我最喜欢和妈妈一起：<span>{{handleNullString(growthData.motherLike)}}</span></p>
              </div>
              <div class="detail-dad">
                <p>我爸爸的名字：<span>{{handleNullString(growthData.fatherName)}}</span></p>
                <p>电话：<b>{{handleNullString(growthData.fatherPhone)}}</b></p>
                <p>职业：<span>{{handleNullString(growthData.fatherCareer)}}</span></p>
                <p>我最喜欢和爸爸一起：<span>{{handleNullString(growthData.fatherLike)}}</span></p>
              </div>
            </div>
            <div class="details-bottom">
              <p>我家住在：<span>{{handleNullString(growthData.address)}}</span></p>
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
  name: 'growthPreviewFamily',
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
.family__wrapper-left,
.family__wrapper-right {
}

.family-layer {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
}

.family__content-left img {
  position: absolute;
}

.mom-img {
  width: 140px;
  height: 140px;
  top: 62px;
  left: 62px;
  transform: rotate(-30deg);
}

.family-img {
  width: 255px;
  height: 170px;
  top: 229px;
  left: 114px;
}

.dad-img {
  width: 161px;
  height: 148px;
  top: 411px;
  left: 29px;
  transform: rotate(15deg);
}

.family-details {
  width: 463px;
  height: 390px;
  position: absolute;
  right: 13px;
  top: 152px;
  padding: 0 18px
}

.details-top {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #d3d1c5;
  margin: 40px 0 20px;
  padding-bottom: 19px;
}

.details-top>div {
  width: 48%;
  height: auto;
  &:last-child{
    width: 52%;
  }
  p{
    &:last-child{
    line-height: 24px;
    }
  }
}

.detail-mom {
  border-right: 1px solid #d3d1c5;
}

.detail-dad {
  padding-left: 26px;
}

div[data="family"] p {
  font-size: 16px;
  color: #a29b7f;
  line-height: 36px;
}

div[data="family"] p span {
  color: #feb742;
}

div[data="family"] p b {
  color: #78e205;
  font-size: 18px;
  font-weight: normal;
}

.details-top div p:first-child {
  line-height: 14px;
  margin-bottom: 40px;
}
</style>
