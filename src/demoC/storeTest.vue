<template>
  <div class="store-test">
  	<div class="container text-left">
	   	<h1>{{mtitle}}</h1>
	   	<hr />
	   	<div class="row">
	   		<router-link to="/store-test/store-getData" class="fix-padding">获取数据</router-link>
	   		<router-link to="/store-test/store-mutations" class="fix-padding">mutation</router-link>
	   		<router-link to="/store-test/store-actions" class="fix-padding">action</router-link>
	   		<a href="http://www.ftc20.com/demo/vue-crab/#/" target="_blank" class="fix-padding">module</a>
	   	</div>
	   	<hr />
   	</div>
   	<div class="container">
   		<router-view></router-view>
   		<hr />
   		<div class="row text-left">
   			<div class="col-md-12">
   				<p><strong>PS：</strong></p>
   				<ul>
   					<li>使用了状态持久化插件vuex-persistedstate，刷新不会丢失数据，除非删除localstorage</li>
   				</ul>
   			</div>
   		</div>
   	</div>
  </div>
</template>

<script>
export default {
  name: 'storeTest',
  data () {
    return {
    	mtitle : "store demo"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
