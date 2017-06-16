<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="daily__wrapper-left modules__wrapper-left"
        data="daily"
        :style="{backgroundImage: `url(${background})`}">
        <img class="daily-img" src="http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/default-baby-portrait.png">
        <div class="daily-details">
          <div
            v-for="details of leftDataList"
            class="details-item">
            <img
            class="item-left"
            :src="handleNullString(details.picpath)">
            <div class="item-right">
              <p><span>{{handleNullString(details.publisherName)}}</span></p>
              <p>{{handleNullString(details.content)}}</p>
              <div class="item-img">
                <img
                  v-for="pic of handleNullArray(details.picList)"
                  :src="pic">
              </div>
              <span>{{handleNullString(details.publishTime)}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="daily__wrapper-right modules__wrapper-right"
        data="daily"
        :style="{backgroundImage: `url(${background})`}">
        <div class="daily-details">
          <div
            v-for="details of rightDataList"
            class="details-item">
            <img
            class="item-left"
            :src="handleNullString(details.picpath)">
            <div class="item-right">
              <p><span>{{handleNullString(details.publisherName)}}</span></p>
              <p>{{handleNullString(details.content)}}</p>
              <div class="item-img">
                <img
                  v-for="pic of handleNullArray(details.picList)"
                  :src="pic">
              </div>
              <span>{{handleNullString(details.publishTime)}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
import {split} from '~/common/array'
export default {
  name: 'growthPreviewDaily',
  // 按照字母顺序排列各类属性
  created () {
    let resultList = split(this.growthData, 3)
    this.leftDataList = resultList[0]
    this.rightDataList = resultList.length[1] ? resultList.length[1] : []
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
      leftDataList: [],
      RightDataList: []
    }
  },
  // 页面方法
  methods: {
  },
  mixins: [handleNull],
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
 /* Let's get this party started */

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #f5dc64;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #f5dc64;
}

.daily__wrapper-left,
.daily__wrapper-right {
}

.daily-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  left: 249px;
  top: 68px;
}

.daily-details {
  width: 425px;
  height: 400px;
  position: absolute;
  top: 51px;
  left: 9px;
  margin: 98px 22px 26px;
  overflow-y: auto;
}

.details-item {
  display: flex;
  margin-bottom: 20px;
}

.item-left {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}

.item-right p {
  font-size: 14px;
  color: #5c5c5c;
  line-height: 20px;
}

.item-right p:first-child {
  color: #000;
  margin-bottom: 8px;
}

.item-right p span {
  color: #ffb730;
  font-size: 14px;
}

.item-img {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.item-img img {
  width: 110px;
  height: 110px;
  margin-right: 6px;
}

.item-img img:nth-child(3n) {
  margin-right: 0;
}

.item-right span {
  font-size: 12px;
  color: #a7b5c8;
}

</style>
