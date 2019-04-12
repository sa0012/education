<template>
  <div class="student-works container-tends">
    <div class="tendsHead">
      <section>
        <h2>课堂作品</h2>
        <div class="teandsearch">
          <a class="upload" @click="changeUpload"><img :src="icon_task_close" />上传作品</a>
        </div>
      </section>
      <div class="head">
        <h3>当前课时：<span>课时1名称</span></h3>
        <div class="search-panel">
          <el-select
            class="search"
            v-model="classHoure"
            placeholder="课时"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in classHoureOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
            class="search"
            v-model="course"
            placeholder="课程筛选"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in courseOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
            class="search"
            v-model="works"
            placeholder="作品分类"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in worksOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
            class="search"
            v-model="classes"
            placeholder="班级筛选"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in classesOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="waterfall-wraper">
      <waterfall :col='col' :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  v-loading="loading">
        <template >
          <div class="cell-item" v-for="(item,index) in data" :key="index">
            <div>
              <div class="taskimg">
                <img :src="item.img" />
                <div class="but">
                  <el-tooltip effect="dark" @click="deleteHandler(item)" content="删除" placement="top">
                    <i><img :src="icon_40" /></i>
                  </el-tooltip>
                  <el-tooltip effect="dark" content="下载" placement="top">
                    <i @click="changedetails(item)"><img :src="icon_39" /></i>
                  </el-tooltip>
                  <el-tooltip effect="dark" content="添加" placement="top">
                    <i><img class="add" :src="icon_42" /></i>
                  </el-tooltip>
                </div>
              </div>
              <div class="item-body">
                <div class="item-desc">{{item.worksTitle}}</div>
                <div class="task-name">{{item.jobTitle ? '任务名称： ' + item.jobTitle : ''}}</div>
                <div class="name">课时1：课时名称</div>
                <div class="dianzan">
                  <div class="dianzan-head">
                    <span><img src="../../../../assets/images/head.png" alt=""></span>
                    <span class="tname">{{item.tname}}</span>
                  </div>
                  <div class="good" :class="{'is-zan':item.isLike}">
                    <span @click="handleLike(item)">
                      <img class="like-img" v-show="item.isLike" :src="zan">
                      <img class="like-img" v-show="!item.isLike" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTJGRjhGMjU1MzcxMUU5QUU2OUVDQjlGOTkzNEQ3QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QTJGRjhGMzU1MzcxMUU5QUU2OUVDQjlGOTkzNEQ3QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMkZGOEYwNTUzNzExRTlBRTY5RUNCOUY5OTM0RDdBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBMkZGOEYxNTUzNzExRTlBRTY5RUNCOUY5OTM0RDdBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tjw++AAAANlJREFUeNqUkUsPRTAQhZV6LDxC0p3/4P+v7e1FbCywk8hFxKMOTUTEvbfOojnT9utMZwjnXHlSlmV1XUdR5LrudV9VvqhpmnEc0zS97T8Dy7J0XQfTtq0UUJYlGBh+6A/Q932e58IbhkEI+QUMw5AkyTzPIvQ873aBoBvTNME5jhOGYRzH+Ot5bNv2lUHHaFEU67oisCwLwPU29Dl0hlVVqbquK9LCoyqlVB5A2e8A/OddSb7vv8hgmuZeknyGIAj2wclnYIztADolYk3TsGIUwtyEkQlgE2AAwPpTUmAwyA0AAAAASUVORK5CYII=" alt="">
                    </span>
                    <span>{{item.liked}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </waterfall>
      <div class="loader-btn-wraper">
        <button class="load-btn" @click="loadmore">查看更多</button>
      </div>
    </div>
    

    <!--  -->
    <work-details :info="itemInfo" :state="detailsShow" v-on:close="changedetails" />
    <upload :state="uploadShow" v-on:close="changeUpload" />

  </div>
</template>

<script>
import WorkDetails from './details.vue'
import Upload from './upload.vue'
import pic1 from 'assets/images/pic1.png'
import pic2 from 'assets/images/pic2.png'
import pic3 from 'assets/images/pic3.png'
import pic4 from 'assets/images/pic4.png'
import pic5 from 'assets/images/pic5.png'
import pic6 from 'assets/images/pic6.png'
import pic8 from 'assets/images/pic8.png'
import icon_39 from 'assets/images/icon/icon_39.png'
import icon_40 from 'assets/images/icon/icon_40.png'
import icon_42 from 'assets/images/icon/icon_42.png'
import icon_task_close from 'assets/images/icon/icon_task_close.png'
import zan from 'assets/images/student/zan.png'


export default{
	components: {
    WorkDetails,
    Upload
	},
  data () {
    return {
      itemInfo: {},
      icon_39,
      icon_40,
      icon_42,
      zan,
      icon_task_close,
      detailsShow: false,
      uploadShow: false,
      data: [],
      loading: true,
      col: 3,
      classHoure: '',
      course: '',
      works: '',
      classes: '',
      classHoureOptions: [],
      courseOptions: [],
      worksOptions: [],
      classesOptions: []
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
      this.loadmore()
    }, 1000)
    this.getSearchOptions()
  },
  computed: {
    itemWidth () {
      return (138 * 0.5 * (document.documentElement.clientWidth / 375))
    },
    gutterWidth () {
      return (9 * 0.5 * (document.documentElement.clientWidth / 375))
    }
  },
  methods: {
    handleLike(listItem) {
      console.log(listItem);
      let index = this.data.findIndex(item => listItem.id === item.id)
      if (listItem.isLike) {
        this.data[index]['liked'] -= 1
      } else {
        this.data[index]['liked'] += 1
      }
      this.data[index]['isLike'] = !this.data[index]['isLike']
    },
    handleConditionChange() {
      let data = {
        classHoure: this.classHoure,
        course: this.course,
        works: this.works,
        classes: this.classes
      }
      // 发送请求筛选Lists

    },
    getSearchOptions() {
      // 发送请求获取搜索框选项
      setTimeout(()=>{
        this.classHoureOptions = [{
          value: '1',
          label: '课时1'
        }, {
          value: '2',
          label: '课时2'
        }]
        this.courseOptions = [{
          value: '1',
          label: '课程1'
        }, {
          value: '2',
          label: '课程2'
        }]
        this.worksOptions = [{
           value: '1',
          label: '作品1'
        }, {
          value: '2',
          label: '作品2'
        }]
        this.classesOptions=[{
          value: '1',
          label: '班级1'
        }, {
          value: '2',
          label: '班级1'
        }]
      }, 100)
    },
    mix () {
      this.$waterfall.mix()
    },
    switchCol (col) {
      this.col = col
    },
    loadmore (index) {
      const generateId = function() {
        return Math.floor(Math.random() * 10000);
      };
      let arr = [
        {
          img: pic1,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试',
          liked: 52,
          isLike: true,
          tname: '余周周',
          id: generateId()
        },
        {
          img: pic2,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: 12,
          isLike: false,
          tname: '白月初',
          id: generateId()
        },
        {
          img: pic3,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: 12,
          tname: '涂涂',
          isLike: false,
          id: generateId()
        },
        {
          img: pic4,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '33',
          liked: 15,
          isLike: false,
          tname: '张三',
          id: generateId()
        },
        {
          img: pic5,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: 12,
          isLike: false,
          tname: '张依依',
          id: generateId()
        },
        {
          img: pic6,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: 12,
          isLike: false,
          tname: '王小二',
          id: generateId()
        },
        {
          img: pic8,
          worksitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: 12,
          isLike: false,
          id: generateId()
        }
      ]
      this.data = this.data.concat(arr)
    },
    changedetails(data){
      this.itemInfo = data;
      this.detailsShow = !this.detailsShow;
    },
    changeUpload(){
      this.uploadShow = !this.uploadShow;
    }
  },
}
</script>

