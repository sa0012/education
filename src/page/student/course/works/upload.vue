<template>
	<div class="upload" v-loading="loading">
    <el-dialog :visible.sync="state" width="6.62rem" :before-close="handleClose">
			<div slot="title" class="uploadHead">
        <h3>上传作品</h3>
			</div>
      <div class="form-wraper">
        <el-form ref="form" :model="form" label-width="1.2rem">
            <el-form-item label="作品完成日期：">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="作品名称：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="作品介绍：">
                <el-input type="textarea" v-model="form.desc" :rows="4" placeholder="用140字以内的描述来介绍你的作品"></el-input>
            </el-form-item>
            <el-form-item label="所属课程：">
              <el-select v-model="form.cat1" placeholder="请选择课程">
                  <el-option label="课程一" value="1"></el-option>
                  <el-option label="课程二" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="作品归属：">
                <el-select v-model="form.cat2" placeholder="请选择小组/个人作品">
                    <el-option label="小组" value="1"></el-option>
                    <el-option label="个人" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="粘贴URL链接：">
                <el-input v-model="form.url" placeholder="输入URL链接"></el-input>
            </el-form-item>
            <el-form-item label="文件上传：">
                <div class="uploadFile">
                    <span class="but"><img :src="icon_course_name"/><span class="text">点击上传</span></span>
                    <div class="picList">
                        <div class="upok">已上传文件</div>
                        <ul>
                            <li v-for="(item, index) in 5">
                                <img src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" />
                            </li>
                        </ul>
                    </div>
                    <div class="changeUpdate">点击上传</div>
                    <div class="text">支持PDF,word，图片格式，PPT，视频上传（500M以内）</div>
                    <!-- <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="form.fileList"
                        list-type="picture">
                        <span class="but"><img :src="icon_course_name" /><span class="text">点击上传</span></span>
                        <div slot="tip" class="upok">已上传文件</div>
                    </el-upload>
                    <div class="text">支持PDF,word，图片格式，PPT，视频上传（500M以内）</div> -->
                </div>
            </el-form-item>

            <el-form-item>
                <div class="uploadSubmit" @click="handleClose"><span>完成</span></div>
            </el-form-item>
        </el-form>
      </div>
    </el-dialog>
	</div>
</template>

<script>
import icon_course_name from 'assets/images/icon/icon_course_name.png'
export default {
    name: "upload",
    props:['state'],
	components: {
		
	},
	data() {
		return {
            icon_course_name,
            loading: true,
            form: {
                name: '',
                desc: '',
                date: null,
                cat1: "1",
                cat2: "1",
                url: '',
                // fileList: [{url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
		};
	},
	created() {
		let _this = this;
		setTimeout(() => {
			_this.loading = false;
		}, 1000);
	},
	methods: {
        handleClose() {
            this.$emit('close');
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>

<style lang="scss" scoped>
.upload {
  .uploadHead {
    
    h3 {
        margin-left: 0.2rem;
        font-size: 0.18rem;
    }
  }

  .el-form {
    .el-form-item {
      margin-bottom: 0.14rem;
      textarea {
        height: 1.22rem;
      }
      .el-select {
        width: 100%;
      }
    }
  }

  .uploadFile {
    border:0.01rem solid rgba(220,224,230,1);
    border-radius:0.02rem;
    padding: 0.1rem;
    .but {
      font-size: 0.12rem;
      color: #333;
      height: 0.4rem;
      line-height: 0.38rem;
      box-sizing: border-box;
      background:rgba(245,246,248,1);
      border:0.01rem dashed rgba(228,228,228,1);
      border-radius:0.03rem;
      display: block;
      padding: 0 0.1rem;
      text-align: center;
      img {width: 0.14rem; margin-right: 0.1rem;}
    }
    .but .text {
      display: inline-block;
      vertical-align: middle;
      color: #333;
      font-size: 0.12rem;
      margin: 0;
    }

    .picList {
      padding: 0.15rem 0.05rem;
      font-size: 0;
      background:rgba(245,246,248,1);
      border: 0.01rem dashed rgba(228,228,228,1);
      margin-top: 0.1rem;
      .upok {
        font-size: 0.12rem;
        line-height: 0.12rem;
        margin-bottom: 0.1rem;
        color: #333;
        box-sizing: border-box;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      li {
        width: 0.56rem;
        height: 0.56rem;
        border: #F79727 0.01rem solid;
        display: inline-block;
        img {
            width: 0.56rem;
            height: 0.56rem;
        }
      }
    }
    .picdes {
        li {
            width: 50%;
            height: auto;
            border:none;
            margin: 0.05rem 0;
        }
    }
    .changeUpdate {
        width: 1.1rem;
        color: #F79727;
        font-size: 0.14rem;
        height: 0.38rem;
        line-height: 0.38rem;
        margin: 0.1rem auto;
        background:rgba(247,151,39,.1);
        border-radius: 0.03rem;
        text-align: center;
    }

    .upok {
      text-align: center;
    }

    .text {
      text-align: center;
      color: #999;
      font-size: 0.12rem;
      line-height: 0.12rem;
      margin-bottom: 0.07rem;
    }
  }

  .uploadSubmit {
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    span {
      font-size: 0.15rem;
      font-weight: bold;
      display: inline-block;
      height: 100%;
      width: 2rem;
      cursor: pointer;
      background:rgba(247,151,39,1);
      border-radius:0.2rem;
      color: #fff;
    }
  }
}
</style>

<style lang="scss">
.upload {
  .el-dialog__header {
    padding: 0.2rem;
    height: 0.6rem;
    border-bottom: #E4E8ED 0.01rem solid;
  }
  .el-dialog {
    border-radius: 0.06rem;
  }
  .el-dialog__body {
    padding: 0.22rem 1.62rem 0.2rem 0.41rem;
    .el-form {
      .el-form-item__label {
        color:#666;
        font-size: 0.15rem;
      }
      .el-form-item:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
