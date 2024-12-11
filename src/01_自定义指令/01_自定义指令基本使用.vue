<template>
  <div class="app">
    <input type="text" v-focus ref="inputRef">
  </div>
</template>

<!-- <script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
        console.log("el", el);
      }
    }
  }
}
</script> -->


<script setup>
  // 1.使用非自定义 

// import useInput from "./hooks/useInput"
// const { inputRef } = useInput()

  // 2.局部自定义指令
const vFocus = {
  mounted(el) {
    console.log(el);
    el?.focus()
  }
}

</script>

<style scoped>

</style>
