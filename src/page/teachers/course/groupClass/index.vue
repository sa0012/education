<template>
  <div class="group">
    <div class="group-header-wrap">
      <div class="group-header clearfix">
        <div class="group-line is-inline"></div>
        <div class="group-title-1 is-inline">学习小组</div>
        <div class="group-title-2 is-inline">班级人数20人</div>
      </div>

      <div class="group-opeator clearfix">
        <!-- <div class="group-min is-inline"></div>
        <div class="group-max is-inline"></div>-->
        <div class="group-close is-inline" @click="closeModal">
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </div>
      </div>
    </div>

    <div class="group-content">
      <div class="group1-wrap">
        <div class="content-1">
          <div
            class="content-1-wrap"
            ref="listGroup"
            :style="{ width: 100*Number(list1.length) + '%' }"
          >
            <draggable
              class="list-group"
              :list="list1"
              @change="log"
              @start="start"
              @end="handleEnd"
              dragable="true"
              :move="getdata"
              :clone="clone"
              :group="{ name: 'people', pull: pullFunction }"
            >
              <div class="list-group-item" v-for="(item, index) in list1" :key="index">
                <div class="group1-list-inner">
                  <img class="avatar-img" :src="item.avatar" alt>
                  <div class="avatar-name">{{ item.name }} {{ index }}</div>
                  <div class="icon-list">
                    <img class="icon-item" src="../../../../assets/images/teacher/g2.png" alt>
                    <img class="icon-item" src="../../../../assets/images/teacher/g3.png" alt>
                    <img class="icon-item" src="../../../../assets/images/teacher/g4.png" alt>
                  </div>
                </div>
              </div>
            </draggable>
          </div>
        </div>
        <div class="group1-prev" @click="handlePrev('.list-group', 'group1Index', -138)">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div
          class="group1-next"
          @click="handleNext('.list-group', 'group1Index', -138, 'list1', 7)"
        >
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <div class="group1-wrap group2-wrap">
        <div class="content-1">
          <div
            class="content-1-wrap content-group2-list"
            :style="{ width: 100*Number(list3.length + 1) + '%' }"
          >
            <div class="group-slide" v-for="(item, index) in  list3" :key="index">
              <div class="group-slide-innder">
                <div>
                  <div class="group-title">0{{index+1}}组</div>
                  <div class="group2-inner">
                    <draggable
                      class="list-group list-group2"
                      :list="list2[index]"
                      group="people"
                      @change="log"
                    >
                      <div
                        class="avatar-list"
                        v-for="(gItem, gIndex) in list2[index]"
                        :key="gIndex"
                      >
                        <img class="avatar-img" :src="gItem.avatar" alt>
                        <div class="avatar-name">{{ gItem.name }}</div>
                      </div>
                    </draggable>
                  </div>
                </div>
              </div>
            </div>
            <div class="group-slide" ref="addSlide">
              <div class="add-btn">
                <i class="el-icon-plus"></i>
                <span class="add-text">添加小组</span>
              </div>
              <draggable class="addGroupDistrict" group="people"></draggable>
            </div>
          </div>
        </div>
        <div class="group1-prev" @click="handlePrev('.content-group2-list', 'group2Index', -310)">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div
          class="group1-next"
          @click="handleNext('.content-group2-list', 'group2Index', -310,  'list3', 2)"
        >
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="group-btn">
      <div class="submit base-btn">提交</div>
      <div class="reset base-btn">重置</div>
    </div>
  </div>
</template>

