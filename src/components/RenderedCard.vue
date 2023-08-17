<template>
  <tr class="user-card">
    <td class="connection-access">
      <div class="flex-container">
        <img
          class="profile-card"
          :style="{ width: imgWidth1, height: imgHeight1, content: imgContent1 }"
        />
        <div class="contact-info">
          <p class="connections-text">{{ connectionName1 }}</p>
          <p class="email-signature" v-html="transpilerEmail"></p>
        </div>
      </div>
    </td>
    <td class="access-cell">
      <p class="faded-text" v-html="accessPermissions1"></p>
    </td>
    <td class="connection-access-cell">
      <button class="configure-button">Configure</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'RenderedCard',
  props: {
    imgContent1: String,
    accessPermissions1: String,
    connectionName1: String,
    transpilerEmail: String,
    imgHeight1: String,
    imgWidth1: String
  }
}
</script>

<style scoped>
.user-card {
  box-sizing: border-box;
  height: 87px;
  border-bottom: 1px solid #d2dbe6;
}
.connection-access {
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 5.25px;
}
.flex-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.profile-card {
  box-sizing: border-box;
  display: block;
  max-width: initial;
}
.contact-info {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 13px;
}
.connections-text {
  box-sizing: border-box;
  font: 400 18px Poppins;
  color: black;
}
.email-signature {
  box-sizing: border-box;
  margin-top: 8px;
  font: 400 14px Poppins;
  color: black;
  opacity: 0.6;
}
.transpile-all-the-things {
  text-decoration-line: underline;
  opacity: 0.6;
}
.access-cell {
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
}
.faded-text {
  box-sizing: border-box;
  font: 400 14px Poppins;
  color: black;
  opacity: 0.6;
}
.connection-access-cell {
  box-sizing: border-box;
  padding-right: 5.25px;
  padding-left: 8px;
}
.configure-button {
  box-sizing: border-box;
  display: block;
  height: 45px;
  font: 400 14px Poppins;
  color: black;
  cursor: pointer;
  background: white;
  border: 1.5px solid #25c998;
  border-radius: 4px;
}
</style>
