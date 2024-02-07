<template>
  <div id="gui-manager">
    <div id="menu-bar">
      <button @click="doSomething">Button 1</button>
      <button @click="doSomethingElse">Button 2</button>
    </div>
    <!-- GUI Layout here -->
    <div v-if="isMenuOpen" id="menu">
      <!-- Menu content here -->
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import { io } from 'socket.io-client';
export default {
  name: 'GUIManager',
  data() {
    return {
      isMenuOpen: false, // Track menu visibility
      // Data properties for GUI state
    };
  },
  mounted() {
    // Initialize GUI components
    this.openMenu(); // Open the menu automatically
  },
  methods: {
    doSomething() {
      // Code for what happens when Button 1 is clicked
    },
    doSomethingElse() {
      // Code for what happens when Button 2 is clicked
    },
    openMenu() {
      this.isMenuOpen = true; // Set menu visibility to true
    },
    // Define other methods for GUI interaction
  }
}
</script>

<style scoped>
#menu-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e7e7e7;
}

#menu-bar button {
  margin-right: 10px;
  padding: 5px 10px;
}

#menu {
  /* Styles for the menu */
}
</style>