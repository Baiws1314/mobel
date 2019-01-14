<template>
<div class="all">
    <header>
        <span style="color:white;font-size:25px" @click="tap()">&lt;</span>
        <span style="color:black;font-size:20px">我的地址</span>
        <span style="font-size:30px" @click="add()">+</span>
    </header>
    <section>
        <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  @add="onAdd"
  @edit="onEdit"
/>

<!--        
      <div class="dizhi" v-for="item in arr1" >
        <p><span>{{item.name}}</span><span>{{item.number}}</span></p>
        <p><span style="color:#cecece">{{item.select}}  {{item.diqu}}</span></p>
        <h5></h5>
        <div class="bot">
                <div class="checkbox">
                    <input type="checkbox" value="" style="margin: 7.5px 0 0 5px">
                    <label style="margin-left:10x">
                     默认地址
                    </label>
                 </div>
                <div><span class="iconfont"> &#xe63d;&nbsp;编制</span><span class="iconfont" style="margin:0 10px">&#xe603;&nbsp;删除</span></div>
        </div>





    </div> -->
    </section>
    <!-- <footer >
      <router-link to="/my" tag='span'>添加地址</router-link>  
    </footer> -->
   
</div>
</template>

<script>
//  import "bootstrap/dist/css/bootstrap.min.css"
//  import'bootstrap/dist/js/bootstrap.min.js'
// import {Toast}
 import axios from 'axios'
 import cookie from '../assets/cookie.js'
 import {Toast} from 'mint-ui'
export default {
     name:'Idress',
     data(){
         return {
            // name:"",
            // number:"",
            // content:"",
            // arr1:[],
            // vuex:'',
            chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },

         
     
     methods: {
      tap(){
          this.$router.go(-1)
      },
      add(){
          this.$router.push('Addid')
      },
          onAdd() {
     this.$router.push('Addid')
      Toast('新增地址');
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }  
     },
     mounted :function(){
         this.arr1=this.$store.state.address
        // console.log(cookie.getCookie('rname'))
     this.name= cookie.getCookie('rname')
     this.tel= cookie.getCookie('phone')
     this.address= cookie.getCookie('address')
      // console.log(this.name)
      this.list.push({
        id: '3',
        name:this.name,
        tel: this.tel,
        address: this.address
      })
     }
}
</script>


<style scoped="">
*{margin:0;padding: 0}
footer{height: 40px;background: #d5d5d5;text-align: center;line-height: 40px;font-size: 20px}
section{flex: 1}
section p{display: flex;justify-content: space-between;padding: 0 15px;height: 30px;line-height: 30px}
.dizhi{background: #fff}
.dizhi h5{height: 1px;background: #f0f0f0;width: 95%;margin: 0 auto}
.bot{display: flex;justify-content: space-between;padding: 0 15px;height: 30px;line-height: 30px}




header{height: 40px;display: flex;justify-content: space-between;background: #d5d5d5}
header span{line-height: 40px;margin: 0 10px}
.all{background: #f0f0f0;height: 100vh;display: flex;flex-direction: column}



</style>

