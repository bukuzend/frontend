<template>
  <div class="container">
    <div class="field">
        <div class="inputInf">
            <div class="login inField">
                <input v-model="login" placeholder="Логин"/>
                <p class="error" v-if="errorLogin"> {{ errorMessage[0] }}</p>
            </div>

            <div class="password inField">
                <input v-model="password" placeholder="Пароль"/>
                <p class="error" v-if="errorPassword"> {{ errorMessage[1] }}</p>
            </div>

            <div class="email inField">
                <input v-model="email" placeholder="Email"/>
                <p class="error" v-if="errorEmail"> {{ errorMessage[2] }}</p>
            </div>  

            <div class="fname inField">
                <input v-model="fname" placeholder="Имя"/>
                <p class="error" v-if="errorFname"> {{ errorMessage[3] }}</p>
            </div>

            <div class="sname inField">
                <input v-model="sname" placeholder="Фамилия"/>
                <p class="error" v-if="errorSname"> {{ errorMessage[4] }}</p>
            </div>
        </div>
        <div class="btn">
            <button @click="clkReg" class="btnIn">Зарегистрироваться</button>
            <router-link to="/login" class="link">Войти</router-link>
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
            login: "",
            password: "",
            email: "",
            fname: "",
            sname: "",
            errorLogin: false,
            errorPassword: false,
            errorEmail:false,
            errorFname:false,
            errorSname:false,
            errorMessage: ["Заполните поле","Заполните поле","Заполните поле","Заполните поле","Заполните поле"],
            url: Url,
            symbols: "!?./,\\|=+-_\'\" ",
        }
    },

    beforeCreate() {
            axiosC.post(`${this.url}/api/auth/login`)
                .catch(res => {
                    try{
                    if(res.response.status === 300 && res.response.data === "authed") {
                        this.$router.push({ path: "/profile" })
                    }}
                    catch{}})
        },

    methods: {
        async clkReg() {
            this.login === "" && (this.errorLogin = true);
            this.email === "" && (this.errorEmail = true);
            this.password === "" && (this.errorPassword = true);
            this.fname === "" && (this.errorFname = true);
            this.sname === "" && (this.errorSname = true);

            if((this.login && this.email && this.password && this.fname && this.sname) !== ""){
                if(this.login.split('').filter(item => this.symbols.split('').includes(item)).length) {
                    this.errorLogin = true;
                    this.errorMessage[0] = `Логин не должен содержать пробелов и символов ${this.symbols}`
                }
                else {
                    this.errorLogin = false 
                    this.errorEmail = false 
                    this.errorPassword = false
                    this.errorFname = false 
                    this.errorSname = false
                    axiosC.post(`${this.url}/api/auth/register`, {
                        login:this.login,
                        password:this.password,
                        email:this.email,
                        fname:this.fname,
                        sname:this.sname
                    }).then(res => {
                        console.log(res);
                        this.$router.push({path:"/login"})
                    }).catch(err => {
                        this.errorLogin = true
                        this.errorMessage[0] = "Пользователь существует"
                        console.log(err);
                    })
                }        
                
            }else {
                if(this.login === "") this.errorMessage[0] = "Заполните поле";
                this.login !== "" && (this.errorLogin = false);
                this.email !== "" && (this.errorEmail = false);
                this.password !== "" && (this.errorPassword = false);
                this.fname !== "" && (this.errorFname = false);
                this.sname !== "" && (this.errorSname = false);
            }

            
        }
    }

}
</script>

<style>
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
        
    
        position: absolute;
        top: 50px;
        
    }
    .inputInf {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        gap: 25px;

        margin-top: 15px;
    }

    .inField {
        width: 100%;
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
        position: fixed;
        color: red;

        background: rgba(255,255,255,0.7);
        border-radius: 5px;
        padding: 1px 2px;
        
        justify-self: flex-start;
    }
    
    .btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        gap:5px;

        margin-top: 35px ;
        margin-bottom: 15px;

    }

    .btnIn {
        background: none;
        border-radius: 15px;

        border:2px solid black;

        height: 40px;
        width: 70%;

        font-size: 18px;
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
        

        color:black;

        text-decoration: none;
    }

</style>