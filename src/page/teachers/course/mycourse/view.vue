<template>
	<div class="mycourseview" v-loading="loading">
		<breadcrumb :address='address' />

		<div class="view">
			<div class="des">
				<el-row>
					<el-col :span="24">
						<el-row :gutter="30">
							<el-col :span="6">
								<div class="workimg">
									<img width="188" height="198" :src="workimg" />
								</div>
							</el-col>
							<el-col :span="18">
								<div class="workdes">
									<h3>外教1对11英语课程 口语轻松说</h3>
									<span class="previewstudents">预览学生效果</span>
									<p>
										{{fitlerdes()}}
										<var v-if="!desState" @click="()=>{this.desState = true}">查看详情</var>
									</p>
									<div>
										<span>开始时间： 2019.01.01</span>
										<span>结束时间： 2019.06.30</span>
									</div>
								</div>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</div>
			<div class="workList">
				<!-- <el-row :gutter="10">
					<el-col :span="12">
						<div class="li nowork">
							<h4>第1课时：课时名称课时名称课时名称课时名称</h4>
							<div class="icon_no">
								<div>
									<i></i>
									<span>已禁用控件</span>
								</div>
							</div>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="li">
							<h4>相关任务</h4>
							<div class="tasks">
								<ul>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li1">完成当前课时测试内容</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li2">完成当前课时问卷调查</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li>
								</ul>
							</div>
						</div>
					</el-col>					
				</el-row> -->
				<el-row :gutter="10" v-for="(item, index) in computedData" :key="item.id">
					<el-col :span="12">
						<div class="li">
							<h4>第{{index + 1}}课时：课时名称课时名称课时名称课时名称<i></i></h4>
							<div class="workdes">
								<router-link tag='span' to="/courseware?type=teacherTask">课件名称课件名称课件名称课件名称01</router-link>
								<var @click="handleOpenCourseware">开放课件 ></var>
								<router-link to="/courseware?type=teacherTask" tag="var" style="margin-left: 0.2rem;" >编辑课件 ></router-link>
							</div>
							<div class="myteam">
								<span class="i" @click="handleGrouping">小组分配</span>
								<span class="classstart" @click="handleBeginClass">开始上课</span>
								<span class="classdata" @click="handlePrepareLesson">备课资料</span>
							</div>
						</div>
					</el-col>
					<el-col :span="12">
						<div class="li">
							<h4>相关任务</h4>
							<div class="tasks">
								<ul>
									<li v-for='(i, index) in item.taskListStr' :key='index'>
										<el-row>
											<el-col :span="11">
												<h5 :class="i.className">{{i.name}}</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：{{i.time}}</small>
											</el-col>
											<el-col :span="6">
												<span v-text="i.status ? '已完成':'去完成 >'"></span>
											</el-col>
										</el-row>
									</li>
									<!-- <li>
										<el-row>
											<el-col :span="11">
												<h5 class="li1">完成当前课时测试内容</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li2">完成当前课时问卷调查</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span>去完成 ></span>
											</el-col>
										</el-row>
									</li>
									<li>
										<el-row>
											<el-col :span="11">
												<h5 class="li3">完成作品上传</h5>
											</el-col>
											<el-col :span="7">
												<small>截止时间：2019.03.11</small>
											</el-col>
											<el-col :span="6">
												<span class="active">去完成</span>
											</el-col>
										</el-row>
									</li> -->
								</ul>
								<div class="tasksall" @click='searchMore(item)' v-show="item.showMore">查看全部<i>》</i></div>
								<div class="tasksall taskNoMore" v-show="!item.showMore"></div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>

    <!-- 课程资料弹窗 -->
    <prepare-lesson :showLesson.sync="showLesson"></prepare-lesson>
    <!-- 班级列表弹窗 -->
    <open-class ref="ClassBeginDialog"></Open-class>
    <!-- 开放课件弹框 -->
    <open-courseware ref="OpenCoursewarDialog"></open-courseware>
		<!-- 编辑课程组件 -->
    <popup-modal v-model="isShowGroup" :close-on-click-overlay="closeOverLay">
      <group-class @closeModal="handleCloseModal"></group-class>
    </popup-modal>
	</div>
