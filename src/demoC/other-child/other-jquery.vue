<template>
  <div class="other-jquery">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>引用jquery：</strong></p>
  		<ul>
				<li><span id="jquery-operate-object">引用了jquery</span></li>
				<li><span id="toggle-span">toggle</span> <button class="btn btn-primary" id="toggle-btn">toggle</button></li>
  		</ul>
  		<hr />
  		<p><strong>PS:</strong></p>
  		<ul>
  			<li><strong>引用jquery分以下几个步骤</strong>
  				<ul>
  					<li>利用npm安装jquery</li>
  					<li>在build/webpack.base.conf.js中增加plugins选项并在其中引入jquery插件</li>
  					<li>在需要使用jquery的页面将jquery import进来</li>
  					<li>可以使用了</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
	import $ from "jquery"
export default {
  name: 'otherJquery',
  data () {
    return {
      title: "引用jquery",
    }
  },
  mounted(){
  	var $joo = $("#jquery-operate-object");
  	var $ts = $("#toggle-span");
  	var $tBtn = $("#toggle-btn");
  	$joo.css("color",'red');
  	$tBtn.on("click",function(){
  		$ts.toggle();
  	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
