<template>
  <div class="book-parent">
    <div class="book__content-left">
      <div
        class="headmaster__wrapper-left modules__wrapper-left"
        data="headmaster"
        :style="{backgroundImage: `url(${background})`}">
        <div
          v-html="leftContent"
          class="headmaster__blessing-left headmaster__content">
        </div>
      </div>
    </div>
    <div class="book__content-right">
      <div
        class="headmaster__wrapper-right modules__wrapper-right"
        data="headmaster"
        :style="{backgroundImage: `url(${background})`}">
        <div
          v-html="rightContent"
          class="headmaster__blessing-right headmaster__content">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import handleNull from '~/mixins/handleNull'
export default {
  name: 'growthPreviewTitlePage',
  // 按照字母顺序排列各类属性
  created () {
  },
  // 组件
  components: {
  },
  // 计算属性
  computed: {
    content () {
      let contentList = []
      this.growthData.content.split('\n').forEach((content, index) => {
        let splitContentList = this.generateContentList(content)
        if (splitContentList.length > 0) {
          contentList = contentList.concat(splitContentList)
        }
      })
      return contentList
    },
    leftContent () {
      return this.content ? this.content.slice(0, 15).join('<br />') : ''
    },
    rightContent () {
      return this.content ? this.content.slice(15, this.content.length).join('<br />') : ''
    }
  },
  // 页面数据
  data: function () {
    return {

    }
  },
  mixins: [handleNull],
  // 页面方法
  methods: {
    generateContentList (content) {
      let contentList = []
      if (content.length > 0) {
        let listLength = Math.ceil(content.length / 24)
        for (var i = 0; i < listLength; i++) {
          contentList.push(content.substring(i * 24, (i + 1) * 24))
        }
      }
      return contentList
    }
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

.headmaster__wrapper-left,
.headmaster__wrapper-right {
}

.headmaster__blessing-left,
.headmaster__blessing-right {
    width: calc(100% - 40px);
    height: 450px;
    position: absolute;
    top: 90px;
    background: #fff;
    opacity: 0.9;
}

.headmaster__blessing-left {
    left: 40px;
    border-radius: 10px 0 0 10px;
}

.headmaster__blessing-right {
    right: 40px;
    border-radius: 0 10px 10px 0;
}
.headmaster__content {
  margin-top: 30px;
  text-indent: 2em;
  font-size: 16px;
  color: #9e9576;
  line-height: 26px;
  padding: 0 30px;
}

</style>
