<template>
  <tr class="connection-access-row">
    <td class="connection-access">
      <p class="connections-text">Connections</p>
    </td>
    <td class="access-cell">
      <p class="connections-text">Access</p>
    </td>
    <td class="connection-access-cell">
      <div class="flex-container"></div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ConnectionTable'
}
</script>

<style scoped>
.connection-access-row {
  box-sizing: border-box;
  height: 60px;
  border-bottom: 1px solid #d2dbe6;
}
.connection-access {
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 5.25px;
}
.connections-text {
  box-sizing: border-box;
  font: 400 18px Poppins;
  color: black;
}
.access-cell {
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
}
.connection-access-cell {
  box-sizing: border-box;
  padding-right: 5.25px;
  padding-left: 8px;
}
.flex-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>
