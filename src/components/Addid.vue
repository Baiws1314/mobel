<template>
<div class="all">
    <header>
        <span style="color:white;font-size:25px" @click="reback()">&lt;</span>
        <span style="color:black;font-size:20px">添加新地址</span>
        <span ></span>
    </header>
    <section>
        <van-address-edit
  :area-list="areaList"
  save-button-text
  
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
 
/>
   
</section>
    <!-- <footer >
      <p @click="add()">添加完成</p>   
    </footer> -->
   
</div>
</template>

<script>
//  import "bootstrap/dist/css/bootstrap.min.css"
//  import'bootstrap/dist/js/bootstrap.min.js'
 import { AddressEdit } from 'vant';
 import areaList from '../assets/area'
 import axios from 'axios'
 import cookie from '../assets/cookie.js'
 export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

  methods: {
      reback(){
          this.$router.go(-1)
      },
    //   add(){
    //     this.$router.push('/Idress')
    //   },
    onSave(a) {
     this.$router.push('/Idress')
    cookie.setCookie('rname',a.name,1)
    cookie.setCookie('phone',a.tel,1)
    cookie.setCookie('address',a.addressDetail,1)
    cookie.setCookie('city',a.city,1)
    cookie.setCookie('counntry',a.country,1)
    cookie.setCookie('postalcode',a.postalCode,1)
    cookie.setCookie('flag',a.isDefault,1)


    console.log(a)
    // axios({
    //   method:'post',
    //   url:'http://13.250.74.156:8080/WisdomMall-1.0.0/receiving/insertRecDetail.do',
    //   params:{
    //     rname:a.name,
    //     phone:a.tel,
    //     address:a.addressDetail,
    //     city:a.city,
    //     counntry:a.country,
    //     postalcode:a.postalCode,
    //     flag:a.isDefault

    //   }
    // }).then(function(data){
    //   console.log(data)
    // }).catch(function(err){

    // })
    },
    
    onDelete() {
     
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        },{name:'杭州大学',address:'杭州市东湖区'}];
      } else {
        this.searchResult = [];
      }
    }
  }
}


</script>


<style scoped="">
*{margin:0;padding: 0}
footer{height: 40px;background: #d5d5d5;text-align: center;line-height: 40px;font-size: 20px}
section{flex: 1}
header{height: 40px;display: flex;justify-content: space-between;background: #d5d5d5}
header span{line-height: 40px;margin: 0 10px}
.all{background: #f0f0f0;height: 100vh;display: flex;flex-direction: column}

</style>

