<template>
  <div class="other-custom-directive">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<ul>
  			<li><p>全局自定义指令focus，页面加载input元素自动获得焦点</p>
  				<input type="text" class="form-control" v-focus/>
  			</li>
  			<li><p>局部自定义指令fcs，input自动填充值</p>
  				<input type="text" class="form-control" v-fcs/>
  			</li>
  		</ul>
  		<hr />
  		<p><strong>钩子函数：</strong></p>
  		<ul>
  			<li>
  				<p><strong>bind：</strong>只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置</p>
  				<div class="bid" v-bid></div>
  			</li>
  			<li>
  				<p><strong>inserted：</strong>被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)</p>
  				<div class="parent">
  					<div class="bid" v-ist>ist指令</div>
  				</div>
  				<p class="mt50">inserted应用，图片未加载前用随机颜色代替，加载完成显示图片</p>
  				<div class="container">
  					<div class="row">
  						<div class="col-md-4 h500" v-img="item" v-for="item in imgList"></div>
  					</div>
  				</div>
  			</li>
  			<li>
  				<p><strong>update：</strong>所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 </p>
  				<input type="text" v-model="colorName" class="form-control" placeholder="请输入颜色值，red，green,带#的十六进制值之类"/>
  				<p v-cc="colorName">这里的颜色随着输入框的值变化而变化</p>
  			</li>
  			<li>
  				<p><strong>componentUpdated：</strong>指令所在组件的 VNode 及其子 VNode 全部更新后调用</p>
  			</li>
  			<li>
  				<p><strong>unbind：</strong>只调用一次，指令与元素解绑时调用，如：路由切换就会触发unbind</p>
  				<div v-eventDirective v-if="isUnbind">点击这里试试</div>
  				<div @click="doUnbind" class="pointer">点击这里解除bind</div>
  			</li>
  		</ul>
  		<hr />
  		<p><strong>钩子函数参数：</strong></p>
  		<ul>
  			<li><strong>el：</strong>指令所绑定的元素，可以直接用来操作DOM</li>
  			<li>
  				<strong>binding：</strong>一个对象，包含以下属性
  				<ul>
  					<li><strong>name：</strong>指令名，不包含v-前缀</li>
  					<li><strong>value：</strong>指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2</li>
  					<li><strong>oldValue：</strong>指令的绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用</li>
  					<li><strong>expression：</strong>字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"</li>
  					<li><strong>arg：</strong>传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"</li>
  					<li><strong>modifiers：</strong>一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }</li>
  				</ul>
  			</li>
  			<li><strong>vnode：</strong>vue编译生成的虚拟节点</li>
  			<li><strong>oldVnode：</strong>上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用</li>
  		</ul>
  		<hr />
  		<p><strong>PS:</strong></p>
  		<ul>
  			<li>自定义指令是用来操作DOM的</li>
  			<li>指令可以全局定义也可以局部定义</li>
  			<li>每个指令都有四个钩子函数</li>
  			<li>unbind钩子只有在你的DOM元素被VUE移除（你手动删除也不可以）时才会被调用</li>
  		</ul>
  		<blockquote>
  			<p>关于自定义指令，这篇文章不错 http://ju.outofmemory.cn/entry/336577</p>
  		</blockquote>
  	</div>
    <div class="tooltips">
    	<div class="note" title="这里是自定义tip指令"><i class="icon icon-tags"></i></div>
    	<div class="phone" v-tip><i class="icon icon-mobile-phone"></i> <span>13402515810</span></div>
    	<div class="qr" v-tip><i class="icon icon-comments-alt"></i> <span>sz_chaoyang</span></div>
    	<div class="email" v-tip><i class="icon icon-envelope"></i> <span>470211273@qq.com</span></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
function tips(){
	alert("在指令bind钩子函数里，给该元素添加了监听器");
}
export default {
  name: 'otherCustomDirective',
  data () {
    return {
      title: "自定义指令",
      imgList : ["http://i16.yd166.com/file/img/3w2360107949u2059069406t27.jpg","http://i16.yd166.com/file/img/1w3552464846u4244307213t27.jpg","http://i16.yd166.com/file/img/4w1145823470u3749868228t27.jpg"],
      colorName : "",
      isUnbind : true
    }
  },
  methods : {
  	doUnbind(){
  		this.isUnbind = !this.isUnbind;
  	}
  },
  directives : {
  	fcs : {
  		inserted(el){
  			el.value = "auto fill";
  		}
  	},
  	bid : {
  		bind(el){
  			el.innerHTML = "bind指令";
  			el.className+=" bid-add-class";
  		}
  	},
  	ist : {
  		inserted(el){
  			el.parentNode.className = " bid-add-class";
  		}
  	},
  	img : {
  		inserted(el,bind){
  			var color = Math.floor(Math.random()*1000000);
  			el.style.backgroundColor = "#"+color;
  			
  			var img = new Image();
  			img.src = bind.value;
  			img.onload = function(){
  				el.style.backgroundImage = "url("+bind.value+")";
  			}
  		}
  	},
  	cc : {
  		update(el,bind){
  			el.style.color = bind.value;
  		}
  	},
  	eventDirective : {
  		bind(el){
  			el.addEventListener("click",tips,false);
  			
  			
  		},
  		unbind(el){
  			alert("如果你看到了我，说明调用了unbind");
  			el.removeEventListener("click",tips);
  		}
  	},
		tip : {
			inserted(el){
				$(el).hover(function(){
					$(this).find("span").css("display","block").stop().animate({
						"opacity" : 1,
						"left" : "70px"
					},"fast");
				},function(){
					$(this).find("span").stop().animate({
						"opacity" : 0,
						"left" : "100px"
					},"fast").css("display","none");
				})
			}
		},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bid{padding:0.5em;}
.bid-add-class{border:1px solid black; color: green;border-radius: 0.3em;}
.h500{height: 500px;}
.tooltips{position: fixed;left: 0; top: 40%;}
.tooltips>div{background-color: #EEE;width:50px; height:50px; line-height: 50px; text-align:center; position: relative;}
.tooltips>div>i{font-size: 22px;}
.tooltips>div:nth-child(1) i{font-size:20px;}
.tooltips>div:nth-child(2){line-height: 60px;}
.tooltips>div:nth-child(2) i{font-size:30px;}
.tooltips>div:hover{background-color: #c8c7c7;}
.tooltips>div:hover i{color: darkred;}
.tooltips>div>span{padding: 0px 20px;height:36px; line-height: 36px;position: absolute;left:100px; top:50%; transform: translateY(-50%); background-color: #333; border-radius: 0.3em;display:none; opacity: 0;color: white;}
.tooltips>div>span::after{content:"";padding: 5px;background-color: #333;position: absolute;left: -8px;top: 50%;transform: rotate(45deg) translateY(-50%);}
</style>
