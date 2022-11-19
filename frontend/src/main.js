import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { router } from "./routes/index.js";
import axios from "axios";
import './registerServiceWorker'

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount("#app");
