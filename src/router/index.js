import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
// import Strategy from '@/components/Strategy'
// import Cart from '@/components/Cart'
// import My from '@/components/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/home',
      children:[
        {
          path:'/home',
          component:Home,
        },
        // {
        //   path:'/strategy',
        //   component:Strategy
        // },
        // {
        //   path:'/cart',
        //   component:Cart
        // },
        // {
        //   path:'/my',
        //   component:My
        // }
      ]
    }
  ]
})
