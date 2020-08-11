<template>
<!-- 1. kako spread operator nije pokriven (...) dodacemo ga preko npm install --save-dev babel-preset-stage-2
    takodje je potrebo u .bablerc dodati jos jedan red ["stage-2"] -->
  <div class="container">
    <!-- 10. sada cemo preko router-view reci nasim rutama gde da se ucitaju -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
