<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="holiday__wrapper-left modules__wrapper-left" data="holiday"
        :style="{backgroundImage: `url(${background})`}">
        <div class="holiday__content-left">
          <div class="holiday-top" data="holiday-left">
            <div class="holiday-describe">
              <h3>假期想做的事</h3>
              <p>{{handleNullString(growthData.wantDo)}}</p>
            </div>
          </div>
          <div class="holiday-bottom" data="holiday-left">
            <div class="holiday-describe">
              <h3>假期趣事</h3>
              <p>{{handleNullString(growthData.happyThing)}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="holiday__wrapper-right modules__wrapper-right"
        data="holiday"
        :style="{backgroundImage: `url(${background})`}">
        <div class="holiday__content-right">
          <div class="holiday-top" data="holiday-right">
            <div class="holiday-describe">
              <h3>假期精彩照片</h3>
              <el-carousel
                class="el-carousel-style"
                height="203px"
                indicator-position="none">
                <el-carousel-item 
                  v-for="pic of handleNullArray(growthData.picList)"
                  :key="pic">
                  <img
                    class="el-carousel__img"
                    :src="pic">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="holiday-bottom" data="holiday-right">
            <div class="holiday-describe">
              <h3>照片描述</h3>
              <p>{{handleNullString(growthData.content)}}</p>
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
  name: 'growthPreviewHoliday',
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
.holiday__wrapper-left,
.holiday__wrapper-right {
}

div[data="holiday-left"],
div[data="holiday-right"] {
  position: absolute;
  width: 388px;
  height: 214px;
  border: 1px solid #abd4c6;
  background: #d2eee7;
  padding: 5px;
  border-radius: 15px;
}

.holiday-top {
  top: 115px;
}

.holiday-top[data="holiday-left"] {
  left: 30px;
}

.holiday-top[data="holiday-right"] {
  right: 30px;
}

.holiday-bottom {
  top: 367px;
}

.holiday-bottom[data="holiday-left"] {
  left: 70px;
}

.holiday-bottom[data="holiday-right"] {
  right: 70px;
}

.holiday-describe {
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.holiday-describe h3 {
  width: 160px;
  height: 32px;
  position: absolute;
  background: #ffe9ac;
  border-radius: 50px;
  line-height: 32px;
  text-align: center;
  color: #333;
  font-size: 20px;
  top: -20px;
  left: 114px;
  z-index: 199;
  font-weight: bold;
}

.holiday-describe p {
  padding: 20px 10px;
  text-indent: 2em;
  font-size: 16px;
  line-height: 22px;
}

.holiday-describe img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

</style>
