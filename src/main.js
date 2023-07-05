import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// 导入全局指令
const directiveFiles = import.meta.globEager(
  "./directives/global/*.js"
);
Object.entries(directiveFiles).forEach(([path, module]) => {
  const name = path.match(/\/([^\/]+)\.js$/)[1];
  const value = module.default;
  app.directive(name, value);
});

// 导入全局组件
const componentFiles = import.meta.globEager(
  "./components/*.vue"
);
Object.entries(componentFiles).forEach(([path, module]) => {
  const name = path.match(/\/([^/]+)\.vue$/)[1];
  const component = module.default || module;
  app.component(name, component);
});
app.use(createPinia());
app.use(router);

app.mount("#app");
