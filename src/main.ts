import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from "pinia";

//创建Vue实例
const app = createApp(App);
//创建实例
const pinia = createPinia();
//挂载路由
app.use(router).use(ElementPlus).use(pinia).mount("#app");
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}