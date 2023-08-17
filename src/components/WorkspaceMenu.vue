<template>
  <div class="workspace-container">
    <p class="workspace-title">Workspace</p>
    <RenderMenuOptions :menu-options-with-content1="menuOptionsWithContent1" />
  </div>
</template>

<script>
import RenderMenuOptions from './RenderMenuOptions.vue'

export default {
  name: 'WorkspaceMenu',
  components: {
    RenderMenuOptions
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
.workspace-container {
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 24px;
  padding-left: 24px;
  margin-top: 36px;
}
.workspace-title {
  box-sizing: border-box;
  font: 500 14px Poppins;
  color: black;
  opacity: 0.6;
}
</style>
