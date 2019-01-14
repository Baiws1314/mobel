<template>
    <div class="privilege">
        <header>
            <span @click="tap()" class="mass icon-fanhui"></span>
            {{tit}}
        </header>
        <section>
        <h1>亲，你还没有特权..</h1>
        </section>
    </div>          
    
</template>

<script>
export default {
    name:'Privilege',
    data(){
        return{
            tit:'我的特权',
        }
    },
    methods:{
        tap(){
            this.$router.go(-1)
        },
    }
}
</script>
<style scoped>
    .privilege{
        height:100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        width:100%;
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
        padding:0 60px;      
    }
    h1{
       height:40px;
       margin-top:40px;
       text-align: center; 
       padding:20px;
       border-bottom: 1px solid red;
    }
</style>


