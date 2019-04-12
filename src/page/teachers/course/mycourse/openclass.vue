<template>
 <el-dialog
 	class="open-class-dialog"
  :visible.sync="showClass"
  width="4.96rem">
  <div class="header-wraper" slot="title">
    <div class="title">班级列表</div>
    <el-input placeholder="搜索班级" class="search-box" v-model="className" suffix-icon="el-icon-search"></el-input>
  </div>
  <ul class="class-list">
    <li
      v-for="(item, index) in classList"
      :key="index"
      class="class-item">
      <span class="class-item__title">{{item.className}}</span>
      <span
        class="class-item__btn"
        :class="{'is-inclass': item.isInclass}"
        @click="handleClassBegin(item)">
        <img :src="item.isInclass ? inclass : beginClass"/>
      </span>
    </li>
  </ul>
  <div class="page-btn">
    <span class="prev-btn" @click="goPage(-1)">上一页</span>
    <span class="next-btn" @click="goPage(1)">下一页</span>
  </div>
</el-dialog>
</template>
<script>
import beginClass from 'assets/images/icon/begin-class.png'
import inclass from 'assets/images/icon/inclass.png'
 export default {
 	name: 'OpenClass',
 	props: {
 	},
 	data() {
 		return {
 			beginClass,
 			inclass,
 			allData: [],
 			showClass: false,
 			className: '',
 			currentPage: 1,
 			pageSize: 7,
 			total: '',
 			classList: []
 		}
 	},
 	created () {
 		this.getClassList()
 	},
 	methods: {
 		show() {
 			this.showClass = true;
 			this.currentPage = 1
 		},
 		handleClassBegin(classItem) {
 			if (classItem.isInclass) {
 				return
 			}
 			let index = this.classList.findIndex(item => item.id === classItem.id)
 			this.classList[index].isInclass = true;
      this.$router.push({
        path: '/courseware',
        query: {
          type: 'classTask'
        }
      })
 		},
 		goPage(num) {
      if (num === 1) {
      	if (this.currentPage < this.total) {
      		this.currentPage += 1
      	}
      } else {
      	if(this.currentPage > 1) {
           this.currentPage -= 1
      	}
      }
 		},
 		getCurrenPageData() {
 			console.log((this.currentPage - 1) * this.pageSize, this.pageSize)
 			let index = (this.currentPage - 1) * this.pageSize
 			this.classList = this.allData.slice(index, this.pageSize + index)
 		},
 		getClassList() {
 			let arr = [{
 				id: '1111',
 				className: '高三英语七班',
 				isInclass: true
 			},
 			{
 				id: 'w222222',
 				className: '高三数学一班',
 				isInclass: false
 			},
 			{
 				id: '22455',
 				className: '高三物理五班',
 				isInclass: false
 			},
 			{
 				id: '55555',
 				className: '高一美术五班',
 				isInclass: false
 			},
 			{
 				id: '784554',
 				className: '高二物理化学',
 				isInclass: false
 			},
 			{
 				id: '566666',
 				className: '高二物理化学',
 				isInclass: true
 			},
 			{
 				id: '9787867',
 				className: '高二物理化学',
 				isInclass: false
 			},
 			{
 				id: '66686878',
 				className: '高二语文化学',
 				isInclass: false
 			},]
 			this.allData = arr;
 			this.total = Math.ceil(this.allData.length/this.pageSize);
 			this.getCurrenPageData()
 		}
 	},
 	watch: {
 		currentPage(val){
 			this.getCurrenPageData()
 		}
 	}
 }
</script>
<style lang="scss" >
.open-class-dialog {
	.el-dialog {
		border-radius: 0.06rem;
	}

	.el-dialog__header {
		padding: 0.11rem 0.22rem 0;
		.header-wraper {
			height: 0.5rem;
			box-sizing: border-box;
			padding-bottom: 0.11rem;
			border-bottom: 0.01rem solid rgba(228,232,237,1);
			.title {
        height:0.16rem;
        font-size:0.16rem;
        font-weight:bold;
        margin-left: 0.36rem;
        color:rgba(51,51,51,1);
        display: inline-block;
        vertical-align: middle;
	    }
      .search-box {
      	display: inline-block;
      	margin-left: 0.28rem;
      	width: 2.85rem;
      	.el-input__inner {
      		width:2.85rem;
          height:0.38rem;
          background:rgba(238,238,238,1);
          border-radius: 0.19rem;
          border: none;
          padding-left: 0.31rem;
          padding-right: 0.45rem;
      	}
      	.el-input__suffix {
      		right: 0.22rem;
      	  .el-icon-search {
      	  	font-size: 0.16rem;
      	  }
      	}
      }
		}
	}

  .el-dialog__body {
  	padding: 0.16rem 0.58rem;
  	.class-list {
  		height:3.52rem;
  		box-sizing: border-box;
  		border:0.01rem solid rgba(245,246,247,1);
  		.class-item {
  			height: 0.5rem;
  			line-height: 0.5rem;
  			padding: 0 0.47rem 0 0.49rem;
  			.class-item__title {
  				font-size: 0.16rem;
  				font-weight: bold;
  				color:#333;
  				float: left;
  			}
  			.class-item__btn {
  				float: right;
  				width: 1.12rem;
  				height: 0.32rem;
  				line-height: 0.32rem;
  				color: #fff;
  				font-size: 0.16rem;
  				text-align:center;
  				background-color: #F79727;
  				border-radius: 0.04rem;
  				margin-top: 0.09rem;
  				cursor: pointer;
  				font-size: 0;
  			}
  			.class-item__btn.is-inclass {
  				background-color: #DBDBDB;
  				color: #fff;
  			}
  		}
  		.class-item:nth-child(even) {
  			background: #fff;
  		}
  		.class-item:nth-child(odd) {
  			background: #F5F6F7;
  		}
  	}
  	.page-btn {
      padding: 0.2rem 0 0.1rem;
      text-align: center;
      font-size: 0;
      .prev-btn,
      .next-btn {
      	display: inline-block;
        width:1.7rem;
        height: 0.44rem;
        line-height: 0.42rem;
        box-sizing: border-box;
        border: 0.01rem solid #FFB726;
        border-radius:0.04rem;
        font-size:0.16rem;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
      }
      .prev-btn {
      	background: #fff;
      	color: #FF8126;
      }

      .next-btn {
      	color: #fff;
      	margin-left: 0.2rem;
      	background:linear-gradient(-90deg,rgba(255,183,38,1),rgba(255,129,38,1));
      }
  	}
  }
}
</style>
