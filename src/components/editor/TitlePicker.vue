<template>
  <div class="title-options">
    <ul>
      <li v-for='(size, index) in sizes' v-on:click.stop='handleFontSizeClick(size, index)' v-bind:class="{fontSizeActive: current === size}">
        <div v-html='getHtml(size, index)'></div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">

export default {
  name: 'FontSizePicker',
  data () {
    return {
      sizes: ['H1', 'H2', 'H3', 'H4', 'H5', '正文'],
      current: '正文'
    }
  },
  props: ['titlePickerClick'],
  methods: {
    getHtml (size, index) {
      if (index === this.sizes.length - 1) {
        return size
      }
      return `<${size}>${size}</${size}>`
    },
    handleFontSizeClick (size, index) {
      this.current = size
      this.titlePickerClick(size, index)
    }
  }
}
</script>

<style type="text/css">
.title-options {
  width: 0.6rem;
  text-align: justify;
  padding: 0.05rem 0rem;
  border-radius: 0.02rem;
  position: absolute;
  box-shadow: 0 0.01rem 0.02rem #ccc;
  background-color: #fff;
  margin-top: 0.1rem;
  text-align: center;
  margin-left: -0.15rem;
}

.title-options ul {
  list-style: none;
  padding: 0rem;
  margin: 0rem;
  font-size: 0.14rem;
  color: #333;

}

.title-options ul li {
  padding: 0.05rem;
  transition: all 0.3s;
}

.title-options ul li:hover, .fontSizeActive {
  background-color: #E5E5E5;
}

.title-options h1,
.title-options h2,
.title-options h3,
.title-options h4,
.title-options h5 {
  margin: 0rem;
}

</style>
