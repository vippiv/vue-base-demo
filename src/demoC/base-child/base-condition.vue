<template>
  <div class="base-condition">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>条件渲染语法：</strong></p>
  		<ul>
				<li>v-if语法：<span v-if="ok">yes</span><span v-else>no</span></li>
				<li>v-else-if语法：
					<span v-if="type == 'A'">A</span>
					<span v-else-if="type == 'B'">B</span>
					<span v-else-if="type == 'C'">C</span>
					<span v-else>not in A/B/C</span>
				</li>
				<li><span v-show="ok">yes</span></li>
  		</ul>
  		<hr />
  		<p><strong>PS:</strong></p>
  		<ul>
  			<li>v-if只有条件为真时才会渲染，v-show总是会渲染并且只是简单的基于css进行切换</li>
  			<li>当v-if和v-for一起使用时，v-for比v-if有更高的优先级</li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
export default {
  name: 'baseClassStyle',
  data () {
    return {
      title: "条件渲染",
      ok : true,
      type : 'B'
    }
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
