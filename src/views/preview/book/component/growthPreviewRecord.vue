<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="growth-notes-home__wrapper-left modules__wrapper-left" data="growth-notes-home"
        :style="{backgroundImage: `url(${background})`}">
        <div class="growth-notes-home__observed-content">
          <div class="observed-content__table">
            <div class="table__head">
              <div>观察内容</div>
              <div
                v-for="indexLevel of handleNullArray(param.indexLevelList)">
                {{indexLevel.title}}
              </div>
            </div>
            <div class="table__body">
              <div
                v-for="index of handleNullArray(growthData.indexList)"
                class="table__body-list">
                <div>{{index.title}}</div>
                <div
                  v-for="indexLevel of param.indexLevelList"
                  :class="{'notes-good': indexLevel.id === index.indexLevelid}">
                </div>
              </div>
            </div>
            </table>
          </div>
        </div>
        <div class="growth-notes-home__discription">
          <h3>成长记录</h3>
          <p>
            {{handleNullString(growthData.content)}}
          </p>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="growth-notes-home__wrapper-right modules__wrapper-right" data="growth-notes-home"
        :style="{backgroundImage: `url(${background})`}">
        <div class="growth-notes-home__in-home">
          <h3>精彩记录</h3>
          <el-carousel
            class="el-carousel-style"
            height="240px"
            indicator-position="outside"
            :arrow="growthData.picList && growthData.picList.length > 2 ? 'hover' : 'never'">
            <el-carousel-item
              v-for="pic of growthData.picList"
              :key="pic">
              <img
                class="el-carousel__img"
                :src="pic">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="growth-notes-home__record">
          <p>
            {{handleNullString(growthData.remark)}}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import handleNull from '~/mixins/handleNull'

export default {
  name: 'growthPreviewRecord',
  // 组件属性
  props: {
    growthData: {
      type: Object,
      default: () => {}
    },
    background: String,
    param: Object
  },
  mixins: [handleNull]
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/spring.scss';
.growth-notes-home__wrapper-left,
.growth-notes-home__wrapper-right {
    // background: url('http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/growth-notes-home-bg.png');
}

.growth-notes-home__observed-content {
    width: 438px;
    height: 226px;
    position: absolute;
    left: 32px;
    top: 148px;
    background: #fff;
    opacity: 0.8;
    border-radius: 8px;
}

.observed-content__table {
    width: 100%;
    height: 100%;
}

.table__head {
    display: flex;
}

.table__head div {
    width: 55px;
    height: 32px;
    color: #fff;
    font-size: 14px;
    position: relative;
    display: flex;
    line-height: 26px;
    justify-content: center;
}

.table__head div:first-child {
    width: 273px;
    font-size: 14px;
    background: #66c4ff;
    border-radius: 8px 0 0;
}

.table__head div:nth-child(2) {
    background: #fa8175;
}

.table__head div:nth-child(3) {
    background: #53eab5;
}

.table__head div:last-child {
    background: #ffdc5e;
    border-radius: 0 8px 0 0;
}

.table__head div::before,
.table__head div::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    top: 17px;
}

.table__head div::before {
    left: 0;
    border-left: 27.5px solid #fff;
}

.table__head div::after {
    right: 0;
    border-right: 27.5px solid #fff;
}

.table__head div:first-child::before {
    border-top: 15px solid transparent;
    border-left: 136.5px solid #fff;
}

.table__head div:first-child::after {
    border-top: 15px solid transparent;
    border-right: 136.5px solid #fff;
}
.table__body{
  overflow-y: auto;
  max-height: 194px;
}
.table__body-list {
    width: 100%;
    min-height: 38px;
    display: flex;
    border-bottom: 1px solid #e0e0cc;
}

.table__body-list:last-child {
    border-radius: 0 0 8px 8px;
}

.table__body-list div {
    width: 55px;
    min-height: 38px;
    display: flex;
    align-items: center;
    text-indent: 2em;
    font-size: 14px;
    background: url('http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/notes-bad-bg.png') no-repeat center center;
}

.table__body-list div.notes-good {
    background: url('http://weixt-static.oss-cn-qingdao.aliyuncs.com/growth/spring/notes-good-bg.png') no-repeat center center;
}

.table__body-list div:first-child {
    width: 263px;
    background: none;
    padding: 0 5px;
}

.growth-notes-home__discription {
    width: 438px;
    height: 172px;
    position: absolute;
    left: 32px;
    bottom: 47px;
    background: #fff;
    opacity: 0.8;
    border-radius: 8px;
}

.growth-notes-home__discription h3 {
    width: 200px;
    height: 40px;
    margin: 0 auto;
    background: #66c4ff;
    position: relative;
    color: #fff;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
    font-weight: bold;
}

.growth-notes-home__discription h3::before,
.growth-notes-home__discription h3::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    top: 20px;
}

.growth-notes-home__discription h3::before {
    left: 0;
    border-left: 100px solid #fff;
}

.growth-notes-home__discription h3::after {
    right: 0;
    border-right: 100px solid #fff;
}

.growth-notes-home__discription p {
    padding: 0 20px;
    font-size: 16px;
    line-height: 24px;
    text-indent: 1em;
    margin-top: 10px;
    max-height: 122px;
    overflow-y: auto;
}

.growth-notes-home__in-home {
    width: 428px;
    height: 312px;
    position: absolute;
    top: 117px;
    right: 32px;
    background: #fff;
    opacity: 0.8;
    border-width: 32px 24px 16px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
}

.growth-notes-home__in-home img {
    width: 100%;
    height: 100%;
}

.growth-notes-home__in-home h3 {
    width: 200px;
    height: 32px;
    margin: 0 auto;
    background: #66c4ff;
    position: relative;
    color: #fff;
    text-align: center;
    line-height: 26px;
    font-size: 16px;
    font-weight: bold;
    margin-top: -32px;
}

.growth-notes-home__in-home h3::before,
.growth-notes-home__in-home h3::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    top: 16px;
}

.growth-notes-home__in-home h3::before {
    left: 0;
    border-left: 100px solid #fff;
}

.growth-notes-home__in-home h3::after {
    right: 0;
    border-right: 100px solid #fff;
}

.growth-notes-home__record {
    width: 428px;
    height: calc(120px * 0.78125);
    background: #fff;
    opacity: 0.8;
    border-radius: 8px;
    position: absolute;
    right: 32px;
    bottom: 47px;
    overflow: hidden;
}

.growth-notes-home__record p {
    padding: 0 20px;
    font-size: 16px;
    line-height: 24px;
    text-indent: 1em;
    margin-top: 10px;
    max-height: 83px;
    overflow-y: auto;
}
.el-carousel-style {
  margin-top: 5px;
}

.el-carousel__img {

}

</style>
