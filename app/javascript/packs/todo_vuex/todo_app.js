'use strict';

import Vue from 'vue'
import Vuex from 'vuex'


Vue.config.performance = true;
console.log('Vue ver.: ', Vue.version);
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     todos: []
//   },
//   actions: {},
//   mutations: {},
//   getters: {}
// });

import TodoApp from './TodoApp.vue'
const app = new Vue(TodoApp).$mount('todo-app');
