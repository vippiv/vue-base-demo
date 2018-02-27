<template>
  <div class="router-getData-before">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'routerGetDataBefore',
  data () {
    return {
      title: "导航完成前获取数据",
      data : null
    }
  },
  beforeRouteEnter (to,from,next){
  	//这里获取数据
  },
  beforeRouteUpdate (to,from,next){
  	//这里获取数据
  },
  methods : {
  	setData(res){
  		this.data = res;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
