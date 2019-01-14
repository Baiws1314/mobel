<template>
    <div class="collect">
        <header>
            <div>
            <span @click="tap2()" class="iconfont icon-fanhui"></span>
            {{tit}}
            </div>
            <div>
                <p @click="tap()">折扣</p>
                <p @click="tap1()">攻略</p>
            </div>       
        </header>
        <section>
            <div>
                <ul v-show="isa">
                     <li v-for="(item,i) in list" :key="i" class="ali">
                        <div class="left">
                            <img :src="item.buimg">
                        </div>
                        <div class="middle">
                            <h4>{{item.buh2}}</h4>
                            <span>颜色:{{item.bunum2}}</span>
                            <div class="suan">{{item.bunum}}</div>
                        </div>
                        <span class="right">￥{{item.pri}}</span>
                        
                    </li>
                </ul>
                <ul v-show="isb">
                   <li v-for="(item,i) in list1" :key="i" class="oli">
                        <div class="left1">
                            <h4><router-link to="/detail">{{item.texth2}}</router-link></h4>
                            <span class="iconfont icon-xing-copy">{{item.textnum}}</span>
                            <span class="iconfont icon-qipao"> {{item.textnum1}}</span>
                        </div>
                        <div class="right1">
                            <img :src="item.textimg"/>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
import Mock from 'mockjs';
Mock.mock('http://www.wangyiyun.com',{
    "text|8-10":[
        {
           "textid|+1":0,
           "texth2":"@ctitle(14,16)",
           "textimg":"@image('100x80')",
           "texttime":"@time('hh:mm')",
           "textnum":"@natural(1,1000)",
           "textnum1":"@natural(1,100)",
           "textcon":"@cparagraph(4,6)",
        }
    ]
})
Mock.mock("http://www.jingdong.com", {
  "buy|3-5": [
    {
      "butid|+1": 0,
      "buh2": "@ctitle(6,10)",
      "buimg": "@image('80x80')",
      "bunum": "@natural(1,10)",
      "bunum1": "@natural(1,1000)",
      "bunum2":"@natural(1,300)",
      "pri":'@integer(100,300)'
    }
  ]
});
export default {
    name:'Collect',
    data(){
        return{
            tit:'我的收藏',
            isa:true,
            isb:false,
            list:[],
            list1:[]
        }
    },
    methods:{
        tap(){
            this.isa=true;
            this.isb=false;
        },
        tap1(){
            this.isb=true;
            this.isa=false;
        },
        tap2(){
            this.$router.go(-1)
        }

    },
    mounted() {
    var _this = this;
    axios({
      method: "get",
      url: "http://www.wangyiyun.com"
    }).then(function(data) {
      _this.list1 = data.data.text;
    });

    axios({
      method: "get",
    //   url: "http://13.250.74.156:8080/WisdomMall-1.0.0/findCollStraById.do",
     //   params:{id:1}
        url:'http://www.jingdong.com',
   
    }).then(function(data) {
      _this.list = data.data.buy;
   
    });
  }

}
</script>
<style scoped>
    .collect{
        height:100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        height:108px;  
        color:#000;
        font-size:18px;
        text-align: center;
    }
    header span{
        color: white;
        font-size:20px;
        position: absolute;
        left:20px;       
    }
    header div:nth-child(1){
         height:50px;
         background:#ccc;
         line-height:50px;
    }
    header div:nth-child(2){
        height:42px;
        background: #eeee;
        padding:6px 0 10px 0; 
    }
    header p{
        width:49%;
        height:42px;
        float: left;
        border-right:1px solid #ccc;
        line-height: 42px;
        font-size: 16px;
    }
    header p:last-child{
        border: 0;
    }
    section{
        flex: 1;
        overflow: auto;      
    }
    .ali {
    height: 80px;
    padding: 15px;
    border-bottom: 1px solid #999;
    list-style: none;
    position: relative;
    }

    .left {
    margin-left:10px;
    width: 100px;
    height: 80px;
    float: left;
    }
    .middle {
    width: 160px;
    height: 80px;
    margin-left: 10px;
    float: left;
    }
    .middle h4{
    font-weight: 500;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    color: #444;
    }
    .middle span {
    height: 20px;
    color: #999;
    }
    .suan{
        margin-top:14px;
        height:18px;
    }
    .right{
        margin-top:60px;
        float:right;
    }
    .oli{
        height: 80px;
        padding:10px;
        border-bottom: 1px solid #999;
    }
    .left1{
        float: left;        
    }
    .left1 h4{
        width:220px;
        font-weight: 500;
        line-height:26px;
        margin-bottom: 10px;
    }
    a{
        text-decoration: none;
        color: #222;
    }
    .left1 span{   
        color:#999; 
    }   
    .right1{
        float:right;
    }
</style>


