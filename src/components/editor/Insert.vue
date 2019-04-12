<template>
  <div class="insert-options-items">
    <ul>
      <li v-for='(key, index) in names' @click='insertClick(key, index)'>
        <input
          v-if='index === 0'
          id="images_upload"
          ref="input"
          type="file"
          accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
          multiple="multiple"
          @change="handleFileChange"
        />
        <img :src='icons[key]' :class='key'></img>
        <span>{{labels[index]}}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import icons from './icons.js'
export default {
  name: 'Insert',
  data () {
    return {
      icons: icons,
      labels: ['图片', '分割线', '视频', '代码块'],
      names: ['insertImage', 'insertLine', 'insertVideo', 'insertBlock']
    }
  },
  props: ['insertImageClick', 'insertLink', 'insertLine', 'insertVideo', 'insertBlock', 'uploadImages'],
  methods: {
    handleFileChange () {
      let input = this.$refs.input[0]
      let files = input.files
      this.uploadImages(files)
    },
    insertClick (key, index) {
      if (this[key]) {
        this[key]()
      }
    }
  }
}
</script>

<style type="text/css">

.insert-options-items {
  width: 1.2rem;
  padding: 0.05rem 0rem;
  border-radius: 0.02rem;
  position: absolute;
  box-shadow: 0 0.01rem 0.02rem #ccc;
  background-color: #fff;
  margin-top: 0.35rem;
  text-align: left;
  z-index: 3;
}
.insert-options-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.insert-options-items ul li {
  padding: 0.05rem 0.2rem;
  color: #333;
  font-size: 0.12rem;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.insert-options-items ul li:hover, .insertActive {
  background-color: #E5E5E5;
}

.insert-options-items img {
  width: 0.2rem;
  height: 0.2rem;
  top: 0.01rem;
  position: relative;
  margin-right: 0.15rem;
}

.insert-options-items #images_upload {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
