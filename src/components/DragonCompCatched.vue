<template>

  <div class="dragonComp">
    <div class="imag">
      <img :src="getPath()">
    </div>
    <div class="name">
      <p>{{ item.dragon }}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      reqired: true
    }
  },
  methods: {
    getPath() {
      return `https://collector35.ru/api/profile/catched/${this.item.image}`
    }
  }

}
</script>

<style scoped>

  .dragonComp {
    width: 100%;
    height: 210px;
    display: flex;
    flex-direction: column;
    
  }
  .imag {
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid black;
  }
  .imag img {
    width: 100%;
  }

  .name {
    display: flex;
    justify-content: center;
  }

  .name p{
    text-align: center;
    font-size: 20px;
  }

</style>