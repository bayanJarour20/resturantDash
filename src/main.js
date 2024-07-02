import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import vueNiceScrollbar from 'vue-nice-scrollbar'


Vue.config.productionTip = false;
  Vue.use(vueNiceScrollbar)
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
          next();
  document.title = to.meta.title;
  store.dispatch("setBreadcrumbs", {
      items:to.meta.Breadcrumb,
      isActive: to.meta.isBreadcrumb
});
  // Scroll page to top on every route change
  setTimeout(() => {
      window.scrollTo(0, 0);
  }, 100);
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
