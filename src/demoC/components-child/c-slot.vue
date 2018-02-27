<template>
  <div class="c-slot text-left">
  	<div class="container">
  		<h3>{{title}}</h3>
  	</div>
  	<div class="container">
  		<c-slot>
  			<p>普通插槽</p>
  		</c-slot>
  		<c-slot-name>
  			<div slot="header">
  				<p>**公司</p>
  				<img src="../../assets/logo.png" alt="logo" title='logo' />
  			</div>
  			<div slot="footer">
  				<p>**公司 版权所有</p>
  			</div>
  		</c-slot-name>
  		<c-slot-scope>
  				<template slot-scope="props">
  					<p>hello from parent</p>
      			<p>{{ props.text }}</p>
  				</template>
  		</c-slot-scope>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'cSlot',
  data () {
    return {
      title: "组件插槽",
    }
  },
  methods : {

  },
  components : {
  	"c-slot-name" : {
  		template : "<div class='container'><p><strong>下面是具名插槽区域</strong></p><slot name='header'></slot><slot name='footer'></slot></div>"
  	},
  	"c-slot" : {
  		template : "<div class='container'><p><strong>下面是普通插槽区域</strong></p><slot></slot></div>"
  	},
  	"c-slot-scope" : {
  		template : "<div class='container'><p><strong>下面是作用于插槽</strong></p><slot text='hello from child'></slot></div>"
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
