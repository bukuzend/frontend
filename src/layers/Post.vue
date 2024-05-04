<template>
  <div class="container">
    <BugerNav class="burgerNav"/>
    <div class="camera">
        <label class="picture" for="image" tabIndex="0">
            <span class="picture__image" v-if="!show"> Сделайте фото </span>
            <img :src="img" :alt="img" v-if="show" class="openedPic">
        </label>
        <input class="input" ref="file" type="file" name="image" id="image" capture="user" accept="image/*" @input="pickFile" multiple>

    </div>

    <div class="questions" >
        <QuestionsVue 
            v-if="show"
            v-bind:question="question" 
            v-bind:answerOne="answerOne"
            v-bind:answerTwo="answerTwo"
            v-on:ansQuest="ansQuest"/>
    </div>

    <div class="end" v-if="end">
        <FinalPageVue 
            v-bind:final="final"
            v-bind:finMessage="finMessage"
            v-on:finSend="finSend"/>
    </div>

    <div class="backFin" v-if="end"></div>

  </div>
</template>

<script>
import axios from 'axios';
import BugerNav from '../components/BugerNav.vue'
import QuestionsVue from '../components/Questions.vue';
import nodes from "../DragNodes"
import FinalPageVue from '../components/FinalPage.vue';
import Url from '@/Url';



const axiosC = axios.create({
    withCredentials: true
});

export default {

    data() {
        return {
            first: true,
            show: false,
            img: null,
            question: "Передние и задние крылья",
            answerOne: nodes["Zyg"].question[0],
            answerTwo: nodes["Ani"].question[0],
            node: null,

            final: null,
            finMessage: null,
            end: false,

            latitude: null,
            longitude: null,

            url: Url,


        }
    },
    components: {
        BugerNav, QuestionsVue, FinalPageVue
    },
    async beforeCreate() {
        const res = await axiosC.get(`${Url}/api/profile`)
                                .catch(res => {
                    console.log(res);
                    this.$router.push("/login")
                });
                 
    },
   
    methods: {

        ansQuest(ans){
            if (this.first){
                
                this.first = false
                if(ans){
                    this.question = nodes["Cal"].question[0];
                    this.answerOne = "Да";
                    this.answerTwo = "Нет";
                    this.node = nodes["Cal"]
                } else {
                    this.question = nodes["OphC"].question[0];
                    this.answerOne = "Да";
                    this.answerTwo = "Нет";
                    this.node = nodes["OphC"]
                }
            } else{
                if(ans){
                    if(!this.node.child) {
                        this.finMessage = "Поздравляем!"
                        this.final = this.node.answer;
                        this.end = true
                    } else {
                        this.node = nodes[this.node.child]
                        this.question = this.node.question[0];
                    }

                }else {
                    if(!this.node.next) {
                        this.finMessage = "Отправьте результат";
                        this.final = "Не удалось определить";
                        this.end = true;
                        
                    }else {
                        this.node = nodes[this.node.next]
                        this.question = this.node.question[0];
                    }

                }
            }
        },

        pickFile(e){
            this.question = "Передние и задние крылья";
            this.answerOne = nodes["Zyg"].question[0];
            this.answerTwo = nodes["Ani"].question[0];

            this.final = null;
            this.finMessage = null;

            this.first = true
            this.end = false;

            navigator.geolocation.getCurrentPosition(
                pos => {
                    
                    this.latitude = pos.coords.latitude;
                    this.longitude = pos.coords.longitude

                    try{
                        
                        const data = URL.createObjectURL(e.target.files[0])
                        this.img = data;
                        this.show = true;
                    } catch(err){
                        console.log(err);
                    }
                },
                err => {
                    alert("Включите на устройстве геолокаицю")
                })
            },

            async finSend(final){
                const file = document.querySelector(".input").files[0];

                const formData = new FormData();

                formData.append("image", file);
                formData.append("location", `${this.latitude} ${this.longitude}`)
                formData.append("dragon", /* this.final */ "NameDrag1")

                
                await axiosC.post(`${this.url}/api/profile/send`, formData)
                    .catch(err => console.log(err.message))


                this.$router.push({path: "/profile"});
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
    
    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }


    #image {
        display: none;
    }

    .image {
        display: none;
    }

    .camera {
        position: absolute;
        margin-top:10px;
        top:70px;
    }


    .picture {
        height: 250px;
        width: 80vw;

        aspect-ratio: 16/9;
        background: #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(0, 0, 0, 0.6);
        border: 2px dashed currentcolor;
        cursor: pointer;
        font-family: sans-serif;
        transition: color 300ms ease-in-out, background 300ms ease-in-out;
        outline: none;
        overflow: hidden;

        position: relative;

    }


    .picture:hover {
        color: #777;
        background: #ccc;
    }

    .picture:active {
        border-color: turquoise;
        color: turquoise;
        background: #eee;
    }

    .picture:focus {
        color: #777;
        background: #ccc;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .picture__img {

        max-width: 100%;
    }

    .openedPic {
        width: 100%;
        height: 100%;
        object-fit: cover;	
    }

    span {
        border: 1px solid black;
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .questions {
        position: absolute;
        top: 320px;
        margin-top: 20px ;
        width: 85vw;
    }

    .end {
        position: absolute;
        top: 20vh;
        width: 90vw;
        height: 350px;
        z-index: 3;
    }

    .backFin {
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0px;

        z-index: 2;
        overflow-x: hidden;
    }

</style>