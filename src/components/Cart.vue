<template>
  <div class="cart">
    <header>
      {{carts}}
      <div>
        <span @click="mess()" :style="{'display':isd}">管理</span>
        <span @click="mess1()" :style="{'display':ise}">完成</span>
      </div>
    </header>
    <section>
      <ul>
        <li v-for="(item,i) in list" :key="i" class="ali">
          <input type="checkbox" :text_id='item.pid' class="dan" @click="xuan($event,i)">
          <div class="left">
            <img width="100" height="100" :src="item.pimg">
          </div>
          <div class="middle">
            <h4>{{item.pname}}</h4>
            <p style="color:black">颜色:{{item.pid}}</p>
            <p>型号:{{item.id}}</p>
            <div class="suan">
                <span @click="jian($event,i)" :pid='item.pid'>-</span>
                <p>{{item.pnum}}</p>
                <span @click="jia($event,i)" :pid='item.pid'>+</span>
            </div>
            
          </div>
          <span class="right">￥{{item.pprice}}</span>
        </li>
      </ul>
      <div class="obk" :style="{'display':isa}">
        <p>
          <span>商品合计 :</span>
          <i>￥{{sum}}</i>
        </p>
        <P>
          <span>运费 :</span>
          <i>￥{{num2}}</i>
        </P>
      </div>
      <div class="bot">
          <div class="xuan">
              <input id="quanxuan" type="checkbox" @click="checkAll($event)"> 全选
          </div>
          <div class="go">
              <span v-show="show">合计 :￥{{asum}}</span>
              <div>
                 <p @click="pay()" :style="{'display':isb}">去结算({{num}})</p>
                 <p @click="del()" :style="{'display':isc}">删除已选</p> 
              </div>        
          </div>
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
import axios from "axios";
import Mock from "mockjs";
import Vue from "vue";
import $ from "jquery";
import { Checklist } from "mint-ui";
Vue.component(Checklist.name, Checklist);
export default {
  name: "Cart",
  data() {
    return {
      carts: "购物车",      
      num1: "",
      num2: 10,
      num: 0,
      sum:0,
      value: [],
      list: [],
      list1:{},
      isa:'block',
      isb:'block',
      isc:'none',
      isd:'block',
      ise:'none',
      show:true,

    }
  },
  computed: {
    asum(){
      if(this.sum>=1600){
        this.num2=0;
      }else{
        this.num2=10;
      }
      if(this.sum==0){ 
        return 0;
      }
      return this.sum+this.num2;
    },   
    // sum(){
    //   var num=0;
    //   for(var i in this.list1){
    //     num+=this.list1[i].count*this.list1[i].pri;   
    //   }
    //   return num;
    // }
  },
 
  methods: {
      jian(e,i){
        var _this=this;
        var target=$(e.target);
        if(this.list[i].pnum==1){
          this.list.splice(i,1);
          axios({
            method:'get',
            url:'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
            params:{
              uid:15020,
              pid:target.attr('pid')
            }
          }).then(function(data){
            console.log(data.data)
          })
          return;
        }
        if(this.list[i].pnum>1){
            this.list[i].pnum--;
            axios({
              method:'get',
              url:'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
              params:{
                uid:15020,
                pid:target.attr('pid'),
                pnum:_this.list[i].pnum
              }
            }).then(function(data){
              console.log(data.data);
            })
        }
      },
      jia(e,i){
            this.list[i].pnum++; 
            var _this=this;
            var target=$(e.target);
            axios({
              method:'get',
              url:'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
              params:{
                uid:15020,
                pid:target.attr('pid'),
                pnum:this.list[i].pnum
              }
            }).then(function(data){
              console.log(data.data);
            })           
        },
      pay(){
        var _this=this;
        var arrpid=[];
        for(var i in this.list1){
          arrpid.push(this.list1[i].pid)
        }
        // console.log(typeof JSON.stringify(arrpid));
        this.$router.push({
          name:'Buy',
          path:'/buy',
          query:{
            arrpid:JSON.stringify(arrpid)
          }
        })
      },
      del(){  
        var _this=this;
        for(var i=0;i<$(".dan:checked").length;i++){
          var text_id=$(".dan:checked")[i].getAttribute('text_id')
          console.log(text_id)
          axios({
            method:'get',
            url:'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
            params:{
              uid:15020,
              pid:text_id
            }
          }).then(function(data){
            // console.log(data.data);
            _this.$router.go(0);
          })
        }
      },
      mess(){
        this.isa='none';
        this.isb='none';
        this.isc='block';
        this.isd='none';
        this.ise='block';
        this.show=false;
      },
      mess1(){
        this.isa='block';
        this.isb='block';
        this.isc='none';
        this.isd='block';
        this.ise='none';
        this.show=true;
      },
      xuan(e,i){
        var target=$(e.target);
        // $(e.target).prop('checked',!$(e.target).prop('checked'))
        if(target.prop('checked')){
          this.list1[i]=this.list[i];
        }else{
          
          delete this.list1[i];
          
        }
        this.sum=0;
        this.num=0;
        for(var i in this.list1){
         this.sum+=this.list1[i].pnum*this.list1[i].pprice;   
         this.num+=Number(this.list1[i].pnum);
        }
        if($(".dan:checked").length==$(".dan").length){
          $("#quanxuan").prop('checked',true);
        }else{
          $("#quanxuan").prop('checked',false);
        }
      },
      checkAll(e){ 
        var target=$(e.target)
        $(".dan").prop('checked',target.prop('checked'));
        if(target.prop('checked')){
           for(var i in this.list){
             this.list1[i]=this.list[i];
           }          
        }else{
          for(var i in this.list1){
             delete this.list1[i];
           }
           
        }
        this.sum=0;
        this.num=0;
        for(var i in this.list1){
          this.sum+=this.list1[i].pnum*this.list1[i].pprice;   
          this.num+=Number(this.list1[i].pnum);
        }
      }
  },
  mounted() {
    var _this = this;
    // axios({
    //   method: "get",
    //   url: "http://www.taobao.com"
    // }).then(function(data) {
    //   _this.list = data.data.cart;
      
    // });
    axios({
      method: "get",
      url: "http://jx.xuzhixiang.top/ap/api/cart-list.php",
      params:{id:15020}
    }).then(function(data) {
      console.log(data.data);
      _this.list = data.data.data;
      
    });
    
  }
};
</script>
<style scoped>
.router-link-active {
  color: rgb(236, 118, 40);
}
.cart {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  height: 50px;
  background: rgb(85, 139, 219);
  color: #000;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}
header span{
  color: #444;
  position: absolute;
  right: 20px;
  top:0;
}
section {
  flex: 1;
  margin-top: 10px;
  overflow: auto;
}
section ul{
  margin-bottom:60px;
}
footer {
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #686868;
  background: #ccc;
}
.obk {
  height: 62px;
  padding-left: 20px;
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
.ali {
  height: 120px;
  padding:0 15px;
  border-bottom: 1px solid #999;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.dan{
  margin-left: -10px;
}
.left {
  width: 100px;
  height: 100px;
  float: left;
}
.middle {
  width: 160px;
  height: 100px;
  margin-left: 10px;
}
.middle h4 {
  font-weight: 500;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  color: #666;
}
.middle span {
  height: 20px;
  color: #999;
}
.suan{
    margin-top:14px;
    height:18px;
}
.suan span{
    float: left;
    display: block;
    width:18px;
    height:18px;
    line-height: 18px;
    border:1px solid #999;
    text-align: center;
    color: #000;
}
.suan p{
    height:18px;
    float: left;
    border:1px solid #999; 
}
.right{
    height: 40px;
    margin-top: 40px;
    color: #f00;
}
.bot{
    width:100%;
    height:50px;
    background:white;
    display:flex;
    justify-content: space-between;
    position: absolute;
    bottom: 50px;
}
.xuan{
    padding:12px;
    height:20px;
    width:60px;
}
.go{
    height:50px;
    position:fixed;
    right:0;
}
.go span{
    height:20px;
    line-height: 50px;
}
.go div{
    float:right;
    height:50px;
    width:108px;
    background: #000;
    color:white;
}
.go p{
    height:30px;
    margin-top:12px;
    border-top:1px solid #fff;
    line-height: 30px;
    text-align: center;
}
.icon-home,.icon-tag,.icon-cart,.icon-wode{
    font-size: 22px;
}
</style>