<template>
  <div class="course">
    <aside :class="{'active':isNavShow}">
      <span @click="changeIsNavShow"><img src="../../../assets/images/icon/icon_open_n.png" v-if="!isNavShow" alt=""><img src="../../../assets/images/icon/icon_open.png" v-else alt=""></span>
      <div>
        <a :class="{'active':current==1,'over': over==1}" @click="toCurrent(1, '/student/course/mycourse')" @mouseenter="addover(1)" @mouseleave="addover(0)">
          <span><img src="../../../assets/images/icon/s1.png" v-if="current==1"><img src="../../../assets/images/icon/icon_course_name.png" v-else></span><span>我的课程</span>
        </a>
        <a :class="{'active':current==2,'over': over==2}" @click="toCurrent(2, '/student/course/mytest')" @mouseenter="addover(2)" @mouseleave="addover(0)">
          <span><img src="../../../assets/images/icon/icon_course_test_selected.png" v-if="current==2"><img src="../../../assets/images/icon/s2.png" v-else></span><span>我的测试</span>
        </a>
        <a :class="{'active':current==3,'over': over==3}" @click="toCurrent(3, '/student/course/works')" @mouseenter="addover(3)" @mouseleave="addover(0)">
          <span><img src="../../../assets/images/icon/icon_course_works_selected.png" v-if="current==3"><img src="../../../assets/images/icon/s3.png" v-else></span><span></span><span>课程作品</span>
        </a>
      </div>
    </aside>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      current: 1,
      over: 0,
      isNavShow: false
    }
  },
  created () {
    console.log(this.$router.currentRoute.fullPath)
    if (this.$router.currentRoute.fullPath.indexOf('test') > 0) {
      this.current = 2
    } else if (this.$router.currentRoute.fullPath.indexOf('works') > 0) {
      this.current = 3
    }
  },
  methods: {
    toCurrent (idx, torouter) {
      this.current = idx
      this.$router.push(torouter)
    },
    addover (idx) {
      // console.log(idx)
      this.over = idx
    },
    changeIsNavShow () {
      this.isNavShow = !this.isNavShow
    }
  }
}
</script>

<style lang="scss" scoped>
.course{
  // width: 100%;
  height:calc(100vh - 0.5rem);
  // background: #eee;
  display: flex;
  aside{
    width: 1.14rem;
    transition: width .3s;
    padding-top: 0.2rem;
    margin: 0 0.1rem;
    &>span{
      display: block;
      width: 0.22rem;
      height: 0.14rem;
      margin-left: 0.1rem;
      margin-bottom: 0.2rem;
      cursor: pointer;
    }
    div{
      a{
        display: block;
        width: 100%;
        height: 0.4rem;
        border-radius:0.04rem;
        cursor: pointer;
        margin-bottom: 0.12rem;
        color: #666;
        overflow: hidden;
        background-color: #fff;
        position: relative;
        z-index: 10;
        span{
          &:nth-child(1){
            display: inline-block;
            width: 0.16rem;
            height: 0.16rem;
            margin: 0.12rem;
          }
        }
        &.active{
          background:linear-gradient(-90deg,rgba(255,183,38,1),rgba(255,129,38,1));
          color: #fff;
        }
      }
    }
    &.active{
      width: 0.4rem;
      div a{
        // transition: all .1s;
        &.over{
          width: 1.14rem;
          transition: width .2s;
          overflow-x: visible;
          position: relative;
        }
      }
    }
  }
  &>section {
    flex: 1;
  }
}
</style>
