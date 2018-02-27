<template>
  <div class="c-dynamic-props text-left">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p>parentV：{{parentV}}</p>
  		<input type="text" v-model="parentV" class="form-control"/>
  	</div>
  	<div class="container">
  		<props-view v-bind:v="parentV" v-bind="todo"></props-view>
  		<!--v-bind="todo"等价于v-bind:msg="todo" v-bind:code="todo"-->
  	</div>
  </div>
</template>

<script>
export default {
  name: 'cDynamicProps',
  data () {
    return {
      title: "动态prop ",
      parentV : "",
      todo : {
      	msg : "成功",
      	code : 200
      }
    }
  },
  components : {
  	"props-view" : {
  		props : ["v","msg","code"],
  		template : "<div class='container'><p>这是子组件：{{v}}</p><p>prop对象：{{myMsg}}--{{myCode}}</p></div>",
  		data(){
  			return {
  			}
  		},
  		computed : {
  			"myV"(){
  				return this.v;
  			},
  			"myMsg"(){
  				return this.msg;
  			},
  			"myCode"(){
  				return this.code
  			}
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
