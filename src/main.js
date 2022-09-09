import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import AOS from "aos";

import Antd from 'ant-design-vue';

import "aos/dist/aos.css";
import "normalize.css/normalize.css";
import 'ant-design-vue/dist/antd.less';

import i18n from './i18n'




const app = createApp(App).use(i18n)

app.use(router)
    .use(Antd)
    .use(AOS.init())
    .use(i18n)


app.mount('#app')
