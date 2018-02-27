<template>
  <div class="c-props-emit text-left">
  	<div class="container">
  		<h3>{{title}}</h3>
  	</div>
  	<div class="container">
  		<props-view v-bind:v="parentV" v-on:toParent="listenChild"></props-view>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'cPropsEmit',
  data () {
    return {
      title: "组件组合，数据传递 ",
      parentV : "这条数据来自父元素"
    }
  },
  methods : {
  	listenChild : function(eventData){
  		alert("get child data: "+eventData);
  	}
  },
  components : {
  	"props-view" : {
  		props : ["v"],
  		template : "<div class='container'><h4>这里是子组件，下面是数据：{{myV}}</h4><p>子组件传递数据给父组件：<button @click='emitData' class='btn btn-primary'>emit</button></p></div>",
  		data : function(){
  			return {
  				myV : this.v,
  				addV : "来自子组件的数据"
  			}
  		},
  		methods : {
  			emitData : function(){
  				this.$emit("toParent",this.addV);
  			}
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
