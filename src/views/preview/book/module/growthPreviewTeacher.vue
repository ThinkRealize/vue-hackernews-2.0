<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="my-teacher__wrapper-left modules__wrapper-left"
        data="my-teacher"
        :style="{backgroundImage: `url(${background})`}">
        <div
          v-if="growthData[0]"
          class="my-teacher__content-left">
          <img
           :src="growthData[0].picpath ? growthData[0].picpath : 'http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/my-teacher-default.png'" />
          <div class="my-teacher__details">
            <p>姓名：{{growthData[0].teacherName}}</p>
            <p>电话：{{growthData[0].phone}}</p>
          </div>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
      class="my-teacher__wrapper-right modules__wrapper-right"
      data="my-teacher"
      :style="{backgroundImage: `url(${background})`}">
        <div
          v-if="growthData[1]"
          class="my-teacher__content-right">
          <img :src="growthData[1].picpath ? growthData[1].picpath : 'http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/my-teacher-default.png'" />
          <div class="my-teacher__details">
            <p>姓名：{{growthData[1].teacherName}}</p>
            <p>电话：{{growthData[1].phone}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'

export default {
  name: 'growthPreviewTeacher',
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

.my-teacher__wrapper-left,
.my-teacher__wrapper-right {
    display: flex;
    justify-content: center;
    align-items: center;
}

div[data="my-teacher"]>div {
    width: 360px;
    height: 420px;
    border: 6px solid rgba(255, 255, 255, 0.8);
    margin-top: 20px;
}

img {
  width: 100%;
  height: 360px;
}

.my-teacher__content-left {
    transform: rotate(-10deg);
}

.my-teacher__content-right {
    transform: rotate(10deg);
}

.my-teacher__details {
    width: 100%;
    height: 60px;
    background: #e5fff5;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: -4px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
}

.my-teacher__details p {
    font-size: 16px;
}

</style>
