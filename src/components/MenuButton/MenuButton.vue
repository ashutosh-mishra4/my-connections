<template>
  <div @click="onSelect_menuOptionsWithContent" :class="['menu-container', className]">
    <SvgIcon1
      class="svg-container1"
      :html-or-svg-content3="htmlOrSvgContent3"
      :color-value1="colorValue1"
    />
    <p class="menu-option-text" :style="{ opacity: elementOpacity, color: textColorOrThemeColor }">
      {{ menuOption }}
    </p>
  </div>
</template>

<script>
import SvgIcon1 from './icons/SvgIcon1.vue'

export default {
  name: 'MenuButton',
  components: {
    SvgIcon1
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    htmlOrSvgContent3: {
      type: String,
      required: true
    },
    onSelect_menuOptionsWithContent: {
      type: Function,
      required: true
    },
    menuOption: {
      type: String,
      required: true
    },
    colorValue1: {
      type: String,
      required: true
    },
    textColorOrThemeColor: {
      type: String,
      required: true
    },
    elementOpacity: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
.menu-container {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  padding-right: 24px;
  padding-left: 24px;
}
.svg-container1 {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
}
.menu-option-text {
  box-sizing: border-box;
  flex: 0 0 auto;
  margin-left: 16px;
  font: 500 16px Poppins;
}
.green-background-with-menu {
  background: #25c998;
}
</style>
