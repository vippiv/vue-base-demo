<template>
  <div class="router-main">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'routerMain',
  data () {
    return {
      title: "命名视图组件，main"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{margin-bottom: 0;}
</style>
