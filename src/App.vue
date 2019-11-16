<template>
  <div id="app">
      <div class="all">
          <div class="divHead">
              <div class="nameLogo">ToDo-list</div>
              <div class="userName">User_Name</div>
              <div class="exitTodo">Выйти</div>
          </div>
          <div class="divMain">
              <todo-list-colomn1 :arrTodo="arrTodo" :delTodo="delTodo" :addTodo="addTodo" :addTodoBut="addTodoBut" :deleteTitle="deleteTitle" :changeTodoEl="changeTodoEl" @showChangeTodo="showChangeTodo" @selectColorTodo="selectColorTodo" @yesDeleteTodo="yesDeleteTodo" @noDeleteTodo="noDeleteTodo" @showDeleteWindow="showDeleteWindow" @useItem="useItem" @addTodoItem="addTodoItem" @closeAddTodoBut="closeAddTodoBut" @show-addTodo="showAddTodo"/>
              <div class="secondColon"></div>
              <todo-list-colomn3 :arrTodoChild="arrTodoChild" :delTodoChild="delTodoChild" :addTodoChild="addTodoChild" :addTodoChildBut="addTodoChildBut" :errDone="errDone" :errNoDone="errNoDone" @showAddTodoChild="showAddTodoChild" @closeAddTodoChild="closeAddTodoChild"/>
          </div>
      </div>
  </div>

</template>

<script>
  import TodoListColomn1 from './components/TodoListColomn1.vue'
  import TodoListColomn3 from "./components/TodoListColomn3.vue";
  export default {
    name: 'app',
    data() {
      return {
          arrTodo: [
              {
                  title: 'Сходить в Офис',
                  color: 0
              },
              {
                  title: 'Сходить на пары',
                  color: 0
              },
              {
                  title: 'Сходить в Кино',
                  color: 0
              },
          ],
          arrTodoChild: [],
          delTodo: false,
          delTodoChild: false,
          addTodo: false,
          addTodoBut: true,
          addTodoChild: false,
          addTodoChildBut: true,
          errDone: false,
          errNoDone: false,
          objectTodo: {},
          deleteTitle: '',
          deleteIndex: 0,
          changeTodoEl: false,
      }
    },
    components: {
        TodoListColomn1,
        TodoListColomn3,
    },
    methods: {
        showDeleteWindow: function (index) {
            this.delTodo = true;
            this.deleteTitle = this.arrTodo[index].title;
            this.deleteIndex = index;

        },
        showAddTodo: function () {
            this.addTodo = true;
        },
        closeAddTodoBut: function () {
            this.addTodo = false;
        },
        addTodoItem: function (addTitle) {
            this.objectTodo.title = addTitle;
            this.objectTodo.color = 0;
            this.arrTodo.push(this.objectTodo);
            this.arrTodo = JSON.parse(JSON.stringify(this.arrTodo));
            this.addTodo = false;
        },
        useItem: function (index) {
            for(let i = 0; i <= this.arrTodo.length - 1; i++) {
                this.arrTodo[i].color = 0;
            }
            this.arrTodo[index].color = 1;
        },
        showAddTodoChild: function () {
            this.addTodoChild = true;
        },
        closeAddTodoChild: function () {
            this.addTodoChild = false;
        },
        yesDeleteTodo: function () {
            if (this.deleteIndex == this.arrTodo[this.arrTodo.length - 1]) {
                this.arrTodo.pop();
            } else if (this.deleteIndex !== this.arrTodo[this.arrTodo.length - 1]) {
                this.arrTodo.splice(this.deleteIndex, 1);
            }
            this.delTodo = false;
        },
        noDeleteTodo: function () {
            this.delTodo = false;
        },
        selectColorTodo: function (index) {
            for(let i = 0; i <= this.arrTodo.length - 1; i++) {
                this.arrTodo[i].color = 0;
            }
            this.arrTodo[index].color = 1;
        },
        showChangeTodo: function () {
            this.changeTodoEl = true;
        }
    }
  }
</script>

<style lang="scss">
    .all {
        width: 800px;
    }
    .divHead {
        display: flex;
        height: 30px;
        background-color: #333333;
        align-items: center;
    }
    .nameLogo {
        font-size: 16px;
        color: white;
        margin-left: 10px;
    }
    .userName {
        font-size: 14px;
        color: white;
        margin-left: 30px;
    }
    .exitTodo {
        font-size: 14px;
        color: white;
        margin-left: 570px;
    }
    .divMain {
        display: flex;
        height: 600px;
        border: 1px solid #333333;
    }
    .secondColon {
        width: 10px;
        border-right: 1px solid #333333;
    }

</style>
