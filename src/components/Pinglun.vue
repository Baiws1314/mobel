<template>
<div class='pinglun'>
    <header> <span class="fanhui" @click="fanhui()">&lt; </span>{{this.$store.state.pinglun}}条评论</header>
    <section>
        <commemt-content v-bind:comment="comment" v-on:change="changCommmer"></commemt-content>        
    </section>
    <footer>
        <comment-textarea v-bind:type="type" v-bind:name="oldComment" v-on:submit="addComment"
                            v-on:canel="canelCommit"></comment-textarea>     
    </footer>
    <!-- <div class="container"> -->
        <!-- <div class="col-md-9 rightBox" id="comment"> -->
            <!-- <commemt-content v-bind:comment="comment" v-on:change="changCommmer"></commemt-content> -->
            <!-- <comment-textarea v-bind:type="type" v-bind:name="oldComment" v-on:submit="addComment" -->
                              <!-- v-on:canel="canelCommit"></comment-textarea> -->
        <!-- </div> -->
    <!-- </div> -->
</div>
</template>

<script>
function getTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        month.length < 2 ? "0" + month : month;
        day.length < 2 ? "0" + day : day;
        return year + "-" + month + "-" + day;
    }


export default{
    name:'Pinglun',
    data(){
        return{
            commenter: "session",   //评论人，这里会从session拿
            type: 0,                //0为评论作者1为评论别人的评论
            oldComment: null,       //久评论者的名字
            chosedIndex: -1,        //被选中的评论的index
            comment: [
                {
                    name: "有毒的黄同学",
                    time: "2016-08-17",
                    content: "好,讲得非常好，good",
                    reply: [
                        {
                            responder: "有毒的黄同学",
                            reviewers: "傲娇的",
                            time: "2016-09-05",
                            content: "你说得对"
                        },
                        {
                            responder: "傲娇的",
                            reviewers: "有毒的黄同学",
                            time: "2016-09-05",
                            content: "很强"
                        }
                    ]
                },
                {
                    name: "Freedom小黄",
                    time: "2016-08-17",
                    content: "好,讲得非常好，good",
                    reply: []
                }
            ]
        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1);
        },
        //添加评论
        addComment: function(data) {
            if(this.type == 0) {
                this.comment.push({
                    name: 'session',
                    time: getTime(),
                    content: data,
                    reply: []
                });
                //服务器端
            }else if(this.type == 1){
                this.comment[this.chosedIndex].reply.push({
                    responder: 'session',
                    reviewers:this.comment[this.chosedIndex].name,
                    time: getTime(),
                    content: data
                });
                this.type = 0;
            }
        },
        //监听到了点击了别人的评论
        changCommmer: function(name,index) {
            this.oldComment = name;
            this.chosedIndex = index;
            this.type = 1;
        },
        //监听到了取消评论
        canelCommit: function() {
            this.type = 0;
        }
    },
    mounted(){
        var _this=this;
        
    },
    components:{
        'commentTextarea':{
            template:`
    <div class="commentBox" style="left:10px;position:absolute;bottom:10px;">
        <p v-if="type" style="margin-left:8px;font-weight:100;font-size:14px">你回复&nbsp;@{{name}}</p>
        <textarea style="border:1px solid #999" cols=43 rows=6 name="" placeholder="自古评论出奇才···" value="请填写评论内容" v-model="commentText"></textarea>
        <div style="float:right;margin-right:10px">
        <mt-button style="margin:5px 0 10px 8px" size="small" type="primary" class="btn" @click="addComment">发表</mt-button>
        <br>
        <mt-button style="margin:5px 0 10px 8px" size="small" type="danger" class="btn" @click="canelComment">取消</mt-button>
        </div>
    </div>`,
            props: ['type','name'],
            data: function(){
                return {commentText:""}
            },
            methods: {
                addComment: function() {
                    this.$emit("submit",this.commentText);
                    this.commentText = "";
                },
                canelComment: function() {
                    this.$emit("canel");
                    this.commentText = "";
                }
            }
        },
        'commemt-content':{
            template:'\
    <div class="commentBox">\
        <p v-if="comment.length==0">暂无评论，我来发表第一篇评论！</p>\
        <div v-else>\
            <div class="comment" style="margin:20px 0 0 10px" v-for="(item,index) in comment" v-bind:index="index" >\
                <b style="font-size:18px">{{item.name}}<span style="float:right;margin-right:10px;font-size:13px;color:#686868;font-weight:normal;">{{item.time}}</span></b>\
                <p @click="changeCommenter(item.name,index)" style="line-height:30px;margin-left:8px;">{{item.content}}</p>\
                <div v-if="item.reply.length > 0">\
                    <div style="margin-left:8px;background:rgba(207, 197, 197,0.3);padding:5px 0 8px 8px;border-bottom:1px solid #fff" class="reply" v-for="reply in item.reply">\
                        <b style="color:#989898;line-height:35px">{{reply.responder}}&nbsp;&nbsp;<i style="color:#000;font-style:normal">回复</i>&nbsp;&nbsp;{{reply.reviewers}}<span style="float:right;margin-right:10px;font-size:13px;color:#686868;font-weight:normal;">{{reply.time}}</span></b>\
                        <p @click="changeCommenter(reply.responder,index)"">{{reply.content}}</p>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>',
            props: ['comment'],
            methods: {
                changeCommenter: function(name,index) {
                    this.$emit("change",name,index);
                }
            }
        }
    }
}
</script>
<style scoped>
.pinglun{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
header{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ccc;
}
section{
  flex: 1;
  overflow: auto;
  
}
footer{
    height: 130px;
    flex-shrink: 0;
    background: rgb(230, 207, 207);
    z-index: 10;
}
.fanhui{
    position: absolute;
    left: 20px;
    color: #fff;
    font-size: 25px;
}

.btn{
    width:60px;
    height: 50px;
}

</style>