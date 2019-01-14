<template>
    <div class="pay">
        <header>
            <span @click="tap()" class="mass icon-fanhui"></span>
            {{tit}}       
        </header>
        <section>
            <div class="box">
                <h2>支付方式</h2>
                <div class="biao">
                    <p class="icon icon-weixin1"></p>        
                    <p class="icon icon-umidd17"></p>       
                    <p class="icon icon-zhifu"></p>  
                </div>         
                <mt-radio
                v-model="value"
                align='right'
                :options="['微信', '支付宝', '信用卡']">
                </mt-radio>
            </div>
            <div class="bot">
                <span class="xuan">合计 :￥{{num3}}</span>
                <span class="go" @click="pay()">立即付款</span>
            </div>
        <van-popup v-model="show1">
        <div class="pay_password" >
            <!-- 密码输入框 -->
            <div class="password_input">
                <p style="text-align: center" class="lijipay">请输入密码</p>
                <van-password-input
                    :value="val"
                />
            </div>
            <!--键盘-->
            <van-number-keyboard
                :show="show1"
                @blur="show1 =false"
                @input="onInput"
                @delete="onDelete"
            />
        </div>
        </van-popup>

        <van-popup v-model="show2" class="success">
            付款成功
        </van-popup>
        </section>
    </div>
</template>
<script>
import Vue from "vue";
import { PasswordInput, NumberKeyboard } from 'vant';
import { Popup } from 'vant';
Vue.use(Popup);
Vue.use(PasswordInput).use(NumberKeyboard);
export default {
    name:'Pay',
    data(){
        return{
            tit:'支付',
            num3:'',
            value:'',
            showKeyboard:true,
            val:'',
            show1:false,
            show2:false,
            
        }
    },
    methods:{
        tap(){
            this.$router.go(-1)
        },
        pay(){
            this.show1=true;
            // this.show=true;
            
        },
        onInput(key){
            this.val=(this.val+key).slice(0,6);
            if(this.val.length==6){
                this.show1=false;
                this.show2=true; 
                 this.$router.push('/cart')
            } 
        },
        onDelete(){
            this.val=this.val.slice(0,this.val.length-1);
        }
    }

}
</script>
<style scoped>
    .pay{
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
    .success{
        width: 160px;
        height:100px;
        margin-left:-80px;
        text-align: center;
        line-height: 100px;
        border-radius: 20px;
        font-size: 20px;
    }
    .box{
        padding:14px 0 0 14px;
    }
    .box h2{
        font-weight: normal;
    }
    .biao{
        position: absolute;
        z-index: 200;
        top:108px;    
    }
    .mint-radiolist{
        margin-left:20px;
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
     .van-popup {
            transform: none;
        }
 
        .pay_password {
            background: #FAFAFA;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 50%;
        }
 
        .password_input {
            position: fixed;
            left: 0;
            bottom: 225px;
            width: 100%;
        }
.lijipay{
    line-height: 73px;
    font-size: 18px;
}

</style>


