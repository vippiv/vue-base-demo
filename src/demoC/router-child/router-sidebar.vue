<template>
  <div class="router-sider">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'routerSider',
  data () {
    return {
      title: "命名视图部分，sidebar"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{margin-bottom: 0;}
</style>
