<template>
  <div class="c-data-is-fun">
  	<div class="container">
  		<h3>{{title}}</h3>
  	</div>
  	<div class="container">
    	<add-view></add-view>
    	<add-view></add-view>
    	<add-view></add-view>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'cDataIsFun',
  data () {
    return {
      title: "data必须是函数",
      counter : 1
    }
  },
  components : {
  	"addView" : {
  		template : "<button @click='count+=1' class='btn btn-primary'>{{count}}</button>",
  		data () {
  			return {
  				count : 1
  			}
  		}
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
