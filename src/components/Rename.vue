<template>
<div class="all">
     <header>
            <span style="color:white" @click="reback()">&lt;</span>
            <span>更换昵称</span>
            <span></span>
        </header>
        <section>
    <div class="txt1">
        <span class="iconfont">&#xe604;</span>
         <input  placeholder="输入新名称"  v-model="newname">
   </div>
   <div class="btn"><button style="outline:medium" @click="btn()">完成</button></div>
        </section>
</div>
</template>
<script>
import axios from 'axios'
import cookie from '../assets/cookie.js'
export default {
    name:'Rename',
    data () {
        return {
            newname:'',
            tokennum:''
        }
    },
    methods: {
        reback(){
            this.$router.go(-1)
        },
        btn(){
            
            console.log(this.newname)
          
            cookie.setCookie('newname',this.newname,1)
             this.$router.push('/data')
        }
    },
    mounted () {
    this.tokennum=cookie.getCookie('token')
        console.log(this.tokennum)
    }
}
</script>
<style scoped>
*{margin: 0;padding: 0}
.all{display: flex;flex-direction: column;height: 100vh;}
section{flex:1;background:#f0f0f0;}
header{height: 40px;display: flex;justify-content: space-between;background: #d5d5d5;padding: 0 15px}
header span{line-height: 40px;font-size: 20px}

.txt1{background: #fff;position: relative;height: 45px;}
.txt1 span{position: absolute;top:13px;left: 10px;z-index: 50;}
.txt1 input{border:none;height: 40px;position: absolute;left:10px;top:5px;width: 95%;padding-left:50px }
.txt2 span{position: absolute;top:100px;left: 10px;z-index: 50;}
.txt2 input{border:none;height: 40px;position: absolute;left:10px;top:92px;width: 70%;padding-left:50px}
button{height: 40px;width: 360px;margin-top: 10px;border: none;}
.btn{display: flex;justify-content: center}
</style>

