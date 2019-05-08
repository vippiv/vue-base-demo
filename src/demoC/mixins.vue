<template>
    <div class="mixins">
      mixins混合在Vue是为了提出相似的数据和功能，使代码易懂，简单、清晰，效果请看控制台mixins输出
    </div>
</template>

<script>
  import { mixinTest } from '../mixins/mixintest';
  export default {
    name: "mixins",
    mixins:[mixinTest],
    mounted() {
      console.log('混入中也有一个mounted')
    },
    created() {
      console.log('1')
    }
  }
</script>

<style scoped>

</style>
