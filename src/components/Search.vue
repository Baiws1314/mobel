<template>
<div class='search'>
    <header> <span class="fanhui" @click="fanhui()">&lt; </span>搜索结果</header>
    <section>
        <div class="art">
            <router-link :to="'/gdetail/'+item.pid" tag="article" v-for="(item,i) in list" :key='i'>
                <img width="100" height="100" :src="item.pimg">
                <div class="con">
                    <p class="tit">{{item.pname}}</p>
                    <div>
                        <p class="zhe">低至{{item.pdesc}}折</p>
                        <p class="shou">
                            <span class="iconfont icon-shoucang">520</span>
                            <span class="iconfont icon-pinglun">30</span>
                            <span class="time">30分钟前</span>
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

        axois({ 
            method:'get',
            url:"http://jx.xuzhixiang.top/ap/api/productlist.php",
            params:{uid:15020}
        }).then(function(data){
            // console.log(data.data);
            _this.list=data.data.data;
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