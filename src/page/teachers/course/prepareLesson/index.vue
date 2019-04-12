<template>
  <div class="fillcontain category" ref="category" v-show="visible">
    <section class="category-wrap">
      <div class="group-header-wrap">
        <div class="group-header clearfix">
          <div class="group-line is-inline"></div>
          <div class="group-title-1 is-inline">备课资料</div>
        </div>

        <div class="group-opeator clearfix">
          <!-- <div class="group-min is-inline"></div>
          <div class="group-max is-inline"></div>-->
          <div class="is-inline" @click="close">
            <i class="el-dialog__close el-icon el-icon-close group-close"></i>
          </div>
        </div>
      </div>
      <div class="lesson-content">
        <ul class="lesson-list">
          <li
            class="lesson-item"
            :class="{ 'is-mousemove': item.isHover == true }"
            v-for="(item, index) in lessonList"
            :key="index"
            @mouseover="handleOver(index)"
            @mouseleave="handleLeave(index)"
          >
            <div class="lesson-img">
              <img class="less-image" src="../../../../assets/images/img3.png" alt>
              <div class="image-layer" v-show="item.isHover == true"></div>
              <div class="img-hover" v-show="item.isHover == true">
                <img src="../../../../assets/images/teacher/41.png" alt class="online-view">
                <img src="../../../../assets/images/teacher/42.png" alt class="click-download">
              </div>
            </div>
            <div class="lesson-intro">
              <div
                class="lesson-title"
                :class="{ 'is-select': item.isHover == true }"
              >{{ item.lesson_title }}</div>
              <!-- <div class="lesson-data">
                <img class="lesson-icon" src="../../../../assets/images/icon/43.png" alt>
                <span class="lesson-text">{{ item.lesson_date }}</span>
              </div>
              <div class="lesson-teacher">
                <img class="lesson-icon" src="../../../../assets/images/icon/44.png" alt>
                <span class="lesson-text">{{ item.lesson_teacher }}</span>
              </div> -->
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
      lessonList: []
    };
  },
  watch: {
    showLesson(newVal, oldVal) {
      this.visible = newVal;
      this.$emit("update:showLesson", newVal);

      if (this.visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  },
  created() {},
  methods: {
    handleOver(index) {
      this.lessonList[index].isHover = true;
    },
    handleLeave(index) {
      this.lessonList[index].isHover = false;
    },
    closeModal() {
      this.$emit("closeModal", false);
    },
    close() {
      this.visible = false;
      this.$emit("update:showLesson", false);
      this.handleClose && this.handleClose();
    }
  },
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.lessonList.push({
        lesson_title: "课程名称课程名称",
        lesson_date: "2019.01.01",
        lesson_teacher: "刘青云老师",
        isHover: false
      });
    }
  }
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
  overflow: auto;

  .category-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 11rem;
    max-height: 5.84rem;
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
  width: 100%;
  overflow: auto;
  margin-bottom: 0.3rem;
  padding: 0 0.05rem;
  box-sizing: border-box;
  // max-height: 5rem;
  max-height: 4.2rem;
  padding-left: 0.2rem;
}
.lesson-item {
  width: 1.9rem;
  // height: 2.4rem;
  flex: 1;
  display: inline-block;
  margin: 0.1rem 0.1rem;
  border: 0.01rem solid #e4e8ed;
  border-radius: 0.04rem;
  cursor: pointer;

  &.is-mousemove {
    border-color: #f79727;
  }

  .lesson-img {
    position: relative;
    .less-image {
      width: 100%;
      height: 1.5rem;
    }
  }

  .image-layer {
    width: 100%;
    height: 1.5rem;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }

  .img-hover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .online-view {
    margin-bottom: 0.14rem;
  }
}

.lesson-intro {
  padding: 0.1rem 0 0 0.12rem;
  text-align: left;
  font-size: 0.16rem;

  .lesson-title {
    font-weight: bold;

    &.is-select {
      color: #f79727;
    }
  }

  .lesson-title,
  .lesson-data,
  .lesson-teacher {
    padding-bottom: 0.16rem;
    color: #666666;
    font-size: 0.14rem;
  }

  .lesson-icon,
  .lesson-text {
    display: inline-block;
    vertical-align: middle;
  }

  .lesson-icon {
    width: 0.12rem;
  }
}

.group-header-wrap {
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 0.01rem solid #cccc;
  position: relative;
}

.group-header {
  padding-left: 0.3rem;
}
.group-opeator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.1rem;
  padding: 0.12rem 0;
  margin-right: 0.12rem;
}

.is-inline {
  display: inline-block;
  vertical-align: middle;
}

.group-line {
  width: 0.04rem;
  height: 0.16rem;
  background: orange;
  display: inline-block;
  width: 0.03rem;
  height: 0.1rem;
  background: rgba(247, 151, 39, 1);
  border-radius: 0.03rem;
}

.group-title-1 {
  font-size: 0.16rem;
  font-weight: bold;
  padding: 0 0.08rem 0 0.05rem;
}

.group-title-2 {
  font-size: 0.14rem;
  color: rgba(247, 151, 39, 1);
}

.group-min,
.group-max {
  width: 0.1rem;
  height: 0.01rem;
  border: 0.01rem solid #000;
  box-sizing: border-box;
}

.group-min,
.group-max,
.group-close {
  vertical-align: middle;
}

.group-max {
  height: 0.1rem;
  margin: 0 0.2rem;
  margin-right: 0.3rem;
}

.group-close {
  font-size: 0.18rem;
  font-size: 0.18rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
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


