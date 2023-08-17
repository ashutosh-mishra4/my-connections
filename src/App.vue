<template>
  <div data-ignore="used for width only" style="display: inline-flex; width: 290px">
    <RenderMenuOptions1 v-bind="mockData" />
    <main>
      <ConnectionList v-bind="mockData" />
      <DiscoverConnections />
    </main>
  </div>
</template>

<script>
import RenderMenuOptions1 from './components/RenderMenuOptions1.vue'
import DiscoverConnections from './components/DiscoverConnections.vue'
import ConnectionList from './components/ConnectionList.vue' // Import the ConnectionList component
import { mockData } from './mockData'

export default {
  name: 'App',
  components: {
    RenderMenuOptions1,
    DiscoverConnections,
    ConnectionList // Add ConnectionList to the components object
  },
  data() {
    return {
      mockData: mockData
    }
  }
}
</script>
