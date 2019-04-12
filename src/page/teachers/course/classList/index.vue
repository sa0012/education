<template>
  <div class="fillcontain category" ref="category" v-show="visible">
    <section class="category-wrap">
      <h2 class="lesson-main-title">
        <div class="class-title">
          <div class="class-title-left">班级列表</div>
          <div class="class-title-right">
            <input type="text" placeholder="搜索班级">
          </div>
        </div>
        <i class="el-icon-close close-icon" @click="close"></i>
      </h2>
      <div class="lesson-content">
        <ul class="lesson-list">
          <li class="lesson-item" v-for="item in 20" :key="item">
            <div class="lesson-img">
              <img class="less-image" src="../../../../assets/images/img3.png" alt>
              <div class="img-hover" v-if="false">
                <div class="online-view">在线查看</div>
                <div class="click-download">点击下载</div>
              </div>
            </div>
            <div class="lesson-intro">
              <div class="lesson-title">课程名称课程名称</div>
              <div class="lesson-data">2019.01.01</div>
              <div class="lesson-teacher">刘青云老师</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    showLesson: {
      type: Boolean,
      default: false
    },
    handleClose: {
      type: Function,
      default: () => {}
    },
    handleConfirm: {
      type: Function,
      default: () => {}
    },
    context: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      labelPosition: "left",
      visible: false,
      feedback: {
        type: "SG",
        title: "",
        content: ""
      }
    };
  },
  watch: {
    showLesson(newVal, oldVal) {
      this.visible = newVal;
      this.$emit("update:showLesson", newVal);
    }
  },
  created() {},
  methods: {
    close() {
      this.visible = false;
      this.$emit("update:showLesson", false);
      this.handleClose && this.handleClose();
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .category-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    // max-height: 80%;
    // min-width: 6.4rem;
    max-width: 80%;
    border-radius: 0.05rem;
    z-index: 4445;
    animation: slide 0.5s ease-out;
    border-radius: 0.08rem;

    .category-title {
      font-size: 0.18rem;
      text-align: center;
      padding-bottom: 0.3rem;
    }

    .close-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.1rem;
      font-size: 0.2rem;
      color: #999;
      display: block;
      transition: all 0.5s ease;
      cursor: pointer;
    }
  }
}

.lesson-main-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding-left: 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  position: relative;
  border-bottom: 0.01rem solid #e4e8ed;
  margin-bottom: 0.1rem;

  &:before {
    content: "";
    display: inline-block;
    width: 0.03rem;
    height: 0.1rem;
    background: #f79727;
    border-radius: 0.03rem;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0.1rem;
  }
}

.lesson-list {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-height: 4rem;
  width: 100%;
  overflow: auto;
  margin-bottom: 0.3rem;
  padding: 0 0.05rem;
  box-sizing: border-box;
}
.lesson-item {
  width: 1.1rem;
  height: 1.4rem;
  flex: 1;
  display: inline-block;
  margin: 0.1rem 0.05rem;
  border: 0.01rem solid #e4e8ed;
  border-radius: 0.04rem;
  cursor: pointer;

  .lesson-img {
    .less-image {
      width: 100%;
      height: 0.75rem;
    }
  }
}

.lesson-intro {
  padding: 0.05rem;
  text-align: left;
  font-size: 0.12rem;

  .lesson-title {
    font-weight: bold;
  }

  .lesson-title,
  .lesson-data {
    padding-bottom: 0.05rem;
    color: #666666;
  }
}

@keyframes slide {
  from {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>


