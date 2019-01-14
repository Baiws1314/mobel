<template>
<div class="all">
    <header>
        <span style="color:white;font-size:25px" @click="tap()">&lt;</span>
        <span style="color:black;font-size:20px">登陆</span>
        <router-link to="/register" tag="span" style="font-size:14px" > 快速注册 </router-link>

    </header>
    <div class="txt1">
        <span class="iconfont">&#xe66e;</span>
   <input  placeholder="请输入邮箱"  v-model="email">
   </div>
   <div class="txt2">
       <span class="iconfont">&#xe627;</span>
    <input  placeholder="请输入密码" v-model="password">
 
    </div>
   <div class="btn"><button class=" btn-success" style="outline:medium" @click="btn()">立即登陆</button></div>
</div>
</template>

<script >
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import cookie from '../assets/cookie.js'
export default {
     name:'Login',
     data(){
         return {
             email:'',
             password:'',
         }
     },
     methods: {
         tap(){
             this.$router.go(-1)
         },
       btn(){
           var _this=this;
           axios({
               method:'post',
               url:'http://13.250.74.156:8080/WisdomMall-1.0.0/login.do',
               params:{
                   email:_this.email,
                   password:_this.password,
                   token:''
               }
           }).then(function(data){
               var token=data.data.data
               cookie.setCookie('token',token,1);
               console.log(data.data)
               if(data.data.code==0){
                //    _this.$store.commit('amend',_this.email)
                  _this.$router.push("/my")
               }
           })
          
       }
     }
}
</script>


<style scoped>
*{margin: 0;padding: 0;}
.txt1{background: #fff;position: relative;height: 95px}
.txt1 span{position: absolute;top:13px;left: 10px;z-index: 50;}
.txt1 input{border:none;height: 40px;position: absolute;left:10px;top:5px;width: 95%;border-bottom: 1px solid #f0f0f0;padding-left:50px }
.txt2 span{position: absolute;top:100px;left: 10px;z-index: 50;}
.txt2 input{border:none;height: 40px;position: absolute;left:10px;top:92px;width: 70%;padding-left:50px}




span{margin: 0 10px}
header{height: 40px;display: flex;justify-content: space-between;background: #d5d5d5}
header span{line-height: 40px;}
.all{background: #f0f0f0;height: 100vh;}
.box{border-bottom: 1px solid #cecece}
button{height: 40px;width: 360px;margin-top: 10px;border: none;}
.btn{display: flex;justify-content: center}
</style>

