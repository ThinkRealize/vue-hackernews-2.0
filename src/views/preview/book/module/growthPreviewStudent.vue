<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="baby-data__wrapper-left modules__wrapper-left"
        data="baby-data"
        :style="{backgroundImage: `url(${background})`}">
        <div class="baby-data__img">
          <img class="baby-data__portrait" :src="growthData.picpath ? growthData.picpath : 'http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/baby-data-portrait.png'">
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="baby-data__wrapper-right modules__wrapper-right"
        data="baby-data"
        :style="{backgroundImage: `url(${background})`}">
        <div class="baby-data__details">
          <div class="baby-data__name">
            <p>姓名：<span>{{handleNullString(growthData.stuName)}}</span></p>
            <p>昵称：<span>{{handleNullString(growthData.alias)}}</span></p>
          </div>
          <div class="baby-data__gender">
            <p>性别：<span>{{handleNullString(growthData.sex) === 1 ? '男' : '女' }}</span></p>
          </div>
          <div class="baby-data__other">
            <p>生日：<span>{{handleNullString(growthData.birthday)}}</span></p>
            <p>年龄：<span>{{handleNullString(growthData.age)}}岁</span></p>
            <p>生肖：<span>{{handleNullString(growthData.chineseZodiac)}}</span></p>
            <p>星座：<span>{{handleNullString(growthData.zodiac)}}</span></p>
            <p>身高(cm)：<span>{{handleNullString(growthData.height)}}</span></p>
            <p>体重(kg)：<span>{{handleNullString(growthData.weight)}}</span></p>
            <p>视力(左)：<span>{{handleNullString(growthData.leftSight)}}</span></p>
            <p>视力(右)：<span>{{handleNullString(growthData.rightSight)}}</span></p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'

export default {
  name: 'growthPreviewStudent',
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

.baby-data__wrapper-left,
.baby-data__wrapper-right {
}

.baby-data__wrapper-left {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.baby-data__img {
    width: 360px;
    height: 360px;
    border: 8px solid #fff;
    border-radius: 18px;
    box-shadow: -2px 2px 6px #ac788e;
}

.baby-data__portrait {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 0;
}

.baby-data__details {
    width: 380px;
    height: 320px;
    position: absolute;
    top: 220px;
    left: 57px;
    background: #fff;
    opacity: 0.9;
    border-radius: 10px;
}

.baby-data__name {
    width: 284px;
    height: 56px;
    margin: 0 auto;
    border-bottom: 1px solid #b07043;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
}

.baby-data__name p {
    width: 38%;
}

.baby-data__gender {
    width: 284px;
    height: 34px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.baby-data__other {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 284px;
    margin: 0 auto;
}

.baby-data__other p {
    height: 34px;
    line-height: 34px;
}

.baby-data__other p:nth-child(even) {
    width: 38%;
}

.baby-data__details p {
    font-size: 16px;
    color: #a69d81;
    padding: 0 5px;
    width: 50%;
}

.baby-data__details span {
    color: #ffb945;
}

</style>