<script>
/*组件方式引用*/
import draggable from "vuedraggable";
import avatar from "@/assets/images/teacher/g1.png";
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
      },
      list1: [
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        },
        {
          avatar: avatar,
          name: "欧阳娜娜"
        }
      ],
      list2: [],
      list3: [],
      list4: [],
      controlOnStart: true,
      group1Index: 0,
      group2Index: 0,
      timer: null,
      className: "",
      currentEle: {}
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
    pullFunction() {
      console.log(this.controlOnStart, "pullFunction");
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      console.log(originalEvent, "start-originalEvent");
      this.controlOnStart = originalEvent.ctrlKey;
    },
    getdata(evt) {
      let className = evt.to.className;
      if (className && className === "addGroupDistrict") {
        this.$refs.addSlide.style.borderColor = "red";
        this.className = className;
      }
      // console.log(evt.to.className, 'move');
    },
    handleEnd(e) {
      // console.log(e, "end");
      if (this.className === "addGroupDistrict") {
        this.className = "";
        this.$refs.addSlide.style.borderColor = "#fafbfd";
        this.list3.push({});
        this.list2[this.list3.length - 1] = [this.currentEle];
        this.timer = setTimeout(() => {
          this.handleNext(
            ".content-group2-list",
            "group2Index",
            -310,
            "list3",
            2
          );
        }, 100);
      }
    },
    handlePrev(el, listIndex, distance) {
      if (this[listIndex] <= 0) {
      } else {
        this[listIndex]--;
        let ele = document.querySelector(el);
        ele.style.transform = `translateX( ${distance *
          0.01 *
          this[listIndex]}rem)`;
        ele.style.transition = "all 0.3s ease";
      }
    },
    handleNext(el, listIndex, distance, list, baseIndex) {
      if (this[listIndex] < this[list].length - baseIndex) {
        this[listIndex]++;
        let ele = document.querySelector(el);
        ele.style.transform = `translateX( ${distance *
          0.01 *
          this[listIndex]}rem)`;
        ele.style.transition = "all 0.3s ease";
      }
    },
    add: function() {
      console.log("add");
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      console.log("replace");
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      console.log(el, "clone");
      return {
        name: el.name,
        avatar: el.avatar
      };
    },
    log: function(evt) {
      try {
        console.log(evt, "log");
        if (this.className === "addGroupDistrict") {
          this.currentEle = Object.assign({}, evt.removed.element);
        } else {
        }
      } catch (err) {}
    },
    closeModal() {
      this.$emit("closeModal", false);
    }
  },
  mounted() {},
  components: {
    draggable
  }
};
</script>

<style lang="scss" scoped>
.group {
  width: 11rem;
  height: 6.2rem;

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
    top: 49%;
    transform: translateY(-50%);
    right: 0;
  }
}

.group-content {
  padding-top: 0.2rem;
}

.content-1 {
  width: 9.54rem;
  margin: 0 auto;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .content-1-wrap {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.list-group-item,
.group-slide {
  width: 1.26rem;
  height: 1.46rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  background: #fff;
  border: 0.01rem solid #e4e8ed;
  margin-right: 0.12rem;
  box-sizing: border-box;
  position: relative;
}

.group1-list-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.add-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background: rgba(153, 153, 153, 0.1);
  border-radius: 0.2rem;
  font-size: 0.16rem;
  color: #bfbfbf;
}

.group1-wrap {
  width: 100%;
  position: relative;
}

.group2-wrap {
  height: 2.65rem;
}

.group1-prev,
.group1-next {
  width: 0.34rem;
  height: 0.34rem;
  background: #eee;
  border-radius: 0.34rem;
  text-align: center;
  line-height: 0.34rem;
  font-size: 0.18rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background: rgba(247, 151, 39, 1);
    color: #fff;
  }
}

.group1-prev {
  left: 0.2rem;
}

.group1-next {
  right: 0.2rem;
}

.group-slide {
  width: 3.1rem;
  height: 2.65rem;
  background: #fafbfd;
  margin-right: 0.12rem;
  margin-top: 0.2rem;
}

.group-title {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.16rem;
  font-weight: bold;
  background: rgba(255, 243, 229, 1);
}

.group-list {
  height: 2.15rem;
}

.avatar-list {
  display: inline-block;
  width: 25%;
  text-align: center;
  margin-bottom: 0.2rem;
}

.avatar-img {
  width: 0.5rem;
  height: 0.5rem;
  margin-bottom: 0.05rem;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-name {
  font-size: 0.14rem;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 0.26rem;
}

.group2-inner {
  height: 2.15rem;
}

.list-group2 {
  overflow-y: scroll;
  height: 2.15rem;
  text-align: left;
  white-space: pre-wrap;
  padding-top: 0.2rem;
  &::-webkit-scrollbar {
    display: none;
  }
}

.addGroupDistrict {
  width: 100%;
  height: 100%;
}

.group-btn {
  text-align: center;
  margin-top: 0.5rem;
}

.base-btn {
  display: inline-block;
  vertical-align: middle;
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 0.2rem;
}

.submit {
  background: rgba(247, 151, 39, 1);
  color: #fff;
  margin-right: 0.2rem;
}

.reset {
  border: 0.01rem solid #999;
  color: #ccc;
}

.icon-item {
  width: 0.22rem;
  margin-top: 0.1rem;
  margin-right: 0.05rem;
}
</style>


