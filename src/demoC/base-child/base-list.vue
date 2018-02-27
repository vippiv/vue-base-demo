<template>
  <div class="base-list">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>列表渲染数组：</strong></p>
  		<ul>
				<li v-for="(item,index) in students">{{index+1}}、{{item.name}}</li>
  		</ul>
  		<p><strong>列表渲染对象：</strong></p>
  		<ul>
				<li v-for="(value,key,index) in nameObject">{{index}}、{{key}}：{{value}}</li>
  		</ul>
  		<p><strong>一段取值范围v-for：</strong></p>
  		<ul>
				<li v-for="v in 5">{{v}}</li>
  		</ul>
  		<p><strong>v-for with v-if</strong></p>
  		<p style="padding-left: 2em;"><strong>直接输出符合条件的todo</strong></p>
  		<ul>
				<li v-for="todo in todos" v-if="todo.done">{{todo.action}}</li>
  		</ul>
  		<p style="padding-left: 2em;"><strong>判断todos是否存在数据</strong></p>
  		<ul v-if="todos.length">
  			<li v-for="todo in todos">{{todo.action}}</li>
  		</ul>
  		<p v-else>nothing to do left</p>
  		<p><strong>组件的v-for(todo list demo)</strong></p>
  		<input type="text" class="form-control" placeholder="enter note item" v-model="noteItem" v-on:keyup.enter="addNoteItem"/>
  		<note-list v-for='(item,index) in noteLists' v-bind:index="index" v-bind:key="index" v-bind:item="item" v-on:rm="removeNoteItem"></note-list>
  		<hr />
  		<p><strong>PS:</strong></p>
  		<ul>
  			
  		</ul>
  	</div>
    
  </div>
</template>

<script>
export default {
  name: 'baseList',
  data () {
    return {
      title: "列表渲染",
      students : [
    		{
    			name : "tom",
    			age : 20,
    			gender : "male"
    		},
    		{
    			name : "lee",
    			age : 22,
    			gender : "male"
    		},
    		{
    			name : "may",
    			age : 18,
    			gender : "female"
    		}
    	],
    	nameObject : {
    		firstName : "John",
    		lastName : "Doe",
    		age : 20
    	},
    	todos : [
    		{
    			action : 'eat',
    			done : true
    		},
    		{
    			action : "learn",
    			done : true
    		},
    		{
    			action : "sleep",
    			done : false
    		}
    	],
    	noteLists : [
    		{
    			note : "cooking"
    		}
    	],
    	noteItem : ""
    }
  },
  methods : {
		addNoteItem(){
			this.noteLists.push({note:this.noteItem});
			this.noteItem  = "";
		},
		removeNoteItem(data){
			this.noteLists.splice(data,1);
		}
  },
  components :{
  	"noteList" : {
  		props : ["item","index"],
  		template : "<div>{{index+1}}、{{item.note}} <span @click='remove' class='pointer'>×</span></div>",
  		methods : {
  			remove(){
  				this.$emit("rm",this.index);
  			}
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
