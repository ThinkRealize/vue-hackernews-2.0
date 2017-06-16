<template>
  <div class="book-parent ">
    <div class="book__content-left">
      <div
        class="final-index__wrapper-left modules__wrapper-left" data="final-index"
        :style="{backgroundImage: `url(${background})`}">
        <div class="final-index__observed-content">
          <div class="observed-content__table1">
            <div class="table1__head">
              <div>内容</div>
              <div>评价</div>
              <div v-for="indexLevel of param.indexLevelList">
                {{indexLevel.title}}
              </div>
            </div>
            <div class="table1__body">
              <div
                v-for="item of leftGrowthData"
                class="table1__body-list">
                <div>{{item.title}}</div>
                <div>{{item.content}}</div>
                <div
                  v-for="indexLevel of param.indexLevelList"
                  :class="{'notes-good': indexLevel.id === item.indexLevelid}">
                </div>
              </div>
            </div>
            </table>
          </div>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="final-index__wrapper-right modules__wrapper-right" data="final-index"
        :style="{backgroundImage: `url(${background})`}">
        <div
          v-if="rightGrowthData.length > 0"
          class="final-index__observed-content">
          <div class="observed-content__table1">
            <div class="table1__head">
              <div>内容</div>
              <div>评价</div>
              <div v-for="indexLevel of param.indexLevelList">
                {{indexLevel.title}}
              </div>
            </div>
            <div class="table1__body">
              <div
                v-for="item of rightGrowthData"
                class="table1__body-list">
                <div>{{item.title}}</div>
                <div>{{item.content}}</div>
                <div
                  v-for="indexLevel of param.indexLevelList"
                  :class="{'notes-good': indexLevel.id === item.indexLevelid}">
                </div>
              </div>
            </div>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewFinalIndex',
  // 按照字母顺序排列各类属性
  created () {
    this.division()
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
      leftGrowthData: [],
      rightGrowthData: []
    }
  },
  mixins: [handleNull],
  // 页面方法
  methods: {
    division () {
      this.leftGrowthData = []
      this.rightGrowthData = []
      this.growthData.forEach((finalIndex, index) => {
        if (index < 6) {
          this.leftGrowthData.push(finalIndex)
        } else {
          this.rightGrowthData.push(finalIndex)
        }
      })
    }
  },
  // 组件属性
  props: {
    growthData: Array,
    background: String,
    param: Object
  },
  // 监视属性变化
  watch: {
    growthData () {
      this.division()
    }
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/spring.scss';
.final-index__wrapper-left,
.final-index__wrapper-right {
  // background: url(../../img/template1/final-index-bg.png);
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #61c69c;
}
.final-index__observed-content {
  width: 450px;
  max-height: 412px;
  position: absolute;
  left: 20px;
  top: 111px;
  background: #fff;
  opacity: 0.8;
  border-radius: 8px;
}

.observed-content__table {
  width: 100%;
  height: 100%;
}

.table1__head {
  display: flex;
}

.table1__head div {
  width: 50px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  position: relative;
  display: flex;
  line-height: 40px;
  justify-content: center;
  background: #3cba84;
}

.table1__head div:first-child {
  width: 97px;
  border-radius: 8px 0 0;
}

.table1__head div:nth-child(2) {
  width: 204px;
}

.table1__head div:last-child {
  border-radius: 0 8px 0 0;
}
.table1__body{
  width: 100%;
  max-height: 372px;
  overflow-y: auto;
}
.table1__body-list {
  width: 100%;
  height: auto;
  display: flex;
  border-bottom: 1px solid #e0e0cc;
}

.table1__body-list:last-child {
  border-radius: 0 0 8px 8px;
  div:last-child{
    border-radius: 0 0 8px 0;
  }
}

.table1__body-list div {
  width: 50px;
  min-height: 61px;
  text-align: left;
  font-size: 14px;
  border-right: 1px solid #e0e0cc;
  background: url('http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/notes-bad-bg.png') no-repeat center center;
}

.table1__body-list div.notes-good {
  background: url('http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/notes-good-bg.png') no-repeat center center;
}

.table1__body-list div:first-child {
  width: 97px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 5px;
}

.table1__body-list div:nth-child(2) {
  width: 204px;
  min-height: 61px;
  background: none;
  line-height: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

</style>
