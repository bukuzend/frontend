<template>
    <div class="conteiner">
        <BugerNav class="burgerNav"/>
        <div class="search">
            <input v-model="search" placeholder="Поиск" />
        </div>
        <div class="dragonflys">
            <div class="dragon" v-for="item of itemsFil" :key="item.dragon"> 
                <router-link class="link" :to="{path:`/library/${item.dragon}`}"><Dragonfly :item="item.dragon"/></router-link>
            </div>
            <div class="waiting" v-for="item of itemsW" :key="item.name">
                <router-link class="link" :to="{path:`/library/${item.name}`}"><DragonCompWait :item="item"/></router-link>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import BugerNav from '../components/BugerNav.vue';
import Dragonfly from '../components/DragonComp.vue';
import DragonCompWait from '@/components/DragonCompWait.vue';
import Url from '@/Url';


const axiosC = axios.create({
    withCredentials: true
  });

export default {
    components: {
        BugerNav, Dragonfly, DragonCompWait
    },

    async beforeCreate() {
        await axiosC.get(`${Url}/api/profile/catched`)
            .then(res => {
                this.items = res.data;
            });
        await axiosC.get(`${Url}/api/profile/waiting`)
            .then(res => {
                this.itemsW = res.data;
            });
    },
    data() {
        return {
            search: "",
            items: [],
            itemsW: [],
            url:Url
        }
    },

    computed: {
        itemsFil() {
            const filtered = this.items.filter(item => {
                return item.dragon.toLowerCase().includes(this.search.toLowerCase())})
            if(this.search === null) return this.items
            else return filtered
        },
        itemsWait() {
            const filtered = this.itemsW.filter(item => {
                return item.dragon.toLowerCase().includes(this.search.toLowerCase())})
            if(this.search === null) return this.itemsW
            else return filtered
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

    }

    .search {
        margin-top: 20px;

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

        margin-top:30px;
    }

    .dragon, .waiting {
        width: 150px;
        margin-bottom: 30px;
    }


</style>