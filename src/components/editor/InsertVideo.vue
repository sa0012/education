<template>
  <div class="insert-video">
    <div class="insert-video-box">
      <span class="cancel" @click='cancelClick'>X</span>
      <p>插入视频</p>
      <input type="text" name="text" placeholder="复制通用代码 <iframe src='...'></iframe>" v-model='text' v-on:keyup.enter='conformClick'>
      <button @click='conformClick'> 确认</button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'InsertVideo',
  data () {
    return {
      text: ''
    }
  },
  props: ['insertVideo', 'cancel'],
  methods: {
    conformClick () {
      this.insertVideo(this.text)
    },
    cancelClick () {
      this.cancel()
    }
  },
  mounted () {
    document.querySelector('.insert-video-box input').focus()
  }
}
</script>

<style type="text/css">
.insert-video {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.insert-video-box {
  position: relative;
  padding: 0.3rem 0.2rem;
  border-radius: 0.06rem;
  margin: 0 auto 0.24rem;
  background-clip: padding-box;
  box-shadow: 0 0.02rem 0.08rem rgba(0,0,0,.2);
}
.insert-video p {
  text-align: center;
  padding: 0.2rem 0rem;
  font-size: 0.25rem;
}
.insert-video input {
  text-align: left;
  margin: 0.05rem 0rem;
  border: 0.01rem solid rgb(200,200,200);
  font-size: 0.14rem;
  padding: 0.1rem 0.05rem;
  width: calc(100% - 0.1rem);
}

.insert-video button {
  outline: none;
  cursor: pointer;
  margin-left: calc(50% - 0.4rem);
  margin-top: 0.1rem;
  width: 0.8rem;
  height: 0.4rem;
  border: none;
  text-align: center;
  color: #898989;
  background-color: #fff;
  font-size: 0.15rem;
  border-radius: 0.01rem;
  -webkit-border-radius: 0.01rem;
  -moz-border-radius: 0.01rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-in;
  transition: all .2s ease-in;
  -webkit-box-shadow: 0 0.02rem 0.08rem hsla(0,0%,70%,.8);
  -moz-box-shadow: 0 0.02rem 0.08rem hsla(0,0%,70%,.8);
  -ms-box-shadow: 0 0.02rem 0.08rem hsla(0,0%,70%,.8);
  -o-box-shadow: 0 0.02rem 0.08rem hsla(0,0%,70%,.8);
  box-shadow: 0.01rem 0.02rem 0.08rem hsla(0,0%,70%,.8);
  transition-property: right;
  transition: all 0.3s;
}

.insert-video .cancel {
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  z-index: 2;
  font-size: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  cursor: pointer;
}
</style>
