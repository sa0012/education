<template>
  <div class="g_main">
     <section class="main">
      <aside>
        <router-link :to="{path:'/teachers'}" class="logo">
          <img src="../../assets/images/logo.png" alt>
        </router-link>
        <img src="../../assets/images/head.png" alt="">
        <div class="user">余老师
          <span><img src="../../assets/images/icon/icon_sex_nv.png" alt=""></span>
        </div>
        <p>高级教师</p>
        <div class="nav active">
          <span><img src="../../assets/images/icon/icon_course.png" alt=""></span>
          <span>课程中心</span>
        </div>
        <div class="nav">
          <span><img src="../../assets/images/icon/icon_task.png" alt=""></span>
          <span>任务中心</span>
        </div>
      </aside>
      <section class="content">
        <BHeader></BHeader>
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script>
import BHeader from '@/components/common/header.vue'
export default {
  name: 'Teachers',
  components: {
    BHeader
  }
}
</script>

<style lang="scss" scoped>
.g_main {
  width: 13.66rem;
  height: 100%;
  margin: 0 auto;
}
.main {
  display: flex;
  height: 100%;
  & > aside {
    width: 1.5rem;
    height: 100%;
    min-height: 7rem;
    background-color: #fff;
    margin-top: 0.01rem;
    border-right: 0.01rem solid rgba(228, 232, 237, 1);
    text-align: center;
    padding-top: 0.2rem;
    & > img {
      width: 0.8rem;
      border-radius: 50%;
    }
    & .logo {
      width: 0.49rem;
      height: 0.49rem;
      display: block;
      margin: 0 auto;
      margin-bottom: 0.32rem;
    }
    & > .user {
      text-align: center;
      height: 0.16rem;
      line-height: 0.16rem;
      font-weight: 600;
      margin: 0.14rem 0 0.12rem;
      & > span {
        width: 0.16rem;
        display: inline-block;
        margin-left: 0.06rem;
        font-weight: 400;
      }
    }
    & > p {
      font-size: 0.13rem;
      line-height: 0.13rem;
      margin-bottom: 0.36rem;
      color: #888;
    }
    & > .nav {
      height: 0.66rem;
      margin-bottom: 0.11rem;
      text-align: left;
      font-size: 0.15rem;
      color: #666;
      &.active {
        border-left: 0.03rem solid #f79727;
        background: rgba(252, 244, 235, 1);
        font-size: 0.16rem;
        color: #f79727;
      }
      & > span:nth-child(1) {
        display: inline-block;
        width: 0.2rem;
        height: 0.22rem;
        line-height: 1;
        margin: 0.22rem 0.13rem 0 0.25rem;
      }
      & > span:nth-child(2) {
        display: inline-block;
        margin-top: 0.25rem;
      }
    }
  }
  & > section {
    flex: 1;
    width: calc(100% - 1.5rem);
    height: 100%;
  }
}
</style>
