<template>
<div class='nav'>
    <header> <span class="fanhui" @click="fanhui()">&lt; </span>{{this.$store.state.nav[this.$route.params.gid-1]}}</header>
    <section>
        <mt-swipe :auto="4000" style="height:200px">
            <mt-swipe-item><img src="../assets/img1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img4.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="art">
            <div v-for="(item,i) in goodsA" :key='i'>
                <router-link :to="'/gdetail/'+item.pid" tag="article">
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
        </div>
    </section>
    <footer>
      <router-link to="/home" tag="span" class="iconfont icon-home active"></router-link>
      <router-link to="/strategy" tag="span" class="iconfont icon-tag"></router-link>
      <router-link to="/cart" tag="span" class="iconfont icon-cart"></router-link>
      <router-link to="/my" tag="span" class="iconfont icon-wode"></router-link>
    </footer>
    <!-- <footer>
      <router-link to="/home" tag="span" class="active">首页</router-link>
      <router-link to="/strategy" tag="span">攻略</router-link>
      <router-link to="/cart" tag="span">购物车</router-link>
      <router-link to="/my" tag="span">我的</router-link>
    </footer> -->
</div>
</template>

<script>
import axois from 'axios'
import Mock from 'mockjs'
// Mock.mock('http://www.bbb.com',{
//     'goods|8':[
//         {
//             'gid|+1':0,
//             'imgSrc':"@image('50x50')",
//            'list|5-10' :[
//                {
//                     "lid|+1":0,
//                     "srcImg":"@image('100x80')",
//                     "tit":"@cparagraph(0,16)",
//                     "shoucang":"@integer(500,600)",
//                     "pinglun":"@integer(100,200)",
//                     "dazhe|0-10.2":2,
//                     "pri":"@integer(200,1000)",
//                     "time":"@datetime()"
//                 }
//            ]
//         }
//     ]
// })
export default{
    name:'Nav',
    data(){
        return{
            goodsA:[]
        }
    },
    methods:{
        fanhui(){
            this.$router.goBack();
        }
    },
    mounted(){
         var _this=this;
        // axois({
        //     method:'get',
        //     url:'http://13.250.74.156:8080/WisdomMall-1.0.0/findGoodsView.do',
        //     params:{
        //         gtid:1,
        //         limit:10,
        //         page:1
        //     }
        // }).then(function(data){
        //     console.log(data.data)
        // })

        // console.log(this.$route.params.gid)
        // axois({
        //     method:'get',
        //     url:'http://www.bbb.com'
        // }).then(function(data){
        //     // console.log(data.data.goods)
        //     _this.goodsA=data.data.goods[_this.$route.params.gid].list;
        //     // console.log(_this.goodsA)
        // })

        axois({ 
            method:'get',
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:15020}
        }).then(function(data){
            // console.log(data.data);
            _this.goodsA=data.data.data;
        })
        
    }
}
</script>
<style scoped>
.router-link-active,.active{
  color: rgb(236, 118, 40);
}
header{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ccc;
}
.nav{
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
    font-size: 13px;
}
.time{
    float: right;
}

.fanhui{
    position: absolute;
    left: 20px;
    color: #fff;
    font-size: 25px;
}
.icon-home,.icon-tag,.icon-cart,.icon-wode{
    font-size: 22px;
}

.mint-swipe-items-wrap img{
    height: 200px;
    width:100vw;
}
</style>