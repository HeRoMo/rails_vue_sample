<template lang="pug">
  #todo-app
    h2 TODO List
    add-todo(@add="appendTodo")
    ul
      todo-item(v-for="todo in todos", :todo="todo", :key="todo.id")

</template>

<script>
  'use strict';
  import axios from 'axios';
  import AddTodo from './AddTodo.vue'
  import TodoItem from './TodoItem.vue'
  export default {
    components:{
      'add-todo': AddTodo,
      'todo-item': TodoItem
    },
    data: function(){
      return { todos: []}
    },
    methods: {
      appendTodo(todo){
        this.$data.todos.push(todo)
      }
    },
    // ライフサイクルフック
    beforeCreate(arg) {
      console.log("beforeCreate");
      axios.get('//localhost:3000/todo/list').then(
        res => {
          this.todos = res.data
        }
      )
    }
  }
</script>

<style lang="sass">
  body
    background-color: #e5eaff
</style>
<style lang="sass" scoped>
  h2
    border-bottom: solid 1px black
</style>
