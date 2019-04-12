<template>
  <div class="mytest" v-loading="loading">
    <section>
      <h2>我的测试</h2>
      <el-select class="search" v-model="value" placeholder="请选择" :popper-append-to-body='false'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </section>
    <div>
      <section>
        <ul>
          <li v-for="(n, index) in data" :style="{width:(1/data.length)*200 + '%'}" :key="index">
            <p class="title">自我认知</p>
            <big v-if="index === 2" style="color: #aaa">— —</big>
            <big v-else>
              3.5
              <small>分</small>
            </big>
            <div>
              <span>班级平均</span>
              <span>3.2</span>
            </div>
            <div>
              <span>班级平均</span>
              <span>3.2</span>
            </div>
            <section>
              分数说明
              <i>>></i>
            </section>
          </li>
        </ul>
        <el-table
          :data="tableData"
          style="width: 100%"
          @row-click="cellEnter"
          :default-sort="{prop: 'date', order: 'descending'}"
          row-class-name="tableRow"
        >
          <el-table-column label="课时名称" sortable align="center" width="180">
            <template slot-scope="scope">
              <span style="margin-left: 0.1rem">{{ scope.row.address }}</span>
              <p class="look">查看明细 ></p>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="技能维度" sortable align="center" width="180"></el-table-column>
          <el-table-column prop="date" label="完成时间" align="center"></el-table-column>
          <el-table-column prop="name" label="分数" align="center" sortable></el-table-column>
          <el-table-column prop="name" label="总分" align="center" sortable></el-table-column>
        </el-table>
        <div class="pagination">
          <span class="prev-btn" @click="loadData(-1)">上一页</span>
          <span class="next-btn" @click="loadData(1)">下一页</span>
        </div>
      </section>
      <aside>
        <h3>测试完成率</h3>
        <el-progress
          type="circle"
          :stroke-width="8"
          :width="120"
          color="#26BF73"
          :percentage="pro1"
          status="text"
        >
          <p class="num">{{pro1}}%</p>
          <p class="font">我的完成率</p>
        </el-progress>
        <div class="vs">
          <img :src="vs">
        </div>
        <el-progress
          type="circle"
          :stroke-width="8"
          :width="120"
          color="#FF9C19"
          :percentage="pro2"
          status="text"
        >
          <p class="num">{{pro2}}%</p>
          <p class="font">班级平均</p>
        </el-progress>
        <el-progress
          type="circle"
          :stroke-width="8"
          :width="120"
          color="#FF9C19"
          :percentage="pro3"
          status="text"
        >
          <p class="num">{{pro3}}%</p>
          <p class="font">年级平均</p>
        </el-progress>
      </aside>
    </div>
  </div>
</template>

<script>
import vs from "assets/images/vs.png";
const mockTabledata1 = [
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路"
  },
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江"
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路"
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路"
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路"
  }
]
const mockTableData2 =  [
  {
    date: "2019-05-03",
    name: "余周周1",
    address: "上海市普陀区金沙江路"
  },
  {
    date: "2019-05-02",
    name: "余周周2",
    address: "上海市普陀区金沙江"
  },
  {
    date: "2016-05-04",
    name: "余周周3",
    address: "上海市普陀区金沙江路"
  },
  {
    date: "2019-05-01",
    name: "余周周4",
    address: "上海市普陀区金沙江路"
  },
  {
    date: "2019-05-03",
    name: "余周周5",
    address: "上海市普陀区金沙江路"
  }
]

