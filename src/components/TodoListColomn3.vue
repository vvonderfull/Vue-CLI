<template>
    <div class="thirdColon">
        <div class="nameTodo">TEST NAME TODO</div>
        <div v-for="(item,index) in arrTodo[this.useItemIndex].arrTodoChild" class="childTodo" :key="index">
            <check-box-done :index="index" :arrTodo="arrTodo" :useItemIndex="useItemIndex" :indexChildDone="indexChildDone" @checkDone="checkDone"/>
            <div class="childName">
                <div v-if="item.dot == 1" class="dotName"></div>
                {{ item.title }}
            </div>
            <button @click="showChangeChild(index)" class="changeChild"><img src="../../public/change.png"></button>
            <button @click="showDelTodoChild(index)" class="delChild"><img src="../../public/del.png"></button>
        </div>
        <div v-if="delTodoChild" class="delTodoChild">
            <div class="delTodoChildCont">
                <div class="delTodoText">Удалить дело {{ deleteTitleChild }}</div>
                <div class="delTodoButtonChild">
                    <button @click="closeDelTodoChild" class="delTodoNoChild">Нет</button>
                    <button @click="yesDelTodoChild" class="delTodoYesChild">Да</button>
                </div>
            </div>
        </div>
        <div class="changeTodoChild" v-if="changeTodoElChild">
            <div class="changeTodoElContChild">
                <div class="changeTodoLogoChild">
                    <div>Введите другое название списка</div>
                    <button @click="closeChangeChild" class="delAddTodo"><img src="../../public/del.png"></button>
                </div>
                <div class="changeTodoInputChild">
                    <input v-model="changeTitleChild" type="text">
                    <button @click="changeTodoElemChild" class="change"><img src="../../public/change.png"></button>
                </div>
            </div>
        </div>
        <div v-if="addTodoChild" class="addTodoChild">
            <div class="addTodoChildCont">
                <div class="addTodoChild1">
                    <div class="addNameChild">Добавить дело</div>
                    <button @click="closeAddTodoChild" class="delAddTodoChild"><img src="../../public/del.png"></button>
                </div>
                <div class="addTodoChild2">
                    <div>Название</div>
                    <input v-model="addTitleChild" type="text">
                </div>
                <div class="preorityChild">
                    Срочно
                    <input v-model="checkboxEnable" type="checkbox">
                </div>
                <button @click="addTodoItemChild" class="addButtonChild">Добавить</button>
            </div>
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
    import CheckBoxDone from './CheckBoxDone.vue'
    export default {
        name: "TodoListColomn3",
        props: ['arrTodo', 'delTodoChild', 'addTodoChild', 'addTodoChildBut', 'errDone', 'errNoDone', 'useItemIndex', 'deleteTitleChild', 'changeTodoElChild'],
        data() {
            return {
                addTitleChild: '',
                checkboxEnable: false,
                changeTitleChild: '',
                arrCheckDone: [],
                checkDoneInput: '',
                indexChildDone: 0,
            }
        },
        components: {
            CheckBoxDone,
        },
        methods: {
            showAddTodoChild: function () {
                this.$emit('showAddTodoChild');
            },
            closeAddTodoChild: function () {
                this.$emit('closeAddTodoChild');
            },
            closeDelTodoChild: function () {
                this.$emit('closeDelTodoChild');
            },
            showDelTodoChild: function (index) {
                this.$emit('showDelTodoChild', index);
            },
            yesDelTodoChild: function () {
                this.$emit('yesDelTodoChild');
            },
            addTodoItemChild: function () {
                this.$emit('addTodoItemChild', this.addTitleChild, this.checkboxEnable);
                this.addTitleChild = '';
            },
            showChangeChild: function (index) {
                this.$emit('showChangeChild', index);
            },
            closeChangeChild: function () {
                this.$emit('closeChangeChild');
            },
            changeTodoElemChild: function () {
                this.$emit('changeTodoElemChild', this.changeTitleChild);
                this.changeTitleChild = '';
            },
            checkDone: function (index) {
                this.$emit('checkDone', index);
            },
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
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
    }
    .addTodoChildCont {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 165px;
        background-color: white;
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
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
     }
    .delTodoChildCont {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100px;
        width: 350px;
        background-color: white;
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
        outline: none;
    }
    .delTodoNoChild {
        background-color: red;
        color: white;
        border: none;
        width: 50px;
        height: 25px;
        border-radius: 15px;
        outline: none;
    }
    .dotName {
        display: block;
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
    .changeTodoChild {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
    }
    .changeTodoElContChild{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: white;
        width: 400px;
        height: 110px;
        margin-top: 50px;
        border: 1px solid #333333;
        border-radius: 25px;
    }
    .changeTodoLogoChild {
        display: flex;
        margin-bottom: 10px;
    }
    .changeTodoLogoChild div {
        margin: 0px 60px 0 70px;
    }
    .changeTodoInputChild {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .change {
        background-color: white;
        border: none;
        box-shadow: 1px 2px 0 #333333;
        border-radius: 50%;
        margin-left: 10px;
        outline: none;
    }
    .change img {
        width: 25px;
    }
    .delAddTodo img {
        width: 20px;
    }
    .delAddTodo {
        border: none;
        background-color: white;
        outline: none;
    }
</style>