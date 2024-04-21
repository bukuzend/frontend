<template>
  <div class="conteiner">
    <div class="main">
      <div class="image">
        <img src="../assets/Logo.svg" alt="" class="logo">
      </div>
      <div class="toLogin">
        <div class="button">
          <router-link to="/login" class="start">Начать</router-link>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .conteiner {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:100px;
    

    position: absolute;
    top: 10vh;
    
  }

  .button {
    border:2px solid black;
    width: 35vw;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:20px;
  }

  .start {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }

</style>