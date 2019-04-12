<template>
	<div class="material" v-loading="loading">
        <hgroup :class="{'active':isHidden}">
            <div><span>本课时任务</span><span @click="changeIsHidden"><img src="../../../../assets/images/icon/icon_task_close.png" alt=""></span></div>
            <ul>
                <li>
                <h4 class="icon-course">课件任务名称</h4>
                <div>
                    <p>截止时间：2019.03.11</p>
                    <p>发起人：张丹丹老师</p>
                </div>
                </li>
                <li>
                <h4 class="icon-test">课件任务名称</h4>
                <div>
                    <p>截止时间：2019.03.11</p>
                    <p>发起人：张丹丹老师</p>
                </div>
                </li>
                <li>
                <h4 class="icon-questionnaire">课件任务名称</h4>
                <div>
                    <p>截止时间：2019.03.11</p>
                    <p>发起人：张丹丹老师</p>
                </div>
                </li>
                <li>
                <h4 class="icon-works">课件任务名称</h4>
                <div>
                    <p>截止时间：2019.03.11</p>
                    <p>发起人：张丹丹老师</p>
                </div>
                </li>
                <li>
                <h4 class="icon-clock">课件任务名称</h4>
                <div>
                    <p>截止时间：2019.03.11</p>
                    <p>发起人：张丹丹老师</p>
                </div>
                </li>
            </ul>
        </hgroup>
		<breadcrumb />
        <div class="step">
            <div class="stepimg">
                <img :src="material" width="992" height="500" />
            </div>
        </div>
        <div class="stepbut">
            <button class="pre">上一页</button>
            <button class="next">下一页</button>
        </div>
	</div>
</template>

<script>
import breadcrumb from '@/components/common/breadcrumb.vue'
import material from 'assets/images/student/material.png'

export default {
	name: "material",
	components: {
		breadcrumb
	},
	data() {
		return {
            loading: true,
            material,
            isHidden: true
		};
	},
	created() {
		let _this = this;
		setTimeout(() => {
			_this.loading = false;
		}, 1000);
	},
	methods: {
        changeIsHidden () {
        this.isHidden = !this.isHidden
        }
    }
};
</script>

<style lang="scss" scoped>
.material {
    background:rgba(255,255,255,1);
    border:0.01rem solid rgba(228,232,237,1);
    border-radius:0.06rem;
    padding: 0.05rem 0.1rem;
    .step {
        background:rgba(255,255,255,1);
        border:0.01rem solid rgba(228,232,237,1);
        border-radius:0.06rem;
        margin: 0.15rem;
        .stepimg {
            width: 9.92rem;
            height: 5rem;
        }
    }
        .stepbut {
            margin: 0.4rem 0;
            text-align: center;
            button {
                margin: 0 0.2rem;
            }
            .pre {
                width:1.7rem;
                height:0.44rem;
                background:transparent;
                border-radius:0.04rem;
                border: rgba(255,129,38,1) 0.01rem solid;
                color: #FF8126;
                font-size: 0.16rem;
            }   
            .next {
                width:1.7rem;
                height:0.44rem;
                border:0.01rem solid rgba(0,0,0,1);
                background:linear-gradient(-90deg,rgba(255,183,38,1),rgba(255,129,38,1));
                border-radius:0.04rem;
                border:none;
                color: #fff;
                font-size: 0.16rem;
            }         
        }
}
  hgroup{
    width: 2.1rem;
    min-height: 7rem;
    padding-bottom: 0.5rem;
    float: right;
    border-left:0.01rem solid rgba(228,232,237,1);
    transition: width .3s;
    background-color: #fff;
    &>div{
      padding: 0 0.2rem;
      height: 0.7rem;
      line-height: 0.7rem;
      background-image: url('../../../../assets/images/task_bg.png');
      display: flex;
      font-size: 0.18rem;
      color: #fff;
      font-weight: 600;
      &>span:first-child{
        flex: 1;
      }
      &>span:nth-child(2) {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        line-height: 0.24rem;
        margin-top: 0.23rem;
        cursor: pointer;
      }
    }
    &>ul>li{
      padding: 0.15rem 0.14rem 0 0.16rem;
      h4{
        height: 0.16rem;
        line-height: 0.16rem;
        font-weight: 600;
        text-indent: 0.26rem;
        background-size: 0.16rem 0.16rem;
        margin-bottom: 0.15rem;
        background-position: 0 0;
        background-repeat: no-repeat;
        &.icon-course{
          background-image: url('../../../../assets/images/icon/icon_course_name.png');
        }
        &.icon-test{
          background-image: url('../../../../assets/images/icon/icon_course_content.png');
        }
        &.icon-questionnaire{
          background-size: 0.14rem 0.16rem;
          background-image: url('../../../../assets/images/icon/icon_course_look.png');
        }
        &.icon-works{
          background-size: 0.16rem 0.14rem;
          background-position: 0.01rem 0;
          background-image: url('../../../../assets/images/icon/icon_course_completed.png');
        }
        &.icon-clock{
          background-image: url('../../../../assets/images/icon/icon_clock.png');
        }
      }
      div{
        background-color: #F2F5F7;
        padding: 0.15rem 0.12rem 0.03rem;
        p{
          display: block;
          font-size: 0.12rem;
          line-height: 0.12rem;
          text-indent: 0.16rem;
          position: relative;
          color: #888;
          margin-bottom: 0.11rem;
          &:after {
            content: '';
            display: block;
            position: absolute;
            width: 0.04rem;
            height: 0.04rem;
            background-color: #C2C8CC;
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
      &>div{
        width: 0.44rem;
        height: 0.44rem;
        padding: 0.1rem;
        text-align: center;
        border-radius: 50% 0 0 50%;
        span:nth-child(1){
          display: none;
        }
        span:nth-child(2){
          margin-top: 0;
          transform: rotate(180deg);
        }
      }
      ul{
        display: none;
      }
    }
  }
</style>
