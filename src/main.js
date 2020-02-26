import DefaultLayout from "~/layouts/Default.vue";

import BootstrapVue from "bootstrap-vue";
import "./assets/styles/main.scss";

import checkIfMobile from "./mixins/checkIfMobile";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap&subset=latin-ext"
  });

  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);
  Vue.mixin(checkIfMobile);
}
