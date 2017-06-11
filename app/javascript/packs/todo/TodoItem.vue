<template lang="pug">
  li
    div(:class="{done: todo.done}")
      input(type="checkbox", @change="change", v-model="todo.done")
      | {{ todo.title }}

</template>

<script>
  'use strict';
  import axios from 'axios'

  export default {
    props:['todo'],
    methods: {
      change(){
        axios.put('//localhost:3000/todo/'+ this.todo.id, this.todo)
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