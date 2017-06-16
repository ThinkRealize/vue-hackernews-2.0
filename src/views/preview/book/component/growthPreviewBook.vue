<template>
  <div class="book">
    <div
      class="book-main"
      :data="divData"
      :class="{'book-parent__shadow': divData === ''}">
      <div class="book__pagination book__pagination--left">
        {{leftBookPagination}}
      </div>
      <div class="book__pagination book__pagination--right">
        {{rightBookPagination}}
      </div>
      <div class="book-parent">
        <slot></slot>
        <slot name="left-page"></slot>
        <slot name="right-page"></slot>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'growthPreviewBook',
  // 按照字母顺序排列各类属性
  created () {
  },
  // 组件
  components: {
  },
  // 计算属性
  computed: {
    growthPreviewBookIndex () {
      return this.$store.getters.growthPreviewBookIndex
    },
    growthPreviewBookPages () {
      return this.$store.getters.growthPreviewBookPages
    },
    isGrowthPreviewBookPageEnd () {
      return this.$store.getters.isGrowthPreviewBookPageEnd
    },
    catalogIndex () {
      return this.$store.state.priview.catalogIndex
    },
    divData () {
      let divData = ''
      if (this.growthPreviewBookIndex === 0 || this.growthPreviewBookIndex === -1) {
        divData = 'cover-page'
      } else if (this.growthPreviewBookIndex + 1 === this.growthPreviewBookPages) {
        divData = 'back-cover-page'
      }
      return divData
    },
    leftBookPagination () {
      if (this.isGrowthPreviewBookPageEnd) {
        return ''
      }
      return typeof this.rightBookPagination === 'string' ? '' : this.rightBookPagination - 1
    },
    rightBookPagination () {
      if (this.isGrowthPreviewBookPageEnd) {
        return ''
      }
      let bookPagination = (this.growthPreviewBookIndex - this.catalogIndex) * 2
      return bookPagination > 0 ? bookPagination : ''
    }
  },
  // 页面数据
  data: function () {
    return {

    }
  },
  // 页面方法
  methods: {
  },
  // 监视属性变化
  watch: {
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/book.scss';
.book__pagination {
  z-index: 9999;
  position: absolute;
  bottom: 20px;
  font-size: 14px;
}
.book__pagination--left {
  left: 25px;
}
.book__pagination--right {
  right: 25px;
}
</style>
