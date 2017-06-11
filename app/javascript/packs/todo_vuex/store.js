import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  actions: {
    loadData({commit}){
      axios.get('//localhost:3000/todo/list').then(
        response => {
          commit('setList', response.data)
        }
      )
    },
    addTodo({commit}, todo){
      axios.post('//localhost:3000/todo', { title: todo, priority:1})
        .then( response =>{
          commit('appendTodo', response.data)
        })
    }
  },
  mutations: {
    setList(state, list){
      state.todos = list;
    },
    appendTodo(state, todo){
      state.todos.push(todo)
    },
    updateTodo(){
      // const index = state.todos.indexOf(todo)
      // console.log(index)
      // state.todos.splice(index, 1, todo)
    }

  },
  getters: {}
});