<style lang="scss" scoped>
.student-works.container-tends {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .tendsHead {
    background-color: #fff;
    border-radius: 0.06rem;
    margin-bottom: 0.2rem;
    padding-left: 0.2rem;
    padding-right: 0.1rem;
    margin-top: 0.2rem;
    padding: 0.12rem 0.2rem 0.14rem;
    margin-right: 0.14rem;
    border:0.01rem solid rgba(228,232,237,1);
  }
  section {
    display: flex;
    height: 0.51rem;
    line-height: 0.5rem;
    border-bottom: 0.01rem solid #E4E8ED;
    h2{
      flex: 1;
      display: block;
      height: 0.4rem;
      line-height: 0.4rem;
      text-indent: 0.4rem;
      position: relative;
      font-size: 0.18rem;
      font-weight: bold;
      color: #333;
      &:after{
        content: '';
        position: absolute;
        width: 0.18rem;
        height: 0.2rem;
        top: 0.11rem;
        left: 0.1rem;
        background-image: url('../../../../assets/images/icon/icon_mycourse.png');
      }
    }
    .teandsearch {
      width: 1.37rem;
      cursor: pointer;
      height: 0.4rem;
      line-height: 0.4rem;
      border-radius: 0.2rem;
      box-sizing: border-box;
      background-color: #F79727;
      padding: 0 0.2rem;
      margin-right: 0.2rem;
      .el-input {
        float: left;
        width:2.42rem;
        input.el-input__inner {
          width:2.42rem;
          height:0.4rem;
          background:rgba(238,242,245,1);
          border-radius:0.1rem;
        }
      }
      a {
        float: left;
        height: 0.4rem;
        font-size: 0.15rem;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }
      .upload {
        img {
          width: 0.22rem;
          height: 0.22rem;
          transform: rotate(-90deg);
          margin-right: 0.1rem;
        }
      }
    }
  }
  .head{
    height: 0.32rem;
    line-height: 0.32rem;
    display: flex;
    align-items: center;
    font-size: 0;
    margin-top: 0.13rem;
    h3{
      color: #888;
      flex: 1;
      height: 0.32rem;
      line-height: 0.32rem;
      font-size: 0.14rem;
      text-indent: 0.1rem;
      span{
        color:#333;
        font-weight: bold;
      }
    }
    .search {
      width: 1.5rem;
      height: 0.32rem;
    }
    img {border-radius: 100%}
    .tname {margin-left: 0.08rem}
  }
  &>button {
    display: block;
    width: 1.2rem;
    height: 0.34rem;
    line-height: 0.34rem;
    text-align: center;
    margin: 0 auto;
    background-color: #fff;
    border: 0.01rem solid #ccc;
    border-radius: 0.17rem;
    margin: 0.2rem auto 0;
    color: #999;
    font-size: 0.13rem;
    font-family: '微软雅黑';
    cursor: pointer;
  }
  .cell-item {
    padding-right: 0.1rem;
    margin-bottom: 0.14rem;
    .item-body{
      padding: 0.16rem;
      background: #fff;
      border-radius: 0.04rem;
      .item-desc{
        font-size: 0.13rem;
        line-height: 0.14rem;
        margin-bottom: 0.1rem;
      }
      .task-name{
        font-size: 0.13rem;
        color:#999;
        margin-bottom: 0.1rem;
      }
      .name {
        background-color: rgba(153,153,153,.1);
        display: inline-block;
        height: 0.24rem;
        line-height: 0.24rem;
        padding: 0 0.1rem;
        font-weight:bold;
        color: rgba(153,153,153,1);
        margin-bottom: 0.1rem;
      }
      .dianzan{
        display: flex;
        position: relative;
        .dianzan-head {
          float: 1;
          display: flex;
          span:nth-child(1){
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            overflow: hidden;
          }
          .tname {
            display: inline-block;
            line-height: 0.3rem;
            margin-left: 0.08rem;
            font-size: 0.12rem;
          }
        }
        .good {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 0.16rem;
          line-height: 0.16rem;
          font-size: 0;
          span {
            position: relative;
            margin-left: 0.1rem;
            display: inline-block;
            color: #999;
            font-size: 0.12rem;
            vertical-align: middle;
          }
          .like-img {
            height: 0.16rem;
            width: 0.16rem;
            vertical-align: top;
          }
        }
      }
    }
  }
}

