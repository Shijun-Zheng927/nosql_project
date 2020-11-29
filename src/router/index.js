import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import e2 from '@/components/e2'
import e2_1 from '@/components/e2/e2_1'
import e2_2 from '@/components/e2/e2_2'
import e2_3 from '@/components/e2/e2_3'
import e2_4 from '@/components/e2/e2_4'
import e2_5 from '@/components/e2/e2_5'
import e2_6 from '@/components/e2/e2_6'
import e2_7 from '@/components/e2/e2_7'
import e2_8 from '@/components/e2/e2_8'
import e2_9 from '@/components/e2/e2_9'
import e2_10 from '@/components/e2/e2_10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/e2',
      name: 'e2',
      component: e2
    },
    {
      path: '/e2_1',
      name: 'e2_1',
      component: e2_1
    },
    {
      path: '/e2_2',
      name: 'e2_2',
      component: e2_2
    },
    {
      path: '/e2_3',
      name: 'e2_3',
      component: e2_3
    },
    {
      path: '/e2_4',
      name: 'e2_4',
      component: e2_4
    },
    {
      path: '/e2_5',
      name: 'e2_5',
      component: e2_5
    },
    {
      path: '/e2_6',
      name: 'e2_6',
      component: e2_6
    },
    {
      path: '/e2_7',
      name: 'e2_7',
      component: e2_7
    },
    {
      path: '/e2_8',
      name: 'e2_8',
      component: e2_8
    },
    {
      path: '/e2_9',
      name: 'e2_9',
      component: e2_9
    },
    {
      path: '/e2_10',
      name: 'e2_10',
      component: e2_10
    },
  ]
})
