const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS': (state, payload) => {
    // state.stocks.push(...payload);
    state.stocks = payload;
    console.log(state.stocks.length);
  },
  'RANDOMIZE_STOCKS': (state) => {}
};

const actions = {
  buyStock: (context, payload) => {
    // context.commit('buyStock', payload) mutacija 'buyStock' ne postoji u ovom modulu vec u portfolaio modulu
  },
  setStocks: (context,payload) => {
    console.log(payload);
    context.commit('SET_STOCKS', payload)
  }
};

const getters = {
  stocks(state){
    console.log(state.stocks)
    return state.stocks.slice();
  }
  /**stocks getter mozemo napisati i kao:
   * stocks: state => {
   *  return ...
   * }
   */
}

export default {
  state,
  mutations,
  actions,
  getters
}