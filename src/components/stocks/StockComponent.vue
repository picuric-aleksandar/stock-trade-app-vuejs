<template>
  <div class="col-sm-6 col-md-4">
    <div 
      v-if="$route.query.view == 'stocks'"
      class="panel panel-success">
      <div class="panel-heading">
          <h3 class="panel-title">{{stock.name}}
            <small>(Price: {{stock.price}})</small>
          </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            type="number" 
            placeholder="Quantity" 
            class="form-control"
            v-model="quantity">
        </div>
        <div class="pull-right">
          <div 
            class="btn btn-success"
            @click="buyStock"
            :disabled = "quantity <= 0 || !Number.isInteger(Number(quantity))"> <!--ako je tip inputa number dovoljno je !Number.isInteger(quantity)-->
            Buy
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="$route.query.view == 'portfolio'"
      class="panel panel-info">
      <div class="panel-heading">
          <h3 class="panel-title">{{stock.name}}
            <small>(Price: {{stock.price}})</small>
            <small>Quantity: </small>
          </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input 
            type="number" 
            placeholder="Quantity" 
            class="form-control"
            v-model="quantity">
        </div>
        <div class="pull-right">
          <div 
            class="btn btn-success"
            @click="buyStock"
            :disabled = "quantity <= 0 || !Number.isInteger(Number(quantity))"> <!--ako je tip inputa number dovoljno je !Number.isInteger(quantity)-->
            Buy
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../../store/types';
import {mapActions} from 'vuex';
export default {
  props: ['stock'],
  data(){
    return {
      quantity: 0,
    }
  },
  watch: {
    quantity(){
      console.log(this.quantity)
    }
  },
  methods: {
    ...mapActions({
      buy: types.BUY_STOCKS
    }),
    buyStock(){
      if(this.quantity <= 0){
        //umesto alerta,jednostavno cemo disable-ovati dugme
        return alert('Quantity must be greater than 0 if you want to buy this stock!')
      }
      //kupovina deonice ce biti nas order stoga cemo kreirati konstantu koja to predstavlja
      const stockOrder  = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }
      console.log(stockOrder);
      this.buy(stockOrder);
      this.quantity = 0;
    }
  }
}
</script>


<style scoped>
  .bg-success {
    background-color: #dff0d8;
  }
</style>