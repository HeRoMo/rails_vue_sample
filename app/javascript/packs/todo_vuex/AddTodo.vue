<template lang="pug">
  form(@submit.prevent="addTodo")
    input(v-model='newTodo', type="text", class="todo", placeholder="タスクを入力してください" )

</template>

<script>
  'use strict';
  import store from './store'

  export default {
    data: function(){
      return { newTodo: this.newTodo };
    },
    methods:{
      addTodo(){
        if(!this.newTodo) return; //空はなにもしない。
        store.dispatch('addTodo', this.newTodo)
        this.newTodo = '';
      }
    }
  }
</script>

<style lang="sass" scoped>
  input.todo
    min-width: 300px
    font-size: x-large

</style>