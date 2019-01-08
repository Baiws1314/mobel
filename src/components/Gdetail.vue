<template>
<div class='gdetail'>
    <header> 
        <span class="fanhui" @click="fanhui()">&lt; </span>
        {{goodobj.gtit}}
        <span class="iconfont icon-fenxiang" @click="actionSheet()"></span>

    </header>
    <mt-actionsheet :actions="data" v-model="sheetVisible"></mt-actionsheet>
    <section>
        <div style="background:#eee">
        <img height="200px" src="../assets/logo.png" alt="">
        </div>
        <h4>{{goodobj.gtit}}</h4>
        <p class="yufu">预付定金+店铺券</p>
        <div class="ps">
            <p>· 大牌女装双11预售热卖中，预付定金+店铺券</p>
            <p>· 官方网站，正品保证</p>
            <p>· 除偏远地区外均免邮费</p>
            <h3>活动介绍:</h3>
            <p>{{goodobj.active}}</p>
        </div>
        <h2>精选好货</h2>
        <div class="jing">
            <figure v-for="(item,i) in goodobj.list" :key='i'>
                <img :src="item.srcImg" >
                <figcaption>
                    <p class="pri">￥{{item.price}}.00<span>￥{{item.price+100}}.00</span></p>
                    <p class="con">东方精工Hi好日福建安全国家级knee固然</p>
                </figcaption>
            </figure>
        </div>
    </section>
    <footer>
        <figure>
            <span class="iconfont icon-shoucang" @click="addshoucang()"></span>
            <figcaption>{{this.$store.state.shoucang}}</figcaption>
        </figure>
        <figure>
            <router-link to='/pinglun' tag="span" class="iconfont icon-pinglun" @click="toPinglun()"></router-link>
            <figcaption>{{this.$store.state.pinglun}}</figcaption>
        </figure>
        <figure>
            <span class="iconfont icon-jiarugouwuche" @click="addcart()"></span>
            <figcaption>{{this.$store.state.cart}}</figcaption>
        </figure>
        <figure class="buy">
            <router-link to='' tag="figcaption" >立即购买</router-link>
        </figure>
    </footer>
</div>

</template>
<script>
import axois from 'axios'
import Mock from 'mockjs'
import $ from 'jquery'
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
//详情页接口
Mock.mock('http://www.ccc.com',{
    'goodlist|1':[
        {
            'imgSrc':"@image('200x200')",
            'gtit':"@csentence(10,16)",
            'active':"@csentence(66,86)",
           'list|10-16' :[
               {
                    "lid|+1":0,
                    "srcImg":"@image('160x160')",
                    "tit":"@csentence(5,12)",
                    'price':"@integer(200,1000)"
                }
            ]
        }
    ]
})

// 收藏接口
Mock.mock('http://www.ddd.com',{
    'shoucang|1':[
        {'data':1}
    ]
})

