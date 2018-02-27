<template>
  <div class="base-template-syntax">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>插值：</strong></p>
  		<ul>
  			<li>普通插值：{{title}}</li>
  			<li>普通插值：{{rawHtml}}</li>
  			<li>v-html指令：<span v-html="rawHtml"></span></li>
  		</ul>
  		<p><strong>JavaScript表达式：</strong></p>
  		<ul>
  			<li>{{num+1}}</li>
  			<li>{{ok?"yes":"no"}}</li>
  			<li>{{title.split("").reverse().join(" ")}}</li>
  		</ul>
  		<p><strong>指令：</strong></p>
  		<ul>
  			<li>v-if指令：<span v-if="seen">现在你可以看到我了</span></li>
  			<li>v-bind指令：<a v-bind:href="href" target="_blank">我的博客</a></li>
  			<li>v-on指令：<span @click="doSomeThing" style="cursor:pointer;">click</span></li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
export default {
  name: 'baseTemplateSyntax',
  data () {
    return {
      title: "模板语法",
      rawHtml : "<span style='color:red'>This should be red</span>",
      num : 1,
      ok : true,
      seen : true,
      href : "http://www.ftc20.com"
    }
  },
  methods : {
  	doSomeThing(){
  		alert("v-on指令");
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
