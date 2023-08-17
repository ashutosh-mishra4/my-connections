<template>
  <div class="account-container">
    <p class="account-title">Account</p>
    <UserProfile :menu-options-with-content="menuOptionsWithContent" />
  </div>
</template>

<script>
import UserProfile from './UserProfile/UserProfile.vue'

export default {
  name: 'AccountMenu',
  components: {
    UserProfile
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
.account-container {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
.account-title {
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 24px;
  padding-left: 24px;
  font: 500 14px Poppins;
  color: black;
  opacity: 0.6;
}
</style>
