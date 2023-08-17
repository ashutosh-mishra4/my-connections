<template>
  <div class="connection-table2">
    <p class="connection-title">My Connections</p>
    <ConnectionTable1 :renderedCardOptions="renderedCardOptions" />
  </div>
</template>

<script>
import ConnectionTable1 from './ConnectionTable1.vue'

export default {
  name: 'ConnectionList',
  props: {
    renderedCardOptions: Array
  },
  components: {
    ConnectionTable1
  }
}
</script>

<style scoped>
.connection-table2 {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 55px 34px 67px;
  border-bottom: 1px solid #d2dbe6;
}
.connection-title {
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 4.5px;
  padding-left: 4.5px;
  font: 600 24px Poppins;
  color: black;
}
</style>
