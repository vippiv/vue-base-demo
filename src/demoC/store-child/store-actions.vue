<template>
  <div class="store-action">
  	<div class="container">
  		<div class="row text-left">
  			<div class="col-md-12"><h2 >{{mtitle}}</h2></div>
  			<div class="col-md-12">
  				<ul>
  					<li>maxSize：{{maxSize}} <button @click="addMaxSize" class="btn btn-primary">addMaxSize</button></li>
  					<li>noteList：{{noteList}} <button @click="addItem" class="btn btn-primary">addItem</button></li>
  					<li>当前note数量：{{size}} <button @click="delItem" class="btn btn-primary">delItem</button></li>
  				</ul>
  				
  			</div>
  		</div>
  	</div>
   
  </div>
</template>

<script>
	import * as types from "../../store/mutation-type"
	import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
export default {
  name: 'storeAction',
  data () {
    return {
      mtitle: 'action',
      nItem : {
      	title : "新项目",
      	author : "zwl",
      	dateStamp : new Date(),
      	isDone : false
      }
    }
  },
  //全局store中的数据必须通过computed方式引入，否则就不是响应式的
  computed : {
	 	account : function(){
	 		return this.$store.state.account;
	 	},
	 	size(){
	 		return this.$store.state.noteList.length;
	 	},
  	 //采用mapState辅助函数，这里必须使用对象展开表达式
		...mapState([
	  	"title",
	  	"noteList",
	  	"maxSize"
	  ]),
  },
  methods : {
  	...mapActions ({
  		add : "add",
  		del : "del",
  		addMaxSize : "addMaxSize"
  	}),
  	addMaxSize(){
  		this.$store.dispatch("addMaxSize");
  	},
  	addItem(){
  		this.add(this.nItem);
  	},
  	delItem(){
  		if(this.size>0){
  			this.del(this.size-1);
  		}else{
  			alert("数据已经 被清空");
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
