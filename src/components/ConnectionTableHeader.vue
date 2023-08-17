<template>
  <thead class="connection-header">
    <ConnectionTable />
  </thead>
</template>

<script>
import ConnectionTable from './ConnectionTable.vue'

export default {
  name: 'ConnectionTableHeader',
  components: {
    ConnectionTable
  }
}
</script>

<style scoped>
.connection-header {
  box-sizing: border-box;
}
</style>
