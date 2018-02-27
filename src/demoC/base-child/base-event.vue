<template>
  <div class="base-event">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>事件监听方法：</strong></p>
  		<ul>
				<li>{{counter}} <button @click="counter+=1" class="btn btn-primary">add 1</button></li>
				<li><button @click="greet" class="btn btn-primary">greet</button></li>
				<li><button @click="say('hi')" class="btn btn-primary">say hi</button></li>
				<li><button @click="say('hello')" class="btn btn-primary">say hello</button></li>
				<li><button @click="acceptEvent($event)" class="btn btn-primary">accept event</button></li>
  		</ul>
  		<p><strong>事件修饰符：</strong></p>
  		<ul>
				<li>阻止单击事件继续传播: {{stopPropagationHtml}} 
					<div class="p" @click="parentEventFn">parent<div class="c" @click.stop="childEventFn">child(点击这里不冒泡)</div></div>
					<div class="p" @click="parentEventFn">parent<div class="c" @click="childEventFn">child(点击这里会冒泡)</div></div>
				</li>
				<li>提交事件不再重载页面: {{preventDefaultHtml}}
					<div style="margin-bottom: 10px;">
						<form method="post" action="" class="form-control" v-on:submit="onSubmit">
							<p>提交成功后页面会重载</p>
							<input type="submit" value="提交" class="btn btn-primary"/>
						</form>
					</div>
					<div>
						<form method="post" action="" class="form-control" v-on:submit.prevent="onSubmit">
							<p>提交成功后页面不会重载</p>
							<input type="submit" value="提交" class="btn btn-primary"/>
						</form>
					</div>
				</li>
				<li>修饰符串联:{{stopAndPreventHtml}}</li>
				<li>只有修饰符：{{onlymodifier}}</li>
				<li>事件捕获：{{captureHtml}}
					<div class="p" @click.capture="parentEventFn">parent<div class="c" @click="childEventFn">child(父元素绑定事件采用了捕获机制 ，因此会先执行父元素事件然后才是子元素事件)</div></div>
					<div class="p" @click="parentEventFn">parent<div class="c" @click="childEventFn">child(父元素绑定事件未采用捕获机制 ，因此会先执行子元素事件然后才是父元素事件)</div></div>
				</li>
				<li>只当在 event.target 是当前元素自身时触发处理函数：{{currentTargetEventHtml}}
					<div class="p" @click="parentEventFn">parent<div class="c" @click="childEventFn">child(事件冒泡到父元素上，触发父元素事件)</div></div>
					<div class="p" @click.self="parentEventFn">parent<div class="c" @click="childEventFn">child(事件冒泡到父元素上，不触发父元素事件，因为父元素要求目标对象是自身才会触发)</div></div>
				</li>
				<li>点击事件将只会触发一次：{{onceEventHtml}}
					<div class="c" @click.once="childEventFn">child(只会执行一次)</div>
				</li>
				<li>
					.passive 修饰符，2.3.0增加：{{passiveHtml}}
					<ul>
						<li>滚动事件的默认行为 (即滚动行为) 将会立即触发</li>
						<li>而不会等待 `onScroll` 完成</li>
						<li>这其中包含 `event.preventDefault()` 的情况</li>
						<li>不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。</li>
					</ul>
				</li>
  		</ul>
  		<p><strong>按键修饰符：</strong></p>
  		<ul>
				<li>
					语法：{{keyModifier}}
					<ul>
						<li><strong>全部按键别名</strong></li>
						<li>.enter
							<input type="text" class="form-control" placeholder="输入内容，按回车" v-on:keyup.enter="onSubmit"/>
						</li>
						<li>.tab</li>
						<li>.delete (捕获“删除”和“退格”键)</li>
						<li>.esc
							<input type="text" class="form-control" placeholder="输入内容，按ESC" v-on:keyup.esc="onSubmit"/>
						</li>
						<li>.space
							<input type="text" class="form-control" placeholder="输入内容，按空格键" v-on:keyup.esc="onSubmit"/>
						</li>
						<li>.up</li>
						<li>.down</li>
						<li>.left</li>
						<li>.right</li>
					</ul>
				</li>
				<li>
					可以通过全局 config.keyCodes 对象自定义按键修饰符别名
					<ul>
						<li>{{customKeyCodes}}
							<input type="text" class="form-control" @keyup.113="customKeyCodesFn" placeholder="按f2试试"/>
						</li>
					</ul>
				</li>
  		</ul>
  		<p><strong>鼠标按钮修饰符：</strong></p>
  		<ul>
  			<li @click.left="mouseLeft">.left(请按左键)</li>
  			<li @click.right.prevent="mouseRight">.right(请按右键)</li>
  			<li @click.middle="mouseMiddle">.middle(请按中键)</li>
  		</ul>
  		<p><strong>系统修饰键：</strong></p>
  		<ul>
  			<li @click.ctrl="ctrlClick">.ctrl(请按住ctrl键点击鼠标)</li>
  			<li>.alt
  				<input type="text" class="form-control" @keyup.alt.67="altPlus" placeholder="请按下alt+c"/>
  			</li>
  			<li>.shift
  				<input type="text" class="form-control" @keyup.shift.67="shiftPlus" placeholder="请按下shift+c"/>
  			</li>
  			<li>.meta</li>
  		</ul>
  		<hr />
  		<p><strong>PS：</strong></p>
  		<ul>
  			<li>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生，如：用 @click.prevent.self 会阻止所有的点击，而 @click.self.prevent 只会阻止对元素自身的点击。</li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>

export default {
  name: 'baseList',
  data () {
    return {
      title: "事件处理",
      counter : 0,
      stopPropagationHtml : "<a v-on:click.stop='doThis'>doThis</a>",
      preventDefaultHtml : "<form v-on:submit.prevent='onSubmit'></form>",
      stopAndPreventHtml : "<a v-on:click.stop.prevent='doThat'></a>",
      onlymodifier : "<form v-on:submit.prevent></form>",
      captureHtml : "<div v-on:click.capture='doThis'>...</div>",
      currentTargetEventHtml : "<div v-on:click.self='doThat'>...</div>",
      onceEventHtml : "<a v-on:click.once='doThis'></a>",
      passiveHtml : "<div v-on:scroll.passive='onScroll'>...</div>",
      keyModifier : "<input v-on:keyup.enter='submit'>",
      customKeyCodes : "Vue.config.keyCodes.f2 = 113"
    }
  },
  methods : {
		greet(){
			alert('greet');
		},
		say(v){
			alert(v);
		},
		acceptEvent(event){
			alert("event.type："+event.type);
		},
		childEventFn(){
			alert("子元素事件");
		},
		parentEventFn(){
			alert("父元素事件");
		},
		onSubmit(){
			alert("提交成功");
		},
		mouseLeft(){
			alert("您按了左键");
		},
		mouseRight(){
			alert("您按了右键，并且阻止了默认行为");
		},
		mouseMiddle(){
			alert("您按了中键");
		},
		ctrlClick(){
			alert("您同时按了ctrl和click");
		},
		altPlus(){
			alert("您同时按下了alt键和C键");
		},
		shiftPlus(){
			alert("您同时按下了shift键和C键");
		},
		customKeyCodesFn(){
			alert("您按下了f2键");
		}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p,.c{cursor: pointer;}
.p{padding: 10px; border:1px solid gray;margin-bottom: 10px;}
.c{padding:10px; border:1px solid orange;}
</style>
