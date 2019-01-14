<template>
   <div class="member">
        <header>
            <span @click="tap()" class="mass icon-fanhui"></span>
            {{tit}}
            <span @click="tap1()" class="mass icon-add"></span>       
        </header>
        <section>
            <van-popup v-model="show" position="top" :overlay="true" :close-on-click-overlay='true'>
                功能筹划中...
            </van-popup>
            <div class="top">
                <div></div>
                <img src="../assets/1.jpg" alt="加载中..">
            </div>
            <div class="cont">
                <router-link to='/infor' tag='h2'>我是会员</router-link>
                <span>黄金会员</span>
                <span>活力值:{{count}}</span>
            </div>
            <ul>
                <li @click="tap2()">我的特权</li>
                <li @click="tap3()">签到领积分</li>
                <li @click="tap4()">积分兑换</li>
                <li @click="tap5()">礼品兑换</li>
                <van-popup v-model="show1" :overlay="true" :close-on-click-overlay='true' position="left" >
                    暂无
                </van-popup>
            </ul>
        </section>
   </div>
</template>
<script>
export default {
    name:'Menber',
    data(){
        return{
            tit:'会员中心',
            count:0,
            show:false,
            show1:false,
        }
    },
    methods:{
        tap(){
            this.$router.go(-1)
        }, 
        tap1(){
            this.show=true;
        },
        tap2(){
            this.$router.push('/privilege')
        },
        tap3(){
            this.show1=true;
        },
        tap4(){
            this.show1=true;
        },
        tap5(){
            this.show1=true;
        },

    }
}
</script>
<style scoped>
    .member{
        height:100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        width:100%;
        height:50px;
        background:#ccc;
        color:#000;
        font-size:16px;
        text-align: center;
        line-height: 50px;
        z-index: 200;
    }
    header span:first-child{
        color: white;
        font-size:20px;
        position: absolute;
        left:20px;
    }
    header span:last-child{
        color: #666;
        font-size:30px;
        position: absolute;
        right:20px;
    }
    section{
        flex: 1;
        overflow: auto;      
    }
    .top{
        height:220px;
    }
    .top div{
        width: 100%;
        height:300px;
        background:#999;
        border-radius:50%;
        position: absolute;
        top:-110px;
    }
    .top img{
        width:100px;
        height:100px;
        border-radius: 50%;
         border:1px solid #999;
         position: absolute;
        top:140px;
        left:140px;
        background: white;
    }
    .cont{
        height:140px;
        text-align: center;
        color:#888;
    }
    .cont h2{
        height:60px;
    }
    .cont span{
        padding:6px 10px;
        margin:0 30px;
        border-radius: 16px;
        border:1px solid #999;
    }
    ul{
        height:400px;
    }
    li{
        height:88px;
        line-height: 88px;
        border:1px solid #e1e1e1;
        color:#888;
        font-size:18px;
        padding-left:20px;
    }
    .van-popup--top{
        height:100px;
        font-size: 20px;
        text-align: center;
        line-height: 100px;
    }
    .van-popup--left{
        height:100px;
        width:200px;
        font-size: 20px;
        text-align: center;
        line-height: 100px;
        border-radius: 0 20px 20px 0;
    }
</style>

