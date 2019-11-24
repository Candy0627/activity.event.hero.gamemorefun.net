import Vue from 'vue'
import Router from 'vue-router'
import HomeBanner from '@/components/Banner'
import HomeConfessionWall from '@/components/ConfessionWall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeBanner',
      component: HomeBanner
    },
    {
      path:'/confessionWall',
      name: 'HomeConfessionWall',
      component: HomeConfessionWall
    }
  ]
})