</template>

<script>
import breadcrumb from '@/components/common/breadcrumb.vue'
import PopupModal from '@/components/popup'
import PrepareLesson from '../prepareLesson';
import OpenClass from './openclass';
import OpenCourseware from './openCourseware';
import GroupClass from '../groupClass';
import breadcrumb_address from 'assets/images/student/breadcrumb_address.png'
import workimg from 'assets/images/student/workimg.png'

export default {
	name: "MyCourseView",
	components: {
    breadcrumb,
    PrepareLesson,
		OpenClass,
		OpenCourseware,
    PopupModal,
    GroupClass
	},
	data() {
		return {
			loading: true,
			workimg,
			data: [{
				id:1,
				taskList:[
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0,
						className:'li1'
					},
					{
						name:'完成当前课时问卷调查',
						time:'2019.03.11',
						status:0,
						className:'li2'
					},
					{
						name:'完成作品上传',
						time:'2019.03.11',
						status:1,
						className:'li3'
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0,
						className:'li1'
					},
					{
						name:'完成当前课时问卷调查',
						time:'2019.03.11',
						status:0,
						className:'li2'
					}
				],
				taskListStr:[]
			},
			{
				id:2,
				taskList:[
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0,
						className:'li1'
					},
					{
						name:'完成当前课时问卷调查',
						time:'2019.03.11',
						status:0,
						className:'li2'
					},
					{
						name:'完成作品上传',
						time:'2019.03.11',
						status:1,
						className:'li3'
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0,
						className:'li1'
					},
					{
						name:'完成当前课时问卷调查',
						time:'2019.03.11',
						status:0,
						className:'li2'
					}
				],
				taskListStr:[]
			},
			{
				id:3,
				taskList:[
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:1
					}
				],
				taskListStr:[]
			},
			{
				id:4,
				taskList:[
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:1
					}
				],
				taskListStr:[]
			},
			{
				id:5,
				taskList:[
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:1
					}
				],
				taskListStr:[]
			},
			{
				id:6,
				taskList:[
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:1
					}
				],
				taskListStr:[]
			},
			{
				id:7,
				taskList:[
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:0
					},
					{
						name:'完成当前课时测试内容',
						time:'2019.03.11',
						status:1
					}
				],
				taskListStr:[]
			}],
			computedData:[],
			// data: [1,2,3,4,5,6,7],
      desState: false,
      showLesson: false,
			showClass: false,
      isShowGroup: false,
      closeOverLay: false,
			visible: false,
			address:{
				onePath:'/teachers/course/mycourse',
				text:'1对1英语课程'
			}
		};
	},
	created() {
		let _this = this;
		setTimeout(() => {
			_this.loading = false;
		}, 1000);
		this.computedtaskList()
	},
	methods: {
    handleCloseModal (bool) {
      this.isShowGroup = bool;
    },
    handlePrepareLesson() {
      this.showLesson = true;
		},
		handleBeginClass() {
			this.$refs.ClassBeginDialog.show()
		},
		handleOpenCourseware() {
      this.$refs.OpenCoursewarDialog.show()
		},
    handleGrouping() {
      this.isShowGroup = !this.isShowGroup;
    },
		fitlerdes(){
			let text = '外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC , 随时随地对话全球外教 , 生活,职场，外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC，外教英语培训班 , 外教英语培训班 , 每天45分';
			return this.desState ? text : text.slice(0, 133) + '...'
		},
		computedtaskList(){
			let data = this.data
			for(let i=0;i<data.length;i++){
				if(data[i].taskList.length>3){
					data[i].showMore = 1
					data[i].taskListStr = data[i].taskList.slice(0,3)
				}else{
					data[i].taskListStr = data[i].taskList
					data[i].showMore = 0
				}
			}
			this.computedData = data
		},
		searchMore(item){
			let list = this.computedData
			for(let i=0; i<list.length;i++){
				if(list[i].id === item.id){
					list[i].taskListStr = list[i].taskList
					list[i].showMore = 0
				}
			}
			this.computedData = list
		},
	}
};
</script>

