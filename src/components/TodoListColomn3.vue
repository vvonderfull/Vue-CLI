<template>
    <div class="thirdColon">
        <div class="nameTodo">TEST NAME TODO</div>
        <div class="childTodo">
            <input type="checkbox">
            <div class="childName">
                <div class="dotName"></div>
                CHILD TODO
            </div>
            <button class="changeChild"><img src="../../public/change.png"></button>
            <button class="delChild"><img src="../../public/del.png"></button>
        </div>
        <div v-if="delTodoChild" class="delTodoChild">
            <div class="delTodoText">Удалить список Сходить в Комп центр</div>
            <div class="delTodoButtonChild">
                <button class="delTodoNoChild">Нет</button>
                <button class="delTodoYesChild">Да</button>
            </div>
        </div>
        <div v-if="addTodoChild" class="addTodoChild">
            <div class="addTodoChild1">
                <div class="addNameChild">Добавить дело</div>
                <button @click="closeAddTodoChild" class="delAddTodoChild"><img src="../../public/del.png"></button>
            </div>
            <div class="addTodoChild2">
                <div>Название</div>
                <input type="text">
            </div>
            <div class="preorityChild">
                Срочно
                <input type="checkbox">
            </div>
            <button class="addButtonChild">Добавить</button>
        </div>
        <div class="childButAndDiv">
            <button @click="showAddTodoChild" v-if="addTodoChildBut" class="butAddTodoChild"><img src="../../public/add.png"></button>
            <div class="errorsTodoChild">
                <div v-if="errDone" class="error1"><img src="../../public/done.png">Успешно добавлено</div>
                <div v-if="errNoDone" class="error2"><img src="../../public/del.png">Невозможно добавить</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoListColomn3",
        props: ['arrTodoChild', 'delTodoChild', 'addTodoChild', 'addTodoChildBut', 'errDone', 'errNoDone'],
        methods: {
            showAddTodoChild: function () {
                this.$emit('showAddTodoChild');
            },
            closeAddTodoChild: function () {
                this.$emit('closeAddTodoChild');
            }
        },
    }
</script>

<style scoped>
    .thirdColon {
        display: flex;
        flex-direction: column;
        width: 490px;
    }
    .nameTodo {
        text-align: center;
        margin-top: 10px;
    }
    .childTodo {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
    }
    .childTodo input {
        width: 20px;
        height: 20px;
    }
    .changeChild {
        background-color: white;
        border: none;
        box-shadow: 1px 2px 0 #333333;
        border-radius: 50%;
        margin-left: 10px;
        outline: none;
    }
    .changeChild img {
        width: 25px;
    }
    .delChild {
        background-color: white;
        border: none;
        box-shadow: 1px 2px 0 #333333;
        border-radius: 50%;
        margin-left: 10px;
        outline: none;
    }
    .delChild img {
        width: 25px;
    }
    .childName {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 30px;
        border: 1px solid #333333;
        padding-right: 50px;
    }
    .addTodoChild {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 145px;
        margin-top: 120px;
        margin-left: 20px;
        border: 1px solid #333333;
        border-radius: 25px;
    }
    .addTodoChild1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .addTodoChild2 {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
    .delAddTodoChild img {
        width: 20px;
    }
    .delAddTodoChild {
        border: none;
        background-color: white;
        outline: none;
    }
    .addNameChild {
        margin: 0 105px 0 130px;
        font-size: 18px;
    }
    .addButtonChild {
        width: 100px;
        height: 30px;
        background-color: green;
        color: white;
        border: none;
        border-radius: 15px;
        margin-top: 20px;
        outline: none;
    }
    .addTodoChild2 input {
        margin: 0 70px 0 10px;
        outline: none;
    }
    .butAddTodoChild img {
        width: 50px;
    }
    .butAddTodoChild {
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        margin-top: 55px;
        margin-left: 5px;
        border-radius: 50px;
        border: none;
        background-color: white;
        box-shadow: 1px 2px 0 #333333;
        outline: none;
    }
    .childButAndDiv {
        display: flex;
        align-items: center;
    }
    .error1 {
        display: flex;
        align-items: center;
        margin-left: 20px;
        width: 330px;
        height: 50px;
        border: 1px solid #333333;
        border-radius: 25px;
    }
    .error1 img {
        margin: 0 10px 0 10px;
    }
    .error2 {
        display: flex;
        align-items: center;
        margin-left: 20px;
        width: 330px;
        height: 50px;
        border: 1px solid #333333;
        border-radius: 25px;
    }
    .error2 img {
        margin: 0 10px 0 10px;
    }
    .delTodoChild {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100px;
        width: 350px;
        margin-top: 50px;
        margin-left: 20px;
        border: 1px solid #333333;
        border-radius: 25px;
    }
    .delTodoButtonChild {
        margin-top: 15px;
    }
    .delTodoYesChild {
        background-color: green;
        color: white;
        border: none;
        width: 50px;
        height: 25px;
        border-radius: 15px;
        margin-left: 20px;
    }
    .delTodoNoChild {
        background-color: red;
        color: white;
        border: none;
        width: 50px;
        height: 25px;
        border-radius: 15px;
    }
    .dotName {
        background-color: red;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        margin-right: 50px;
    }
    .preorityChild {
        display: flex;
        margin: 10px 210px 0 0;
    }
    .preorityChild input {
        margin-left: 20px;
    }
</style>