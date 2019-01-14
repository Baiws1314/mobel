<template>
<div class='home'>
    <mt-search v-model="value" cancel-text="搜索"  placeholder="搜索" style="height:52px;" ></mt-search>
    <section>
        <mt-swipe :auto="4000" style="height:200px">
            <mt-swipe-item ><img src="../assets/img1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img src="../assets/img5.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img src="../assets/img3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item ><img src="../assets/img4.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="nav">
            <figure v-for="(item,i) in goods" :key='i'>
                <router-link :to="'/nav/'+item.id"  class="imgs"><img :src="item.icon"></router-link>
                <figcaption>{{item.tname}}</figcaption>
            </figure>
        </div>
        <div id="list-content">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
        <div class="art">
            <router-link :to="'/gdetail/'+item.pid" tag="article" v-for="(item,i) in list" :key='i'>
                <img width="100" height="100" :src="item.pimg">
                <div class="con">
                    <p class="tit">{{item.pname}}</p>
                    <div>
                        <p class="zhe"><span>￥{{item.pprice}}</span> 低至{{item.pdesc}}折</p>
                        <p class="shou">
                            <span class="iconfont icon-shoucang">520</span>
                            <span class="iconfont icon-pinglun">30</span>
                            <span class="time">20分钟前</span>
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
        </van-list>
        </van-pull-refresh>
        </div>
    </section>
    <footer>
      <router-link to="/home" tag="span" class="iconfont icon-home"></router-link>
      <router-link to="/strategy" tag="span" class="iconfont icon-tag"></router-link>
      <router-link to="/cart" tag="span" class="iconfont icon-cart"></router-link>
      <router-link to="/my" tag="span" class="iconfont icon-wode"></router-link>
    </footer>
</div>   
</template>
<script>
import axois from 'axios'
import Mock from 'mockjs'
import $ from 'jquery'
// import { Indicator } from 'mint-ui';

export default{
    name:'Home',
    data(){
        return{
            value:'',
            list:[],
            goods:[],
            totalPage: 0,           
            pageNumber: 0,            
            loading: false,//控制上拉加载的加载动画            
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据            
            isLoading: false,//控制下拉刷新的加载动画
        }
    },
    methods:{
        onLoad() {      //上拉加载
         var _this=this;
            setTimeout(() => {
                axois({
                    method:'get',
                    url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
                    params:{uid:15020}
                }).then(function(data){
                    // console.log(data.data.list);
                    // _this.list=data.data.list;            
                    _this.list=_this.list.concat(data.data.data);
                    // console.log(_this.list)
                })
                _this.loading = false;
                if (_this.list.length >= 60) {
                    _this.finished = true;
                }
            }, 500);
        },

       onRefresh() {       //下拉刷新
            setTimeout(() => {
                this.finished = false;
                this.isLoading = false;
                this.list = []
                this.onLoad()
            }, 500);
        }
    },
    mounted(){
        let winHeight = document.documentElement.clientHeight                          //视口大小
        document.getElementById('list-content').style.height = (winHeight - 46) +'px'  //调整上拉加载框高度

        var _this=this;
        $('.mint-searchbar-cancel').click(function () { 
            // console.log(1)
            _this.$router.push({
                name:'Search',
                query:{
                    goodsname:_this.value
                }
            })
        });

        axois({
            method:'get',
            url:'http://13.250.74.156:8080/WisdomMall-1.0.0/goodsType/findAll.do',
        }).then(function(data){
            // console.log(data.data)
            _this.goods=data.data;     
        })
    }
}
</script>
<style scoped>
.router-link-active{
  color: rgb(236, 118, 40);
}
.home{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section{
  flex: 1;
  overflow: auto;
}
footer{
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #686868;
  background: #ccc;
}
.nav{
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    border-bottom: 1px solid #ccc;
}
.nav figure{
    width: 25%;
    font-size: 13px; 
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;
}
.nav figcaption{
    margin-top: 2px;
    color: rgb(75, 70, 70);
}
.imgs{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    background: #ddd;
}
.imgs img{
    height: 50px;
    width: 50px; 
}
.art article{
    padding: 8px;
    font-size: 14px;
    display: flex;
}
.art article img{
    margin-right: 8px;
}
.tit{
    height: 40px;
    overflow: hidden;
}  
.zhe{
    color: #f00;
    font-size: 12px;
    line-height: 20px;
}
.shou{
    color: rgb(150, 138, 138);
}
.shou span{
    font-size: 13px;
}
.time{
    float: right;
}
.icon-home,.icon-tag,.icon-cart,.icon-wode{
    font-size: 22px;
}

.mint-searchbar-inner{
    border-radius: 20px;
}


.mint-swipe-items-wrap img{
    height: 200px;
    width:100vw;
}
</style>