<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
$grey: #dde2e9;

body {
  margin: 0;
  padding: 0
}

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background-color: $grey;
}

</style>
