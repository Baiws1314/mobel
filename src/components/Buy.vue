<template>
    <div class="buy">
        <header>
            <span @click="tap()" class="mass icon-fanhui"></span>
            {{tit}}       
        </header>
        <section>
            <div class="address" v-for="(item,i) in list1" :key="i">
                <div class="le">
                    <div>
                        <h4 class=" mass icon-dingweiweizhi"></h4>
                        <span>{{item.buuser}}</span>
                    </div>
                    <span>+861{{item.buphon}}</span>
                </div>
                <div class="ri">
                    <span>{{item.buaddr}}</span>
                    <i>{{item.bupost}}</i>
                </div>
                <div @click="tiao()" class="pick">&gt;</div>
            </div>
            <div class="infor">
                <div class="top">
                    <div>
                        <span class="mass icon-querenxinxi"></span>
                        <span>确认订单信息</span>
                    </div>
                    <p>请核对本页信息,一经提交无法修改</p>
                </div>
                <ul>
                    <li v-for="(item,i) in list" :key="i" class="ali">
                        <div class="left">
                            <img width="80" height="80" :src="item.pimg">
                        </div>
                        <div class="middle">
                            <h4>{{item.pname}}</h4>
                            <span>颜色:{{item.pid}}</span>
                            <div class="suan">{{item.pdesc}}</div>
                        </div>
                        <span class="right">￥{{item.pprice}}</span>
                        
                    </li>
                </ul>
            </div>
            <div class="ipay">
                <div>
                    <span class="mass icon-zhifu1"></span>
                    <span>支付方式</span>
                </div>
                <div>
                <span id="zhi"></span>
                <span :class="icon" @click="tap1()" id="zhi1" ></span>
                </div>
                <ul class="pays" v-show="isa">
                    <li class="mass icon-umidd17" @click="zhi($event)">　支付宝</li>
                    <li class="mass icon-weixin" @click="zhi($event)">　微信</li>
                    <li class="mass icon-yinhangqiazhifuzhangdanfukuanjinqianchucunqia" @click="zhi($event)">　信用卡</li>
                </ul>
            </div>
            <div class="obk">
                <p>
                    <span>商品合计 :</span>
                    <i>￥{{bsum}}</i>
                </p>
                <P>
                    <span>运费 :</span>
                    <i>￥{{num2}}</i>
                </P>
            </div>
            <div class="bot">     
                <span class="xuan">合计:￥{{asum}}</span>
                <span class="go" @click="buy()">提交订单</span>
            </div>
        </section>
    </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import Mock from "mockjs";
import $ from 'jquery'
import { Sku } from 'vant';
import { Button } from 'vant';
Vue.use(Button);
Vue.use(Sku);
Mock.mock("http://www.user.com",{
    "user":[
        {
             "buuser":"@cname()",
             "buphon": "@natural(1000000000,1999999999)",
            "buaddr":"@county(true)",
            "bupost": "@zip()",
        }
       


    ]
})

export default {
    name:'Buy',
    data(){
        return{
            tit:'提交订单',
            bsum:0,
            sum:0,
            num2:10,
            num3:0,
            icon:'mass icon-jiashang',
            isa:false,
            list:[],
            list1:[],
        }
    },
    methods:{
        onBuyClicked(){
            this.$router.push('/pay')
        },
        onAddCartClicked(){

        },
        tap(){
            this.$router.go(-1)
        },
        tap1(){
            if(this.icon==''){
                $("#zhi").html('');
                $("#zhi1").html('');
                this.icon='mass icon-jiashang';

            }else{
                this.isa=!this.isa;
            }
        },
        tiao(){
            this.$router.push('/my')
        },
        buy(){
            this.$router.push('/pay')
        },
        zhi(e){
            var target=$(e.target);
            $("#zhi").html(target.html());
            this.icon='';
            $("#zhi1").html(">");
            this.isa=false;
            console.log(this.isa)
        },
        hi(){
            this.showBase=true
        }
    },
    computed: {
        asum(){
            if(this.bsum>=1600){
                this.num2=0;
            }else{
                this.num2=10;
            }

            return this.bsum+this.num2;
        },
    },
    mounted() {
    var _this = this;
    axios({
      method: "get",
      url: "http://www.user.com"
    }).then(function(data) {
      _this.list1 = data.data.user;
    });


    var arrpid=JSON.parse(this.$route.query.arrpid);
    // console.log(arrpid)
    for(let i=0;i<arrpid.length;i++){
        axios({
            method:'get',
            url:'http://jx.xuzhixiang.top/ap/api/detail.php',
            params:{
                id:arrpid[i]
            }
        }).then(function(data){
            console.log(data.data);
            _this.list.push(data.data.data);
            _this.bsum+=data.data.data.pprice*data.data.data.pdesc;
        })
    }
    
  }
}
</script>
<style scoped>
    .buy{
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
    .obk {
        height: 62px;
        padding-left: 39px;
        margin-bottom: 70px;
    }
    .obk p {
        height: 30px;
        border-bottom: 1px solid #d6f2f2;
        line-height: 30px;
        padding-right: 10px;
    }
    .obk p span {
        float: left;
        color: #777;
    }
    .obk p i {
        float: right;
    }
    .btn{
        height:32px;
        width:60px;
        position: absolute;
        right:129px;
        top:68px;
        line-height: 32px;
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
    margin-top:-20px;
    float:right;
}
    .bot{
        width:100%;
        height:50px;
        background:white;
        display:flex;
        justify-content: space-between;
        position: absolute;
        bottom:0;
        border-top:1px solid #999;
    }
    .xuan{
        padding:12px;
        height:20px;   
    }
    .go{
        height:50px;
        position:fixed;
        right:0; 
        width:108px;
        background: #000;
        color:white;
        line-height:50px;
        text-align: center;
    }
    .address{
        border-bottom: 10px solid #f1f1f1;
        padding:12px;
    }
    .pick{
        position: absolute;
        right:10px;
        top:80px;
        font-size:20px;

    }
    .le{
        height:20px;
        display:flex;
        justify-content: space-between; 
    }
    .le div{
        display: flex;
        height:20px;
        line-height: 20px;
    }
    .le span{
        margin-left:8px;
    }
    .ri{
        margin-left:22px;
        height:36px;
        line-height: 36px;
        color:#999;
    }
    .infor{
        border-bottom: 10px solid #f1f1f1;
        padding:14px 0 14px 12px;
    }
    .top{
        height:20px;
        display:flex;
        justify-content: space-between;
    }
    .top p{
        color:red;
    }
    .ipay{
        padding:10px 14px;
        position: relative;
        display: flex;
        justify-content: space-between;
        border-bottom: 10px solid #f1f1f1;
    }
    .pays{
        width:160px;
        height:141px;
        background:#444;
        position: absolute;
        right:0;
        top:50px;
    }
    .pays li{
        height:46px;
        border-bottom: 1px solid white;
        color:white;
        text-align:left;
        line-height:46px;
        padding-left:20px;
    }
</style>


