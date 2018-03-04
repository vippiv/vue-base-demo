<template>
  <div class="router-attribute-exact">
    <h3>{{title}}</h3>
		<p style="border:1px solid #EEE;">{{htmlSaw}}</p>
		<p>上面这个标签如果不加exact属性，则会在www.ftc20.com/article页面下也会被匹配到，这却不是我们的本意,在加了这个属性后就会正确的匹配到www.ftc20.com下</p>
  </div>
</template>

<script>
export default {
  name: 'routerAttributeExact',
  data () {
    return {
      title: "router-link属性exact，严格匹配模式",
      htmlSaw : '<router-link :to="/" exact>home</router-link>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre{border:1px solid #EEE;}
</style>
