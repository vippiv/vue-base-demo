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
  				<p>bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置</p>
  				<div class="bid" v-bid></div>
  			</li>
  			<li>
  				<p>inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)</p>
  				<div class="parent">
  					<div class="bid" v-ist>ist指令</div>
  				</div>
  				<p class="mt50"><strong>inserted应用</strong>，图片未加载前用随机颜色代替，加载完成显示图片</p>
  				<div class="container">
  					<div class="row">
  						<div class="col-md-4 h500" v-img="item" v-for="item in imgList"></div>
  					</div>
  				</div>
  			</li>
  		</ul>
  		<hr />
  		<p><strong>PS:</strong></p>
  		<ul>
  			<li>自定义指令是用来操作DOM的</li>
  			<li>指令可以全局定义也可以局部定义</li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
export default {
  name: 'otherCustomDirective',
  data () {
    return {
      title: "自定义指令",
      imgList : ["http://i16.yd166.com/file/img/3w2360107949u2059069406t27.jpg","http://i16.yd166.com/file/img/1w3552464846u4244307213t27.jpg","http://i16.yd166.com/file/img/4w1145823470u3749868228t27.jpg"]
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
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bid{padding:0.5em;}
.bid-add-class{border:1px solid black; color: green;border-radius: 0.3em;}
.h500{height: 500px;}
</style>