<style lang="scss" scoped>
.mycourseview {
	height: calc(100% - 0.1rem);
	.view {
		margin-top: 0.15rem;
		height: calc(100% - 0.29rem);
		overflow: auto;
		.des, .li {
			margin: 0;
			background: #fff;
			border:0.01rem solid rgba(228,232,237,1);
			border-radius: 0.05rem;
			padding: 0.2rem 0.1rem;
			margin-bottom: 0.1rem;
		}
		.workimg {
			width: 1.88rem;
			height: 1.98rem;
			margin: 0 auto;
		}
		.workdes {
			margin-right: 0.2rem;
			h3 {
				font-size:0.2rem;
				color:rgba(51,51,51,1);
				margin-top: 0.15rem;
			}
			p {
				font-size:0.14rem;
				color:rgba(136,136,136,1);
				line-height:0.24rem;
				margin-top: 0.25rem;
				var {
					color: #F79727;
					cursor: pointer;
					margin-top: 0.1rem;
				}
			}
			div {
				background:rgba(245,246,247,1);
				border-radius:0.02rem;
				padding: 0.05rem 0.1rem;
				margin-top: 0.15rem;
				span {
					display: block;
					color:rgba(51,51,51,.8);
					margin: 0.1rem 0 0.1rem 0.13rem;
					font-size: 0.14rem;
					line-height: 0.2rem;
					text-indent: 0.09rem;
					position: relative;
					&:after {
						content: '';
						display: block;
						width: 0.04rem;
						height: 0.04rem;
						background-color: #F79727;
						position: absolute;
						left: 0;
						top: 0.07rem;
					}
				}
			}
			var {
				cursor: pointer;
			}
			.previewstudents {
				text-indent: 0.15rem;
				display: inline-block;
				position: absolute;
				right: 0.4rem;
				top: 0.15rem;
				color: #F79727;
				font-size: 0.16rem;
				&:after {
					display:block;
					content:'';
					border-width: 0.06rem;
					border-style:solid;
					border-color:transparent transparent transparent #F79727;
					position:absolute;
					left:40%;
					top:100%;
					position: absolute;
					left: 0;
					top: 0.02rem;
				}
			}
		}

		.workList {
			height: 3.6rem;
			.li {
				padding: 0.15rem;
			}
			h4 {
				font-size:0.16rem;
				color:rgba(51,51,51,1);
				text-indent: 0.15rem;
				position: relative;
				margin-bottom: 0.2rem;
				font-weight: bold;
				&:after {
					content: '';
					display: block;
					width: 0.05rem;
					height: 0.05rem;
					background-color: #F79727;
					border-radius: 100%;
					position: absolute;
					left: 0;
					top: 0.06rem;
				}
				i {
					width: 0.14rem;
					height: 0.16rem;
					display: inline-block;
					margin-left: 0.1rem;
					background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAIAAACp9tltAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQUJBQUVERjU1MjUxMUU5QTYxNUQwNDcyRkI4RjdGMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQUJBQUVFMDU1MjUxMUU5QTYxNUQwNDcyRkI4RjdGMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNBQkFBRURENTUyNTExRTlBNjE1RDA0NzJGQjhGN0YyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNBQkFBRURFNTUyNTExRTlBNjE1RDA0NzJGQjhGN0YyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+o17PgQAAAR1JREFUeNqEkU9PwkAQxbtrFYzY0lrBFEUDMcSEk98/wU/gxYMhxoSUWkot/ZfWFml3GV1ssN2Ed5mZN7/DmwyiWSD8ael6puVEcQK91Dq71jtdTS23qESn78bcWl4osqbKMLpeuPLDG707GvYZILLiuD5wD/d3vatL5gD0YX++vs0U+byjKeBgtjAXjtqWSo4JRjBN22HjDk2+0rbUEmoCM07Sf2hBCMa4joJJCNmd5dmGYcHp4WnzpNloVNBsvU6zbzgUoqOnyWST58IhHYsirnOQr54bMLFiqYr0OB5B8/wy9YJof1VF801BKf1p8qKyqqLw1ZUfseYA+ivKvYyDzuYLPooQYuFKBVHM/QUe3vaOeH/aFwCDvr4VYAB1gXV5pjsWyAAAAABJRU5ErkJggg==) top left no-repeat;
				}
			}
			.workdes {
				background:rgba(255,248,240,1);
				padding: 0.2rem;
				border-radius:0.03rem;
				width: 100%;
				span {
					font-size:0.14rem;
					color:rgba(51,51,51,1);
					cursor: pointer;
					display: block;
					text-indent: 0.25rem;
					background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQTU0QUU3RDUwNzMxMUU5OUZDQUM0RTFBODkyNENCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQTU0QUU3RTUwNzMxMUU5OUZDQUM0RTFBODkyNENCMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNTRBRTdCNTA3MzExRTk5RkNBQzRFMUE4OTI0Q0IzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBNTRBRTdDNTA3MzExRTk5RkNBQzRFMUE4OTI0Q0IzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F0AhiQAAAK1JREFUeNpi/H2s88/lxQz/fjOAASO3GJvrBEZBZQZc4Pss3b+3t/7/8QGC/j7Y/2OF17/XV+AiaIiF4e8vJllruH4mCUNW09xf29L/f3uDZjSjgBKbYysLpp1M0pbs4Vsxxf89OfbrYB0TA9GAScbq/7vbIBt+zDcnXhtIA0fiSSJVA40mwUlQhw0LDcxs/x4dIkYpMOKAihl/H+/6c2khw78/RBjOwqIbCxBgAC7BV5pZEouKAAAAAElFTkSuQmCC) top left no-repeat;
				}
				var,b {
					font-size:0.14rem;
					color:rgba(153,153,153,1);
					margin-top: 0.25rem;
					display: inline-block;
					cursor: pointer;
				}
			}
			.myteam {
				margin: 0.15rem 0 0 0;
				overflow: hidden;
				cursor: pointer;
				span {
					font-size:0.14rem;
					color:rgba(102,102,102,1);
					float: left;
					&.i {
						text-indent: 0.25rem;
						margin-top: 0.1rem;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRTgxNzVBMTUwNzMxMUU5QTVGMEJBMURFRkJBNDgyMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRTgxNzVBMjUwNzMxMUU5QTVGMEJBMURFRkJBNDgyMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFFODE3NTlGNTA3MzExRTlBNUYwQkExREVGQkE0ODIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFFODE3NUEwNTA3MzExRTlBNUYwQkExREVGQkE0ODIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YtvelwAAAcNJREFUeNp8kbvLgXEUxz2PWy65pSySopSISa9kUnZKshkMRgNZDMpsNFjEgEFK2QyIMhmQcskf4FKSkFue98uDt7f38l2ec37P7/M753sOQVEU46X1ek2SpEQiabfb9Xp9uVxKpVKbzeZ0OplMJn2HoIHj8VgoFAaDgcPhuFwu4/HY6/WqVKrValUul1ksVjAYJAjiTlAPZbPZdDp9Pp/n83k4HN7v99RL4BOJRL/fp1MSzPV67Xa7Pp+PzWaPRiOTycTn89994nmLxTIcDun0DhwOB6BCofB5RJKM74KB2+32BYhEIrFYPJ1OEWu1Wjg5nU7v27iK+jqd7gnH43F85HJ5Lpfj8XhKpXKz2TSbTY1GIxAIttttPp+HN7fbTZt+TqnT6ZRKJQAfDyWTSWBI8ddqtbpcLi6X+zXWSqXS6/X8fr9arW40GtVq1W63m81mlIUx+mH4BH+PMZZoNIrSILGsWCyGfVE/lMlkisXivZ1UKtVqtRBhzaFQaLFYUL9pt9tFIhEMhgn7Ho8H5Wq1GnpAx4zfxOFwMG50Tur1eowVR7PZzGg0Mv6WwWCYTCasQCBA56irUCj+AWQyGTb4KcAA2uYQSPDBr6UAAAAASUVORK5CYII=) top left no-repeat;
					}
				}
				.classdata, .classstart {
					color:rgba(153,153,153,1);
					float:right;
					width:1.1rem;
					height:0.3rem;
					border-radius:0.16rem;
					line-height: 0.3rem;
					text-align: center;
					font-size: 0.12rem;
					position: relative;
					text-indent: 0.2rem;
				}
				.classdata{
					color: #F79727;
					border:0.01rem solid rgba(247,151,39,1);
					&:after {
						content: '';
						position: absolute;
						width: 0.15rem;
						height: 0.18rem;
						top: 0.05rem;
						left: 0.2rem;
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAIAAAAL/BNYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjQ2OTAxNzU1MjYxMUU5Qjk2QkJCRDU5Qzg3N0FGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MjQ2OTAxODU1MjYxMUU5Qjk2QkJCRDU5Qzg3N0FGRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNDY5MDE1NTUyNjExRTlCOTZCQkJENTlDODc3QUZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNDY5MDE2NTUyNjExRTlCOTZCQkJENTlDODc3QUZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QTPIxQAAAltJREFUeNqUU1tIlEEUnutubaloiaVoCN5IyUhEk9wgyG5ERS92eaqHIigQuj60lQ9hUBBk2r5I9FBhCUtQkoGwVmq5lt00w7UwLyumpm3+7r8zc5o/xUsQ1HkYZs45c74z5/sGAwD6Z2N/C0BoXLy8qvy1EJ4gCXk8/ySOScHzaktTdtfRlC1ITIY8e2G8l2UWI7ZQfqwBM2jfdRfBHAv7yo3KDDXcaXpdhjtTBtqm/GpybPJ2UejRYTILPeoXr9w0Y7cuI9ur2eqDJC57KoTtkdqvBnwz2RBuOIdtESyvxNpEJbKcI1Zr/lrV47XixijGeDpbdtzTV1nBGdlxH0a6uPMConYY6wnXn9YXwBiWnTUkyWllw8SQaL5MEteRuFWitYKm7SAJa3+juTCzs/wT4vlFkCbLPWZlTx14oSvccB5zBys4ZaF1elRfM8s/DkPvZddD3RiOTGLq6zONpb0q0KZ6G/mGMrwgGowR0XSJLM+lKdtC1dvxknSWfUCXIOLtTRy1gmXtFy+ukPhc3YaF1lSmSeHrS0VLOQQHubMUEYtHogKvafJGCPbDz0FdTI9LI8hPD9iaQyAM8e4WzdwzM0qGQCJqw4vjsWOpeFMF3z/LHq8mWUObnn3YEcvzSmY4ISQ2S36pR8zON1/XLek3kOhU26YK8eGO+tbOC88ivmhWGqL7iVGZbj4tBRm2WA790IvorjPcWebjozDfLFWJlmt6zJo/mlyEKFf9PjXQQpbl2LbeQLaIucKc1qDqaxJtVSrQikCRmFSatpOuLEaE/iFj/F+/4ZcAAwDpDkk/XghmJAAAAABJRU5ErkJggg==);
					}
				}
				.classstart{
					color: #fff;
					background:rgba(247,151,39,1);
					margin-left: 0.15rem;
					text-indent: 0.3rem;
					&:after {
						content: '';
						position: absolute;
						width: 0.21rem;
						height: 0.18rem;
						top: 0.05rem;
						left: 0.15rem;
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAIAAAA7cAJ5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDU3RUQwRTU1MjYxMUU5OUY3NEM0NDE5MDZCRjQyQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MDU3RUQwRjU1MjYxMUU5OUY3NEM0NDE5MDZCRjQyQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNTdFRDBDNTUyNjExRTk5Rjc0QzQ0MTkwNkJGNDJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQwNTdFRDBENTUyNjExRTk5Rjc0QzQ0MTkwNkJGNDJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Rj+C/wAAAklJREFUeNqMU11IVEEUnrl37t3VdSkr17KFQoOM/qQQQxEMIRR6WsKHyh56ksJ60BB8qBeTyF77wQeltyiksIciVushlYgw+12lsl+sXbN16e7PnblzOrNZUOy6e2EuzJn5znzfd86hicubCSH61oOsup1YYftOG/ycI3l/mgJXNBv1p53JfuBxM3CD6Gb+eKZW9Qn55ZGYGiRTg+62EHUXg/WN1XTQwjUEZGYc1SH6Tkz2K7zz6jrb06mVVmnl+4hIIFhd8JbRonUEHJItQUUTLd5Ef+tntV36hr0Y5cEOGXmRD3Pq9bsOBZnm22k09IBI8vFz2spyVteNZ3y0C2KfciSQHOIRzQxcA+urM33TbL6i7zjihIZIKuZquW3Un8llnRtJMMX5YQ8sfsAs6v/jLaagnlKj8YKr9QG/3y0/jy9bPydFC0sUnfejCFbCVmwkptcebhUTfeb+AVqwOkf9/k/p22409jkzt4htQTKKOpd9X3dBfP6f0PoaWJiRs0Esnj18GFKxLP5haUH1H6s6mjYjzWf3cb3ygHg64MwG+VgvLLzJ9jIkvqNwZt89ZjZdIli/sd50L7aLZ1eRvOav1Uq2Ze4/FQR9SwssfmRom4y8xE5aOrLCMP9auVhUpvnrkGWW1wEbhI90sqXdX5HYsEaBcmHtLuIkiRSZWg9VU/veSaydwlP3KpzcP+4xyhQeUlF1LyN/StXy+JBCen5CQyhbrwxQ04uWyLnHGBQT5/OdX/HkIjE9RsNZwhN85JQMP89//n8JMACoe/1EdQ2z6gAAAABJRU5ErkJggg==);
					}
				}
			}

			.tasks {
				border-top: #E4E8ED 0.01rem solid;
				margin: 0 -0.15rem;
				ul {
					margin: 0.1rem 0.1rem 0 0.1rem;
				}
				li {
					padding: 0.1rem 0.2rem;
					cursor: pointer;
					a {
						color: #666666;
					}
					&:hover {
						background: rgba(245,246,247,1);
						a {color: #F79727}
						span{
							color:rgba(247,151,39,1);
						}
					}
					.active {color: #999}
					.el-col-6 {
						text-align: right;
					}
					small {
						color: #888;
						font-size: 0.12rem;
					}
					.li1 {
						text-indent: 0.25rem;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTMwNzRENTUwNzMxMUU5QjI1MTk5MkFGNjhCMjExMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOTMwNzRENjUwNzMxMUU5QjI1MTk5MkFGNjhCMjExMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5MzA3NEQzNTA3MzExRTlCMjUxOTkyQUY2OEIyMTEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5MzA3NEQ0NTA3MzExRTlCMjUxOTkyQUY2OEIyMTEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hRP+lwAAAWxJREFUeNqEUk2LglAU9ekLKlpF0aYSWkT9hHbWpg/6kVr0DySwiFq0FHfiyoISCq1dFJRoZ8aZmnljzVn5jufed869j4RhyL3Gfr+fz+fX67XRaFSrVTD0jXq3202nU0mSMpnMeDwOgqBWq9E3ak3TeJ5Pp9PZbLbf76uqSinlwjhALcvyer22bVtRFM/zQB4Oh8FgQGN9ozeciKIYMfDT6/VOp1MikSBM6EjdbDbL5fKDXK1Wy+WSENLpdCijnkwmrVarVCr95JPJJMK02+18Pv/MADUsbjYbJo/jOMPh0HXd6Mg91GC3222sOgr9LPB9H6MwDINRo55RAzws4kcqlbIsC/0evvG9WCyQMpfL/RoiimazmWma6DQajSJXSPK395el2+2GHV0uFxyiGl3XkT5W/WEJLTEsDO58PiM6lo/but0u6+QbBM/L/8TxeMRqK5VKsVjE1F+9MYqrC4VCvV6HThAE7j/cBRgAjg9yxhKnJzkAAAAASUVORK5CYII=) top left no-repeat;
					}
					.li2 {
						text-indent: 0.25rem;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NzA3MDhFOTUwNzMxMUU5OUU0QUVFQkQ1Q0M5NEU2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NzA3MDhFQTUwNzMxMUU5OUU0QUVFQkQ1Q0M5NEU2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3MDcwOEU3NTA3MzExRTk5RTRBRUVCRDVDQzk0RTY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ3MDcwOEU4NTA3MzExRTk5RTRBRUVCRDVDQzk0RTY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fBHV6gAAAV5JREFUeNqUUkuLglAUTr3YpFIUJLmqhWEQQUvJXYIQSNs2+QNbCbUQXLiMdu0C92W0VFDKXnOmO/iYkZg5i3u/8/gO3zn3Es/nc7VaHY/H0h9MEAQEF1RPJpNarfa+2vd9y7IQdliWrVar7wm32w1OsvRPQwm6XC6LxQJGyqYlSZJlOVEhimJKKJfLuq4/Ho8sgeM4UOK6bhRFrVZrPB6jbLrRaPzWbZomQRDNZtNxnMFggLK57XabSKrX691u1/M8iM9mM5Ik2+32er1OCdDmer3e73fsYsDzvKqqUP21n9eZEiiKGo1GPyR9vAxAHMebzabX6+VmCIIAEhhXKhVYC8ag07ZtYA6Hw5QA0eVyCdvALuxkOp1ivN/vT6eTYRigKjfDfD4vfKzz+cwwDE3TuRneWKfTSX7aNyEMQ4QKyKAbGkMqRwC58A0Le/f7fUVRDofDbrfTNA0inwIMAEOyg7t+vvmnAAAAAElFTkSuQmCC) top left no-repeat;
					}
					.li3 {
						text-indent: 0.25rem;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MTZERDA0MTUwNzMxMUU5QTE3N0JENTI3MjcxOTNBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MTZERDA0MjUwNzMxMUU5QTE3N0JENTI3MjcxOTNBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNkREMDNGNTA3MzExRTlBMTc3QkQ1MjcyNzE5M0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxNkREMDQwNTA3MzExRTlBMTc3QkQ1MjcyNzE5M0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+l1GyIgAAARlJREFUeNqUUrGORFAURTYaH6AQySYKzSYShUZEswqJxu/xC6LRScTQUZEoVUp0QhDs3mFizW52xpzi5d7zzsk994HGcZym6bIsyDNgGMZxHGIYxjAMXycAMtM0MahwHEdOAGQQ5G3vi6IIwxAKWZZpmv432F4FQfC5AopHmxwbiPfruu/7tm2P/E8kSZI8z4M7iARtXddRFFVVBdGnaWJZluf5O8P7im1OkiRZlgmCoKoqvCYMAcayrJsBdgd2s3Vd5/s+MLquEwSxkVCIokhRlOu6V53jOGVZzvOc57lt2yRJapq2q48RbhMYhrlcLk3TgFRRFDgfvNLV8LECOQcMRdFxHM9IQQaroq/+fOjfj/XEhryIbwEGAEkdrqAf7cZyAAAAAElFTkSuQmCC) top left no-repeat;
					}
				}
				.tasksall {
					text-align: center;
					color: #F79727;
					margin-top: 0.1rem;
					cursor: pointer;
					i {
						transform:rotate(90deg);
						display: inline-block;
						margin: 0.03rem 0 0 0.05rem;
						vertical-align: middle;
					}
				}
				.taskNoMore{
					height: 0.17rem;
				}
			}

			.nowork {
				height: 2.5rem;
				position: relative;
				h4 {color: #333}
				.icon_no {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background: rgba(255, 255, 255, .8);
					border-radius: 0.05rem;
					div {
						width: 0.75rem;
						margin: 1rem auto 0;
					}
					i {
						height: 0.46rem;
						width: 0.46rem;
						border: #ccc 0.03rem solid;
						border-radius: 100%;
						display: inline-block;
						position: relative;
						&:before{
							content: '';
							position: absolute;
							top: 52%;
							background: #ccc;
							width: 105%;
							height: 0.03rem;
							transform:rotate(-30deg);
						}
					}
					span {
						color: #ccc;
						font-weight: bold;
						display: block;
						margin: 0.1rem 0 0 -0.1rem;
					}
				}
			}
		}
	}
}
</style>
