<template>
    <div class="nav">
        <router-link class="link" to="/profile">Профиль</router-link>
        <router-link class="link" to="/profile/catched">Коллекция</router-link>
        <router-link class="link" to="/profile/post">Добавить</router-link>
        <router-link class="link" to="/library">Библиотека</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .nav {
        display: flex;
        justify-content: space-around;

        width: 100%;
        height: 30px;

    }

    .link {
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
    }
</style>