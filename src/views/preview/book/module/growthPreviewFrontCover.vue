<template>
  <div
    class="book-parent"
    :style="{'perspective': hover ? '490px' : ''}">
    <div class="book__content-left"></div>
    <div
      class="book__content-right"
      :class="{'book-hover': hover}"
      @mouseout="hover = false"
      @mouseover="hover = true">
      <div
        class="cover-wrapper-right"
        :style="{backgroundImage: `url(${background})`}">
        <div class="cover-details">
          <img
            class="cover-details__avatar"
            :src="growthData.picpath ? growthData.picpath : 'http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/default-baby-portrait.png'">
          <div class="cover-details__school--name">{{growthData.campusName}}</div>
          <div class="cover-details__class-student--name">{{growthData.className}}      {{growthData.stuName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewFrontCover',
  // 按照字母顺序排列各类属性
  created () {
  },
  activated () {
  },
  // 组件
  components: {
  },
  // 计算属性
  computed: {
    // isNullGrowthPreviewBook () {
    //   return  this.$store.priview.isNullGrowthPreviewBook
    // }
  },
  // 页面数据
  data: function () {
    return {
      hover: false,
      growthData: this.$store.getters.growthPreviewCurrentContent.growthData,
      background: this.$store.getters.growthPreviewCurrentContent.background
    }
  },
  mixins: [handleNull],
  // 页面方法
  methods: {
  },
  // 组件属性
  props: {
  },
  watch: {
  // 监视属性变化
    growthData: {
      type: Object,
      default: () => {
        return {
          picpath: '',
          campusName: '',
          className: '',
          stuName: ''
        }         
      }
    },
    background: {
      default: ''
    }    
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/spring.scss';

.book-hover {
  transform-origin: left center 0;
  transform: rotate3d(0,1,0,-1.2deg);
}

.cover-wrapper-right {
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
.cover-details {
    height: 80px;
    padding: 0 40px;
    width: calc(100% - 80px);
    margin-top: 50px;
}

.cover-details__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
}

.cover-details__school--name,
.cover-details__class-student--name {
    height: 40px;
    color: #a58e3b;
    font-size: 16px;
}

.cover-details__school--name {
    line-height: 55px
}

.cover-details__class-student--name {
    line-height: 25px;
}
</style>
