<template lang="pug">
  form(@submit.prevent="addTodo")
    input(v-model='newTodo', type="text", class="todo", placeholder="タスクを入力してください" )

</template>

<script>
  'use strict';
  import axios from 'axios'

  export default {
//    props:['newTodo'], //propsは親コンポーネントからの値を格納する場所
    data: function(){
      return { newTodo: this.newTodo };
    },
    methods:{
      addTodo(){
        if(!this.newTodo) return; //空はなにもしない。
        axios.post('//localhost:3000/todo', { title: this.newTodo, priority:1})
          .then( response =>{
            this.newTodo = '';
            this.$emit('add', response.data) // 親コンポーネントにTodo追加を通知する
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  input.todo
    min-width: 300px
    font-size: x-large

</style>