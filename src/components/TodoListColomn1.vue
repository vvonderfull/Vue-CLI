<template>
    <div class="firstColon">
        <div class="contSelect">
            <select @change="selectColorTodo(valueOption)" v-model="valueOption">
                <option v-for="(item, index) in arrTodo" :value="index" :key="index">{{ item.title }}</option>
            </select>
        </div>
        <div class="listTodo">
            <div v-for="(item, index) in todo" class="exampleTodo" :key="index">
                <div class="contTodo" @click="useItem(index)" :class="{exampleColorBlue: item.color == 1,boldBorder: item.color == 1, exampleColorGreen: item.color == 2}">{{ item.title }}</div>
                <button class="change" @click="showChangeTodo(index)"><img src="../../public/change.png"></button>
                <button @click="showDeleteWindow(index)" class="del"><img src="../../public/del.png"></button>
            </div>
        </div>
        <div class="delTodo" v-if="delTodo">
            <div class="delTodoCont">
                <div class="delTodoText">Удалить список {{ deleteTitle }}</div>
                <div class="delTodoButton">
                    <button @click="noDeleteTodo" class="delTodoNo">Нет</button>
                    <button @click="yesDeleteTodo" class="delTodoYes">Да</button>
                </div>
            </div>
        </div>
        <div class="changeTodo" v-if="changeTodoEl">
            <div class="changeTodoElCont">
                <div class="changeTodoLogo">
                    <div>Введите другое название списка</div>
                    <button @click="delChangeTodo" class="delAddTodo"><img src="../../public/del.png"></button>
                </div>
                <div class="changeTodoInput">
                    <input v-model="changeTitle" type="text">
                    <button @click="changeTodoElem" class="change"><img src="../../public/change.png"></button>
                </div>
            </div>
        </div>
        <div class="addTodo" v-if="addTodo">
            <div class="addTodoCont">
                <div class="addTodo1">
                    <div class="addName">Добавить список дел</div>
                    <button @click="closeAddTodoBut" class="delAddTodo"><img src="../../public/del.png"></button>
                </div>
                <div class="addTodo2">
                    <div>Название</div>
                    <input v-model="addTitle" type="text">
                </div>
                <button @click="addTodoItem" class="addButton">Добавить</button>
            </div>
        </div>
        <button @click="showAddTodo" class="butAddTodo" v-if="addTodoBut"><img src="../../public/add.png"></button>
    </div>
</template>

<script>
    export default {
        props: ['arrTodo', 'delTodo', 'addTodo', 'addTodoBut', 'deleteTitle', 'changeTodoEl'],
        data() {
            return {
                todo: '',
                addTitle: '',
                valueOption: 0,
                changeTitle: '',
            }
        },
        methods: {
            showDeleteWindow: function (index) {
                this.$emit('showDeleteWindow', index);
            },
            showAddTodo: function () {
                this.$emit('show-addTodo');
            },
            closeAddTodoBut: function () {
                this.$emit('closeAddTodoBut');
            },
            addTodoItem: function () {
                this.$emit('addTodoItem', this.addTitle);
                this.addTitle = '';
            },
            useItem: function (index) {
                this.$emit('useItem', index);
            },
            yesDeleteTodo: function () {
                this.$emit('yesDeleteTodo');
            },
            noDeleteTodo: function () {
                this.$emit('noDeleteTodo');
            },
            selectColorTodo: function (valueOption) {
                this.$emit('selectColorTodo', valueOption);
            },
            showChangeTodo: function (index) {
                this.$emit('showChangeTodo', index);
            },
            delChangeTodo: function () {
                this.$emit('delChangeTodo');
            },
            changeTodoElem: function () {
                this.$emit('changeTodoElem', this.changeTitle);
                this.changeTitle = '';
            }

        },
        async mounted () {
            await this.$store.dispatch('fetchTodo')
            console.log(this.$store.state.todo.todo)
            this.todo = this.$store.state.todo.todo
        },
    }
</script>

<style scoped>
    .firstColon {
        display: flex;
        flex-direction: column;
        width: 300px;
        border-right: 1px solid #333333;
    }
    .contSelect {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #333333;
    }
    .contSelect select {
        width: 150px;
        background-color: white;
        border: 1px solid #333333;
        border-radius: 5px;
        outline: none;
    }
    .exampleTodo {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .contTodo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 30px;
        border: 1px solid #333333;
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
    .del {
        background-color: white;
        border: none;
        box-shadow: 1px 2px 0 #333333;
        border-radius: 50%;
        margin-left: 10px;
        outline: none;
    }
    .del img {
        width: 25px;
    }
    .addTodo {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
    }
    .addTodoCont {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: 130px;
        background-color: white;
        margin-top: 75px;
        border: 1px solid #333333;
        border-radius: 25px;
    }
    .addTodo1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .addTodo2 {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
    .delAddTodo img {
        width: 20px;
    }
    .delAddTodo {
        border: none;
        background-color: white;
        outline: none;
    }
    .addName {
        margin: 0 80px 0 100px;
        font-size: 18px;
    }
    .addButton {
        width: 100px;
        height: 30px;
        background-color: green;
        color: white;
        border: none;
        border-radius: 15px;
        margin-top: 20px;
        outline: none;
    }
    .addTodo2 input {
        margin: 0 60px 0 10px;
        outline: none;
    }
    .butAddTodo img {
        width: 50px;
    }
    .butAddTodo {
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        margin-left: 5px;
        border-radius: 50px;
        border: none;
        background-color: white;
        box-shadow: 1px 2px 0 #333333;
        outline: none;
    }
    .delTodo {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);

    }
    .delTodoCont {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: white;
        width: 400px;
        height: 100px;
        margin-top: 50px;
        border: 1px solid #333333;
        border-radius: 25px;
    }
    .delTodoButton {
        margin-top: 15px;
    }
    .delTodoYes {
        background-color: green;
        color: white;
        border: none;
        width: 50px;
        height: 25px;
        border-radius: 15px;
        margin-left: 20px;
        outline: none;
    }
    .delTodoNo {
        background-color: red;
        color: white;
        border: none;
        width: 50px;
        height: 25px;
        border-radius: 15px;
        outline: none;
    }
    .changeTodo {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
    }
    .changeTodoElCont{
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
    .changeTodoLogo {
        display: flex;
        margin-bottom: 10px;
    }
    .changeTodoLogo div {
        margin: 0px 60px 0 70px;
    }
    .changeTodoInput {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .exampleColorBlue {
        background-color: cornflowerblue;
    }
    .exampleColorGreen {
        background-color: forestgreen;
    }
    .boldBorder {
        border: 2px solid #333333;
    }
</style>