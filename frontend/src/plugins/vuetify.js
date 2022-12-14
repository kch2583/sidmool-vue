import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg" || "mdi" || "mdiSvg" || "md" || "fa" || "fa4" || "faSvg",
  },
});