.search-panel {
  margin-right: 0.2rem;
  .el-select + .el-select {
    margin-left: 0.1rem;
  }
}
.waterfall-wraper {
  flex: 1;
  overflow: auto;
  padding-right: 0.24rem;
  margin-right: 0.14rem;
  background-color: transparent;
}
.waterfall-wraper::-webkit-scrollbar {
  width: 0.06rem;
  height: 0.06rem;
}
.waterfall-wraper::-webkit-scrollbar-thumb {
  border-radius: 0.03rem;
  background: #fff;
  color: #fff;
}
.vue-waterfall-column {
  img{
    width: 100%;
  }
  &:nth-child(5n){
    .cell-item {
      padding-right: 0;
    }
  }
}
.cell-item>div{
  overflow: hidden;
  border-radius:0.04rem;
  border:0.01rem solid rgba(228,232,237,1)
}

.taskimg {
  position: relative;
  .but {
    position: absolute;
    bottom: 0.1rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
    display: none;
    img {width: 0.2rem}
    .add {
      width: 0.26rem;
    }
    i {
      background: #fff;
      width: 0.58rem;
      height: 0.58rem;
      line-height: 0.58rem;
      text-align: center;
      border-radius: 100%;
      display: inline-block;
      margin: 0 0.1rem;
    }
  }
  &:hover {
    .but {
      display: block;
    }
  }
}

 .loader-btn-wraper {
    margin: 0.2rem 0;
    text-align: center;
    height: 0.34rem;
    .load-btn {
      display: inline-block;
      width: 1.2rem;
      height: 0.34rem;
      line-height: 0.32rem;
      text-align: center;
      background-color: transparent;
      border: 0.01rem solid #ccc;
      border-radius: 0.17rem;

      color: #999;
      font-size: 0.13rem;
      font-family: 'MicrosoftYaHei';
      cursor: pointer;
    }
  }
</style>
