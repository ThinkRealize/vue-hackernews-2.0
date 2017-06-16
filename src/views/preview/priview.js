
const state = {
  bookIndex: 0,
  bookPages: 0,
  bookPagination: 0,
  catalogIndex: 0
}

const getters = {
  growthPreviewBookIndex: state => state.bookIndex,
  growthPreviewBookPages: state => state.bookPages,
  isNullGrowthPreviewBook: state => {
    return state.bookPages <= 0
  },
  isGrowthPreviewBookPageEnd: state => {
    return state.bookIndex - state.bookPages + 1 >= 0
  }
}

const actions = {
  setGrowthPreviewBookIndex ({commit, state}, bookIndex) {
    if (bookIndex < 0 || bookIndex >= state.bookPages) {
      return
    }
    commit('SET_GROWTH_PREVIEW_BOOK_INDEX', bookIndex)
  },
  setGrowthPreviewBookPages ({commit}, bookPages) {
    commit('SET_GROWTH_PREVIEW_BOOK_PAGES', bookPages)
  },
  setGrowthPreviewCatalogIndex ({commit}, index) {
    commit('SET_GROWTH_PREVIEW_CATALOG_INDEX', index)
  }
}

const mutations = {
  SET_GROWTH_PREVIEW_BOOK_INDEX (state, bookIndex) {
    state.bookIndex = bookIndex
  },
  SET_GROWTH_PREVIEW_BOOK_PAGES (state, bookPages) {
    state.bookPages = bookPages
  },
  SET_GROWTH_PREVIEW_CATALOG_INDEX (state, index) {
    state.catalogIndex = index
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
