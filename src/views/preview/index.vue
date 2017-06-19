<template>
  <div class="growth-record">
    <div
      class="growth-record__body scene01"
      data-scene="scene01"
      :style="{backgroundImage: `url(${growthRecord.scenePic})`}">
      <button @click="$store.dispatch('setGrowthPreviewBookIndex',bookIndex + 1)">下一页</button>
      <growth-preview-book>
        <router-view></router-view>
        <!--<component
          :is="'growth-preview-front-cover'"
          :background="currentContent.isMergeModule ? '' : currentContent.background"
          :growthData="currentContent.isMergeModule ? {} : currentContent.growthData"
          :param="currentContent.param">
        </component>-->
        <!--<component
          :is="currentContent.isMergeModule ? '' : currentContent.componentTag"
          :background="currentContent.isMergeModule ? '' : currentContent.background"
          :growthData="currentContent.isMergeModule ? {} : currentContent.growthData"
          :param="currentContent.param">
        </component>-->          
        <!--<component
          :is="currentContent.isMergeModule ? 'growth-preview-health' : ''"
          :background="currentContent.background"
          :growthData="currentContent.isMergeModule ? currentContent.growthData.leftGrowthData : {}">
        </component>
        <component
          :is="currentContent.isMergeModule ? 'growth-preview-class' : ''"
          :background="currentContent.background"
          :growthData="currentContent.isMergeModule ? currentContent.growthData.rightGrowthData : {}">
        </component>-->
      </growth-preview-book>
    </div>
  </div>
</template>
<script>
import {isEmptyArray} from '~/common/array'
import config from './config.json'
import bookData from './bookData.json'
import growthData from './growthData.json'
import growthPreviewBook from './book/component/growthPreviewBook.vue'

