<template>
<div class="all">
    <header>
        <span style="color:white;font-size:25px" @click="tap()">&lt;</span>
        <span style="color:black;font-size:20px">设置</span>
        <span></span>
    </header>
    <section>
        <div>
           <span>接收通知</span> <mt-switch></mt-switch> 
        </div>
        <p></p>
        <div>
          关于SALE 
        </div>
    </section>
    <footer >
      <span @click="exit()">退出登陆</span>  
    </footer>
   
</div>
</template>

<script>
import axiox from 'axios'
import cookie from '../assets/cookie.js'
export default {
     name:'Set',
     data(){
         return {
            
         }
     },
     methods: {
      tap(){
          this.$router.go(-1)
      },
       exit(){
         cookie.removeCookie('token')
         this.$router.push('/my')
       }
     }
}
</script>


<style scoped="">
*{margin:0;padding: 0}
footer{height: 40px;background: #d5d5d5;text-align: center;line-height: 40px;font-size: 20px}
section{flex: 1}
section div{display: flex;background: #fff;height: 40px;justify-content: space-between;line-height: 40px}
section p{height: 1px;background:#cecece;margin:0 auto;width: 95%}


span{margin: 0 10px}
header{height: 40px;display: flex;justify-content: space-between;background: #d5d5d5}
header span{line-height: 40px;}
.all{background: #f0f0f0;height: 100vh;display: flex;flex-direction: column}

.box{border-bottom: 1px solid #cecece}

</style>

