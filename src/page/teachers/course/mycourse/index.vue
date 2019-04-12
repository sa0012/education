<template>
  <div class="mycourse" v-loading="loading">
    <hgroup :class="{'active':isHidden}">
      <div>
        <span>我的任务</span>
        <!-- <span @click="changeIsHidden"><img src="../../../../assets/images/icon/icon_task_close.png" alt=""></span> -->
        <span @click="goTrends"><img src="../../../../assets/images/icon/icon_task_close.png" alt=""></span>
      </div>
      <ul>
        <li v-for="(item,index) in tasklist" :key="index">
          <h4 :class="item.classname">{{item.title}}</h4>
          <div>
            <p>截止时间：{{item.time}}</p>
            <p>发起人：{{item.teacher}}</p>
          </div>
        </li>
        <!-- <li>
          <h4 class="icon-test">测试任务名称</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
        <li>
          <h4 class="icon-questionnaire">问卷任务名称</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
        <li>
          <h4 class="icon-works">作品上传</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
        <li>
          <h4 class="icon-clock">优势打卡任务名称</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li> -->
      </ul>
      <var class="taskmore" v-show='!isHidden' @click="loadMore">查看更多</var>
    </hgroup>
    <section :class="{'active':isHidden}">
      <div>
        <div>
          <h2>我的课程</h2>
          <span :class="{active:isTab===0}" @click="changeTab(0)">当前课程</span>
          <span :class="{active:isTab===1}" @click="changeTab(1)">历史课程</span>
        </div>
        <section class='list'>
          <ul v-show='isTab===0'>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/student/workimg.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <!-- <img src="../../../../assets/images/img2.png" alt=""> -->
              <img src="../../../../assets/images/student/workimg.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <!-- <img src="../../../../assets/images/img3.png" alt=""> -->
               <img src="../../../../assets/images/student/workimg.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <!-- <img src="../../../../assets/images/img4.png" alt=""> -->
               <img src="../../../../assets/images/student/workimg.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img5.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img1.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img3.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img4.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img5.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img1.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img3.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img4.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img5.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img1.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
          </ul>
          <ul v-show='isTab===1'>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img4.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img5.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img1.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img2.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
             <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img3.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
            <img src="../../../../assets/images/student/workimg.png" alt="">
              <!-- <img src="../../../../assets/images/img1.png" alt=""> -->
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Mycourse',
  data() {
    return {
      loading: true,
      isHidden: false,
      isTab: 0,
      tasklist:[
        {
          title:'课件任务名称',
          time:'2019.03.11',
          teacher:'张丹丹老师',
          classname:'icon-course'
        },
        {
          title:'测试任务名称',
          time:'2019.03.11',
          teacher:'张丹丹老师',
          classname:'icon-test'
        },
        {
          title:'问卷任务名称',
          time:'2019.03.11',
          teacher:'张丹丹老师',
          classname:'icon-questionnaire'
        },
        {
          title:'作品上传',
          time:'2019.03.11',
          teacher:'张丹丹老师',
          classname:'icon-works'
        },
        {
          title:'优势打卡任务名称',
          time:'2019.03.11',
          teacher:'张丹丹老师',
          classname:'icon-clock'
        }
      ]
    }
  },
  created() {
    let _this = this
    setTimeout(() => {
      _this.loading = false
    }, 1000)
  },
  methods: {
    goTrends(){
      this.$router.push('/teachers/course/task')
    },
    changeIsHidden() {
      this.isHidden = !this.isHidden
    },
    changeTab(num) {
      this.isTab = num
    },
    loadMore(){
      this.tasklist.push( {
          title:`课件任务名称${parseInt(Math.random()*10)}`,
          time:'2019.03.11',
          teacher:'张丹丹老师',
          classname:'icon-course'
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.mycourse {
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > section {
    padding-top: 0.1rem;
    width: calc(100% - 2.22rem);
    height: 100%;
    border: 0.01rem solid rgba(228, 232, 237, 1);
    transition: width 0.3s;
    & > div {
      height: 100%;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      background-color: #fff;
      & > div {
        height: 0.7rem;
        line-height: 0.7rem;
        display: flex;
        h2 {
          flex: 1;
          display: block;
          height: 0.2rem;
          text-indent: 0.4rem;
          position: relative;
          font-size: 0.18rem;
          font-weight: 600;
          &:after {
            content: "";
            position: absolute;
            width: 0.18rem;
            height: 0.2rem;
            top: 0.25rem;
            left: 0.08rem;
            background-image: url("../../../../assets/images/icon/icon_mycourse.png");
          }
        }
        span {
          display: block;
          width: 1rem;
          height: 0.32rem;
          font-weight: bold;
          line-height: 0.32rem;
          text-align: center;
          border-radius: 0.16rem;
          margin-top: 0.19rem;
          color: #666;
          cursor: pointer;
          position: relative;
          &:hover {
            color: #333;
          }
          &.active {
            color: #333;
            &:before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 0.2rem;
              height: 0.04rem;
              margin-left: -0.1rem;
              background: linear-gradient(
                -90deg,
                rgba(255, 183, 38, 1),
                rgba(255, 129, 38, 1)
              );
              border-radius: 0.02rem;
            }
          }
        }
      }
      & > section {
        // padding-bottom: 0.3rem;
        ul {
          display: flex;
          display: -webkit-flex;
          justify-content: space-around;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            box-sizing: border-box;
            width: 2.6rem;
            height: 3.1rem;
            border-radius: 0.04rem;
            overflow: hidden;
            border: 0.01rem solid rgba(228, 232, 237, 1);
            margin-bottom: 0.15rem;
            padding-bottom: 0.03rem;
            cursor: pointer;
            img {
              // width: 1.9rem;
              height: 2rem;
              width: auto;
              display: block;
              margin: 0 auto;
            }
            h4 {
              margin: 0.08rem 0.19rem 0.15rem;
              font-size: 0.15rem;
              font-weight: 600;
            }
            p {
              display: block;
              height: 0.12rem;
              margin-left: 0.19rem;
              margin-bottom: 0.09rem;
              font-size: 0.12rem;
              line-height: 0.12rem;
              text-indent: 0.09rem;
              position: relative;
              &:after {
                content: "";
                display: block;
                width: 0.04rem;
                height: 0.04rem;
                background-color: #fa6464;
                position: absolute;
                left: 0;
                top: 0.03rem;
              }
              &:nth-last-child(3):after {
                background-color: #56bf79;
              }
            }
            &.bai {
              visibility: hidden;
              height: 0;
              margin: 0;
            }
          }
        }
      }
    }
    &.active {
      width: calc(100% - 0.14rem);
    }
  }
  hgroup {
    width: 2.1rem;
    height: 100%;
    overflow: scroll;
    padding-bottom: 0.5rem;
    float: right;
    border-left: 0.01rem solid rgba(228, 232, 237, 1);
    transition: width 0.3s;
    background-color: #fff;
    & > div {
      padding: 0 0.2rem;
      height: 0.7rem;
      line-height: 0.7rem;
      background-image: url("../../../../assets/images/task_bg.png");
      display: flex;
      font-size: 0.18rem;
      color: #fff;
      font-weight: 600;
      & > span:first-child {
        flex: 1;
      }
      & > span:nth-child(2) {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        line-height: 0.24rem;
        margin-top: 0.23rem;
        cursor: pointer;
      }
    }
    & > ul > li {
      padding: 0.15rem 0.14rem 0 0.16rem;
      h4 {
        height: 0.16rem;
        line-height: 0.16rem;
        font-weight: 600;
        text-indent: 0.26rem;
        background-size: 0.16rem 0.16rem;
        margin-bottom: 0.15rem;
        background-position: 0 0;
        background-repeat: no-repeat;
        &.icon-course {
          background-image: url("../../../../assets/images/icon/s8.png");
        }
        &.icon-test {
          background-image: url("../../../../assets/images/icon/s5.png");
        }
        &.icon-questionnaire {
          background-size: 0.14rem 0.16rem;
          background-image: url("../../../../assets/images/icon/s6.png");
        }
        &.icon-works {
          background-size: 0.16rem 0.14rem;
          background-position: 0.01rem 0;
          background-image: url("../../../../assets/images/icon/s7.png");
        }
        &.icon-clock {
          background-image: url("../../../../assets/images/icon/s9.png");
        }
      }
      div {
        background-color: #f2f5f7;
        padding: 0.15rem 0.12rem 0.03rem;
        p {
          display: block;
          font-size: 0.12rem;
          line-height: 0.12rem;
          text-indent: 0.16rem;
          position: relative;
          color: #888;
          margin-bottom: 0.11rem;
          &:after {
            content: "";
            display: block;
            position: absolute;
            width: 0.04rem;
            height: 0.04rem;
            background-color: #c2c8cc;
            top: 0.03rem;
            left: 0;
          }
        }
      }
    }
    &.active {
      width: 0.44rem;
      height: 0.44rem;
      min-height: 0.44rem;
      padding-bottom: 0;
      margin-top: 0.28rem;
      background-color: transparent;
      border: none;
      & > div {
        width: 0.44rem;
        height: 0.44rem;
        padding: 0.1rem;
        text-align: center;
        border-radius: 50% 0 0 50%;
        span:nth-child(1) {
          display: none;
        }
        span:nth-child(2) {
          margin-top: 0;
          transform: rotate(180deg);
        }
      }
      ul {
        display: none;
      }
    }
    .taskmore {
      border: 0.01rem solid rgba(187, 187, 187, 1);
      border-radius: 0.16rem;
      font-size: 0.12rem;
      color: #999;
      width: 1rem;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      display: block;
      margin: 0.3rem auto 0;
      cursor: pointer;
    }
  }
  .list {
    max-height: calc(100vh - 1.8rem);
    overflow: auto;
  }
}
</style>
