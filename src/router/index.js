import Vue from 'vue'
import Router from 'vue-router'
import HomeBanner from '@/components/Banner'
import HomeConfessionWall from '@/components/ConfessionWall'
import HomeBillboard from '@/components/Billboard'
import HomeCelebration from '@/components/Celebration'

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
    },
    {
        path:'/billboard',
        name: 'HomeBillboard',
        component: HomeBillboard
    },{
        path:'/celebration',
        name: 'HomeCelebration',
        component: HomeCelebration
    }
  ]
})
