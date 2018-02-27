<template>
  <div class="c-validate-props text-left">
  	<div class="container">
  		<h3>{{title}}</h3>
  	</div>
  	<div class="container">
  		<props-view v-bind:v="parentV" v-bind:m="parentM" v-bind:n="parentN"></props-view>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'cPropsEmit',
  data () {
    return {
      title: "props验证",
      parentV : 20,
      parentM : "字符串",
      parentN : 20
    }
  },
  methods : {
  },
  components : {
  	"props-view" : {
  		props : {
  			"v" : Number,
  			"m" : [String,Number],
  			"n" : {//如果value小于10将无法通过验证
  				validator : function(value){
  					return value > 10;
  				}
  			}
  		},
  		template : "<div class='container'><p>myV：{{myV}}，myV必须是Numbner类型</p><p>myM：{{myM}}，myM必须是字符串类型</p><p>myN：{{myN}}，myN必须大于10</p></div>",
  		data : function(){
  			return {
  			}
  		},
  		computed : {
					"myV"(){
						return this.v
					},
					"myM"(){
						return this.m
					},
					"myN"(){
						return this.n
					},
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
