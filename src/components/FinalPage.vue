<template>
  <div class="final">
    <span class="finM">{{ finMessage }}</span>
    <span class="fin">Ваш результат: <br><span class="result">{{ final }}</span></span>
    <button @click="finSend(final)" class="butFin"> Отправить </button>
    
  </div>
</template>

<script>
export default {
    props: {
        final: {
            type: String,
            required: true,
            default: "error"
        },
        finMessage: {
            type: String,
            required: true,
            default: "error",
        }
    },

    methods: {
        finSend(final) {
            this.$emit("finSend", final)
        }
    }

}
</script>

<style scoped>
    .final {
        width: 100%;
        height: 100%;
        background: rgba(256, 256, 256, 0.9);

        border: 1px solid black;
        border-radius: 30px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .finM {
        width:100%;
        display: flex;
        justify-content: center;
        font-size: 40px;
    }

    .fin {
        font-size:25px;
    }

    .result {
        font-weight: bold;
    }
    
    .butFin {
        width: 130px;
        height: 40px;
        border-radius: 15px ;
        background: white;
    }

</style>