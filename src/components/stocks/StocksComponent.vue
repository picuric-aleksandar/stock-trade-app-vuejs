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
        setStocks: 'setStocks'
      })
    },
    computed: {
      ...mapGetters({
         stocks: 'stocks'
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