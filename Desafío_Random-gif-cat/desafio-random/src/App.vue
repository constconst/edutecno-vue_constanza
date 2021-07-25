<template>
  <div>
    <div class="title">
      <h1>Random Gif Cat ✨</h1>
    </div>
    <div class="helloworld">
      <HelloWorld></HelloWorld>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
margin: 0;
padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app > div > div.title {
  margin-bottom: 0;
}

.title {
  background-color: pink;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
    padding: 0;
  margin-bottom: 0;
}
.helloworld {
  padding: 0;
  margin: 0;
  background-color: lightcoral;
  min-height: 80vh;
}
</style>
