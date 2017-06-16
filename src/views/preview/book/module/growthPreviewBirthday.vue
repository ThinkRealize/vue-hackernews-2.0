<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="brithday__wrapper-left modules__wrapper-left"
        data="brithday"
        :style="{backgroundImage: `url(${background})`}">
        <div class="brithday-content" data="brithday-left">
          <div class="brithday-img">
            <el-carousel
              class="el-carousel-style"
              height="250px">
              <el-carousel-item 
                v-for="pic of growthData[0] ? growthData[0].picList : []"
                :key="pic">
                <img
                  class="el-carousel__img"
                  :src="pic">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="brithday-describe">
            <h3>在园收到的祝福</h3>
            <p>{{growthData[0] ? growthData[0].content : ''}}</p>
          </div>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="brithday__wrapper-right modules__wrapper-right"
        data="brithday"
        :style="{backgroundImage: `url(${background})`}">
        <div class="brithday-content" data="brithday-right">
          <div class="brithday-img">
            <el-carousel
              class="el-carousel-style"
              height="250px">
              <el-carousel-item 
                v-for="pic of growthData[1] ? growthData[1].picList : []"
                :key="pic">
                <img
                  class="el-carousel__img"
                  :src="pic">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="brithday-describe brithday-describe--right">
            <h3>在家收到的祝福</h3>
            <p>{{growthData[1] ? growthData[1].content : ''}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewBirthday',
  // 按照字母顺序排列各类属性
  created () {
  },
  // 组件
  components: {
  },
  // 页面数据
  data: function () {
    return {

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
.brithday__wrapper-left,
.brithday__wrapper-right {
}

.brithday-content {
  width: 470px;
  height: 451px;
  position: absolute;
  top: 125px;
  left: 10px;
}

.brithday-content[data="brithday-right"] {
  right: 10px;
}

.brithday-img {
  width: 378px;
  height: 260px;
  border: 1px solid #8eccba;
  background: #fff;
  margin-left: 41px;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 29px;
}

.brithday-img img {
  width: 100%;
  height: 100%;
}

.brithday-describe {
  width: 453px;
  height: 133px;
  border: 1px solid #8eccba;
  padding: 7px;
  background: #fe8da0;
  position: relative;
  border-radius: 15px;
}
.brithday-describe--left {
}

.brithday-describe--right {
  margin-left: 18px;
}

.brithday-describe h3 {
  width: 180px;
  height: 40px;
  font-size: 20px;
  position: absolute;
  background: #ffe9ac;
  border-radius: 50px;
  text-align: center;
  line-height: 40px;
  top: -20px;
  left: 140px;
  font-weight: bold;
}

.brithday-describe p {
  width: 100%;
  height:117px;
  max-height: 117px;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
  text-indent: 2em;
  font-size: 16px;
  overflow-y: auto;
  cursor:pointer;
}
</style>
