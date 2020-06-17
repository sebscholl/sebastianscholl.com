import BootstrapVue from "bootstrap-vue";
import DefaultLayout from "~/layouts/Default.vue";
import checkIfMobile from "./mixins/checkIfMobile";

import "./assets/styles/main.scss";

export default function(Vue, { head }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap",
  });

  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);

  Vue.mixin(checkIfMobile);
}
