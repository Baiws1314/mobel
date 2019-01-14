<template>
<div class='detail'>
    <header>
        <span @click="tap()" class="iconfont icon-fanhui"></span>
        {{tit}}       
    </header>
    <section>
     <div v-for="(item,i) in list" :key="i">   
        <div class="tix">
            <div @click="tap1(i)"><i class="iconfont icon-fenxiang"></i></div>
            <h2>{{item.contexth21}}</h2>
            <div class="time">
                <span>{{item.connum}}阅</span>
                <span>{{item.contime}}</span>
            </div>
            <img src="../assets/u=4268.jpg"/>
            <div class="wen">
                <p>一: {{item.conco}}</p>
                <p>二: {{item.conco1}}</p>
            </div>
        </div>
        <div class="goods">
            <h3>精选好货</h3>
            <div>
            <dl>
                <dt><img src="../assets/143612zhnca3g3uhanntty.jpg"/></dt>
                <dd>
                    <span>￥{{item.connum3}}.00</span>
                    <p>{{item.contexth21}}</p>
                </dd>
            </dl>
            <dl>
                <dt><img src="../assets/lz73-fyitapv8401839.jpg"/></dt>
                <dd>
                    <span>￥{{item.connum2}}.00</span>
                    <p>{{item.contexth2}}</p>
                </dd>
            </dl>
            </div>
        </div>
        <div class="com">
            <p>评论 {{num}}</P>
            <p>......</p>
            <router-link to="/pinglun">查看全部评论 ></router-link>
        </div>
    </div>
    <div class="pic" :style="{'display':dis}">
        <ul>
            <li @click="succ1()">
                <span class="icon icon-weibo"></span>
                <p>新浪微博</p>
            </li>
            <li @click="succ2()">
                <span class="icon icon-weixin1"></span>
                <p>微信</p>
            </li>
            <li @click="succ3()">
                <span class="icon icon-pengyouquan"></span>
                <p>朋友圈</p>
            </li>
            <li @click="succ4()">
                <span class="icon icon-qq"></span>
                <p>QQ</p>
            </li>
            <li @click="succ5()">
                <span class="icon icon-QQkongjian"></span>
                <p>QQ空间</p>
            </li>
            <li @click="succ6()">
                <span class="icon icon-shenglve"></span>
                <p>复制链接</p>
            </li>
        </ul>
        <div @click="tap2()" class="xiao">取消</div>
    </div>
    </section>
</div>
</template>

<script>
import axios from "axios";
import Mock from "mockjs";
import Vue from "vue";
import { MessageBox } from 'mint-ui';
 Mock.mock('http://www.kugou.com',{
    "con":[
        {
           "conid|+1":0,
           "contexth2":"@ctitle(14,16)",
           "contexth21":"@ctitle(12,16)",
           "conimg":"@image('400x200')",
           "conimg1":"@image('180','180)",
           "contime":"@time('hh:mm')",
           "connum":"@natural(1,1000)",
           "connum1":"@natural(1,100)",
           "connum2":"@natural(100,1000)",
           "connum3":"@natural(200,1000)",
           "conco":"@cparagraph(4,9)",
           "conco1":"@cparagraph(4,9)",
        }
    ]
})
export default {
    name:'Detail',
    data(){
        return{
            tit:'SALE攻略',
            dis:'none',
            list:[],
            num:30,
        }
    },
    methods:{
        tap(){
            this.$router.go(-1)
        },
        tap1(){
            this.dis='block'
        },
        tap2(){
            this.dis="none"
        },
        succ1(){
            MessageBox({
            message: "'SALE想要打开新浪微博'",
            // ['SALE想要打开微信','SALE想要打开朋友圈','SALE想要打开QQ','SALE想要打开QQ空间','复制成功']
            showCancelButton: true
            });
        },
        succ2(){
            MessageBox({
            message: "'SALE想要打开微信'",
            // ['SALE想要打开微信','SALE想要打开朋友圈','SALE想要打开QQ','SALE想要打开QQ空间','复制成功']
            showCancelButton: true
            });
        },
        succ3(){
            MessageBox({
            message: "'SALE想要打开朋友圈'",
            // ['SALE想要打开微信','SALE想要打开朋友圈','SALE想要打开QQ','SALE想要打开QQ空间','复制成功']
            showCancelButton: true
            });
        },
        succ4(){
            MessageBox({
            message: "'SALE想要打开QQ'",
            // ['SALE想要打开微信','SALE想要打开朋友圈','SALE想要打开QQ','SALE想要打开QQ空间','复制成功']
            showCancelButton: true
            });
        },
        succ5(){
            MessageBox({
            message: "'SALE想要打开QQ空间'",
            // ['SALE想要打开微信','SALE想要打开朋友圈','SALE想要打开QQ','SALE想要打开QQ空间','复制成功']
            showCancelButton: true
            });
        },
        succ6(){
            MessageBox({
            message: "'复制成功'",
            // [,,,,]
            showCancelButton: true
            });
        },


       


    },
    mounted(){
         var _this=this;
        axios({
            method:'get',
            // url:'http://13.250.74.156:8080/WisdomMall-1.0.0/findOneStrategyById.do', 
            // params:{
            //      id:1
            // } 
            url:'http://www.kugou.com' ,  
        }).then(function(data){
            _this.list=data.data.con
            console.log(data.data.data)
        })
    }
}
</script>
<style scoped>
    .detail{
        height:100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        height:50px;
        background:#ccc;
        color:#000;
        font-size:16px;
        text-align: center;
        line-height: 50px;
    }
    header span{
        color: white;
        font-size:20px;
        position: absolute;
        left:20px;
    }
    section{
        flex: 1;
        overflow: auto;      
    }
    .tix{
        padding: 22px;
        border-bottom:12px solid #e1e1e1;
    }
    .tix img{
        width:400px;
        height:200px;
    }
    .time{
        height:50px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        color:#ccc;
    }
    .wen p{
        font-size:18px;
        line-height:26px;
        margin-top:12px;

    }
    .goods{
        height:300px;
        padding: 8px;
        border-bottom:12px solid #e1e1e1;
        
    }
    .goods div{
        display: flex;
        justify-content: space-around;
    }
    .goods img{
        width:150px;
        height:150px;
    }
    .goods h3{
        height:32px;
        border-bottom: 1px solid #e1e1e1;
    }
    .goods dl{
        float: left;
        margin-top:10px;
    }
    .goods dl:last-child{
        margin-left:24px;
        
        
    }
    .goods dd p{
        width:170px;
    }
    .com{
        padding:14px;
    }
    .pic{
        width:100vw;
        height:222px;
        position:absolute;
        bottom:0;
        background:#f1f1f1;
        
    }
    .pic ul{
        height:180px;
    }
    .pic ul li{
        list-style: none;
        float: left;
        width:33.3%;
        height:70px;
        text-align: center;
        margin-top:10px;    
    }
    p{
        color:#666;
        margin-top:4px;
    }
    .xiao{

        height:40px;
        border-top:4px solid #ccc;
         text-align: center;
         line-height:40px;
         color:#999;
    }
    .icon-fenxiang{
        position:absolute;
        right:20px;
        top:20px;
        color: #666;
    }
</style>