<template>
  <div class="account-workspace-container">
    <AccountMenu :menu-options-with-content="menuOptionsWithContent" />
    <WorkspaceMenu :menu-options-with-content1="menuOptionsWithContent1" />
  </div>
</template>

<script>
import AccountMenu from './AccountMenu.vue'
import WorkspaceMenu from './WorkspaceMenu.vue'

export default {
  name: 'RenderMenuOptions1',
  components: {
    AccountMenu,
    WorkspaceMenu
  },
  props: {
    menuOptionsWithContent1: {
      type: Array, // Assuming this is an array, adjust type if different
      required: true
    },
    menuOptionsWithContent: {
      type: Array, // Assuming this is an array, adjust type if different
      required: true
    }
  }
}
</script>

<style scoped>
.account-workspace-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-width: 290px;
  padding-top: 24px;
  padding-bottom: 288px;
  background: #f5f8fa;
  border: 1px solid #f1f2f6;
}
</style>
