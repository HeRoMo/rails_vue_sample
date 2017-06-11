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
          commit('loadData', response.data)
        }
      )
    },
    addTodo({commit}, todo){
      axios.post('//localhost:3000/todo', { title: todo, priority:1})
        .then( response =>{
          commit('addTodo', response.data)
        })
    },
    updateTodo({commit}, todo){
      axios.put('//localhost:3000/todo/'+ todo.id, todo)
         .then(response => {
           commit('updateTodo', response.data)
         })
    }
  },
  mutations: {
    loadData(state, list){
      state.todos = list;
    },
    addTodo(state, todo){
      state.todos.push(todo)
    },
    updateTodo(state, todo){
      const index = state.todos.findIndex(elm => elm.id == todo.id)
      state.todos.splice(index, 1, todo)
    }
  },
  getters: {}
});

