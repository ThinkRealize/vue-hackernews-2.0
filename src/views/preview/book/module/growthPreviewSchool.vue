<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
      class="my-kindergarten__wrapper-left modules__wrapper-left"
      data="my-kindergarten"
      :style="{backgroundImage: `url(${background})`}">
        <div class="my-kindergarten__content-left">
          <h2>{{growthData.title}}</h2>
          <p>{{growthData.content}}</p>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="my-kindergarten__wrapper-right modules__wrapper-right"
        data="my-kindergarten"
        :style="{backgroundImage: `url(${background})`}">
        <div class="my-kindergarten__content-right">
          <el-carousel
            class="el-carousel-style"
            indicator-position="outside">
            <el-carousel-item 
              v-for="pic of growthData.picList"
              :key="pic">
              <img
                class="el-carousel__img"
                :src="pic">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewSchool',
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
.my-kindergarten__wrapper-left,
.my-kindergarten__wrapper-right {
}

.my-kindergarten__content-left {
  width: 400px;
  position: absolute;
  overflow: hidden;
}

.my-kindergarten__content-left {
  height: 500px;
  top: 70px;
  left: 60px;
}

div[data="my-kindergarten"] p {
  font-size: 16px;
  color: #333;
  line-height: 24px;
  text-indent: 2em;
  overflow-y: auto;
  max-height: 399px;
}

.my-kindergarten__content-left h2 {
  font-size: 30px;
  color: #333;
  font-weight: normal;
  margin-bottom: 68px;
}

.my-kindergarten__content-right {
  width: 446px;
  height: 390px;
  border: 2px solid #cce6ef;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  position: absolute;
  top: 166px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-carousel-style {
  width: 100%;
  padding: 0px 20px;
  padding-top: 8px;
}
.el-carousel__img {
  width: 100%;
  height: 100%;
  border: 2px solid #cce6ef;
}
// .my-kindergarten__content-right img {
//   border-radius: 10px;
//   border: 2px solid #cce6ef;
// }
</style>
