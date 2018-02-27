<template>
  <div class="router-props">
    <h3>{{title}}</h3>
    <p>{{v}}</p>
  </div>
</template>

<script>
export default {
  name: 'routerProps',
  props : ["v"],
  data () {
    return {
      title: "路由props",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
