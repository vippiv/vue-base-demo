export const mixinTest = {
  mounted() {
    console.log('mouted混合')
  },
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log('mixinTest');
    }
  }
}
