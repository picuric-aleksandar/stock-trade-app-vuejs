<template>
  <div>
    <app-stock-component
      v-for="stock in stocks" 
      :key="stock.id"
      :stock="stock"></app-stock-component>
  </div>
</template>

<script>
import StockComponent from './StockComponent.vue';
//Types 3. ovde sada importujemo sve iz types.js kako bi mogli da
//koristimo imena
import * as types from '../../store/types';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
  export default {
    data(){
      return {
        // stocks: [],
        resources: {}, //koristicemo resource da bi umesto post,put,get koristili save,load
      }
    },
    methods: {
      ...mapActions({
        setStocks: types.SET_STOCKS
      })
    },
    computed: {
      ...mapGetters({
         stocks: types.RETURN_STOCKS
      })
    },
    components: {
      'app-stock-component': StockComponent
    },
    created(){
      //postavljamo nas resource sa podacima sa firebase
      this.resources = this.$resource('stockData.json',{});
      this.resources.get({})
        .then(
          (response) => {
            console.log(response);
            return response.json()
          }
        )
        .then(
          (response) => {
            console.log(response);
            //this.stocks.push(...response);
            this.setStocks(response);
          }
        )
    }
  }
</script>