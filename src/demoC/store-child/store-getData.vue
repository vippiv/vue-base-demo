<template>
  <div class="demo">
  	<div class="container">
  		<div class="row text-left">
  			<div class="col-md-12"><h2 >{{mtitle}}</h2></div>
  			<div class="col-md-12">
  				<ul>
  					<li>直接通过 $store获取数据，$store.state.title：{{$store.state.title}}</li>
  					<li>通过data函数获取数据：{{unResponsiveTitle}}(这个数据是非响应式的)</li>
  					<li>通过computed计算属性获取数据：{{account}}</li>
  					<li>通过mapState获取数据：{{account}}</li>
  					<li>通过computed计算属性获得getters中的数据：{{todoListSize}}</li>
  					<li>通过mapGetters获得getters中的数据：{{todoList}}</li>
  				</ul>
  			</div>
  		</div>
  	</div>
   
  </div>
</template>

<script>
	import {mapState,mapGetters} from "vuex"
export default {
  name: 'demo',
  data () {
    return {
      mtitle: '获取数据',
      //unResponsiveTitle虽然也可以拿到store.state中的数据，但不是响应式的
      unResponsiveTitle : this.$store.state.title
    }
  },
  //全局store中的数据必须通过computed方式引入，否则就不是响应式的
  computed : {
	 	account : function(){
	 		return this.$store.state.account;
	 	},
  	 //采用mapState辅助函数，这里必须使用对象展开表达式
		...mapState([
	  	"title",
	  	"noteList",
	  ]),
	  //第一种从store中读取getters数据
		todoListSize(){
			return this.$store.getters.noteListSize;
		},
	  //第二种从store中读取getters数据的方式，采用mapGetters辅助函数，这里必须使用对象展开表达式
	  ...mapGetters([
	  	"todoList"
	  ]),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
