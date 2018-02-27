<template>
  <div class="router-name">
    <h1>{{title}}</h1>
    <div class="container">
    	<div class="row" style="border:1px solid #E3E3E3;">
    		<div class="col-md-12" style="border-bottom:1px solid #E3E3E3;">
    			<router-view></router-view>
    		</div>
    		<div class="col-md-6" style="border-right:1px solid #E3E3E3;">
    			<router-view name='s'></router-view>
    		</div>
    		<div class="col-md-6">
    			<router-view name='m'></router-view>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'routerName',
  data () {
    return {
      title: "命名视图组件"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
