<template>
  <div class="hello">
    <mt-header fixed title="首页" style="height:50px;background:#ccc;color:#000;font-size:16px"></mt-header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <router-link to="/home" tag="span" class="">首页</router-link>
      <router-link to="/strategy" tag="span">攻略</router-link>
      <router-link to="/cart" tag="span">购物车</router-link>
      <router-link to="/my" tag="span">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
  color: #000;
}
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section{
  flex: 1;
  margin-top:50px;
  overflow: auto;
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

</style>
