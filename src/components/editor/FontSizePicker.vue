<template>
  <div class="font-size-picker-options">
    <ul>
      <li v-for='(size, index) in sizes' v-on:click='handleFontSizeClick(size, index)' v-bind:class="{fontSizeActive: fontSize === size}">{{size}}</li>
    </ul>
  </div>
</template>
<script type="text/javascript">

export default {
  name: 'FontSizePicker',
  data () {
    return {
      sizes: [10, 13, 16, 18, 24, 32, 48],
      fontSize: 16
    }
  },
  props: ['FontSizePickerClick'],
  methods: {
    handleFontSizeClick (size, index) {
      this.fontSize = size
      this.FontSizePickerClick(size, index)
    }
  }
}
</script>

<style type="text/css">
.font-size-picker-options {
  width: 0.6rem;
  text-align: justify;
  padding: 0.05rem 0rem;
  border-radius: 0.02rem;
  position: absolute;
  box-shadow: 0 0.01rem 0.02rem #ccc;
  background-color: #fff;
  margin-top: 0.1rem;
  text-align: center;
}

.font-size-picker-options ul {
  list-style: none;
  padding: 0rem;
  margin: 0rem;
  font-size: 0.14rem;
  color: #333;
}

.font-size-picker-options ul li {
  padding: 0.05rem;
  transition: all 0.3s;
}

.font-size-picker-options ul li:hover, .fontSizeActive {
  background-color: #E5E5E5;
}


</style>
