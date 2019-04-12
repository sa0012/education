<template>
  <span class="color-picker-options">
    <span v-for='(color, index) in colors' data-light="light" class="ql-picker-item ql-primary" :data-value="color" v-bind:style="{backgroundColor: color}" v-on:click='handleColorClick(index)' v-on:mouseover='handleColorHover(index)' v-bind:title='names[index]'>
    </span>
    <input type="text" class="color-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="6" v-model='selectColor'>
  </span>
</template>
<script type="text/javascript">
// import tippy from '../../node_modules/tippy.js/dist/tippy.min.js'

export default {
  name: 'ColorPicker',
  data () {
    return {
      selectColor: '#ffffff',
      names: ['白', '漆黑', '红', '橙', '黄', '葱绿', '湖蓝', '天色', '紫', '白练', '鼠', '虹', '薄卵', '蒸栗', '白绿', '蓝白', '天空', '紫水晶', '白鼠', '墨', '甚三红', '雄黄', '金子', '薄青', '白群', '薄花', '紫苑', '灰青', '石墨', '红绯', '红金', '枯茶', '绿青', '浅葱', '薄缥', '紫霞', '薄钝', '黑', '朱绯', '褐', '黑茶', '深绿', '苍蓝', '琉璃', '葡萄'],
      colors: ['#ffffff', '#0d0015', '#fe2c23', '#ff9900', '#ffd900', '#a3e043', '#37d9f0', '#4da8ee', '#aa17d0', '#f3f3f1', '#949494', '#fcdbd6', '#fde9d0', '#fff0cf', '#d4e9d6', '#def3f3', '#cee0ef', '#dfdbec', '#dcdedd', '#595856', '#ee837d', '#f8c387', '#e6b322', '#9abd9d', '#83ccd2', '#89b0ce', '#9389b1', '#c1c6ca', '#41464b', '#d51228', '#cf770b', '#8d634a', '#557b5c', '#01a3b0', '#3776a6', '#765c83', '#adadad', '#2b2b2b', '#a91913', '#884702', '#563725', '#00552e', '#00767a', '#194e77', '#530e6f']
    }
  },
  props: ['ColorPickerClick'],
  methods: {
    handleColorHover (index) {
      this.selectColor = this.colors[index]
      // tippy(document.querySelectorAll('.color-picker-options span')[index])
    },
    handleColorClick (index) {
      this.selectColor = this.colors[index]
      this.ColorPickerClick(this.selectColor)
    }
  }
}
</script>

<style type="text/css">
.color-picker-options {
  width: 2rem;
  text-align: justify;
  padding: 0.1rem 0.1rem 0.12rem;
  border-radius: 0.02rem;
  position: absolute;
  left: -0.8rem;
  box-shadow: 0 0.01rem 0.02rem #ccc;
  background-color: #fff;
  margin-top: 0.1rem;
}

.ql-picker-item {
  border: 0.01rem solid transparent;
  float: left;
  height: 0.16rem;
  margin: 0.02rem;
  padding: 0;
  width: 0.16rem;
  cursor: pointer;
  /*position: relative;*/
}

.color-name-tip {
  /*background-color: transparent;*/
/*  position: absolute;
  z-index: 2;
  display: flex;
  background-color: #000;
  color: #fff;*/
}

input {
  outline: none;
}
</style>
