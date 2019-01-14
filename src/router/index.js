import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Gdetail from '@/components/Gdetail'
import Pinglun from '@/components/Pinglun'
import Search from '@/components/Search'
import Strategy from '@/components/Strategy'
import Cart from '@/components/Cart'
// 曹
import Login from "@/components/Login"
import Register from "@/components/Register"
import Data from "@/components/Data"
import Rename from "@/components/Rename"
import My from '@/components/my'
import Set from '@/components/Set'
import Limit from '@/components/Limit'
import Test from '@/components/Test'
import Idress from '@/components/Idress'
import Addid from '@/components/Addid'
import Order from '@/components/Order'
import Server from '@/components/Server'
// 高
import Detail from '@/components/Detail'
import Buy from '@/components/Buy'
import Pay from '@/components/Pay'
import Collect from '@/components/Collect'
import Member from '@/components/Member'
import Infor from '@/components/Infor'
import Privilege from '@/components/Privilege'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

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
          path:'/my',
          component:My
        },
        {
          path:'/strategy',
          component:Strategy
        },
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
      path:'/gdetail/:pid',
      component:Gdetail
    },
    {
      path:'/pinglun',
      component:Pinglun
    },
    {
      name:'Search',
      path:'/search',
      component:Search
    },
    {
      path:"/login",
      component:Login
   },
   {
    path:"/register",
      component:Register
   },
   {
    path:"/set",
    component:Set
   },
   {
    path:"/idress",
    component:Idress
   },
   {
    path:"/addid",
    component:Addid
   },
   {
    path:"/Order/:tit",
    component:Order
   },
   {
    path:"/server",
    component:Server
   },
   {
    path:"/data",
    component:Data,
     
   },
   {
    path:"/rename",
    component:Rename
     
   },
   {
    path:"/limit",
    component:Limit
     
   },
   {
    path:"/test",
    component:Test
     
   },
   
  {
    path:'/cart',
    component:Cart
  },
   {
    path:'/detail',
    component:Detail
  },
  {
    name:'Buy',
    path:'/buy',
    component:Buy
  },
  {
    path:'/pay',
    component:Pay
  },
  {
    path:'/collect',
    component:Collect
  },
  {
    path:'/member',
    component:Member
  },
  {
    path:'/infor',
    component:Infor
  },
  {
    path:'/privilege',
    component:Privilege
  }
  ]
})
