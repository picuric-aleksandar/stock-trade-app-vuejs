import * as types from '../types';


const state = {
  funds: 10000,
  purchasedStocks: []
};
const mutations = {
  'SET_PURCHASED_STOCKS': (state,payload) => {
    //provera da li vec imamo kupljenu ovu deonicu
    const record = state.purchasedStocks.find(element => {return element.id == payload.stockId}); //find vraca true or false - true ako nadje el u nizu
    
    console.log(record);
    if(record){
      record.quantity += payload.stockQuantity;
    }else {
      state.purchasedStocks.push({
        id: payload.stockId,
        quantity: payload.stockQuantity
      })
    }
    state.funds -= (payload.stockQuantity * payload.stockId)
    //state.purchasedStocks = payload;
     console.log(state.purchasedStocks);
  },
  'SELL_STOCK': (state,payload) => {
    const record = state.purchasedStocks.find(
      (element) => {
        return element.id == payload.stockId //find vraca true or false - true ako nadje el u nizu
      }
    );
    if(record.quantity > payload.stockQuantity){
      record.quantity -= payload.stockQuantity
    }else {
      state.purchasedStocks.splice(state.purchasedStocks.indexOf(record), 1)
    }
    state.funds += (payload.stockQuantity * payload.stockId)
  }
};
const actions = {
  [types.SELL_STOCKS]: (context, payload) => {
    context.commit('SELL_STOCK', payload)
  }
};
const getters = {
  [types.RETURN_PURCHASED_STOCKS]: (state, getters) => {
    //drugi argument je getteri iz naseg stora jer sve ovo ide u jedan store kasnije importom i imamo pristup
    //i getterima iz stockModule-a
    return state.purchasedStocks.map(
      (currentStock) => {
        const record = getters.stocks.find(element => element.id == currentStock.id);
        return {
          id: currentStock.id,
          quantity: currentStock.quantity,
          name: record.name,
          price: record.price
        }
      }
    )
  },

  [types.RETURN_FUNDS]: (state) => {
    return state.funds;
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};