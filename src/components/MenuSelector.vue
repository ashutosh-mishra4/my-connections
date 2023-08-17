<template>
  <div class="menu-options-container">
    <MenuButton
      v-for="(data, index) in menuOptionsWithContent"
      :key="index"
      v-bind="{ ...data, ...menuButtonStyles[index] }"
      @select="onSelect_menuOptionsWithContent(index)"
      :class="{ 'green-background-with-menu': selected_menuOptionsWithContent === index }"
    />
  </div>
</template>

<script>
import MenuButton from './MenuButton/MenuButton.vue'
import { theme } from '../theme'

export default {
  name: 'MenuSelector',
  components: {
    MenuButton
  },
  props: {
    menuOptionsWithContent: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected_menuOptionsWithContent: 2,
      menuButtonStyles: [
        {
          colorValue1: theme.colors.COLOR_91E11443,
          elementOpacity: theme.others.OPACITY_168538,
          textColorOrThemeColor: theme.colors.COLOR_5978FFF
        },
        {
          colorValue1: theme.colors.COLOR_91E11443,
          elementOpacity: theme.others.OPACITY_168538,
          textColorOrThemeColor: theme.colors.COLOR_5978FFF
        },
        {
          colorValue1: theme.colors.COLOR_EF55B023,
          textColorOrThemeColor: theme.colors.COLOR_6BDCC29
        },
        {
          colorValue1: theme.colors.COLOR_91E11443,
          elementOpacity: theme.others.OPACITY_168538,
          textColorOrThemeColor: theme.colors.COLOR_5978FFF
        }
      ]
    }
  },
  methods: {
    onSelect_menuOptionsWithContent(val) {
      this.selected_menuOptionsWithContent = val
    }
  }
}
</script>

<style scoped>
.menu-options-container {
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;
  margin-top: 12px;
}
.green-background-with-menu {
  background: #25c998;
}
</style>
