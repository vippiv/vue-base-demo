<template>
  <div class="base-class-style">
  	<div class="container">
  		<h3>{{title}}</h3>
  		<p><strong>class对象语法：</strong></p>
  		<ul>
				<li><div v-bind:class="{active:isActive}">单个对象</div></li>
				<li><div class="bold" v-bind:class="{active:isActive,'text-danger':hasError}">多个对象，除第一个其他对象名必须加 引号</div></li>
				<li><div class="bold" v-bind:class="classObject">classObject</div></li>
  		</ul>
  		<p><strong>class数组语法：</strong></p>
  		<ul>
				<li><div v-bind:class="[activeClass,errorClass]">数组表示法</div></li>
				<li><div v-bind:class="[isActive ? activeClass : '', errorClass]">三元表达式</div></li>
				<li><div v-bind:class="[{ active: isActive }, errorClass]">数组加对象表示法</div></li>
  		</ul>
  		<p><strong>内联样式对象语法：</strong></p>
  		<ul>
				<li><div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">对象表示法</div></li>
				<li><div v-bind:style="styleObject">object表示法</div></li>
  		</ul>
  		<p><strong>内联样式数组语法：</strong></p>
  		<ul>
				<li><div v-bind:style="[baseStyles, overridingStyles]">数组表示法</div></li>
  		</ul>
  	</div>
    
  </div>
</template>

<script>
export default {
  name: 'baseClassStyle',
  data () {
    return {
      title: "class和style",
      isActive : true,
      hasError : true,
      classObject : {
      	green: true,
    		'italic': true
      },
      activeClass : "active",
      errorClass : "text-danger",
      activeColor : "gray",
      fontSize : 20,
      styleObject : {
      	color: 'red',
    		fontSize: '18px'
      },
      baseStyles:{color:'red'},
    	overridingStyles:{'font-size':'10px'}
    }
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{color:orange}
.text-danger{color:red}
.bold{font-weight:bold;}
.green{color:green}
.italic{font-style:italic}
</style>
