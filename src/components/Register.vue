<template>
<div class="all">
    <header>
        <router-link to='/my' style="color: white;font-size:25px">&lt;</router-link>
        <span>注册</span>
        <span></span>

    </header>
    <section>
    <div class="txt1">
        <span class="iconfont">&#xe604;</span>
        <input  placeholder="请输入名称"  v-model="username"/>
   </div>
   <div class="txt2">
       <span class="iconfont">&#xe66e;</span>
       <input  placeholder="请输入邮箱" v-model="email"/>
       <mt-button @click="getyzm()" type="primary">获取验证码</mt-button>
    </div>
     <div class="txt3">
       <span class="iconfont">&#xe627;</span>
       <input  placeholder="请输入密码" v-model="password"/>
    </div>
    <div class="txt4">
       <span class="iconfont">&#xe627;</span>
       <input  placeholder="请输入验证码" v-model="yzm"/>
    </div>
   <div class="btn"><button class="btn-info" style="outline:medium" @click="btn()">立即注册</button></div>
  </section>
</div>

</template>

<script >
import axios from 'axios'
export default {
     name:'Login',
     data(){
         return {
             username:'',
             email:'',
             password:'',
             status:'',
             yzm:''
         }
     },
     methods: {
         tap(){
             this.$router.go(-1)
         },
         btn(){
             console.log("点击")
             var _this=this;
             axios({
                 method:'post',
                 url:"http://13.250.74.156:8080/WisdomMall-1.0.0/register.do",
                 params:{
                     name:_this.username,
                     password:_this.password,
                     email:_this.email,
                     code:_this.yzm
                 }

             }).then(function(data){
                 console.log(data.data)
                 _this.status=data.data.code;
                 _this.$store.commit('amend',_this.username)
                 if(_this.status==0){
                    _this.$router.push("/login")
                }
                
             }).catch(function(err){
                 console.log(err)
             })
            },
         getyzm(){
             var _this=this
             console.log('56')
             axios({
                 method:'get',
                 url:"http://13.250.74.156:8080/WisdomMall-1.0.0/sendcodetoemail.do",
                 params:{
                     email:_this.email
                 }

             }).then(function(data){
                 console.log(data)
                
             }).catch(function(err){
              
             })
         }              
     }
}
</script >


<style scoped>
*{margin: 0;padding: 0;}
.txt1,.txt2,.txt3,.txt4{background: #fff;position: relative;height: 50px}
.txt1 span{position: absolute;top:13px;left: 10px;z-index: 50;}
.txt1 input{border:none;height: 40px;position: absolute;left:10px;top:5px;width: 95%;border-bottom: 1px solid #f0f0f0;padding-left:50px }
.txt2 span{position: absolute;top:13px;left: 10px;z-index: 50;}
.txt2 input{border:none;height: 40px;position: absolute;left:10px;top:5px;width: 95%;border-bottom: 1px solid #f0f0f0;padding-left:50px }
.txt3 span{position: absolute;top:13px;left: 10px;z-index: 50;}
.txt3 input{border:none;height: 40px;position: absolute;left:10px;top:5px;width: 95%;padding-left:50px }
.txt2 button{width: 20vw;height: 4vh;font-size:16px;line-height: 4vh;position: absolute;right: 10vw;top:0}
.txt4 span{position: absolute;top:13px;left: 10px;z-index: 50;}
.txt4 input{border:none;height: 40px;position: absolute;left:10px;top:5px;width: 95%;padding-left:50px }
span{margin: 0 10px}
header{height: 40px;display: flex;justify-content: space-between;background: #d5d5d5}
header span{line-height: 40px;font-size: 20px}

.all{background: #f0f0f0;height: 100vh;}
.box{border-bottom: 1px solid #cecece}
button{height: 40px;width: 360px;margin-top: 10px;border: none;}
.btn{display: flex;justify-content: center}
</style>

