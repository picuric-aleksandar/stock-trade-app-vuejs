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
        // na ovaj nacin automatski kreiramo metod prop pod nazivom setStocks i akcijom govorimo nasim mutacijama u StockModule sta da rade
        //mapActions u pozadini radi sledece, kreira metod setStocks(){this.$store.dispatch('setStocks', response)}
        setStocks: types.SET_STOCKS
      })
    },
    computed: {
      ...mapGetters({
         // na ovaj nacin automatski kreiramo computed prop pod nazivom stocks i preko getter-a vracamo vrednost iz store-a (odnosno StockModule-a)
         stocks: types.RETURN_STOCKS
      })
    },
    components: {
      'app-stock-component': StockComponent
    },
    created(){
      //postavljamo nas resource sa podacima sa firebase
      this.resources = this.$resource('stockData.json',{}); 
      //ovde je samo stockData.json jer smo u main.js definisali -> Vue.http.options.root = 'https://stock-trade-app-vuejs-a946b.firebaseio.com/'
      this.resources.get({}) //get() ima samo jedan argument a to je putanja koju gadja, a kako smo definisali root globalno i u liniji iznad
      //definisali sta gadjamo zato je prazan {} u .get()
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
            this.setStocks(response); //ovo je ustvari setStocks(){this.$store.dispatch('setStocks', response)}
          }
        )
    }
  }
  /**Celokupnu logiku kacenja na firebase i setovanja nasih stocks-a mozemo prebaciti i u App.vue i da 
   * ovde samo preko getter-a namapiramo nase stocks
   */
</script>
