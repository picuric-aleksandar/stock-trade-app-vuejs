<template>
  <div>
    <app-stock-component
      v-for="purchasedStock in purchasedStocks"
      :key="purchasedStock.id"
      :purchasedStock="purchasedStock"></app-stock-component>
  </div>
</template>

<script>
import StockComponent from '../stocks/StockComponent'
import * as types from '../../store/types';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

  export default {
    methods: {
      ...mapActions({
        //
      })
    },
    computed: {
      ...mapGetters({
        purchasedStocks: types.RETURN_PURCHASED_STOCKS
      })
    },
    components: {
      'app-stock-component': StockComponent
    },
  }
</script>