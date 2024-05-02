<template>
    <div class="conteiner">
        <BugerNav class="burgerNav"/>
        <div class="search">
            <input v-model="search" placeholder="Поиск" />
        </div>
        <div class="dragonflys">
            <div class="dragon" v-for="item of itemsFil" :key="item.name">
                
                <router-link class="link" :to="{path:`/library/${item.name}`}"><Dragonfly :item="item.name"/></router-link>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import BugerNav from '../components/BugerNav.vue'
import Dragonfly from '../components/DragonComp.vue'
import Url from '@/Url';

const axiosC = axios.create({
    withCredentials: true
  });

export default {
    components: {
        BugerNav, Dragonfly
    },

    async beforeCreate() {
        axiosC.get(`${Url}/api/lib`)
        .then(res => {
            this.items = res.data;
            return this.items
        })
        .catch(res => {
                    console.log(res);
                    this.$router.push("/login")
                });
        
    },
    data() {
        return {
            search: "",
            items: [],
            url: Url,
        }
    },
    computed: {
        itemsFil() {
            const filtered = this.items.filter(item => {
                return item.name.toLowerCase().includes(this.search.toLowerCase())})
            if(this.search === null) return this.items
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

        margin-top: 30px;

    }

    .dragon {
        width: 45%;
    }

</style>