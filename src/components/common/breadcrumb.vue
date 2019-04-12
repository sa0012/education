<template>
    <div class="breadcrumb">
        <div class="nowaddress">当前位置：</div>
        <el-breadcrumb separator=">">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">课程中心</el-breadcrumb-item>
            <el-breadcrumb-item>
                <a href="/">我的课程</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>1对1英语课程</el-breadcrumb-item> -->
             <el-breadcrumb-item :to="{ path: address.onePath }">课程中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: address.onePath }">我的课程</el-breadcrumb-item>
            <el-breadcrumb-item>{{address.text}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    name: "breadcrumb",
    props:["address"]
};
</script>

<style lang="scss" scoped>
.breadcrumb {
    margin-top: 0.1rem;
    font-weight:400;
    color:#666;
    .nowaddress {
        float: left;
    }
    .el-breadcrumb__inner, .el-breadcrumb__item, a {
        font-weight:400;
        color:#999;
    }
}
</style>