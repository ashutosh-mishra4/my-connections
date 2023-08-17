<template>
  <div class="section-container">
    <SvgIcon1 class="svg-container2" :html-or-svg-content3="htmlOrSvgContent3" />
    <p class="section-title-text">{{ menuOption }}</p>
  </div>
</template>

<script>
import SvgIcon1 from './icons/SvgIcon1.vue'

export default {
  name: 'SectionContent',
  components: {
    SvgIcon1
  },
  props: {
    htmlOrSvgContent3: {
      type: String,
      required: true
    },
    menuOption: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.section-container {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.svg-container2 {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  color: #111111;
}
.section-title-text {
  box-sizing: border-box;
  flex: 0 0 auto;
  margin-left: 16px;
  font: 500 16px Poppins;
  color: black;
  opacity: 0.6;
}
</style>
