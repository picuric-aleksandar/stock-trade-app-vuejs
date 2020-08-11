<template>
  <div>
    <app-stock-component></app-stock-component>
  </div>
</template>

<script>
import StockComponent from './StockComponent.vue';
  export default {
    data(){
      return {

      }
    },
    components: {
      'app-stock-component': StockComponent
    }
  }
</script>