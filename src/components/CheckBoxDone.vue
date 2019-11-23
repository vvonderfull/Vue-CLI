<template>
    <div class="checkBox">
        <div @click="checkDone">
            <img v-if="trueDone" src="../../public/done.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckBoxDone",
        props: ['index'],
        data() {
            return {
                trueDone: false,
            }
        },
        methods: {
            checkDone: function () {
                this.trueDone = !this.trueDone;
                if (this.trueDone == true) {
                    this.$emit('checkDone', this.index);
                }
            }
        },
    }
</script>

<style scoped>
    .checkBox div {
        border: 1px solid #333333;
        width: 20px;
        height: 20px;
        margin: 0 5px 0 5px;
    }
    .checkBox div img {
        width: 20px;
    }
</style>