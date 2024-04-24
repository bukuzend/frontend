<template>
    <div class="container">
        <div class="field">
            <div class="inputInf">
                <input v-model="login" placeholder="Логин"/>
                <input v-model="password" placeholder="Пароль"/>
                <p class="error" v-if="error"> {{ errorMessage }}</p>
            </div>
            <div class="btn">
                <button @click="clkAuht" class="btnIn">Войти</button>
                <router-link to="/reg" class="link">Регистрация</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Url from '@/Url';
    
    const axiosC = axios.create({
        withCredentials: true
    });

    export default {
        data() {
            return {
                login:"",
                password:"",
                error: false,
                errorMessage: "Неверный логин или пароль.",
                url: Url
            }
        },
        beforeCreate() {
            axiosC.post(`${Url}/api/auth/login`)
                .catch(res => {
                    try{
                    if(res.response.status === 300 && res.response.data === "authed") {
                        this.$router.push({ path: "/profile" })
                    }}
                    catch{}})
        },
        methods: {
            async clkAuht() {
                axiosC.post(`${this.url}/api/auth/login`,{
                    login:this.login,
                    password: this.password
                }).then(res => {
                    this.$router.push({path:"/profile"})
                }).catch(err => {
                    console.log(err);
                    this.error = true;
                })
            }
        }
        
    }
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;

        background-color: rgba(0,0,0,0);
        
    }
    .field {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        border: 1px solid black;
        border-radius: 30px ;
        width: 85vw;
        height: 50vh;
    
        
    }
    .inputInf {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        gap: 30px;
    }

    input {
        height: 50px;
        width: 100%;
        border-radius: 20px;
        border: 1px solid black;

        padding-left: 10px;

        font-size: 20px;
        font-weight: bold;
        color: black;

        outline: none;

        background-color: rgba(150,255,255,0);
    }

    input:focus {
        background-color: rgba(255,255,255,1) ;
        transition: 0.3s;
    }

    .error {
        overflow-wrap: break-word;
        position: relative;
        width: fit-content;
        top: -20px;
        color: rgba(255,0,0,0.8);
        background: rgba(255,255,255,0.7);
        border-radius: 5px;
        padding: 2px 4px;
        
        justify-self: flex-start;
        font-size: 20px;
        font-weight: bold;
    }
    
    .btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        gap:5px

    }

    .btnIn {
        background: none;
        border-radius: 15px;

        border:2px solid black;

        height: 40px;
        width: 40%;

        font-size: 20px;
        font-weight: bold;
    }

    .btnIn:focus {
        animation: change-color 0.4s;
    }

    @keyframes change-color {
        from {
            background-color: none ;
        }
        50% {
            background-color: rgba(255,255,255,1) ;
        }
        to {
            background-color: none ;
        }
    }

    

    .link {
        
        /* font-weight: bold; */

        color:black;

        text-decoration: none;
    }
</style>