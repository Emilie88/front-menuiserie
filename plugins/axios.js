import Vue from "vue";

// Lib imports
import axios from "axios";

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = "http://localhost:3001/api";

// Vue.prototype.$http.defaults.baseURL = "https://127.0.0.1:8000/api";


