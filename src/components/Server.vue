<template>
<div class='server'>
    <header> <span class="fanhui" @click="fanhui()">&lt; </span>客服</header>
    <section>
        <div id="out"></div>
    </section>
    <footer>
        <input type="text" v-model="txt" class="txt">
        <mt-button type="primary" @click="send()">发送</mt-button>
    </footer>
</div>
</template>

<script>
import $ from 'jquery'
var client=new WebSocket('ws://localhost:3000');
	
	client.onopen=function(){
	}
	
	client.onmessage=function(data){
        console.log(JSON.parse(data.data));
        var obj=JSON.parse(data.data);
        var name=obj.name;
        var oP= document.createElement('p');
        oP.style.width='100vw';
        oP.style.overflow='hidden';
        oP.style.margin='5px 3px';
        var oSpan1=document.createElement('span');
        var oSpan2=document.createElement('span');
        oP.appendChild(oSpan1);
        oP.appendChild(oSpan2);
        oSpan1.innerHTML=obj.name;
        oSpan2.innerHTML=obj.mes;
        $(oSpan1).addClass('touxiang');
        oSpan1.style.width='50px';
        oSpan1.style.height='50px';
        oSpan1.style.borderRadius='50px';
        oSpan1.style.background='#eee';
        oSpan1.style.display='inline-block';
        oSpan1.style.textAlign='center';
        oSpan1.style.lineHeight='50px';
        oSpan1.style.color='#686868';
        oSpan1.style.margin='0 5px';

        oSpan2.style.width='240px';
        oSpan2.style.background='#999';
        oSpan2.style.display='inline-block';
        oSpan2.style.lineHeight='40px';
        oSpan2.style.padding='0 8px';
        oSpan2.style.marginTop='5px';
        oSpan2.style.borderRadius='10px';

        if(name==1){       
            oSpan1.style.float='right';
            oSpan2.style.float='right';

        }else{
            oSpan1.style.float='left';
            oSpan2.style.float='left';
        }
        $("#out").append(oP);
		document.getElementById("out").appendChild(oP);
		
	}
export default{
    name:'Server',
    data(){
        return{
            txt:''
        }
    },
    methods:{
        fanhui(){
            this.$router.goBack();
        },
        send(){
            client.send(this.txt);
            this.txt='';
        }
    }
}
</script>
<style scoped>
.server{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ccc;
    flex-shrink: 0;
}
section{
    flex: 1;
    overflow: auto;
}
.fanhui{
    position: absolute;
    left: 20px;
    color: #fff;
    font-size: 25px;
}
footer{
    height: 60px;
    background: #d3c0c0;
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.txt{
    height: 36px;
    width: 260px;
    border: 0;
    background: #fff;
    margin:0 10px 0 15px;
}
/* #out{
    padding-top: 10px;
}
.touxiang{
    width: 50px;
    height: 50px;
    background: #ccc;
    border-radius: 50%;
    display: inline-block;
} */
</style>