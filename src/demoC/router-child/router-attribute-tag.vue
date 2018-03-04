<template>
  <div class="router-attribute-replace">
    <h3>{{title}}</h3>
    <p>具有tag属性的router-link会被渲染成相应的标签</p>
    <p>此时tag指定的标签同样具有了连接跳转的功能，vue会自动为其绑定点击事件，并跳转页面</p>
  </div>
</template>

<script>
export default {
  name: 'routerAttributeTag',
  data () {
    return {
      title: "router-link属性tag",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
