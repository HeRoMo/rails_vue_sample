<template lang="pug">
  li
    div(:class="{done: todo.done}")
      input(type="checkbox", @change="change", v-model="todo.done")
      | {{ todo.title }}

</template>

<script>
  'use strict';
  import store from './store'

  export default {
    props:['todo'],
    data: function(){
      return { todoData: this.todo }
    },
    methods: {
      change(){
        store.dispatch('updateTodo', this.todo)
      }
    }
  }

</script>

<style lang="sass" scoped>
  li
    text-decoration: none
    list-style: none inside
    border: 1px solid #CCCCCC
    margin-bottom: 3px
  .done
    text-decoration: line-through

</style>