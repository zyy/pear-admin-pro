import { createApp } from "vue";
import Antd from "ant-design-vue/es";
import App from "./App.vue";
import Router from "./route";
import Store from "./store";
import Pear from "./component";
import directive from "./directive"
import i18n from './locale'

import "./assets/css/index.less";
import "ant-design-vue/dist/antd.less";

const app = createApp(App);
app.use(Antd);
app.use(Pear);
app.use(Store);
app.use(Router);
app.use(i18n)

Object.keys(directive).forEach(d => {
  app.directive(d, directive[d])
})

app.mount("#app");

export default app