<template>
  <div class="router-attribute-replace">
    <h3>{{title}}</h3>
    <p>replace在routre-link标签中添加后，页面切换时不会留下历史记录</p>
  </div>
</template>

<script>
export default {
  name: 'routerAttributeReplace',
  data () {
    return {
      title: "router-link属性replace",
      histroySize : ""
    }
  },
  mounted(){
  	this.histroySize = history.length;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
