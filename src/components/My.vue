<template>
<div class="box" style="background:#f0f0f0">
<div v-if="username!=''">
    <router-link to='data'><div class="head" ><img :src=url ><div>{{username}}</div><span >&gt;</span></div></router-link>
    <router-link to="/collect" tag="div" class="shouchang"><span class="iconfont">&#xe711;</span >我的收藏<span style="float:right;color:#cecece;margin-right:15px">&gt;</span></router-link>
   <router-link class="dingdan" :to="'/order/'+0"><span>我的订单</span><span>查看全部订单 &nbsp;&gt;</span></router-link>
    <div class="content">
        <router-link :to="'/order/'+1" tag="span"> <dl><dt class="iconfont">&#xe640;</dt><dd>待付款</dd></dl></router-link>
         <router-link :to="'/order/'+2" tag="span"> <dl><dt class="iconfont">&#xe607;</dt><dd>待发货</dd></dl></router-link>
        <router-link :to="'/order/'+3" tag="span"> <dl><dt class="iconfont">&#xe628;</dt><dd>待收货</dd></dl></router-link>
       <router-link :to="'/order/'+4" tag="span">  <dl><dt class="iconfont">&#xe623;</dt><dd>已取消</dd></dl></router-link>
    </div>
    <div class="idress" @click="idres()">我的地址<span style='float:right;color:#cecece;margin-right:10px'>&gt;</span></div>
    <p class="id"></p>
    <div class="dizhi">
        <p><span>{{idname}}</span><span>{{number}}</span></p>
        <p><span>{{content}}</span><span>(默认地址)</span></p>
    </div>
    <ul style="background: #fff">
        <router-link to='/member' tag='li'><span class="iconfont">&#xe65f;</span>会员中心<span>&gt;</span></router-link>
       <router-link to="/set" tag="span">  <li><span class="iconfont">&#xe617;</span>设置<span>&gt;</span></li></router-link>
        <router-link to='/server' tag='li'><span class="iconfont">&#xe604;</span>联系客服<span>&gt;</span></router-link>
    </ul>
   
</div>
<div v-else>
       <router-link to="login" tag="span"><div class="head" ><p class="iconfont">&#xe600;</p><div>立即登录</div><span >&gt;</span></div></router-link>
    <router-link to="login" tag="span"> <div class="shouchang"><span class="iconfont">&#xe711;</span >我的收藏<span style="float:right;color:#cecece;margin-right:15px">&gt;</span></div></router-link>
    <router-link to="login" tag="span"> <div class="dingdan"><span>我的订单</span><span>查看全部订单 &nbsp;&gt;</span></div></router-link>
    <div class="content">
        <router-link to="login" tag="span"> <dl><dt class="iconfont">&#xe640;</dt><dd>待付款</dd></dl></router-link>
         <router-link to="login" tag="span"> <dl><dt class="iconfont">&#xe607;</dt><dd>待发货</dd></dl></router-link>
        <router-link to="login" tag="span"> <dl><dt class="iconfont">&#xe628;</dt><dd>待收货</dd></dl></router-link>
       <router-link to="login" tag="span">  <dl><dt class="iconfont">&#xe623;</dt><dd>已取消</dd></dl></router-link>
    </div>
    <div class="idress">我的地址<span style='float:right;color:#cecece;margin-right:10px'>&gt;</span></div>
    <ul style="background: #fff">
        <li><span class="iconfont">&#xe65f;</span>会员中心<span>&gt;</span></li>
       <router-link to="set" tag="span">  <li><span class="iconfont">&#xe617;</span>设置<span>&gt;</span></li></router-link>
        <li ><span class="iconfont">&#xe604;</span>联系客服<span>&gt;</span></li>
    </ul>


</div>
   
</div>
</template>

<script>
import $ from 'jquery'
//  import "bootstrap/dist/css/bootstrap.min.css"
//  import'bootstrap/dist/js/bootstrap.min.js'
 import cookie from '../assets/cookie.js'
 import axios from 'axios'
    export default{
        name:'my',
        data () {
            return {
                idname:'',
                name:"",
                username:"",
                number:"",
                content:"",
                url:'',
                tit:'我的'
            }
        },
        methods: {
           idres(){
               this.$router.push('/Idress')
           }
        },
        mounted () {  
            this.$emit('toparent',this.tit);
            var _this=this      
    //    console.log(cookie.getCookie('token'))
       var tokennum=cookie.getCookie('token')
       $.ajax({
           method:'post',
           url:'http://13.250.74.156:8080/WisdomMall-1.0.0/user/myself.do',
           data:{
               token:tokennum
           },
           success:function(data){
               console.log(data.data)
               _this.username=data.data.name
               _this.url=data.data.img
               console.log(_this.url)
           }
       })
        
        }      
    }
</script>
<style scoped="">
.head .iconfont{font-size: 60px;color: #cecece}
.head{height: 80px;line-height: 90px;display: flex;border-bottom:1px solid #f0f0f0 ;padding: 0 15px;background: #fff}
.head div{height: 80px;flex: 1;padding-left:20px }
.iconfont{width: 50px;height: 50px;}
.head img{width: 80px;height: 80px;border-radius:50% }
.shouchang{height: 40px;line-height: 40px;font-size: 15px;border-bottom: 4px solid #f0f0f0;background: #fff}
 .shouchang .iconfont{margin: 15px } 
 .dingdan{background: #fff;border-bottom: 1px solid #f0f0f0;height: 50px;line-height: 50px;display: flex;justify-content: space-between;padding:0 15px;font-size: 15px}
  .dingdan span:nth-child(2){color: #cecece;margin-left:25px}
.content{height: 80px;border-bottom: 6px solid #f0f0f0;display: flex;justify-content: space-around;background: #fff}
.content dl{text-align: center}
.content dt{font-size:30px;color:#cecece;line-height: 55px}
.idress{height: 40px;line-height: 40px;border-bottom: 4px solid #f0f0f0;padding:0 15px;background: #fff}

li{height: 40px;line-height: 40px;padding:0 15px;font-size: 16px;color: #616161}
li:nth-of-type(2){border-bottom:1px solid #f0f0f0 }
li span:nth-of-type(2){float:right;color: #cecece}
li span{margin-right: 10px;font-size: 16px}
.box{height: 100vh}

.idress{height: 40px;line-height: 40px;padding:0 15px;background: #fff}
.id{margin: 0;height: 1px;padding: 0 10px}
.dizhi p{display: flex;justify-content: space-between;padding: 0 15px}
.dizhi{background: #fff}

</style>