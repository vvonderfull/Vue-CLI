import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


window.toastr = require('toastr')

Vue.use(Vuelidate)
Vue.use(VueToastr2)

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyBkEupqBZbIEP9DCO5jAw_80nnIMPBO49c",
    authDomain: "todolist-232323.firebaseapp.com",
    databaseURL: "https://todolist-232323.firebaseio.com",
    projectId: "todolist-232323",
    storageBucket: "todolist-232323.appspot.com",
    messagingSenderId: "915310026760",
    appId: "1:915310026760:web:5581f8feefed388d1771bd",
    measurementId: "G-YS4H1C3MHC"
}
firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
