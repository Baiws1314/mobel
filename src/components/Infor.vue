<template>
   <div class="infor">
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
                <div>
                    <span>{{sum}}</span>
                    <p>成长速度</p>
                </div>
                <p>成长值 {{num}}</p>
            </div>
            <div class="cont">
                <span>普通会员</span>
                <span>黄金会员</span>
                <span>活力值</span>
                <div></div>
            </div>
            <ul>
                <li @click="tap2()">账号信息</li>
                <li @click="tap3()">功能特权</li>
                <li @click="tap4()">生活福利</li>
                <van-popup v-model="show1" :overlay="true" :close-on-click-overlay='true' position="left" >
                    暂无
                </van-popup>
            </ul>
        </section>
   </div>
</template>
<script>
import Vue from "vue";
import { Popup } from 'vant';
Vue.use(Popup);
export default {
    name:'Menber',
    data(){
        return{
            tit:'账号信息',
            num:1992,
            sum:40,
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
            this.$router.push('/my')
        },
        tap3(){
            this.$router.push('/privilege')
        },
        tap4(){
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
        height:240px;
        position: relative;
    }
    .top div{
        width: 70px;
        height:70px;
        border-radius:50%;
        position: absolute;
        text-align: center;
        top:90px;
        left:172px;
        border:1px solid #999;
        background: white;
        color:#999;
        padding:20px;
    }
    .top div span{
        font-size:32px;
    }
    .top>p{
        position: absolute;
        top:210px;
        left:180px;
        font-size:20px;
        color:#666;
    }
    .cont{
        padding-top:40px;
        height:80px;
        text-align: center;
        color:#888;
        position: relative;
    }
    .cont span{
        padding:4px;
        margin:0 30px;
        border-radius: 10px;
        border:1px solid #999;
        background: white;
    }
    .cont div{
        width:70%;
        height:10px;
        background: #999;
        position:absolute;
        right: 60px;
        top:46px;
        z-index:-100;

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