export default {
  name: "Mytest",
  data() {
    return {
      data: [1, 2, 3, 4],
      loading: true,
      vs,
      currentPage: 1,
      pro1: 0,
      pro2: 0,
      pro3: 0,
      options: [
        {
          value: "选项1",
          label: "课程1"
        },
        {
          value: "选项2",
          label: "课程2"
        },
        {
          value: "选项3",
          label: "课程3"
        },
        {
          value: "选项4",
          label: "课程4"
        },
        {
          value: "选项5",
          label: "课程5"
        }
      ],
      value: "课程1",
      tableData: []
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      this.pro1 = 80;
      this.pro2 = 75;
      this.pro3 = 60;
      this.tableData = mockTabledata1;
    }, 1000);
  },
  methods: {
    loadData(index) {
      if (index === -1) { // 加载上一页
        if (this.currentPage <= 1) {
          return;
        }
        this.tableData = mockTabledata1;
        //load ...
        this.currentPage -= 1;
      } else { // 加载下一页
        this.currentPage += 1;
        this.tableData = mockTableData2
      }

    },
    formatter(row, column) {
      return row.address;
    },
    cellEnter(row) {
      console.log(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.mytest {
  height: calc(100% - 0.14rem);
  margin: 0.14rem 0.14rem 0 0;
  background-color: #fff;
  border-radius: 0.06rem;
  padding: 0 0.2rem;
  .vs {
    img {
      width: auto;
    }
  }
  & > section {
    display: flex;
    height: 0.7rem;
    line-height: 0.7rem;
    border-bottom: 0.01rem solid #e4e8ed;
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
    .search {
      margin-right: 0.1rem;
      width: 1.6rem;
      height: 0.32rem;
    }
  }
  & > div {
    margin-top: 0.2rem;
    padding-bottom: 0.2rem;
    overflow: hidden;
    aside {
      float: right;
      width: 1.89rem;
      border-left: 0.01rem solid #e4e8ed;
      text-align: center;
      h3 {
        margin: 0.14rem 0 0.25rem;
        font-weight: 600;
        font-size: 0.17rem;
      }
      & > div {
        margin-bottom: 0.4rem;
      }
      .num {
        font-size: 0.28rem;
        line-height: 0.28rem;
        font-weight: 600;
        margin-bottom: 0.12rem;
        color: #333;
        font-family: "DIN-Medium";
      }
      .font {
        color: #999;
        font-size: 0.13rem;
        line-height: 0.13rem;
      }
    }
    & > section {
      width: calc(100% - 2.1rem);
      float: left;
      padding: 0 0.1rem;
      margin-bottom: 0.3rem;
      .look {
        color: #f80;
        // visibility:hidden;
        display: none;
      }
      ul {
        width: 100%;
        display: flex;
        margin-bottom: 0.3rem;
        justify-content: space-around;
        li {
          width: 2.24rem;
          border-radius: 0.06rem;
          overflow: hidden;
          background: rgba(245, 245, 245, 1);
          border: 0.01rem solid rgba(238, 238, 238, 1);
          position: relative;
          margin-right: 0.16rem;
          big {
            font-size: 0.26rem;
            font-family: PingFang-SC-Regular;
            color: rgba(51, 51, 51, 1);
            margin: 0.15rem 0;
            display: inline-block;
            text-align: center;
            width: 100%;
            small {
              font-size: 0.14rem;
            }
          }
          p:nth-child(1) {
            font-size: 0.16rem;
            font-weight: bold;
            color: #333;
            margin: 0.75rem 0 0 0;
            text-align: center;
            span {
              font-size: 0.14rem;
            }
          }
          & > .title {
            margin-left: 0.2rem;
            color: #fff;
            margin-bottom: 0.28rem;
          }
          & > div {
            height: 0.14rem;
            line-height: 0.14rem;
            margin-bottom: 0.1rem;
            color: #5a81ff;
            padding: 0 0.2rem;
            display: flex;
            span:nth-child(1) {
              flex: 1;
              display: block;
              text-indent: 0.13rem;
              position: relative;
              &:after {
                content: "";
                position: absolute;
                width: 0.04rem;
                height: 0.04rem;
                left: 0;
                top: 0.05rem;
                background: #d0e6fd;
              }
            }
          }
          & > section {
            height: 0.4rem;
            line-height: 0.4rem;
            margin-top: 0.08rem;
            background: #efefef;
            text-indent: 0.2rem;
            color: #999;
            font-size: 0.13rem;
            i {
              float: right;
              padding-right: 0.1rem;
            }
          }
          &:after {
            content: "";
            display: block;
            position: absolute;
            left: 50%;
            top: 0.2rem;
            margin-left: -0.2rem;
            background-repeat: no-repeat;
            // opacity: .5;
          }
          &:nth-child(1) {
            &:after {
              width: 0.38rem;
              height: 0.42rem;
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAqCAIAAABQnb6CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMUI2MjFEMDU1MTAxMUU5ODdCQkYyQzIzQkUxNUQ0QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMUI2MjFEMTU1MTAxMUU5ODdCQkYyQzIzQkUxNUQ0QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExQjYyMUNFNTUxMDExRTk4N0JCRjJDMjNCRTE1RDRCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExQjYyMUNGNTUxMDExRTk4N0JCRjJDMjNCRTE1RDRCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9g/xnQAABs1JREFUeNqsWGtQVVUU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");
            }
          }
          &:nth-child(2) {
            &:after {
              width: 0.4rem;
              height: 0.4rem;
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAIAAABOVI4xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNTYxQTdDQzU1MTAxMUU5QjUyOUY1NjExMDQ1MjFGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNTYxQTdDRDU1MTAxMUU5QjUyOUY1NjExMDQ1MjFGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1NjFBN0NBNTUxMDExRTlCNTI5RjU2MTEwNDUyMUY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA1NjFBN0NCNTUxMDExRTlCNTI5RjU2MTEwNDUyMUY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9osu/QAABVRJREFUeNrEWGlMXFUUPufx2AYomywjIHsF1IBEoGmlmkhtWqStVmNdEqM/3BqNiSZV/KOJVhs0Gm3dEjUaY91oTYxtYv1BxaWUKjQitKWFaYBCoQgDDMM6x3PmDTMM27w308b7gzzue3O++917lu9ctNls8H8MVe+H5IDBVuxrhME2HLHA+ADM2J0GwsGUSKuugfgCSi7hv4CKHnvom/F4P57+Fjt+BFvf3I8UCI2BYJM8T4/D5LAsSxsRyZRVSdfew6sJAHhyGE9+iO0HYXYKFJXMayBlLSXeCNGZEBTi+YzfWjuxvwl6fsfeY+CY4beUeycVPibrMwqM54/gsd0waYXQaMq/j1bfDWFxvndw4l888x227Xf9cM2LlF6hG5hm8XgNnv6Gt5Q3jYqehJAoY54zNYrN7/EB8RFQ3r1U8hxgkC/g2Uk8ugu7f4HweCrfLf7i72BPxPpqsA9Sajmt3wNq2PLA5MC6Z7HrKERnOCr2QYQ50KCx9So/7wSrhdJuoVvfnO/wXq6PjW8IalSaY+PHlwFVnNwspqLS2Cwbn/9G8fKmU1+xRzgq9kJY7GXLFGGxYjA0mo0zxCLgSSs2vC6bvfYlXmCgYOyenYfRMgcTlUbrXhZuHCYTQ17A2Pw+T1HGRj6MgCBnpzgclIPbGIPMpZ6VpK5n40KPgTzAtj5sPwBKMN30jP+QU2P49ydKbaXs3FgPhz5vr9cusHElGM9+r2VAAeaQ53RDOVVgSvIHcmIQ/300pxqd2ETXv5WWaCIyj/gYWfmZIoZwsDCZwAcwhxHuYVcW4yOkZ7eEuFZcunMO0Jy8V0XfOrtwtPhiOHyjUHbBc5cCEuzwDk0Bls+QwtP7EfLXy1JF1tMAQDWS0Mqkql47WYy/RCWjvwxNvY8xv/aGmPXoau6625DK0WBlW4vspEQqFOXOWPV7Dn1+VQV6KrDQ1osE1hfFkI74Ce9MtVr795pQBeka4biEEVsA/IRPhVuoBPfuR6SixybD3guONLiMn2olvwoA8TGpB9QBEJwSMozBBdR/HTmj9S4aNedENW+bCiAU2Pu3M1GaDLz/ZLc8JowADdeUCqSCdWC1MjK1f7Bacr6cnWCzMT+M/nBuhKghtxrtKkQniCpNCxCxSZopOuS+KceMvY6Wp2xi44TzpBoeh0eRo+F6gz66E7B8SgCsTly/8X/zRAd/6IzaXyV0VQ6hwaUHwBi9ZSbGJODcQqdb5o9Uk3sYiuf5hSb+ZPDBTN3gZhnFyiivaPSOJ0jV11lHG7DrpIKevohkcY2LD866rj6ilw8QWKaNisSplt/cIHXQyizE2Oqv102zt+oLohBA4VVSuIEhWXWrC7nqXoEnS5M8jeQtc9BFEp/qvd7nqGkI7EWX9VV8OTexdLFmyskTI1d9JCd6hdDjL/fpbZgUqixhohmbOV4Tyai4qeEGU52q29dq/Ssf0wFT8VKKpTOLNxaWq4L/FSmTxV9rxTBtVq0sRVpEMiAxe4bptUVu0Wzh5dTekbKG+Hlg49yjRwVMsRbHhN7OftoIwNS3cS3F2JvGUVVv+CiPvAUU99zaakdeMWhls3XU2b+P1mKt1luFV0N4zH92DHIaeo9tm0LWhTpQGJp+KdlF21uM9cqY049wM27eM+0bnDOtvUxY05j8irOfgk8E0JK15aDLB0FT/SSpA05tXsOn5dRTR/INqf07jzY4jNkauImCyJRTVc5mbs0hkMd8hVxNBZV53nhJOzjYoe9+cqwuvyhX2k85DIb999aRJlbubtDezyZenrplYcOQ+2fphxijXVBBGJtCr9Clw3XZnxnwADAGwMhUi8h7cVAAAAAElFTkSuQmCC");
            }
          }
          &:nth-child(3),
          &:nth-child(4) {
            &:after {
              width: 0.4rem;
              height: 0.4rem;
              background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAIAAABOVI4xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTA3MDc0QTU1MEYxMUU5OUM5Njg3Q0NDQTQzN0UxNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTA3MDc0QjU1MEYxMUU5OUM5Njg3Q0NDQTQzN0UxNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFMDcwNzQ4NTUwRjExRTk5Qzk2ODdDQ0NBNDM3RTE2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFMDcwNzQ5NTUwRjExRTk5Qzk2ODdDQ0NBNDM3RTE2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YYXgWQAABdFJREFUeNrcmGlsVFUUx895HabtQHc6pcUCTZWW1EBLStqCRrZYjaIBRdFETYwJMWIUqkZwCWpMjAtLxC/VT0QStxDRiER2kC2Usiir0ELpOoWWTpmh7ZR3PHfefTPzhvumi1viTdPM9N13f/ece87/nFv0+XzwXwztH10dL23DloP/NlhQ9ywHn0f51DHk9W72Qb8fSAdHoviJTaWb0HN12GCC9t+waT94juK1OstC8SmQkkeZU2DsDBpTGkHdintWCCqPno6hg/t78I+NeOYr6G5UT+jtAs8x9BwnVyaYYAtVgDuHBsb6n7FmNdy4ong2YiRoDujrFg4HpGlVNOlJNZXHDbWrUZFOfd24/x1s2BFJotyZkD2N3FPB5YY4p/z79SZh0Og7bak84pyUXQYJ6cBeiU+DhDTiFbKm3gL2tWjbXoCui/JrYgYVPU23zwfnqIFTc9OC8Iv2wU4Vb9Id862u9rdpW54FX5sMqvx57EZwJg824J0pA1PL32Cq9YwDPm37i5KqjaAZKynv/iElGiVm4ADUFTRxQXRw4cH3ofO8pM5ZS9nlQ07xxNEDUR+JVi68vBvrt8iNV7w1HKoewI4z9tTlkVQTTDex5uPwueY/OBzqzipoP6Gmlr1OEx9V5DHW/QTdTcHoSKbSZbEAPR1CwjiLAn7IKhE5ZlKx6Vc5J20ipReImX4P9Hpp8nNRtkaAz34rzS16Sqigcvg9WLNKJLfeL76OytELHzepy7Bpn5zmLtbnfCoURihtrOEA7yW4clJmumprYnScFckdUl2m3lvNv7lg4K6qMDVzSoga7e66zTRyDOtG+Iyx5ZA0l/UlPlXpXm37EpOKHHd65edq6tx1dlTc9zY27rVa3HZUfsypUEdk7Tqptw4XzfyI5DTC3a8Nxlb2FlNZ1bH9RKTzNeyqlxanFype6/Ni/WY54Z4PKLS5zgvYuMekThZUO01NSA3WEoCuOms6+aVAQlKuwtzWI6Ly8xhdRGPvCj9IygE+MxFNJfqcdUzF1sN4/gcF2JXFiiRraH9PhKs5MaTSqrbsa5HmZk62BqVLn/cNeC8C+0lzCOqOl6jgMbXRfAS914IF3g+OBNNiLc6UWl15xLZPeaNcELkwt9UyVViDcTYibr4bMUELJ66xqaiRPM70eY2tCp+olj5MzlVTA9dN012R4DSzqjcr3nIXQ1y8+HTtQkjMrUFQgy2Hg580ylblBcucYTE3AsZhG2BKzZdLXPldeTxG+RQTDrwbxcbmA7jrFUOjaPxcGJml2NnV09KGlDxrHrNNrNU8mg9C0TMKo4ufF/nafVn0fntX4PFqck9hp3FeSskTOZNGpVXqkwiraYkFTLfdjaiJBG89TNwF3LprZ5JeWa39shi8DeKr9yJ6rf1NYobIY/akognv5YIrDRg7w5rHLjfllBtRIDpZ5XBl6Q9soMJFoWQw33ZQ/kP6vK9BKT7s5/ObWIKCcTch1BOGu0yuOcGj4joRr8//XqS83Qj40HNMhKEe4GmiiY+377P6/drGh40LAE17lSY9EV0Wadws5O1wcLFnDn1Isz6xXYtjzeqxWC1WzSp57XBlhlqtqNYHdVH/MdgD7cRTX/4NNzauSOc2ytPlxY2cVNwW3cXcP5s7XS3O5q9Qm/bzlUBSx82mCZWxrqk0dYlILaPkHXgPT20YJvXCj7hzqQiCYEzR9JWDuML0dGpbF8sml/m5M6lsuTpPbO5weGRN2FvcqFR+IYvYwHen3i5tx8vQfjxUhWjSIipYGCvUDeS574STQoKfmq/PXisaFTvHKC5tej8e/QxPrg/3a0KHyyBnOqQXCOXjusR1pq8LupvRUwtcE7mEGGXbcFXefXxVUTckscDGaKvVjqwBpYDHGEm5VLpUtr2xQyHmf30IG3bh6Q3BvowGWIlblIKF4roVUYKGDQ73IVyIGC8aNJatgE9cgp1JHDiUPF6kIp+CWbkHG/z/z/9zxRh/CjAAtwWJtJqnOqIAAAAASUVORK5CYII=");
            }
          }
        }
      }
    }
  }
.pagination {
  width: 100%;
  text-align: center;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  span {
    display: inline-block;
    height: 0.3rem;
    line-height: 0.3rem;
    cursor: pointer;
    border: 0.01rem solid #bbbbbb;
    border-radius: 0.05rem;
    font-size: 0.12rem;
    padding: 0 0.15rem;
    color: #999;
  }
  span + span {
    margin-left: 0.2rem;
  }
}
}
</style>
