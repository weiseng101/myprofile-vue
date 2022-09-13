import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import AOS from "aos";

import Antd from 'ant-design-vue';


import Toast from "vue-toastification";
// Import the CSS or use your own!




import "aos/dist/aos.css";
import "normalize.css/normalize.css";
import 'ant-design-vue/dist/antd.less';
import "vue-toastification/dist/index.css";

import i18n from './i18n'




const app = createApp(App).use(i18n)

app.use(router)
    .use(Antd)
    .use(AOS.init())
    .use(i18n)
    .use(Toast)


app.mount('#app')
