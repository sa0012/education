<template>
  <div style="height: 100%" v-loading="loading">
    <List></List>
  </div>
</template>

<script>
import List from './list.vue'
export default {
  name: 'Works',
  data () {
    return {
      loading: true
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  components: {
    List
  }
}
</script>

<style lang="scss" scoped>
</style>
