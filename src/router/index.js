import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Gdetail from '@/components/Gdetail'
import Pinglun from '@/components/Pinglun'
import Search from '@/components/Search'
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
    },
    {
      path:'/home',
      component:Home,
      children:[

      ]
    },
    {
      path:'/nav/:gid',
      component:Nav
    },
    {
      path:'/gdetail',
      component:Gdetail
    },
    {
      path:'/pinglun',
      component:Pinglun
    },
    {
      path:'/search',
      component:Search
    }
  ]
})
