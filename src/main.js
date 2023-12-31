import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import  './assets/main.css'

//import firebase Auth serves 
import { projectAuth } from "@/firebase/confing";

let app

projectAuth.onAuthStateChanged(()=>{
    if(!app){
       app = createApp(App)
        .use(router)
        .mount('#app')
    }
});

