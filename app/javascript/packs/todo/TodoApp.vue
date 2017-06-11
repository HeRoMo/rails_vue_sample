<template lang="pug">
  #todo-app
    h2 TODO List
    ul
      todo-item(v-for="todo in todos", :todo="todo", :key="todo.id")

</template>

<script>
  'use strict';
  import axios from 'axios';
  import TodoItem from './TodoItem.vue'
  export default {

    props: {

    },
    components:{
      'todo-item': TodoItem
    },
    data: function(){
      return { todos: []}
    },
    methods: {

    },
    // ライフサイクルフック
    beforeCreate(){
      console.log("beforeCreate")
    },
    created(arg) {
      console.log("Created")
      console.log(this)
      axios.get('//localhost:3000/todo/list').then(
        res => {
          this.todos = res.data
        }
      )
    },
    beforeMount(){
      console.log("beforeMount")
    },
    mounted(){
      console.log("mounted")
    },
    beforeUpdate(){
      console.log("beforeUpdate")

    },
    updated(){
      console.log("updated")
    }
  }
</script>

<style lang="sass" scoped>
  h2
    border-bottom: solid 1px black
</style>
