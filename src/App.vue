<template>
  <div id="app">
      <div class="all">
          <div class="divHead">
              <div class="nameLogo">ToDo-list</div>
              <div class="userName">User_Name</div>
              <div class="exitTodo">Выйти</div>
          </div>
          <div class="divMain">
              <todo-list-colomn1 :arrTodo="arrTodo" :delTodo="delTodo" :addTodo="addTodo" :addTodoBut="addTodoBut" :deleteTitle="deleteTitle" :changeTodoEl="changeTodoEl" @changeTodoElem="changeTodoElem" @delChangeTodo="delChangeTodo" @showChangeTodo="showChangeTodo" @selectColorTodo="selectColorTodo" @yesDeleteTodo="yesDeleteTodo" @noDeleteTodo="noDeleteTodo" @showDeleteWindow="showDeleteWindow" @useItem="useItem" @addTodoItem="addTodoItem" @closeAddTodoBut="closeAddTodoBut" @show-addTodo="showAddTodo"/>
              <div class="secondColon"></div>
              <todo-list-colomn3 :arrTodo="arrTodo" :delTodoChild="delTodoChild" :addTodoChild="addTodoChild" :addTodoChildBut="addTodoChildBut" :errDone="errDone" :errNoDone="errNoDone" :useItemIndex="useItemIndex" :deleteTitleChild="deleteTitleChild" :changeTodoElChild="changeTodoElChild" @checkDone="checkDone" @changeTodoElemChild="changeTodoElemChild" @closeChangeChild="closeChangeChild" @showChangeChild="showChangeChild" @addTodoItemChild="addTodoItemChild" @yesDelTodoChild="yesDelTodoChild" @showDelTodoChild="showDelTodoChild" @closeDelTodoChild="closeDelTodoChild" @showAddTodoChild="showAddTodoChild" @closeAddTodoChild="closeAddTodoChild"/>
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
                  color: 0,
                  doneIndexChild: 0,
                  arrTodoChild: [
                      {
                          title: 'Купить хлеба',
                          dot: 1,
                          done: 0,
                      },
                      {
                          title: 'Купить Сахар',
                          dot: 1,
                          done: 0,
                      },
                      {
                          title: 'Купить Мясо',
                          dot: 1,
                          done: 0,
                      },
                  ],
              },
              {
                  title: 'Сходить на пары',
                  color: 0,
                  doneIndexChild: 0,
                  arrTodoChild: [
                      {
                          title: 'Купить хлеба',
                          dot: 1,
                          done: 0,
                      },
                  ],
              },
              {
                  title: 'Сходить в Кино',
                  color: 0,
                  doneIndexChild: 0,
                  arrTodoChild: [
                      {
                          title: 'Купить хлеба',
                          dot: 1,
                          done: 0,
                      },
                      {
                          title: 'Купить Сахар',
                          dot: 1,
                          done: 0,
                      },
                  ],
              },
          ],
          delTodo: false,
          delTodoChild: false,
          addTodo: false,
          addTodoBut: true,
          addTodoChild: false,
          addTodoChildBut: true,
          errDone: false,
          errNoDone: false,
          objectTodo: {},
          objectTodoChild: {},
          deleteTitle: '',
          deleteTitleChild: '',
          deleteIndex: 0,
          deleteIndexChild: 0,
          changeTodoEl: false,
          changeTodoElChild: false,
          indexChange: 0,
          indexChangeChild: 0,
          useItemIndex: 0,
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
            this.objectTodo.doneIndexChild = 0;
            this.arrTodo.push(this.objectTodo);
            this.arrTodo = JSON.parse(JSON.stringify(this.arrTodo));
            this.addTodo = false;
        },
        useItem: function (index) {
            for(let i = 0; i <= this.arrTodo.length - 1; i++) {
                if (this.arrTodo[i].color == 2) {
                    continue
                }
                this.arrTodo[i].color = 0;
            }
            if (this.arrTodo[index].color !== 2) {
                this.arrTodo[index].color = 1;
            }
            this.useItemIndex = index;
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
                if (this.arrTodo[i].color == 2) {
                    this.arrTodo[i].color = 2;
                } else {
                    this.arrTodo[i].color = 0;
                }
            }
            this.arrTodo[index].color = 1;
        },
        showChangeTodo: function (index) {
            this.changeTodoEl = true;
            this.indexChange = index;
        },
        delChangeTodo: function () {
            this.changeTodoEl = false;
        },
        changeTodoElem: function (changeTitle) {
            this.arrTodo[this.indexChange].title = changeTitle;
            this.changeTodoEl = false;
        },
        showDelTodoChild: function (index) {
            this.delTodoChild = true;
            this.deleteTitleChild = this.arrTodo[this.useItemIndex].arrTodoChild[index].title;
            this.deleteIndexChild = index;
        },
        closeDelTodoChild: function () {
            this.delTodoChild = false;
        },
        yesDelTodoChild: function () {
            if (this.deleteIndexChild == this.arrTodo[this.useItemIndex].arrTodoChild[this.arrTodo[this.useItemIndex].arrTodoChild.length -1]) {
                this.arrTodo.pop();
            } else if (this.deleteIndexChild !== this.arrTodo[this.useItemIndex].arrTodoChild[this.arrTodo[this.useItemIndex].arrTodoChild.length -1]) {
                this.arrTodo[this.useItemIndex].arrTodoChild.splice(this.deleteIndexChild, 1);
            }
            this.delTodoChild = false;
        },
        addTodoItemChild: function (addTitleChild, checkboxEnable) {
            this.objectTodoChild.title = addTitleChild;
            if (checkboxEnable !== false) {
                this.objectTodoChild.dot = 1;
            } else {
                this.objectTodoChild.dot = 0;
            }
            this.objectTodoChild.done = 0;
            this.arrTodo[this.useItemIndex].arrTodoChild.push(this.objectTodoChild);
            this.arrTodo[this.useItemIndex].arrTodoChild = JSON.parse(JSON.stringify(this.arrTodo[this.useItemIndex].arrTodoChild));
            this.addTodoChild = false;
        },
        showChangeChild: function (index) {
            this.changeTodoElChild = true;
            this.indexChangeChild = index;
        },
        closeChangeChild: function () {
            this.changeTodoElChild = false;
        },
        changeTodoElemChild: function (changeTitleChild) {
            this.arrTodo[this.useItemIndex].arrTodoChild[this.indexChangeChild].title = changeTitleChild;
            this.changeTodoElChild = false;
        },
        checkDone: function (index) {
            this.arrTodo[this.useItemIndex].arrTodoChild[index].done = 1;
            for(let i = 0; i <= this.arrTodo[this.useItemIndex].arrTodoChild.length - 1; i++) {
                if (this.arrTodo[this.useItemIndex].arrTodoChild[i].done == 1) {
                    this.arrTodo[this.useItemIndex].doneIndexChild += 1;
                    /* eslint-disable no-console */
                    console.log(this.arrTodo[this.useItemIndex].doneIndexChild);
                    /* eslint-enable no-console */
                }
            }
            if (this.arrTodo[this.useItemIndex].doneIndexChild == this.arrTodo[this.useItemIndex].arrTodoChild.length) {
                this.arrTodo[this.useItemIndex].color = 2;
                this.arrTodo[this.useItemIndex].doneIndexChild = 0;
            } else {
                this.arrTodo[this.useItemIndex].color = 1;
            }
        },
    }
  }
</script>

<style lang="scss">
    .all {
        width: 800px;
        margin-left: 330px;
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
