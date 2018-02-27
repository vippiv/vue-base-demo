<template>
  <div class="router-dynamic">
    <h3>{{title}}，以下是动态参数</h3>
    <div class="container">
    	<div class="row">
    		<div class="col-md-12">
    			params：{{params}}
    		</div>
    		<div class="col-md-12">
    			query：{{query}}
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'routerDynamic',
  data () {
    return {
      title: "这是动态路由",
      params : this.$route.params,
      query : this.$route.query
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
