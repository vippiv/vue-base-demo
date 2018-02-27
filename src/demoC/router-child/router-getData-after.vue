<template>
  <div class="router-getData-after">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'routerGetDataAfter',
  data () {
    return {
      title: "导航完成后获取数据"
    }
  },
  created(){
  	this.fetchData();
  },
  watch : {
  	"$route" : "fetchData"
  },
  methods : {
  	fetchData(){
  		//这里获取数据
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
