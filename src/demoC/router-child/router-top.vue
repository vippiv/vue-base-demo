<template>
  <div class="router-top">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'routerTop',
  data () {
    return {
      title: "命名视图组件，top，top也是默认视图，所谓命名视图就是给router-view起个name，路由文件里给这个名字指定一个组件"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{margin-bottom: 0;}
</style>
