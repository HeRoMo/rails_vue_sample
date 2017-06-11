'use strict';

import Vue from 'vue'
import Vuex from 'vuex'


Vue.config.performance = true;
console.log('Vue ver.: ', Vue.version);

import TodoApp from './TodoApp.vue'
const app = new Vue(TodoApp).$mount('todo-app');
