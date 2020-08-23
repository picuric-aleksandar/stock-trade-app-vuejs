//Types 2. ovde sada importujemo sve iz types.js kako bi mogli da
//koristimo imena

import * as types from '../types';

const state = {
  stocks: []
}
//mutacije menjaju state
const mutations = {
  //ova mutacija menaj state tako sto ucitava stocks
  'SET_STOCKS': (state, payload) => {
    // state.stocks.push(...payload);
    state.stocks = payload;
    console.log(state.stocks.length);
  },
  //ova menja takos to na kraju dana menja cenu deonice na berzi
  'RANDOMIZE_STOCKS': (state) => {}
};

const actions = {
  [types.BUY_STOCKS]: (context, payload) => {
    // context.commit('buyStock', payload) mutacija 'buyStock' ne postoji u ovom modulu vec u portfolaio modulu
    console.log(payload);
    context.commit('SET_PURCHASED_STOCKS', payload)
    //kako se ova dva modula na kraju spajaju u nasem store-u ovde slobodno mozemo pozvati
    //mutaciju SET_PURCHASED_STOCKS iz portfolio modula
  },
  //akcija ispod je napisana u ES6 a mozem i u ES5 pogledaj prvi getter
  [types.SET_STOCKS]: (context,payload) => {
    console.log(payload);
    context.commit('SET_STOCKS', payload)
  }
};

const getters = {
  [types.RETURN_STOCKS](state){
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