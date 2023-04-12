<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <div class="wrap">
    <div>header</div>
    <main class="main">main</main>
    <div>footer</div>
   </div>
</template>

<style>
.wrap{
  display: flex;
  flex-direction:column;
  align-items: center;
  min-height: 100vh;
  widows: 480px;
  margin: 0 auto;
  font-family: sans-serif;
}

.main{
  flex:1;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
