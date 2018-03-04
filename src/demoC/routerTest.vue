<template>
  <div class="router-test">
   <div class="container text-left">
   	<h1>{{title}}</h1>
   	<hr />
   	<div class="row">
   		<router-link to="/router-test" class="fix-padding">默认</router-link>
   		<router-link to="/router-test/router-p1" class="fix-padding">链接一</router-link>
   		<router-link to="/router-test/router-p2" class="fix-padding">链接二</router-link>
   		<!--以下两个路由切换时组件会被服用，因此组件渲染时的生命周期钩子函数将不会被调用，vue提供了watch和beforeRouteUpdate方法监控路由变化-->
   		<router-link to="/router-test/router-dynamic/10" class="fix-padding" title="一个参数">动态链接一</router-link>
   		<router-link to="/router-test/router-dynamic/10/post/zwl" class="fix-padding" title="多个参数">动态链接二</router-link>
   		<a href="javascript:;" @click="programeNavPush" class="fix-padding">编程式导航(push)</a>
   		<a href="javascript:;" @click="programeNavReplace" class="fix-padding">编程式导航(replace)</a>
   		<a href="javascript:;" @click="programeNavGo" class="fix-padding">编程式导航(回退)</a>
   		<router-link to="/router-test/router-name" class="fix-padding">命名视图</router-link>
   		<router-link to="/router-test/router-props" class="fix-padding">路由props(不带参数)</router-link>
   		<router-link to="/router-test/router-props/params" class="fix-padding">路由props(带参数)</router-link>
   		<router-link to="/router-test/router-meta" class="fix-padding">带meta的路由</router-link>
   		<router-link to="/router-test/router-transition" class="fix-padding">路由过渡</router-link>
   		<router-link to="/router-test/router-getData-before" class="fix-padding">导航完成前加载数据</router-link>
   		<router-link to="/router-test/router-getData-after" class="fix-padding">导航完成后加载数据</router-link>
   		<router-link to="/router-test/router-attribute-replace" replace class="fix-padding">router-link属性replace</router-link>
   		<router-link to="/router-test/router-attribute-tag" tag="em" style="padding: 0 1em;" class="fix-padding"><span>router-link属性tag</span></router-link>
   		<router-link to="/router-test/router-attribute-active-class" active-class="custom-link-active" class="fix-padding">router-link属性active-class</router-link>
   		<router-link to="/router-test/router-attribute-exact" class="fix-padding">router-link属性exact</router-link>
   	</div>
   	<hr />
   	<div class="row" style="margin-bottom: 50px;">
   		<div class="col-md-12">
   			<h2>路由视图渲染区域</h2>
   			<hr />
   			<!--<transition name="slide">
   				基于路由的过渡动态
   				<router-view></router-view>
   			</transition>-->
   			<router-view></router-view>
   		</div>
   	</div>
   	<div class="row">
   		<div class="col-md-12">
   			<h2>PS:</h2>
   			<hr />
   			<ul>
   				<li>router和route是不一样的</li>
   				<li>template模板中引用route不需要使用this，js中才需要</li>
   				<li>
   					导航守卫有全局的，路由独享的，组件内的，触发的市级各有不同，因此要注意"完整的导航解析流程"
   					<ul>
   						<li>导航被触发。</li>
   						<li>在失活的组件里调用离开守卫。</li>
   						<li>调用全局的 beforeEach 守卫。</li>
   						<li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li>
   						<li>在路由配置里调用 beforeEnter。</li>
   						<li>解析异步路由组件。</li>
   						<li>在被激活的组件里调用 beforeRouteEnter。</li>
   						<li>调用全局的 beforeResolve 守卫 (2.5+)。</li>
   						<li>导航被确认。</li>
   						<li>调用全局的 afterEach 钩子。</li>
   						<li>触发 DOM 更新。</li>
   						<li>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数</li>
   					</ul>
   				</li>
   			</ul>
   		</div>
   	</div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'routerTest',
  data () {
    return {
    	title : "这是嵌套路由测试 ，必须在router/index.js中使用children选项，否则无法渲染嵌套路由中",
    }
  },
  methods : {
  	programeNavPush : function(){
  		this.$router.push("/router-test/router-programe-push");
  		
  	},
  	programeNavReplace : function(){
  		this.$router.replace("/router-test/router-programe-replace");
  	},
  	programeNavGo : function(){
  		this.$router.go(-1);
  	}
  },
  //watch和beforeRouteUpdate是等效的
// 	watch : {
// 		"$route" : function(to,from){
// 			if(to.path.indexOf("router-dynamic") > 0){
// 				location.reload();
// 			}
// 		}
// 	},
		//beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave是组件内导航守卫
		beforeRouteEnter : function(to,from,next){
			// 在渲染该组件的对应路由被 confirm 前调用
    	// 不！能！获取组件实例 `this`
    	// 因为当守卫执行前，组件实例还没被创建
    	next();
		},
   	beforeRouteUpdate : function(to,from,next){
   		if(to.path.indexOf("router-dynamic") > 0){
   			location.reload();
   		}
   		//当一个路由匹配成功的时候可能匹配到多个路由记录，匹配到的路由记录保存在$route.matched中，需要遍历$route.matched来检查理由记录中是否存在meta信息
   		if(to.matched.some(record=>record.meta.isMeta)){
    		alert("存在路由meta信息");
    	}
   		next();//必须调用next()路由切换才会生效
   	},
   	beforeRouteLeave : function(to,from,next){
   		next();
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
.router-link-exact-active {color: red;}
.custom-link-active{color: orange;}
</style>
