<template>

  <div class="dragonComp">
    <div class="imag">
      <img :src="getPath()">
    </div>
    <div class="name">
      <p>{{ item.name }}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true
    }
  },
  methods: {
    getPath() {
      return `https://collector35.ru/api/profile/waiting/${this.item.image}`
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
  }
  .imag img {
    width: 100%;
    filter: grayscale(100%);
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