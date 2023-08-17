<template>
  <div class="contact-info">
    <div class="contact-info1">
      <SvgIcon1 class="svg-container" />
      <div class="contact-info2">
        <p class="bold-text">Babel Brian</p>
        <p class="email-link">brian@transpileAllTheThings.js</p>
      </div>
    </div>
    <MenuSelector :menu-options-with-content="menuOptionsWithContent" />
  </div>
</template>

<script>
import MenuSelector from '../MenuSelector.vue'
import SvgIcon1 from './icons/SvgIcon1.vue'

export default {
  name: 'UserProfile',
  components: {
    MenuSelector,
    SvgIcon1
  },
  props: {
    menuOptionsWithContent: {
      type: Array, // Assuming this is an array, adjust type if different
      required: true
    }
  }
}
</script>

<style scoped>
.contact-info {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
}
.contact-info1 {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-right: 23px;
  padding-left: 23px;
}
.svg-container {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  color: #0e6b82;
}
.contact-info2 {
  box-sizing: border-box;
  flex: 0 0 auto;
  margin-left: 9px;
}
.bold-text {
  box-sizing: border-box;
  font: 600 16px Poppins;
  color: black;
}
.email-link {
  box-sizing: border-box;
  margin-top: 4px;
  font: 400 12px Poppins;
  color: black;
  text-decoration-line: underline;
  opacity: 0.6;
}
</style>
