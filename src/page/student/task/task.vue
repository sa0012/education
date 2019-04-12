<template>
  <div class="trends">
    <section>
      <h2>任务中心</h2>
      <p>待定</p>
    </section>
    <div>
      <section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trends',
  data () {
    return {
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.trends{
  margin: 0.14rem 0.14rem 0.14rem 0;
  background-color: #fff;
  border-radius: 0.06rem;
  padding: 0 0.2rem;
  &>section {
    display: flex;
    height: 0.7rem;
    line-height: 0.7rem;
    border-bottom: 0.01rem solid #E4E8ED;
    h2{
      flex: 1;
      display: block;
      height: 0.2rem;
      text-indent: 0.4rem;
      position: relative;
      font-size: 0.18rem;
      font-weight: 600;
      &:after{
        content: '';
        position: absolute;
        width: 0.18rem;
        height: 0.2rem;
        top: 0.25rem;
        left: 0.08rem;
        background-image: url('../../../assets/images/icon/icon_mycourse.png');
      }
    }
    .search {
      margin-right: 0.1rem;
      width: 1.6rem;
      height: 0.32rem;
    }
  }
}
</style>
