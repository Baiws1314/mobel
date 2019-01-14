<template>
    <div class="all">
        <header>
            <span style="color:white" @click="reback()">&lt;</span>
            <span>个人资料</span>
            <span></span>
        </header>
        <section>
                <div class="pic">
                <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/><img :src="userInfo.avatar"/>
                </div>
            <router-link to='/rename' tag='div' class="rename"><p>更换昵称 <span style="color:#d5d5d5">{{rename}}</span></p><p>&gt;</p></router-link>
            <div class="sex"><span></span>
            <select id="sex">
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select></div>
            <div class="select" >
                <p>生日</p>
                <select class="year">
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                     <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    
                </select>
                <p>年</p>
                <select class="month">
                     <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                     <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <p>月</p>
                <select class="day">
                     <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                     <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                     <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                     <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                     <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <p>日</p>
            </div>
            <div class="but"><mt-button @click="btn" type="primary" style="width:80vw">确认修改</mt-button></div>
        </section>
    </div>
</template>

<script>
import cookie from '../assets/cookie.js'
import axios from 'axios';

export default {
    data () {
        return {
            
           rename:'',
           token:'',
           url:'',
            userInfo: {
      avatar: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547099883&di=d9ef99cb24e658041c1efcd3f49504ca&src=http://b-ssl.duitang.com/uploads/item/201704/27/20170427155254_Kctx8.jpeg'
    },
 

        }
    },
    methods: {
        reback(){
            this.$router.go(-1)
        },
         uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
        handleFile: function (e) {
            let _this=this
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
        console.log( res.result)
      _this.$store.commit('pic',res.result)
      }
      reader.readAsDataURL(file)
    },
    btn(){
        var sex=$('.sex option:selected').text();
        var year=$('.year option:selected').text();
        var month=$('.month option:selected').text();
        var day=$('.day option:selected').text();
        console.log(year,month,day,sex)
        cookie.setCookie("year",year,1)
        cookie.setCookie("month",month,1)
        cookie.setCookie("day",day,1)
        cookie.setCookie("sex",sex,1)
        this.$router.push('/my')
    }
    },
    mounted () {
        var _this=this
        var _year=cookie.getCookie('year')
        var _month=cookie.getCookie('month')
        var _day=cookie.getCookie('day')
        var _sex=cookie.getCookie('sex')
        var token=cookie.getCookie('token')
        this.rename=cookie.getCookie('newname')
        $('.year').val(_year)
        $('.year').find("option[text=_year]").attr('select,true');

         $('.month').val(_month)
        $('.month').find("option[text=_month]").attr('select,true');
        $('.day').val(_day)
        $('.day').find("option[text=_day]").attr('select,true');
       $('#sex').val(_sex)
        $('#sex').find("option[text=_sex]").attr('select,true');
        
        // console.log(token)
        // axios({
        //     method:'post',
        //     url:'http://13.250.74.156:8080/WisdomMall-1.0.0/user/myself.do',
        //     params:{
        //         token:token
        //     }
        // }).then(function(data){
        //     console.log(data.data.data.img)
        //     // _this.rename=data.data.data.name;
        //     _this.url=data.data.data.img
        // }).catch(function(err){
         
        // });
        
    
        
    }
    
}
</script>
<style scoped>
*{margin: 0;padding: 0}
.pic{display: flex;align-items: center;background: #fff;justify-content: space-between;padding: 3vw}
.all{display: flex;flex-direction: column;height: 100vh;}
header{height: 40px;display: flex;justify-content: space-between;background: #d5d5d5}
header span{line-height: 40px;font-size: 20px}
section{background: #f0f0f0;flex: 1}
section .self{display: flex;justify-content: space-between;align-items: center;padding: 0 15px;height: 80px;background: #fff;color: #d5d5d5}
.self span{line-height: 80px;font-size: 18px;}
.rename{display: flex;justify-content: space-between;padding: 0 15px;margin-top: 4px;background: #fff;height: 40px;line-height: 40px}
.sex{height: 50px;background: #fff;margin-top: 4px;display:flex;justify-content: space-between}

.but{display: flex;justify-content: center;margin-top: 20vh}
.select{height:40px ;display: flex;justify-content: space-around;align-items: center;background: #fff;width: 100%;margin-top: 4px;}
select{border: none;outline: medium}
section img{width: 50px;height: 50px;border-radius: 50%}
</style>
