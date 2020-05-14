import Vue from 'vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import messagePlugin from '@/utils/message.plugin'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

Vue.mixin({
  methods: {
    toFormData: function (obj) {
      var formData = new FormData()
      for (var key in obj) {
        formData.append(key, obj[key])
      }
      return formData
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
