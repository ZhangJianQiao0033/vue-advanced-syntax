<template>
  <div class="app">
    <input type="text" v-focus>
    <div v-unit="'$'">25</div>
    <h2 v-ftime="'YYYY/MM/DD'">{{ timestamp }}</h2>
    <h2 v-ftime>{{ 1551111166666 }}</h2>
  </div>
</template>

<script setup>
const timestamp = 1231355453


</script>

<style scoped>

</style>
