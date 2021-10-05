import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify' // path to vuetify export
import { initializeApp } from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyDYAV6qa8EJgfs-NdfIlPoexdTcNNzGjnI",
    authDomain: "alfaweb-5fe51.firebaseapp.com",
    projectId: "alfaweb-5fe51",
    storageBucket: "alfaweb-5fe51.appspot.com",
    messagingSenderId: "820728741577",
    appId: "1:820728741577:web:55362af4db0954f6f29718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')