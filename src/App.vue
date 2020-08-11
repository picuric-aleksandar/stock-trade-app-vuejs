<template>
<!-- 1. kako spread operator nije pokriven (...) dodacemo ga preko npm install --save-dev babel-preset-stage-2
    takodje je potrebo u .bablerc dodati jos jedan red ["stage-2"] -->
  <div class="container">
    <app-header-component></app-header-component>
      <!-- 10. sada cemo preko router-view reci nasim rutama gde da se ucitaju -->
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  data () {
    return {
    }
  },
  components: {
    'app-header-component': HeaderComponent
  }
}
</script>

<style scoped>
  body{
    padding: 30px;
  }
</style>
