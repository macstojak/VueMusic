

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import "./assets/css/base.css";
import "./assets/css/main.css";
import VeeValidatePlugin from "./includes/validation";
import {auth} from "./includes/firebase";
import Icon from "./directives/icon";
import i18n from "./includes/i18n";

let app;
auth.onAuthStateChanged(() => {
    if(!app) {
        app = createApp(App);
        app.use(createPinia());
        app.use(router);
        app.use(i18n);
        app.use(VeeValidatePlugin);
        app.directive('icon', Icon);
        app.mount('#app');
    }
});
