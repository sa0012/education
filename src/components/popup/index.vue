<template>
  <div class="popup">
    <transition name="ry-fade">
      <div class="popup-mask" v-show="value && !hideMask" @click="$_cancel"></div>
    </transition>
    <transition name="slide">
      <div class="popup-content" v-show="value" :class="positionClass" :style="{ contentStyle }">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
const objTransitionSlideType = {
  bottom: "slide-bottom",
  left: "slide-left",
  top: "slide-top",
  right: "slide-right",
  center: "fade"
};
export default {
  name: "popup",
  props: {
    // 弹唱位置， 暂时只开放中间弹窗
    position: {
      type: String,
      default: "center"
    },
    // 是否显示 ，  页面中可使用v-model
    value: {
      type: Boolean,
      required: true
    },
    // 点击遮罩层是否关闭弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 是否显示遮罩层
    hideMask: {
      type: Boolean,
      default: false
    },
    // 弹窗内容样式
    contentStyle: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  computed: {
    positionClass() {
      return [`popup-${this.position}`];
    },
    transitionSlideType() {
      return objTransitionSlideType[this.position];
    }
  },

  watch: {
    value(newVal, oldVal)  {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  },

  methods: {
    $_cancel() {
      if (!this.closeOnClickOverlay) return;
      this.$emit("input", false);
    }
  }
};
</script>

<style lang="scss" scoped>
// 定义基础变量

$prefixCls: popup;

.#{$prefixCls} {
  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  &-content {
    position: fixed;
    background-color: #fff;
    z-index: 9999;
    border-radius: 0.05rem;
    &.#{$prefixCls}-top {
      left: 0;
      right: 0;
      top: 0;
    }
    &.#{$prefixCls}-bottom {
      left: 0;
      right: 0;
      bottom: 0;
    }
    &.#{$prefixCls}-left {
      top: 0;
      left: 0;
      width: 60%;
      bottom: 0;
    }
    &.#{$prefixCls}-right {
      top: 0;
      right: 0;
      width: 60%;
      bottom: 0;
    }
    &.#{$prefixCls}-center {
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}

// 蒙层渐变动画
@keyframes ry-fade-enter {
  from {
    opacity: 0;
  }
}

@keyframes ry-fade-leave {
  to {
    opacity: 0;
  }
}

@keyframes slide-enter {
  from {
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes slide-leave {
  to {
    opacity: 1;
    transform: translate3d(-50%, -50%,  0);
  }
}

.ry-fade {
  &-enter-active {
    animation: ry-fade-enter 0.5s both ease;
  }

  &-leave-active {
    animation: ry-fade-leave 0.5s both ease;
  }
}

.slide {
  &-enter-active {
    animation: slide-enter 0.3s both ease-out;
  }
  &-leave-active {
    animation: slide-leave 0.3s both ease-out;
  }
}
</style>

