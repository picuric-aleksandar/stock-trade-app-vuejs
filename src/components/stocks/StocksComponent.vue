<template>
  <div>
    <div class="col" v-for="number in numbers" :key="number"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numbers: [1,2,3,4]
      }
    }
  }
</script>