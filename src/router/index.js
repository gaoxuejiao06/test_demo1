import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import table111 from '@/views/table/table1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'table111',
      component: table111
    },
    // {
    //   path: '/',
    //   name: 'test',
    //   component: test
    // },
    {
      path: '/',
      name: 'HelloWorldname',
      component: HelloWorld
    }
  ]
})
