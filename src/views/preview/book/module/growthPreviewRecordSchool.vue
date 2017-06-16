<template>
  <div>
    <growth-preview-record
      :background="background"
      :growthData="shchoolRecord"
      :param="param">
    </growth-preview-record>
  </div>
</template>
<script>

import growthPreviewRecord from '../component/growthPreviewRecord.vue'

export default {
  name: 'growthPreviewRecordSchool',
  // 按照字母顺序排列各类属性
  created () {
  },
  // 组件
  components: {
    growthPreviewRecord
  },
  // 计算属性
  computed: {
    shchoolRecord () {
      let shchoolRecord = {}
      if (this.growthData.length && this.growthData[0].recordList) {
        this.growthData[0].recordList.forEach(record => {
          if (record.configPermission === 1) {
            shchoolRecord = record
          }
        })
      }
      return shchoolRecord
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
  // 组件属性
  props: {
    growthData: Array,
    background: String,
    param: Object
  },
  // 监视属性变化
  watch: {
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import '../style/spring.scss';
</style>
