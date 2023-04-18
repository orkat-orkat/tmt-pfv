<template>
    <div>
      <h2>Homeのぺーじ</h2>
      <button @click="About">Aboutにいきたい</button>
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