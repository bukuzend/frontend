<template>
   <div class="conteiner">
        <BugerNav class="burgerNav"/>
        <div class="dragonfly">
            <img :src="`https://collector35.ru/api/lib/${param}/download`">
            <p> {{ item.name }}</p>
        </div>
        <div class="dragonDesc">
            <p>{{ item.description }}</p>
        </div>

    </div>
</template>

<script>
import BugerNav from '@/components/BugerNav.vue';
import axios from 'axios';
import Url from '@/Url';

const axiosC = axios.create({
    withCredentials: true
  });

export default{
    components: {
        BugerNav
    },

    async beforeCreate() {
        const res = await axiosC.get(`${Url}/api/lib/${this.$route.params.name}`);
        this.item = res.data;
    },

    data() {
        return {
            item: "",
            param: this.$route.params.name,
            url: Url
        }
    }
}
</script>

<style scoped>

    .burgerNav {
        margin-top: 20px;
        align-self: flex-end;
        margin-right: 20px;
        z-index: 1;
    }

    .conteiner {

        width: 100vw;
        height: 100vh;
        

        display: flex;
        flex-direction: column;
        align-items: center;


        gap:40px;
    }

    .dragonfly {
        width: 90%;
        gap: 10px;
    }

    .dragonfly img{
        width: 100%;
    }
    .dragonfly p{
        font-size: 30px;
        font-weight: bold;
        
        display: flex;
        justify-content: center;
    }

    .dragonDesc {
        padding: 5px 3px;
        align-self: center;
        width: 90%;
        background: rgba(255,255,255,0.7);
        border-radius: 10px;
    }

    .dragonDesc p{
        overflow-wrap: break-word;

        font-size: 20px;
    }

</style>