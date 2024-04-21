<template>

  <div class="dragonComp">
    <div class="imag">
      <img :src="getPath()">
    </div>
    <div class="name">
      <p>{{ item }}</p>
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
      return `http://localhost:3000/api/lib/${this.item}/download`
    }
  }

}
</script>

<style scoped>

  .dragonComp {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .imag {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .imag img {
    width: 100%;
  }

  .name {
    display: flex;
    justify-content: center;
  }

  .name p{
    display: flex;
    justify-content: center;

    font-size: 20px;
  }

</style>