<template lang="pug">
  #todo-app
    h2 TODO List
    add-todo
    ul
      todo-item(v-for="todo in this.$store.state.todos", :todo="todo", :key="todo.id")

</template>

<script>
  'use strict';
  import AddTodo from './AddTodo.vue'
  import TodoItem from './TodoItem.vue'
  import store from './store'

  export default {
    components:{
      'add-todo': AddTodo,
      'todo-item': TodoItem
    },
    store,
    methods: {
    },
    // ライフサイクルフック
    beforeCreate(arg) {
      console.log("beforeCreate");
      store.dispatch('loadData')
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
