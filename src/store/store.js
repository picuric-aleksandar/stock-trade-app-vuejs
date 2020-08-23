//vuex smo instalirali preko npm (npm install --save vuex)
import Vue from 'vue';
import Vuex from 'vuex';

import StockModule from './modules/StockModule';
import PortfolioModule from './modules/PortfolioModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    StockModule,
    PortfolioModule
  }
})
