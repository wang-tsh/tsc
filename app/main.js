//main.js
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(Vuex);
Vue.use(VueRouter);
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());