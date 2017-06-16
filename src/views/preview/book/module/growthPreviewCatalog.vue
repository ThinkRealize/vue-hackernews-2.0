<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="catalog__wrapper-left modules__wrapper-left"
        data="catalog"
        :style="{backgroundImage: `url(${background})`}">
        <div class="catalog__list float-left">
          <div class="catalog__list-main">
            <div
              v-for="item of leftCatalog"
              class="catatlot__list-item"
              @click="setGrowthPreviewBookIndex(item.bookIndex)">
                <span class="catalog__title">{{handleNullString(item.title)}}</span>
                <span class="catalog__dotted"></span>
                <span class="catalog__number">{{handleNullString(item.pageIndex)}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="book__content-right">
      <div
        class="catalog__wrapper-right modules__wrapper-right"
        data="catalog"
        :style="{backgroundImage: `url(${background})`}">
        <div class="catalog__list float-right">
          <div class="catalog__list-main">
            <div
              v-for="item of rightCatalog"
              class="catatlot__list-item"
              @click="setGrowthPreviewBookIndex(item.bookIndex)">
                <span class="catalog__title">{{handleNullString(item.title)}}</span>
                <span class="catalog__dotted"></span>
                <span class="catalog__number">{{handleNullString(item.pageIndex)}}</span>
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
  name: 'growthPreviewCatalog',
  // 按照字母顺序排列各类属性
  created () {
    this.growthData.forEach((catalog, index) => {
      if (index < 7) {
        this.leftCatalog.push(catalog)
      } else {
        this.rightCatalog.push(catalog)
      }
    })
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
      leftCatalog: [],
      rightCatalog: []
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

.catalog__wrapper-left,
.catalog__wrapper-right {
}

.catalog__list {
  width: 100%;
  padding: 0 40px 0 55px;
  margin-top: 190px;
}

.catalog__list-main {
  width: 100%;
  padding: 0 30px;
  height: 100%;
}

.catatlot__list-item {
  width: 100%;
  height: 39px;
  background-repeat: repeat no-repeat;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.catalog__title {
  font-size: 16px;
  color: #a1987a;
  padding-right: 10px;
  height: 39px;
  line-height: 39px;
}

.catalog__dotted {
  height: 20px;
  flex-grow: 1;
  margin-top: 19px;
  border-top: 2px dotted #a1987a;
}

.catalog__number {
  margin-left: 10px;
  width: 20px;
  height: 20px;
  background: #95bed9;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  margin-top: 9.5px
}
</style>
