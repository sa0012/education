let mixins = {
  methods: {
    notice (msg) {
      console.log(1)
    },
    success (msg) {
      console.log(2)
    }
  },
  filters: {
    $_filter: (value) => {
      return 'my' + value
    }
  }
}
export default mixins
