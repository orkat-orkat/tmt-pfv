<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import MainInput from './components/MainInput.vue';
import Test from './components/Test.vue';
import Pjt1 from './components/Pjt1.vue';
import Home from './components/Home.vue';
import About from './pages/About.vue';
</script>

<script>
export default {
  name: 'App'
}

</script>

<template>
   <div class="wrap">
   <TheHeader />
  <main class="main">
      <MainInput />
    </main>
    <main class="main">
      <Test />
    </main>

    <main class="main">
      <About/>
      <Pjt1/>
      <Home />
    </main>
   
    <TheFooter />
    <RouterView />
   </div>

 
</template>


<style>
@import 'assets/css/destyle.css';
@import 'assets/css/base.css';
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
}
</style>
