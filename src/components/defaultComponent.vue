<template>
  <div class="default-component">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<div class="row text-left">
  			<div class="col-sm-3"><router-link to="/base-test">基础测试demo</router-link></div>
  			<div class="col-sm-3"><router-link to="/store-test">store测试demo</router-link></div>
  			<div class="col-sm-3"><router-link to="/transition-test">transition测试demo</router-link></div>
  			<div class="col-sm-3"><router-link to="/router-test">router测试demo</router-link></div>  			
  			<div class="col-sm-3"><router-link to="/components-test">components测试demo</router-link></div>  			
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'defaultComponent',
  data () {
    return {
      title: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
