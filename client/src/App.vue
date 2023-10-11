

<template>
  <ChartArea />
  <PlayerBar />
</template>

<script setup>
import ChartArea from './components/ChartArea.vue';
import PlayerBar from './components/PlayerBar.vue'
</script>

<style lang="scss">
:root {
  --dark: #191414;
  --light: #ffffff;
  --green: #1db954;
  --gray: #535353;
  --ligth-dark: #282828;
  --ligth-gray: #b3b3b3;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
