<template>
  <div class="hello">
    <mt-header fixed title="首页" style="height:50px;background-color: #558bdb;color:#000;font-size:16px"></mt-header>
    <section>
      <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated fadeOutLeftBig"
      :duration="{ enter: 500, leave: 50 }"
    >
      <router-view></router-view>
      </transition>
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
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
  color: rgb(236, 118, 40);
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
.icon-home,.icon-tag,.icon-cart,.icon-wode{
    font-size: 22px;
}
</style>
