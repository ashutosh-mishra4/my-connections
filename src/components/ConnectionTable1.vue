<template>
  <table class="connection-table1">
    <ConnectionTableHeader />
    <RenderedCardTable :renderedCardOptions="renderedCardOptions" />
  </table>
</template>

<script>
import ConnectionTableHeader from './ConnectionTableHeader.vue'
import RenderedCardTable from './RenderedCardTable.vue'

export default {
  name: 'ConnectionTable1',
  props: {
    renderedCardOptions: Array
  },
  components: {
    ConnectionTableHeader,
    RenderedCardTable
  }
}
</script>

<style scoped>
.connection-table1 {
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 100%;
  margin-top: 23.5px;
  border-collapse: collapse;
}
</style>
