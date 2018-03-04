<template>
  <div class="router-attribute-active-class">
    <h3>{{title}}</h3>
		<p>active-class属性的默认值是router-link-active,所以如果没有设置，就会被渲染为这个class</p>
		<p>可以在router.js里面设置，也可以给active-class赋值</p>
		<p><strong>方法一、在router.js中赋值，所有链接激活class属性就变成你设定的</strong></p>
		<pre>
	const router = new VueRouter({
		mode: 'hash',
		linkActiveClass: 'u-link-Active', // 这是链接激活时的class
	})
		</pre>
		<p><strong>方法二、直接给active-class赋值，当前链接激活class属性就变成你设定的</strong></p>
		<pre>
	active-class="custom-link-active"
		</pre>
  </div>
</template>

<script>
export default {
  name: 'routerAttributeActiveClass',
  data () {
    return {
      title: "router-link属性active-class",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre{border:1px solid #EEE;}
</style>
