<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo-vue.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <home-view></home-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from "@/view/home.vue";

export default {
  name: 'App',
  components: {
    HomeView,
    // HelloWorld
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
