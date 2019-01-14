<template>
<div class='strategy'>
    <section>
        <ul>
            <li v-for="(item,i) in list" :key="i" class="oli">
                <div class="left">
                    <h4><router-link to="/detail">{{item.texth2}}</router-link></h4>
                    <span class="iconfont icon-shoucang" @click="cang($event,i)">{{item.textnum}}</span>
                    <span class="iconfont icon-qipao"> {{item.textnum1}}</span>
                </div>
                <div class="right">
                    <img src="../assets/u=4268.jpg"/>
                </div>
            </li>
        </ul>
    </section>
</div>
</template>

<script>
import $ from 'jquery'
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

export default {
    name:'Strategy',
    data(){
        return{
            tit:'我的攻略',
            list:[]
        }
    },
    methods:{
        tap(){
            this.$router.go(-1)
        },
        cang(e,i){
            var target=$(e.target);
            target.attr('class','iconfont icon-xingxing')
            this.$router.push("/collect")
        }
    },
    mounted(){
        this.$emit('toparent',this.tit);
        var _this=this;
        axios({
            method:'get',
            url:'http://www.wangyiyun.com',
            // params:{uid:1}      
        }).then(function(data){          
             _this.list=data.data.text
             console.log(data.data.text)
    })
}
}
</script>
<style scoped>
    .router-link-active{
    color: #000;
    }   
    .strategy{
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
    section{
        flex: 1;
        overflow: auto;        
    }
    header span{
        color: white;
        font-size:20px;
        position: absolute;
        left:20px;
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
    .oli{
        height: 80px;
        padding:10px;
        border-bottom: 1px solid #999;
    }
    .left{
        float: left;        
    }
    .left h4{
        width:220px;
        font-weight: 500;
        line-height:26px;
        margin-bottom: 10px;
    }
    a{
       text-decoration: none;
        color: #222;
    }
    .left span{   
        color:#999; 
    }   
    .right{
        float:right;
        width:110px;
        height:80px;
    }
    .right img{
        width:110px;
        height:80px;
    }
</style>