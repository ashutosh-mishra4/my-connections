<template>
  <div class="section-container1">
    <SectionContent
      v-for="(dataItem, index) in menuOptionsWithContent1"
      :key="index"
      v-bind="dataItem"
    />
  </div>
</template>

<script>
import SectionContent from './SectionContent/SectionContent.vue'

export default {
  name: 'RenderMenuOptions',
  components: {
    SectionContent
  },
  props: {
    menuOptionsWithContent1: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.section-container1 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;
  justify-content: center;
  margin-top: 16px;
}
</style>