export default {
  asyncData ({store, route: {query: {index}}}) {
    return Promise.all([
      store.dispatch('setGrwothPreviewBook', bookData.data),
      store.dispatch('setGrowthPreviewGrowthRecord', growthData.data),
      store.dispatch('setGrowthPreviewBookIndex', index)
    ])
  },
  // 按照字母顺序排列各类属性
  beforeMount () {
    this.init()
  },
  components: {
    growthPreviewBook
  },
  // 计算属性
  computed: {
  },
  // 页面数据
  data: function () {
    return {
      currentContent: {},
      bookStyle: '',
      currentBook: '',
      growthid: '',
      bookModule: {},
      bookContentList: [],
      bookModuleList: [],
      bookStyleConfigModuleBackground: {},
      growthDataList: [],
      growthRecord: this.$store.state.priview.growthRecord,
      book: this.$store.state.priview.book,
      bookIndex: this.$store.getters.growthPreviewBookIndex
    }
  },
  // 页面方法
  methods: {
    init () {
      this.reFindGrowthBook()
    },
    reFindGrowthBook () {
      const data = this.book
      this.bookStyle = this.growthRecord.sceneCode
      this.bookStyleConfig = config[this.bookStyle]
      this.bookModule = config.module
      // 设置
      this.bookStyleConfigModuleBackground = this.bookStyleConfig.moduleBackground
      let bookModuleList = []
      if (!isEmptyArray(data)) {
        data.forEach(growth => {
          growth.module = this.bookModule[growth.type]
          if (growth.module.growthDataParamList && growth.module.growthDataParamList.length > 0) {
            growth.param = {}
            growth.module.growthDataParamList.forEach(prop => {
              growth.param[prop] = growth.growthData[prop]
            })
          }
          // 转换数据格式 growData.prop.pro... => growData
          if (growth.module.growthDataPropList && growth.module.growthDataPropList.length > 0) {
            this.growthDataList = []
            this.getGrowthDataByPropList(growth.growthData, 0, growth.module.growthDataPropList, growth.module.growthDataClass)
            growth.growthData = this.growthDataList
          }
          this.generateModuleListByNumber(growth, growth.module.dataNumber).forEach(module => {
            bookModuleList.push(module)
          })
        })
      }
      // 合并单页模块，如果单页模块下一个是多页模块，那么不会将下一个多页模块合并.
      // 生成目录数据
      bookModuleList = this.generateCatalog(this.mergeModule(bookModuleList))
      // 根据模块生成书每一面内容
      this.generateBookContentList(bookModuleList)
      const bookContent = this.bookContentList[this.bookIndex]
      console.log('bookContent', bookContent, this.bookIndex)
      Object.keys(bookContent).forEach((prop) => this.$set(this.currentContent, prop, bookContent[prop]))
      this.$store.dispatch('setGrowthPreviewBookPages', this.bookContentList.length)
      console.log('this.currentContent.growthData', this.currentContent.growthData)
    },
    // 根据属性列表获取值
    getGrowthDataByPropList (data, propIndex, propList, resultClass) {
      let resultData = data[propList[propIndex]]
      if (propIndex === propList.length - 1) {
        if (resultClass === 'Array') {
          this.growthDataList = this.growthDataList.concat(resultData)
        } else {
          this.growthDataList = resultData
        }
      } else {
        if (Array.isArray(resultData)) {
          resultData.forEach(item => {
            this.getGrowthDataByPropList(item, propIndex + 1, propList, resultClass)
          })
        } else {
          this.getGrowthDataByPropList(resultData, propIndex + 1, propList, resultClass)
        }
      }
    },
    // 根据设置的数据长度进行数据拆分
    generateModuleListByNumber (growth, number) {
      let growthList = []
      if (Array.isArray(growth.growthData) && !isEmptyArray(growth.growthData) && number) {
        var result = []
        for (var i = 0, len = growth.growthData.length; i < len; i += number) {
          result.push(growth.growthData.slice(i, i + number))
        }
        result.forEach(item => {
          let growthCopy = JSON.parse(JSON.stringify(growth))
          growthCopy.growthData = item
          growthList.push(growthCopy)
        })
      } else {
        growthList = [growth]
      }
      return growthList
    },
    mergeModule (bookModuleList) {
      for (var i = 0; i < bookModuleList.length; i++) {
        let bookModule = bookModuleList[i]
        let nextBookModule = bookModuleList[i + 1]
        if (bookModule.module.singlePage && nextBookModule.module.singlePage) {
          let mergeBookModule = {
            componentTag: {
              leftComponentTag: bookModule.module.componentTagList[0],
              rightComponentTag: nextBookModule.module.componentTagList[0]
            },
            growthData: {
              leftGrowthData: bookModule.growthData,
              rightGrowthData: nextBookModule.growthData
            },
            isMergeModule: true,
            type: `${bookModule.type},${nextBookModule.type}`
          }
          bookModuleList.splice(i, 2, mergeBookModule)
        }
      }
      return bookModuleList
    },
    generateCatalog (bookModuleList) {
      let catalogModule = {}
      let catalogList = []
      let catalogIndex = -1
      // 目录模块的个数
      let catalogSize = 0
      for (let bookModule of bookModuleList) {
        if (bookModule.type === 'CATALOG') {
          catalogSize++
          catalogModule = bookModule
        }
      }
      catalogList = catalogModule.growthData
      catalogIndex = catalogList.findIndex(bookModule => {
        return bookModule.type === 'CATALOG'
      })
      // 目录不显示之前模块的信息
      catalogList.splice(0, catalogIndex + 1)
      let size = catalogIndex + catalogSize + 1
      // 设置模块在第几个页码
      for (var i = 0; i < catalogList.length; i++) {
        let catalog = catalogList[i]
        let pageIndex = 1
        // catalogIndex + catalogSize + 1 是因为要算上封面模块和目录模块
        for (let bookModule of bookModuleList) {
          if (bookModule.type.includes(catalog.type)) {
            // 减去目录之前模块的所占的页数
            catalog.pageIndex = pageIndex - size * 2
            // 图书模块索引
            catalog.bookIndex = ((catalog.pageIndex - 1) / 2) + size
            break
          }
          pageIndex += this.modulesOccupationPageNumber(bookModule, 2)
        }
      }
      catalogModule.growthData = catalogList
      this.bookModuleList = bookModuleList
      return bookModuleList
    },
    // 根据是否合并模块和模块的 componentTagList.length 生成模块的占用的页数
    modulesOccupationPageNumber (bookModule, size) {
      if (bookModule.isMergeModule) {
        return size
      } else {
        return bookModule.module.componentTagList.length * size
      }
    },
    generateBookContentList (bookModuleList) {
      this.bookContentList = []
      bookModuleList.forEach(bookModule => {
        if (bookModule.isMergeModule) {
          bookModule.background = this.bookStyleConfigModuleBackground[bookModule.componentTag.leftComponentTag]
          this.bookContentList.push(bookModule)
        } else {
          bookModule.module.componentTagList.forEach((componentTag, index) => {
            let content = {
              background: this.bookStyleConfigModuleBackground[componentTag],
              growthData: bookModule.growthData,
              componentTag: componentTag,
              param: bookModule.param ? bookModule.param : {}
            }
            this.bookContentList.push(content)
          })
        }
      })
      this.$store.dispatch('setGrowthPreviewBookIndex', 0)
      this.bookContentList.forEach((bookContent, index) => {
        // 设置目录页面的索引
        let catalogPageSize = 0
        if (catalogPageSize === 0 && bookContent.componentTag === 'growth-preview-catalog') {
          this.$store.dispatch('setGrowthPreviewCatalogIndex', index)
          catalogPageSize++
        }
      })
      return this.bookContentList
    }
  }
}
</script>
<!-- 样式只应用于该组件，为style添加scoped属性 <style scoped> -->
<style type="text/css" scoped lang="scss">
@import './book/style/book.scss';
</style>