//添加购物车接口
Mock.mock('http://www.eee.com',{
    'cart|1':[
        {'data':1}
    ]
})
export default{
    name:'Gdetail',
    data(){
        return{
            goodobj:{},
            data:[
                {
                    name:'新浪微博',
                    method:this.getXLWB
                },
                {
                    name:'微信',
                    method:this.getWX
                },
                {
                    name:'朋友圈',
                    method:this.getPYQ
                },
                {
                    name:'QQ',
                    method:this.getQQ
                },
                {
                    name:'QQ空间',
                    method:this.getQQKJ
                },
                {
                    name:'复制链接',
                    method:this.getFZLJ
                }
            ],
            sheetVisible:false
        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1);
        },

        addshoucang(){
            var _this=this;
            axois({
                method:'get',
                url:'http://www.ddd.com'
            }).then(function(data){
                console.log(data.data.shoucang.data);
                if(data.data.shoucang.data==1){
                    _this.$store.commit('shoucang')
                    Toast({
                        message: '收藏成功！',
                        className:'shoucangToast'
                    });
                }
            })
        },
        addcart(){
            var _this=this;
            axois({
                method:'get',
                url:'http://www.eee.com'
            }).then(function(data){
                // console.log(data.data.cart.data);
                if(data.data.cart.data==1){
                    _this.$store.commit('addCart')
                    Toast({
                        message: '添加购物车成功！',
                        className:'cartToast'
                    });
                }
            })
        },
        actionSheet(){
            this.sheetVisible=true;
        },
        getXLWB(){
            MessageBox({
                title: '分享',
                message: '确定分享到新浪微博?',
                showCancelButton: true
            });
        },
        getWX(){
            MessageBox({
                title: '分享',
                message: '确定分享到微信?',
                showCancelButton: true
            });
        },
        getPYQ(){
            MessageBox({
                title: '分享',
                message: '确定分享到朋友圈',
                showCancelButton: true
            });
        },
        getQQ(){
            MessageBox({
                title: '分享',
                message: '确定分享到QQ?',
                showCancelButton: true
            });
        },
        getQQKJ(){
            MessageBox({
                title: '分享',
                message: '确定分享到QQ空间?',
                showCancelButton: true
            });
        },
        getFZLJ(){
            Toast({
            message: '复制成功',
            iconClass: 'icon icon-success'
            });
        }
    },
    mounted(){
        $(".mint-actionsheet-listitem").eq(0).prepend("<span style='text-align:center;display:block;font-size:45px;margin-top:20px;' class='iconfont icon-weibo'></span>");
        $(".mint-actionsheet-listitem").eq(1).prepend("<span style='text-align:center;display:block;font-size:45px;margin-top:20px;' class='iconfont icon-unie655'></span>");
        $(".mint-actionsheet-listitem").eq(2).prepend("<span style='text-align:center;display:block;font-size:45px;margin-top:20px;' class='iconfont icon-zhangshangcaifuyemianshoujiban344'></span>");
        $(".mint-actionsheet-listitem").eq(3).prepend("<span style='text-align:center;display:block;font-size:45px;margin-top:20px;' class='iconfont icon-QQ'></span>");
        $(".mint-actionsheet-listitem").eq(4).prepend("<span style='text-align:center;display:block;font-size:45px;margin-top:20px;' class='iconfont icon-062qqkongjian'></span>");
        $(".mint-actionsheet-listitem").eq(5).prepend("<span style='text-align:center;display:block;font-size:30px;margin-top:20px;' class='iconfont icon-fuzhilianjie'></span>");
       
       $('.mint-msgbox-confirm').click(function () { 
           Toast({
            message: '分享成功',
            iconClass: 'icon icon-success'
            });
       });
       var _this=this;
        axois({
            method:'get',
            url:'http://www.ccc.com'
        }).then(function(data){
            // console.log(data.data.goodlist);
            _this.goodobj=data.data.goodlist;
        })
    }
}
</script>
<style scoped>
.gdetail{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
header{
    height: 50px;
    line-height: 50px;
    text-align: center;
}
section{
  flex: 1;
  overflow: auto;
}
section h4{
    line-height: 25px;
    margin: 5px 0 0 8px;
    font-size: 15px;
}
.yufu{
    color: rgb(245, 52, 52);
    font-size: 13px;
    margin-left: 8px;
}
.ps{
    margin-top: 10px;
    padding: 8px;
    border-top: 1px solid #999;
    font-size: 15px;
}
.ps p{
    line-height: 24px;
}
section h3{
    font-size: 16px;
    margin-top: 10px;
}
section h2{
    height: 50px;
    border-top: 1px solid #999;
    font-size: 16px;
    line-height: 60px;
    padding-left: 8px;
}
.jing{
    display: flex;
    flex-wrap: wrap;
}
.jing figure{
    width: 50%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #999;
}
.jing figure:nth-child(odd){
    border-right: 1px solid #999;
    margin-left: -1px;
}
.jing figcaption{
    width:160px;
    margin-top: 8px;
}
.pri{
    color: #f00;
    font-size: 14px;
}
.pri span{
    text-decoration: line-through;
    color: #aaa;
    margin-left: 5px;
    font-size: 12px;
}
.con{
    line-height: 22px;
    font-size: 14px;
    overflow: hidden;
}
footer{
  height: 50px;
  flex-shrink: 0;
  color: #686868;
  border-top: 1px solid #999;
}
footer figure{
    float: left;
    width: 25%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
footer figcaption{
    font-size: 13px;
}
.fanhui{
    position: absolute;
    left: 20px;
    color: #686868;
    font-size: 25px;
}
.icon-fenxiang{
    position: absolute;
    right: 20px;
    font-size: 20px;
    color: #686868;
}
.icon-shoucang,.icon-pinglun,.icon-jiarugouwuche{
    font-size: 22px;
}
.buy{
    height: 50px;
    width: 25%;
    color: #fff;
    background: #1f1b1b;
    text-align: center;
    line-height: 50px;
}


.shoucangToast{
    width: 100px!important;
    height: 80px!important;
    background: white!important;
    color: black!important;
}

.icon-weibo{
    display: block;
    font-size: 30px;
    color: #686868;
    text-align: center;
}
</style>