<template>
  <nav-bar></nav-bar>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css"
// import { ref } from 'vue';



export default {
  components:{
    NavBar
  },
  setup() {

  },
}
</script>

<style>
body{
  background-image: url("@/assets/background.jpg");
  background-size: cover;
}
</style>
