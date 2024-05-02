<template>
  <div class="conteiner">
    <BugerNav class="burgerNav"/>
    <div class="profileInf">
        <div class="profileIcon">
            <!-- <img src="http://localhost:3000/api/profile/icon/download" class="image" alt="profileIcon"> -->
            <img :src="`https://collector35.ru/api/profile/icon`" class="image"> 
        </div>
        <div class="profileName">
            <p>{{ fname }} {{ sname }} </p>
            <p> Lvl: {{ lvl }} {{ emoji }}</p>
        </div>
    </div>
    <div class="profileAchivemnets">

    </div>
    <div class="exit">
        <button class="exitBtn" @click="Exit">Выход</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BugerNav from '@/components/BugerNav.vue';
import Url from '@/Url';

const axiosC = axios.create({
    withCredentials: true
  });
export default {
    components:{
        BugerNav
    },
    
    data() {
        return {
            fname: "",
            sname: "",
            lvl: null,
            emoji: "",
            url: Url,
        }
    },
    async beforeCreate() {
        const res = await axiosC.get(`${Url}/api/profile`)
                                .catch(res => {
                    console.log(res);
                    this.$router.push("/login")
                });
            this.fname = res.data[0].fname;
            this.sname = res.data[0].sname;
            this.lvl = res.data[0].lvl;
            // this.emoji = res.data[0].emoji;

            console.log(res);
    },
    methods: {

        Exit() {
            axiosC.get(`${this.url}/api/profile/unauth`)
                .then(res => {
                    console.log(res);
                    this.$router.push("/login")
                }).catch(err => console.log(err.message))
            console.log(document.cookie.search("aToken")); 
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
    .profileInf {

        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 15px;

    }
    .profileIcon {
        width: 70%;
        position: relative;

    }

    .image {
        width: 100%;
        height: 100%;

        border-radius: 100%;
    }

    .profileName p {
        display: flex;
        justify-content: center;

        font-size: 25px;
    }

    .exit {
        position: absolute;
        top: 23px;
        left: 20px;
    }

    .exitBtn {
        border: none;
        background: none;
        font-size: 20px;
        font-weight: bold;
    }
</style>