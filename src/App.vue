<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1><router-link to="/">首页</router-link><!--以下router view区域将渲染路由根目录下的路径--></h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
