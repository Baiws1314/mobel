<template>
<div class='search'>
    <header> <span class="fanhui" @click="fanhui()">&lt; </span>搜索结果</header>
    <section>
        <div class="art">
            <router-link to='/gdetail' tag="article" v-for="(item,i) in list" :key='i'>
                <img :src="item.srcImg">
                <div class="con">
                    <p class="tit">{{item.tit}}</p>
                    <div>
                        <p class="zhe">低至{{item.dazhe}}折</p>
                        <p class="shou">
                            <span class="iconfont icon-shoucang">{{item.shoucang}}</span>
                            <span class="iconfont icon-pinglun">{{item.pinglun}}</span>
                            <span class="time">{{item.time}}</span>
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</div>
</template>

<script>
import axois from 'axios'
import Mock from 'mockjs'
Mock.mock('http://www.fff.com',{
    'list|5-10':[
        {
            "lid|+1":0,
            "srcImg":"@image('100x80')",
            "tit":"@cparagraph(10,16)",
            "shoucang":"@integer(500,600)",
            "pinglun":"@integer(100,200)",
            "dazhe|0-10.2":2,
            "time":"@datetime()"
        }
     ]
})
export default{
    name:'Search',
    data(){
        return{
            list:[]
        }
    },
    methods:{
        fanhui(){
            this.$router.goBack();
        }
    },
    // http://www.fff.com
    mounted(){
        console.log(this.$route.query.goodsname);
        var _this=this;
        // axois({
        //     method:'get',
        //     url:'http://13.250.74.156:8080/WisdomMall-1.0.0/fingGoodsByGoodsName.do',
        //     params:{
        //         goodsname:_this.$route.query.goodsname,
        //         limit:10,
        //         page:1
        //     }
        // }).then(function(data){
        //     console.log(data.data);
        //     // _this.list=data.data.list;
        // })
        axois({
            method:'get',
            url:'http://www.fff.com'
        }).then(function(data){
            // console.log(data.dsata);
            _this.list=data.data.list;
        })
    }
}
</script>
<style scoped>
.search{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ccc;
}
section{
    flex: 1;
    overflow: auto;
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
.fanhui{
    position: absolute;
    left: 20px;
    color: #fff;
    font-size: 25px;
}
</style>