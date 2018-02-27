<template>
  <div class="base-forms">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>基础用法：</strong></p>
  		<ul>
				<li>文本：
					<input type="text" class="form-control" v-model="msg" />
					<p>这里将会显示您输入的值：{{msg}}</p>
				</li>
				<li>多行文本：
					<textarea name="" rows="" cols="" class="form-control" v-model="mutliMsg"></textarea>
					<p>这里将会显示您输入的值：{{mutliMsg}}</p>
				</li>
				<li>复选框：
					<label><input type="checkbox" name="actions" value="吃饭" v-model='actions'/> 吃饭</label>
					<label><input type="checkbox" name="actions" value="睡觉" v-model='actions'/> 睡觉</label>
					<label><input type="checkbox" name="actions" value="打豆豆" v-model='actions'/> 打豆豆</label>
					<p>您的选择是：{{actions}}</p>
				</li>
				<li>单选按钮：
					<label><input type="radio" name="entertainment" value="下棋" v-model="entertainment" /> 下棋</label>
					<label><input type="radio" name="entertainment" value="打球" v-model="entertainment" /> 打球</label>
					<label><input type="radio" name="entertainment" value="钓鱼" v-model="entertainment" /> 钓鱼</label>
					<p>您的选择的娱乐项目是：{{entertainment}}</p>
				</li>
				<li>选择框：
					<select name="book" v-model="book" class="form-control">
						<option disabled value="">请选择</option>
						<option value="儿童类">儿童类</option>
						<option value="小说类">小说类</option>
						<option value="教材类">教材类</option>
					</select>
					<p>您选择的类型是：{{book}}</p>
					<select name="books" v-model="books" multiple class="form-control">
						<option disabled value="">请选择</option>
						<option value="儿童类">儿童类</option>
						<option value="小说类">小说类</option>
						<option value="教材类">教材类</option>
					</select>
					<p>您选择的类型是：{{books}}</p>
				</li>
  		</ul>
 			<p><strong>值绑定：</strong></p>
 			<ul>
 				<li>复选框:
 					<label><input type="checkbox" true-value='a' false-value="b" v-model="toggleCheckBox"/> toggle</label>
 					<p>您的选择是：{{toggleCheckBox}}</p>
 					<p><strong>PS：</strong>和基础用法不同的是，不管选中还是未选中，都会有一个值</p>
 				</li>
 				<li>单选按钮：
 					<input type="text" v-model='c' class="form-control"/>
 					<label><input type="radio" v-bind:value="c" v-model="picked" /> bind value</label>
 					<p>选中单选按钮后这里的值将会随文本框值改变而改变：{{picked}}</p>
 				</li>
 				<li>选择框的选项：
 					<select name="n" v-model="s" class="form-control">
						<option disabled value="">请选择</option>
						<option v-bind:value="{number:123}">123</option>
					</select>
					<p>值：{{s}} {{s.number}}</p>
 				</li>
 			</ul>
 			<p><strong>修饰符：</strong></p>
 			<ul>
 				<li>.lazy
 					<input type="text" class="form-control" v-model.lazy="lazyMsg"/>
 					<p>失去焦点后查看值：{{lazyMsg}}</p>
 				</li>
 				<li>.number(<span class="red">强制将用户输入的值转换成numbner，即使在 type="number" 时，HTML 输入元素的值也总会返回字符串</span>)
 					<input type="number" class="form-control" v-model.number="num" />
 					<p>输入数字这里将会显示number：{{typeof num}}</p>
 				</li>
 				<li>.trim
 					<input type="text" class="form-control" v-model.trim="trimMsg"/>
 					<p>去除两端空白后的值：{{trimMsg}}</p>
 				</li>
 			</ul>
  	</div>
    
  </div>
</template>

<script>

export default {
  name: 'baseForms',
  data () {
    return {
      title: "表单输入绑定",
      msg : "",
      mutliMsg : "",
      actions : [],
      entertainment : "",
      book : "",
      books : [],
      toggleCheckBox : "",
      c : "hello c",
      picked : "",
      s : "",
      lazyMsg : "",
      num : "",
      trimMsg : ""
    }
  },
  methods : {
		
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p,.c{cursor: pointer;}
.p{padding: 10px; border:1px solid gray;margin-bottom: 10px;}
.c{padding:10px; border:1px solid orange;}
</style>
