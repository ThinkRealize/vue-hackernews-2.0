import Vue from 'vue'
import Router from 'vue-router'
import book from '../views/preview/bookComponent'
Vue.use(Router)

// route-level code splitting
const preview = () => import('../views/preview/index.vue')
export function createRouter () {
  const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 })
  })
  const previewChildren = book.map((component) => {
    return {path: component.name, component: component}
  })
  router.addRoutes([
    { path: '/', redirect: '/preview' },
    {
      path: '/preview',
      component: preview,
      children: previewChildren
    }
  ])
  return router 
}
