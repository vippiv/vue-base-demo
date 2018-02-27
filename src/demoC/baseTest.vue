<template>
  <div class="base-test">
   <div class="container text-left">
   	<h1>{{title}}</h1>
   	<hr />
   	<div class="row">
   		<router-link to="/base-test/base-template-syntax" class="fix-padding">模板语法</router-link>
   		<router-link to="/base-test/base-computed-watch" class="fix-padding">计算属性和侦听器</router-link>
   		<router-link to="/base-test/base-class-style" class="fix-padding">class和style</router-link>
   		<router-link to="/base-test/base-condition" class="fix-padding">条件渲染</router-link>
   		<router-link to="/base-test/base-list" class="fix-padding">列表渲染</router-link>
   		<router-link to="/base-test/base-event" class="fix-padding">事件处理</router-link>
   		<router-link to="/base-test/base-forms" class="fix-padding">表单输入绑定</router-link>
   	</div>
   	<hr />
   	<div class="row" style="margin-bottom: 50px;">
   		<div class="col-md-12">
   			<router-view></router-view>
   		</div>
   	</div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'baseTest',
  data () {
    return {
    	title : "基础测试demo",
    }
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fix-padding{padding:0 0.5em;}
.slide-enter-active,.slide-leave-active{
	transition: all 1s;
}
.slide-enter,.slide-leave-to{
	transform: translateX(20px);
}
</style>
