<template>
  <tbody class="connection-table">
    <RenderedCard
      v-for="(option, index) in renderedCardOptions"
      :key="index"
      v-bind="{ ...option, ...renderedCardDimensions[index] }"
    />
  </tbody>
</template>

<script>
import RenderedCard from './RenderedCard.vue'
import { theme } from '../theme'

export default {
  name: 'RenderedCardTable',
  components: {
    RenderedCard
  },
  props: {
    renderedCardOptions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      renderedCardDimensions: [
        { imgWidth1: theme.others.WIDTH_1807AB, imgHeight1: theme.others.HEIGHT_1807AB },
        { imgWidth1: theme.others.WIDTH_180B6C, imgHeight1: theme.others.HEIGHT_1812EE },
        { imgWidth1: theme.others.WIDTH_180B6C, imgHeight1: theme.others.HEIGHT_1807AB }
      ]
    }
  }
}
</script>

<style scoped>
.connection-table {
  box-sizing: border-box;
}
</style>
