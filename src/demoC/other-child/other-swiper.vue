<template>
  <div class="other-swiper">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<div class="swiper-container">
				<div class="swiper-wrapper">
						<div class="swiper-slide"><img src="../../assets/1.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../../assets/2.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../../assets/3.jpg" alt=""></div>
				</div>
			</div>
  		<hr />
  		<p><strong>PS:</strong></p>
  		<ul>
  			<li><strong>引用swiper分以下几个步骤</strong>
  				<ul>
  					<li>利用npm安装swiper</li>
  					<li>import进swiper和对应的css文件</li>
  					<li>根据要求书写DOM</li>
  					<li>调用插件</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
	import Swiper from "swiper"
export default {
  name: 'otherSwiper',
  data () {
    return {
      title: "引用swiper",
    }
  },
  mounted(){
		new Swiper('.swiper-container',{
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			loop: true
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "../../../node_modules/swiper/dist/css/swiper.min.css"
</style>
