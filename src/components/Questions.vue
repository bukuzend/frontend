<template>
    <div class="containerModule">
        <div class="questionOne">
            {{ question }}
        </div>
        <div class="answerOne" @click = "ansQuest(true)">
            {{ answerOne }}
        </div>
        <div class="answerTwo" @click = "ansQuest(false)">
            {{ answerTwo }}
        </div>
    </div>
  
</template>

<script>
export default {
    props: {
        question: {
            type: String,
            required: true,
            default: "error",
        },
        answerOne: {
            type: String,
            required: true,
            default: "error",
        },
        answerTwo: {
            type: String,
            required: true,
            default: "error",
        }
    },
    methods: {
        ansQuest(ans) {
            this.$emit("ansQuest", ans)
        }
    }
}
</script>

<style scoped>

    .containerModule {
        display: flex;
        flex-direction: column;
        gap:20px
    }

    .questionOne {

        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;

        display: flex;
        justify-content: center;
        border-radius: 20px;
        border: 1px black  solid;
        font-size: 19px;
        font-weight: bold;
        background: rgba(256, 256, 256, 0.9);
    }

    .answerOne, .answerTwo {
        background: rgba(256, 256, 256, 0.7);
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 18px;
        border-radius: 10px;
    }

</style>