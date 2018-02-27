<template>
  <div class="transition-test">
   <h1>{{title}}</h1>
   <div class="container">
	   	<div class="col-md-12 text-left">
	   		<h2>transition test:</h2>
	   	</div>
	   	<div class="row">
	   		<div class="col-md-6"><transition name="fade"><div v-if="transitionShow" class="rel box">transition test</div></transition></div>
	   		<div class="col-md-6"><button class="btn btn-primary" @click="triModify">过渡</button></div>
	   	</div>
	   	<div class="row">
	  		<div class="col-md-6"><transition name="bounce"><div v-if="animationShow" class="rel box">animation test</div></transition></div>
	  		<div class="col-md-6"><button class="btn btn-primary" @click="aniModify">动画</button></div>
	  	</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'transitionTest',
  data () {
    return {
    	title : "this is transition test demo",
    	transitionShow : true,
    	animationShow : true
    }
  },
  methods : {
  	triModify : function(){
  		this.transitionShow = !this.transitionShow;
  	},
  	aniModify : function(){
  		this.animationShow = !this.animationShow;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.box{width: 115px;height: 30px;}
	.rel{
		position: relative;
	}
	.fade-enter-active,.fade-leave-active{
		transition: all 0.5s;
	}
	.fade-enter,.fade-leave-to{
		transform: translateX(50px);
		opacity: 0.5;
	}
	.bounce-enter-active{
		animation : bounce 0.5s;
	}
	.bounce-leave-active{
		animation : bounce 1s reverse;
	}
	@keyframes bounce{
		0%{
			transform: scale(1);
		}
		50%{
			transform: scale(1.5);
		}
		100%{
			transform: scale(0);
		}
	}
</style>
