import Vue from 'vue'
import App from './App.vue'

// 2. preko npm install --save vue-router cemo ubaciti router u nas projekat i inicijalizovati ga prvo preko importa
import VueRouter from '../node_modules/vue-router';
import {routes} from './routes';

//definisanje i import vue-resource
import VueResource from '../node_modules/vue-resource';

import store from './store/store'
Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trade-app-vuejs-a946b.firebaseio.com/'
// 3. iskoristiti instancu naseg routera
Vue.use(VueRouter);

// 4. kreirati nas router kao ispod

const router = new VueRouter({
  // 9. sada cemo registrovati nase rute unutar router-a (prvo cemo ih importovati)
  routes,
  mode: 'history' // da nemam localhost/#
})

new Vue({
  el: '#app',
  // 5. obavezno registroavanje naseg rutera - idemo u routes.js da kreiramo nase rute
  router,
  store,
  render: h => h(App)
})
