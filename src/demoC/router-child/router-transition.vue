<template>
	<transition name="fade" mode="out-in">
	  <div class="router-transition">
	    <p>{{title}}</p>
	  </div>
  </transition>
</template>

<script>
export default {
  name: 'routerTransition',
  data () {
    return {
      title: "路由transition特效"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{margin-bottom: 0;}
.fade-enter-active,.fade-leave-active{
	transition: all 1s;
}
.fade-enter,.fade-leave-to{
	opacity: 0;
}
</style>
