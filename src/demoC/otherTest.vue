<template>
  <div class="other-test">
   <div class="container text-left">
   	<h1>{{title}}</h1>
   	<hr />
   	<div class="row">
   		<router-link to="/other-test/other-jquery" class="fix-padding">引用jquery</router-link>
   		<router-link to="/other-test/other-swiper" class="fix-padding">引用swiper</router-link>
   	</div>
   	<hr />
   	<div class="row" style="margin-bottom: 50px;">
   		<div class="col-md-12">
   			<router-view></router-view>
   		</div>
   	</div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'otherTest',
  data () {
    return {
    	title : "其他demo",
    }
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
