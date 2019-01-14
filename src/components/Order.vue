<template>
    <div class="all">
        <header>
            <span style="color:white;font-size:25px" @click="tap()">&lt;</span>
            <span style="color:black;font-size:20px">我的订单</span>
            <span></span>
        </header>
        <p class="jg1"></p>
        <ul class="nav">
            <li>全部</li>
            <li>代付款</li>
            <li>代发货</li>
            <li>代收货</li>
            <li>已取消</li>
        </ul>
        
        <section>
            <div class="all">
                <p class="jg2"></p>
                <h5 class="id"><span>订单号：156515</span><span>5</span></h5>
                <ul >
                    <li>all</li>
                </ul>
            </div>
             <div class="dfk">
                <p class="jg2"></p>
                <h5 class="id"><span>订单号：156515</span><span>5</span></h5>
                <ul >
                    <li>代付款</li>
                </ul>
            </div>
             <div class="dfh">
                <p class="jg2"></p>
                <h5 class="id"><span>订单号：156515</span><span>5</span></h5>
                <ul >
                    <li>代发货</li>
                </ul>
            </div>
             <div class="dsh">
                <p class="jg2"></p>
                <h5 class="id"><span>订单号：156515</span><span>5</span></h5>
                <ul >
                    <li>待收货</li>
                </ul>
            </div>

             <div class="yqx">
                <p class="jg2"></p>
                <h5 class="id"><span>订单号：156515</span><span>5</span></h5>
                <ul >
                    <li>已取消</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import $ from 'jquery'
import axios from "axios"
export default {
    name:'Order',
    data () {
        return {
            num:''
        }
    },
    methods: {
        tap(){
            this.$router.go(-1)
        }
    },
    mounted () {
         this.num=this.$route.params.tit;
         $('section div').eq(this.num).css('display','block').siblings().css('display','none');
         $('.nav li').eq(this.num).css({"background-color":"black","color":"white"}).siblings().css({"background-color":"#f0f0f0","color":"#616161"});
      $(".nav li").click(function(){
            var index=$(this).index();
            
            $('section div').eq(index).css("display","block").siblings().css("display","none");
            $(this).css({"background-color":"black","color":"white"}).siblings().css({"background-color":"#f0f0f0","color":"#616161"});
       }) 
        axios({
            method:'get',
            url:'',
            params:{}
        }).then(function(data){

        }).catch(function(err){

        })  

    }

}
</script>

<style scoped="">
*{margin: 0 ;padding:0}
   .all{background: #f0f0f0;height: 100vh;display:flex;flex-direction: column} 
   header{height: 40px;background: #d5d5d5;line-height: 40px;display:flex;justify-content: space-between}
   .jg1{height: 4px;background:#fff}
   .jg2{height: 6px;}
   .nav{display: flex;justify-content: space-around}
   .nav li{width: 20%;background:#f0f0f0;height:30px;line-height:30px;text-align:center;}
   .id{height: 20px;background: #fff;line-height: 20px;display: flex;justify-content: space-between}
   .id span{margin: 0 15px}
   section{position: relative;flex: 1;}
   section>div{position: absolute;width: 100%;}



</style>




