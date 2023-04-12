<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
   <div class="wrap">
   <TheHeader />
    <main class="main">main</main>
    <TheFooter />
   </div>
</template>

<style>
@import 'assets/css/destyle.css;';

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
