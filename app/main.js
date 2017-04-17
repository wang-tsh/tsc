//main.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());