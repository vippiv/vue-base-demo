<template>
  <div class="components-test">
  	<div class="container">
  		<div class="row">
  			<h1>{{title}}</h1>
  		</div>
  	</div>
  	<hr />
  	<div class="container">
  		<div class="row">
  			<router-link to="/components-test/c-data-is-fun" class="fix-padding">data必须是函数</router-link>
  			<router-link to="/components-test/c-dynamic-props" class="fix-padding">动态prop</router-link>
  			<router-link to="/components-test/c-props-emit" class="fix-padding">组件组合props和emit</router-link>
  			<router-link to="/components-test/c-validate-props" class="fix-padding">props验证</router-link>
  			<router-link to="/components-test/c-slot" class="fix-padding">组件插槽</router-link>
  		</div>
  	</div>
  	<hr />
  	<div class="container">
  		<div class="row">
  			<router-view></router-view>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'components-test',
  data () {
    return {
      title: '组件demo',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
