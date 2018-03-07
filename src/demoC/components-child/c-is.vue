<template>
  <div class="c-is text-left">
  	<div class="container">
  		<h3>{{title}}</h3>
  	</div>
  	<div class="container">
  		<p><strong>你可以用下面的方法得到正确的渲染结果且符合规范</strong></p>
  		<table>
  			<tr is="custom-c"></tr>
  		</table>
  		<p><strong>这样写可能导致错误且不符合规范</strong></p>
  		<table>
  			<custom-c></custom-c>
  		</table>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'cSlot',
  data () {
    return {
      title: "is特性",
    }
  },
  methods : {

  },
  components : {
		"custom-c" : {
			template : "<tr><td>is特性</td></tr>"
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
