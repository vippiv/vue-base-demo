<template>
  <div class="base-computed-watch">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>计算属性：</strong></p>
  		<ul>
  			<li>原始值：{{msg}}</li>
  			<li>计算值：{{reverseMsg}}<span class="red">(只要依赖不发生改变，不管调用计算属性多少次都不会执行函数)</span></li>
  			<li>方法：{{mReverseMsg()}}<span class="red">(每调用一次方法，将会重新执行一次函数)</span></li>
  			<li>值不会发生变化的计算属性：{{now}}</li>
  			<li>计算属性：{{fullName}}(只要firstName或者lastName其中一个发生变化，fullName值就会重新计算)</li>
  		</ul>
  		<p><strong>计算属性的setter：</strong></p>
  		<ul>
  			<li>getter：{{address}} (原来的值是"江苏 苏州")</li>
  			<li>setter：{{address="浙江,杭州"}}</li>
  		</ul>
  		<p><strong>侦听器：</strong></p>
  		<ul>
  			<li>question：<input type="text" v-model="question" class="form-control"/></li>
  			<li>answer：{{answer}}</li>
  		</ul>
  		<hr />
  		<p><strong>PS：</strong></p>
  		<ul>
  			<li>计算属性是基于它们的依赖进行缓存的,计算属性只有在它的相关依赖发生改变时才会重新求值，这就意味着只要msg没有发生改变，多次访问 reverseMsg 计算属性会立即返回之前的计算结果，而不必再次执行函数</li>
  			<li>now值将不会更新，因为其不是响应式依赖</li>
  			<li>计算属性默认只有 getter ，不过在需要时也可以提供一个 setter</li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
  name: 'baseComputedWatch',
  data () {
    return {
      title: "计算属性和侦听器",
			msg : "计算属性",
			firstName : "smith",
			lastName : "lee",
			province : "江苏",
			city : "苏州",
			question : "",
			answer : "I cannot give you an answer until you ask a question!" 
    }
  },
  methods : {
  	mReverseMsg(){
  		return this.msg.split("").reverse().join("");
  	},
  	//这里用到了axios，lodash两个插件
  	getAnswer:_.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为判定用户停止输入等待的毫秒数
      500
    )
  },
  watch : {
//	firstName(){
//		this.fullName = this.firstName+" "+this.lastName;
//	},
//	lastName(){
//		this.fullName = this.firstName+" "+this.lastName;
//	},
		question : function(newQ,oldQ){
			this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
		}
  },
  computed : {
  	reverseMsg(){
  		return this.msg.split("").reverse().join("");
  	},
  	now(){
  		return Date.now();
  	},
  	fullName(){
  		return this.firstName+" "+this.lastName;
  	},
  	//计算属性默认只有 getter ，不过在需要时也可以提供一个 setter
  	address:{
  		get(){
  			return this.province+" "+this.city;
  		},
  		set(val){
  			var ret = val.split(",");
  			this.province = ret[0];
  			this.city = ret[ret.length-1];
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
