
<template>
    <div class="all">
       <header>
           <span @click="reback()">&lt;</span>
           <span>我的特权</span>
           <span class="glyphicon glyphicon-plus"></span>
       </header>
       <section>
           <div class="num">
               <img src="../assets/img/xzq.jpg" alt="">
              
           </div>
          <p>目前没有任何特权</p>
       </section>
        
    </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.min.css"
//  import'bootstrap/dist/js/bootstrap.min.js'
export default {
    name:'Vip',
    methods: {
        reback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
*{margin: 0;padding: 0;}
img{width: 80px;height: 80px;position: absolute;border-radius:50%;left: 40%;top: 15% }
header{color: #fff;display: flex;justify-content: space-between;padding: 0 20px;background:cornflowerblue;height: 40px}
header span{line-height: 40px;font-size: 20px}
section{flex: 1;}
section div{height:300px;background:url(../assets/img/vip.jpg)}
.num{padding: 200px 0 0 0px}


.all{display: flex;flex-direction: column}
</style>



