<template>
  <div :class="className" :style="{ color: colorValue1 }" v-html="htmlOrSvgContent3"></div>
</template>

<script>
export default {
  name: 'SvgIcon1',
  props: {
    className: {
      type: String,
      default: ''
    },
    htmlOrSvgContent3: {
      type: String,
      required: true
    },
    colorValue1: {
      type: String,
      required: true
    }
  }
}
</script>
