<template>
    <div class="conteinerBurg">
        <div class="iconBurg" @click="menu = !menu">
            <img src="../assets/ham_menu.svg">
        </div>
        <div class="nav" v-if="menu">
            <div class="firstLine">
                <router-link class="link" to="/profile">Профиль</router-link>
                <router-link class="link" to="/profile/catched">Коллекция</router-link>
            </div>
            <div class="secondLine">
                <router-link class="link" to="/profile/post">Добавить</router-link>
                <router-link class="link" to="/library">Библиотека</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu:false
        }
    }
}
</script>

<style scoped>
    .nav {
        background: rgba(224, 224, 224, 0.6);
        border-radius: 20px;
        border: 1px solid black;

        width: 90vw;

        padding: 15px 20px;

        position: absolute;
        left: 5vw;
    }

    .firstLine, .secondLine {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .firstLine {
        margin-bottom: 20px;
    }

    
    .link {
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
    }
</style>