<template>
  <div class="router-mate">
    <p v-if="$route.meta.isMeta">{{title}}--metaInfo：{{metaInfo}}</p>
    <p v-if="!$route.meta.isMeta">如果不存在meta则显示这条</p>
  </div>
</template>

<script>
export default {
  name: 'routerMate',
  data () {
    return {
      title: "如果路由存在mate信息，则显示该组件",
      metaInfo : this.$route.meta.isMeta,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{margin-bottom: 0;}
</style>
