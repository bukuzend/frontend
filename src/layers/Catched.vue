<template>
    <div class="conteiner">
        <BugerNav class="burgerNav"/>
        <div class="search">
            <input v-model="search" placeholder="Поиск" />
        </div>
        <div class="dragonflys">
            <div class="dragon" v-for="item of itemsFil" :key="item.dragon"> 
                <!-- Out users images of dragonflys -->
                <router-link class="link" :to="{path:`/library/${item.dragon}`}"><Dragonfly :item="item.dragon"/></router-link>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import BugerNav from '../components/BugerNav.vue'
import Dragonfly from '../components/DragonComp.vue'

const axiosC = axios.create({
    withCredentials: true
  });

export default {
    components: {
        BugerNav, Dragonfly
    },

    async beforeCreate() {
        axiosC.get("http://localhost:3000/api/profile/catched")
            .then(res => {
                this.items = res.data;
            })
    },
    data() {
        return {
            search: "",
            items: []
        }
    },

    computed: {
        itemsFil() {
            const filtered = this.items.filter(item => {
                return item.dragon.toLowerCase().includes(this.search.toLowerCase())})
            if(this.search === null) return this.items
            else return filtered
        }
    }

}
</script>

<style scoped>
    .burgerNav {
        position: absolute;

        top:30px;
    }
    .conteiner {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }

    .search {
        position: absolute;
        top: 100px;

        width: 90%;

    }

    .search input {
        background-color: rgba(191, 191, 191, 0.2);
        height: 35px;
    }

    .search input:focus {
        transition: 0.3s;
        background-color: rgba(255, 255, 255, 1);
    }

    .dragonflys {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        gap: 20px;

        position: absolute;

        top: 20%;
    }

    .dragon {
        width: 45%;
    }

</style>