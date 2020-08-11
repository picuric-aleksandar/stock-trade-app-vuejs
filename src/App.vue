<template>
<!-- 1. kako spread operator nije pokriven (...) dodacemo ga preko npm install --save-dev babel-preset-stage-2
    takodje je potrebo u .bablerc dodati jos jedan red ["stage-2"] -->
  <div class="container">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
