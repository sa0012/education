<template>
  <div class="save-task">
    <div class="task-wrap">
      <el-row class="save-header">
        <el-col :span="12" class="task-name">SDFFFFFFFFFFFFFFFFFFF</el-col>
        <el-col :span="12" class="btn-wrap">
          <div class="task-delete" @click="confirmDelete">删除</div>
          <div class="task-save">保存任务</div>
        </el-col>
      </el-row>
      <div class="preview">
        <img src="../../../../assets/images/preview.png" style="width: 110%;" alt>
        <!-- <div style="background: green; height:4rem; width: 5rem;"></div> -->
      </div>
    </div>
    <div class="task-close" @click="taskClose">
      <i class="el-dialog__close el-icon el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    taskClose() {
      this.$emit("taskClose", false);
    },
    confirmDelete() {
      this.$emit("confirmDel");
    }
  }
};
</script>

<style lang="scss" scoped>
.save-task {
  width: 8.8rem;
  padding: 0.3rem 0.36rem 0.34rem 0.36rem;
}

.save-header {
  height: 0.75rem;
  line-height: 0.75rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
}

.task-wrap {
  border: 0.01rem solid rgba(228, 232, 237, 1);
}

.preview {
  height: 4.25rem;
  overflow: auto;
}

.task-name {
  display: inline-block;
  vertical-align: middle;
}

.task-delete,
.task-save {
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.12rem;
  border-radius: 0.02rem;
  color: #fff;
  width: 1.2rem;
  height: 0.42rem;
  line-height: 0.42rem;
}

.btn-wrap {
  text-align: right;
}

.task-delete {
  color: #999;
  border: 0.01rem solid rgba(204, 204, 204, 1);
  margin-right: 0.1rem;
}

.task-save {
  background: linear-gradient(
    -90deg,
    rgba(255, 183, 38, 1),
    rgba(255, 129, 38, 1)
  );
}

.task-close {
  position: absolute;
  right: 0.15rem;
  top: 0.1rem;
  font-size: 0.18rem;
}
</style>

