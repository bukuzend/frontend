<template>
    <Background class="back"/>
    <router-view/> 
</template>

<script>
  import axios from "axios"
  import Background from './layers/Background.vue';


  const axiosC = axios.create({
    withCredentials: true
  });

  export default {
  components: { Background },
    
    data() {
      return {
        selected: true,
      
    }},

    beforeCreate() {
      window.screen.orientation.lock('portrait');
    }
  }
</script>

<style>
 * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
  transition: all 0.3s;
 }
 
 

 body {
    background: #00b4ff;
    color: #333;
    font: 100% Arial, Sans Serif;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

 .back{
  height: 100vh;
  width: 100vw;
 }

 .router{
  height: 100vh;
  width: 100vw;

 }
 
</style>