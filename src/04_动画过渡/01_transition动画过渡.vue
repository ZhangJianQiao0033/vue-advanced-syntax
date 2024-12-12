<template>
  <div class="home">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    <Transition>
      <h2 v-if="isShow">哈哈哈哈</h2>
    </Transition>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true)


</script>

<style scoped>
h2 {
  display: inline-block;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
.v-leave-active,
.v-enter-active {
  transition: all 2s ease;
}

</style>
