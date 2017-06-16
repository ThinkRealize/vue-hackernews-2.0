<template>
  <div>
    <div class="book-parent">
      <div class="book__content-left">
        <div
          class="memory__wrapper-left modules__wrapper-left" data="memory"
          :style="{backgroundImage: `url(${background})`}">
          <div class="memory__content-left">
            <div class="memory-top" data="memory-left">
              <div class="memory-describe">
                <h3>{{titleList[0]}}</h3>
                <p>{{contentList[0]}}</p>
              </div>
            </div>
            <div class="memory-bottom" data="memory-left">
              <div class="memory-describe">
                <h3>{{titleList[1]}}</h3>
                <p>{{contentList[1]}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="book__content-right">
        <div
          class="memory__wrapper-right modules__wrapper-right" data="memory"
          :style="{backgroundImage: `url(${background})`}">
          <div class="memory__content-right">
            <div class="memory-top" data="memory-right">
              <div class="memory-describe">
                <h3>{{titleList[2]}}</h3>
                <p>{{contentList[2]}}</p>
              </div>
            </div>
            <div class="memory-bottom" data="memory-right">
              <div class="memory-describe">
                <h3>{{titleList[3]}}</h3>
                <p>{{contentList[3]}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {isEmptyParam} from '~/common/object'

export default {
  // 按照字母顺序排列各类属性
  created () {
  },
  // 组件
  components: {
  },
  // 计算属性
  computed: {
    contentList () {
      let result = []
      this[`${this.type}PropList`].forEach(prop => {
        if (isEmptyParam(this.growthData[prop])) {
          result.push('')
        } else {
          result.push(this.growthData[prop])
        }
      })
      return result
    }
  },
  // 页面数据
  data: function () {
    return {
      selfPropList: [
        'commentMyself',
        'happyThing',
        'commentTeacher',
        'sadThing'
      ],
      thingPropList: [
        'wantDo',
        'game',
        'notDo',
        'bestFriend'
      ]
    }
  },
  // 页面方法
  methods: {
  },
  // 组件属性
  props: {
    growthData: Object,
    background: String,
    titleList: Array,
    type: String
  },
  // 监视属性变化
  watch: {
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/spring.scss';
.memory__wrapper-left,
.memory__wrapper-right {
}

div[data="memory-left"],
div[data="memory-right"] {
  position: absolute;
  width: 388px;
  height: 214px;
  border: 1px solid #abd4c6;
  background: #d2eee7;
  padding: 5px;
  border-radius: 15px;
}

.memory-top {
  top: 115px;
}

.memory-top[data="memory-left"] {
  left: 30px;
}

.memory-top[data="memory-right"] {
  right: 30px;
}

.memory-bottom {
  top: 367px;
}

.memory-bottom[data="memory-left"] {
  left: 70px;
}

.memory-bottom[data="memory-right"] {
  right: 70px;
}

.memory-describe {
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.memory-describe h3 {
  width: 160px;
  height: 32px;
  position: absolute;
  background: #ffbaa1;
  border-radius: 50px;
  line-height: 32px;
  text-align: center;
  color: #333;
  font-size: 20px;
  top: -20px;
  left: 114px;
  font-weight: bold;
}

.memory-describe p {
  padding: 20px 10px;
  text-indent: 2em;
  font-size: 16px;
  line-height: 22px;
}
</style>
