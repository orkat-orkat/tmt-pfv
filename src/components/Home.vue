<template>
    <div>
      <h2>テストページ1</h2>
      <button @click="About">next</button>
    </div>
  </template>
  <script>
import About from '../pages/About.vue';

  export default {
    methods: {
      About: function () {
        this.$router.push('/About')
      }
    }
  }
  </script>